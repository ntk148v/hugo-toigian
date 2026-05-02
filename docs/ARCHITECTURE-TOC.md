# Floating Table of Contents (TOC) Architecture

This project uses a custom, Substack-inspired floating Table of Contents. This document explains the architecture to help future coding agents or developers maintain or extend it.

## 1. Components

### Server-Side: Hugo Template (`layouts/partials/toc.html`)
- **Source**: Uses the native Hugo `.TableOfContents` variable.
- **Structure**: Wraps the TOC in an `<aside id="floating-toc">`.
- **Visibility**: Uses Tailwind's `hidden md:block` to show only on medium screens and above.
- **Containers**:
    - `#toc-bars`: Placeholder for JS-generated minimal structural bars.
    - `#toc-expanded`: Container for the full text list.

### Styling: CSS (`assets/css/toigian.css`)
- **Positioning**: `position: fixed; left: 1rem; top: 50%; transform: translateY(-50%);`.
- **States**: 
    - Default (Collapsed): Shows `.toc-bars`.
    - Expanded: Triggered by `:hover` or the `.is-expanded` class. Shows `.toc-expanded`.
- **Theming**: Uses Rose Pine variables (`var(--base)`, `var(--iris)`, `var(--text)`, etc.) for seamless light/dark mode support.

### Interactivity: JavaScript (`assets/js/toc.js`)
- **Bar Generation**: Dynamically creates `div.toc-bar` elements for every link found in the Hugo-generated TOC.
- **Scroll Spy**: Uses `IntersectionObserver` to track headings within the document. It maps visible headings to TOC links/bars and applies the `.active` class.
- **Accessibility**: Includes a click listener on the container to toggle `.is-expanded`, allowing for touch/mobile interaction and keyboard accessibility.

## 2. Integration
- **Entry Point**: The `initTOC()` function is imported and called in `assets/js/main.js` on `DOMContentLoaded`.
- **Styling**: Integrated via PostCSS in the main `toigian.css` bundle.

## 3. Configuration
- The TOC is controlled by the standard Hugo `toc` parameter in `hugo.toml` or front matter.
- To disable on a specific page: `toc: false` in front matter.
