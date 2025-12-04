# Art Portfolio

A modular, Pinterest-style masonry portfolio website featuring a responsive grid layout and an interactive lightbox for viewing full-size images.

## How to Add New Art

The website is designed to be modular. You do not need to edit HTML to add new images. All content is managed via the `data.json` file.

### Step 1: Prepare your Image
1.  Save your image file (e.g., `art.jpg`) into the `images/` folder in the project directory.

### Step 2: Update the Data
1.  Open the `data.json` file.
2.  Add a new entry to the list inside the square brackets `[]`.
3.  Use the following format:

```json
{
    "id": 13,
    "src": "images/art.jpg",
    "title": "Title",
    "description": "Description"
}
```

**Note:** Ensure you add a comma `,` after the closing brace `}` of the *previous* item if you are appending to the list.

---

## Customization Guide

You can easily change the look and feel of the site by editing `style.css`.

### Colors & Spacing
Look for the `:root` section at the top of `style.css`. Change these hex codes to match your brand:

```css
:root {
    --bg-color: #f5f5f5;   /* Background color of the whole page */
    --card-bg: #ffffff;    /* Background color of individual cards */
    --text-color: #333;    /* Main text color */
    --gap: 16px;           /* Space between cards */
}
```

### Grid Layout (Columns)
The number of columns changes based on screen width. You can adjust these breakpoints in `style.css`:

*   **Default (Mobile)**: 1 Column
*   **Tablets (>600px)**: 2 Columns
*   **Laptops (>900px)**: 3 Columns
*   **Desktops (>1100px)**: 4 Columns

To change the maximum width of the gallery, find `#gallery` in `style.css`:
```css
#gallery {
    max-width: 1600px; /* Adjust this value */
}
```

---

## Technical Details

### Image Loading
Images are set to `lazy` load by default in `script.js` to improve performance.
```javascript
img.loading = 'lazy'; // Options: 'lazy', 'eager', 'auto'
```

### Lightbox
The site includes a built-in lightbox.
*   **Activation**: Clicking a card adds the `.active` class to the `#lightbox` div.
*   **Dismissal**: Clicking the dark background removes the `.active` class.
*   **Animation**: Controlled via CSS transitions on `opacity` and `visibility`.