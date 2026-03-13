# Common Edit Tasks

### Swap placeholder content
Search for these strings and replace:
- `Alexandra Sterling` → real agent name
- `alexandra@sterlingrealty.com` → real email
- `+1 (310) 555-0192` → real phone
- `$12,500,000`, `$8,200,000`, etc. → real listing prices
- `Glass House at Crystal Bay`, `The Madison Penthouse`, etc. → real property names
- Unsplash URLs → real photography URLs
- `248K Followers`, `95K Subscribers`, etc. → real social stats
- `$2.4B`, `18+`, `500+` (hero stats + about tiles) → real figures

### Add a listing card
Copy an existing `.listing-card` div inside `.listings-scroll` and update its content.

### Add an expertise card
Copy an existing `.expertise-card` div inside `.expertise-grid`. Update the background-image, number (01–06), name, and description.

### Change the color scheme
Update CSS variables in `:root`. The gold pair (`--gold` / `--gold-light`) drives all accents.

### Add a new section
1. Add a `<section id="new-section">` in the HTML body.
2. Follow the eyebrow + section-title pattern.
3. Add a nav link in `<ul class="nav-links">`.
4. Add `reveal` classes for scroll animation.
5. Alternate background: odd sections use `var(--dark)`, even use `var(--charcoal)`.
