## Traped Out – Streetwear Landing Page

A single-page marketing site for the **Traped Out** streetwear brand, built from the Figma design [`Traped Out - Website Design FF`](https://www.figma.com/design/BtU6naUkpIbBQVQ0tVmEwH/Traped-Out---Website-Design-FF?node-id=2156-775).

### Project Roadmap
- **Phase 1 – Static build (this repo)**
  - Pixel-perfect implementation of the Figma design using **HTML5**, **CSS3**, **Bootstrap 5.3**, and **vanilla JavaScript**.
  - Design tokens (colors, gradients, fonts) managed via CSS variables in `:root`.
- **Phase 2 – Shopify theme customization**
  - Use **Shopify Dawn theme** as base.
  - Customize Dawn (sections, templates, settings) to match the Traped Out branding and layout.
- **Phase 3 – Migration to Shopify Liquid**
  - Convert the finalized HTML/CSS/JS from this repo into **Shopify Liquid** templates, sections, and snippets.
  - Replace hard-coded content with dynamic Shopify data (products, collections, settings).

### Tech Stack (Phase 1)
- **HTML5** – structure
- **CSS3 + Bootstrap 5.3** – layout, responsive grid, and theming via CSS variables
- **JavaScript (vanilla)** – basic interactivity

### Project Structure
- `index.html` – main landing page markup
- `assets/css/style.css` – global styles and Figma color + font tokens in `:root`
- `assets/js/script.js` – scripts (interactions / behavior)

### Getting Started (Static Version)
- **Local preview**:
  - Option 1: Open `index.html` directly in your browser.
  - Option 2 (recommended): Serve via a simple HTTP server (e.g. VS Code Live Server, `npx serve`, or any static host) for correct asset paths.

### Design Tokens (Colors & Typography)
- All primary colors and gradients from the Figma file are defined as CSS custom properties in `:root` inside `assets/css/style.css`.
- Typography tokens from Figma:
  - `--font-heading` → `Druk Trial` (headings)
  - `--font-content` → `Inter` (body / content)
  - `--font-label` → `Helvetica Now Display` (buttons / labels)
- Use them in components like:
  - `font-family: var(--font-heading);`
  - `font-family: var(--font-content);`
  - `background: var(--color-bg-light);`
  - `color: var(--color-text-dark);`
  - `background-image: var(--gradient-hero-light);`

### Development Notes
- Keep new colors and font choices in sync with Figma by adding them as new `--color-*`, `--gradient-*`, or `--font-*` variables in `:root`.
- Prefer using these variables instead of hard-coded values for consistency and easy theming.
- When moving to Shopify, reuse the same naming for Liquid theme settings to keep design tokens consistent between this static build and the Dawn-based theme.
