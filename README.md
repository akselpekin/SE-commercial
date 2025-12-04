# Portfolio Website

A modular, multi-page portfolio website featuring a responsive masonry gallery, a markdown-based resume page, and a contact links page.

---

## How to Manage Content

### 1. Adding New Art (Gallery)
The gallery is data-driven. You do not need to edit HTML to add new images.

1.  **Save Image**: Place your image file (e.g., `my-art.jpg`) into the `images/` folder.
2.  **Update Data**: Open `data.json` and add a new entry:
    ```json
    {
        "id": 14,
        "src": "images/art.jpg",
        "title": "Magnum Opus",
        "description": "Nice things"
    }
    ```
    *Note: Ensure you add a comma `,` after the previous item's closing brace `}`.*

### 2. Updating the Resume
The resume page (`resume.html`) renders content from Markdown, making it very easy to write and format.

1.  Open `resume.html`.
2.  Scroll down to the `<script type="text/markdown" id="resume-markdown">` tag.
3.  Edit the text inside using standard Markdown syntax:
    *   `# Heading 1` for main titles.
    *   `## Heading 2` for section titles (Experience, Education).
    *   `*Italic*` or `**Bold**` for emphasis.
    *   `* List item` for bullet points.

### 3. Updating Links
The links page (`links.html`) is a standard HTML page.

1.  Open `links.html`.
2.  Locate the `<main id="links">` section.
3.  Edit the HTML content directly to add your email, phone, or social media links.

---

## Customization Guide

You can change the look and feel by editing `style.css`.

### Colors & Theme
Modify the CSS variables at the top of `style.css`:

```css
:root {
    --bg-color: #f5f5f5;   /* Page background */
    --card-bg: #ffffff;    /* Card & Container background */
    --text-color: #333;    /* Main text color */
    --gap: 16px;           /* Spacing */
}
```

### Navigation Bar
The top navigation bar styles are defined under the `.top-nav` class in `style.css`. You can change the background color, padding, or link styles there.

### Grid Layout
The gallery column count changes based on screen width (breakpoints at 600px, 900px, 1100px). You can adjust these media queries in `style.css`.

---

## Technical Details

*   **Frameworks**: Vanilla HTML, CSS, and JavaScript.
*   **Markdown Parser**: Uses [Marked.js](https://github.com/markedjs/marked) to render the resume.
*   **Image Loading**: Native lazy loading (`loading="lazy"`) is enabled for gallery images.
*   **Lightbox**: Custom vanilla JS implementation.