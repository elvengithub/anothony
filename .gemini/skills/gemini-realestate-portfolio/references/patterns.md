# UI Patterns to Know

### Scroll Reveal
All animatable elements carry the class `reveal`. An `IntersectionObserver` adds `visible` when they enter the viewport.

```css
.reveal { opacity: 0; transform: translateY(30px); transition: ... }
.reveal.visible { opacity: 1; transform: translateY(0); }
```

### Custom Cursor
A gold dot (`#cursor`) and a lagging ring (`#cursorRing`) follow the mouse. Interactive elements trigger `.hover` on the dot.

### Sticky Nav
`#navbar` gets class `scrolled` after 60px of scroll, tightening padding and adding a dark blur background.

### Section Eyebrow Pattern
Every section opens with:
```html
<div class="section-eyebrow">Label Text</div>
<h2 class="section-title">Headline <em>Italic Part</em></h2>
```

### Card Hover Effects
- **Expertise cards**: content `translateY` reveals description on hover.
- **Listing / testimonial / resource cards**: `translateY(-4px to -6px)` lift.
- **Social cards**: border turns gold on hover.
