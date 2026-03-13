const fs = require('fs');
const path = require('path');

const TOKENS = {
    '#0A1128': 'Midnight Navy (Primary)',
    '#C5A059': 'Champagne Gold (Secondary)',
    '#8E6F3E': 'Deep Bronze (Accent Text)',
    '#FBFBFB': 'Subtle Alabaster (Surface)',
    '#FFFFFF': 'White',
    '#2D3748': 'Slate Charcoal (Text)',
    '#718096': 'Muted Gray (Text)',
    '#050A18': 'Deepest Navy (BG Base Dark)',
    '#B38E4A': 'Metallic Gold (Gradient Variant)',
    '#E2E8F0': 'Light Slate (Text Dark)',
    '#94A3B8': 'Muted Slate (Text Dark)'
};

const HEX_REGEX = /#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})\b/g;

function auditFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const matches = content.match(HEX_REGEX);
    if (!matches) return [];

    const deviations = [];
    matches.forEach(hex => {
        const normalizedHex = hex.toUpperCase();
        // Allow pure black/white and common variations for functional UI
        if (!TOKENS[normalizedHex] && normalizedHex !== '#000' && normalizedHex !== '#FFF' && normalizedHex !== '#333') {
            deviations.push(hex);
        }
    });
    return [...new Set(deviations)];
}

function scanDir(dir, fileExtensions = ['.css', '.html']) {
    let results = {};
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== 'node_modules' && file !== '.git') {
                Object.assign(results, scanDir(fullPath, fileExtensions));
            }
        } else if (fileExtensions.includes(path.extname(file))) {
            const deviations = auditFile(fullPath);
            if (deviations.length > 0) {
                results[fullPath] = deviations;
            }
        }
    });
    return results;
}

const targetDir = process.argv[2] || '.';
const results = scanDir(targetDir);

if (Object.keys(results).length === 0) {
    console.log('Success: No UI style deviations found.');
} else {
    console.log('UI Consistency Audit Results:');
    for (const [file, deviations] of Object.entries(results)) {
        console.log(`- ${file}: Found unauthorized hex codes: ${deviations.join(', ')}`);
    }
}
