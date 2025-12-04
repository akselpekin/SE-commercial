document.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded');
    const gallery = document.getElementById('gallery');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    // Lightbox Event Listener
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
            }
        });
    }

    // Gallery Logic
    if (gallery) {
        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                data.forEach(item => {
                    const card = createCard(item);
                    gallery.appendChild(card);
                });
            })
            .catch(error => console.error('Error loading gallery data:', error));
    }

    // Resume Markdown Logic
    const resumeContent = document.getElementById('resume-content');
    const resumeMarkdown = document.getElementById('resume-markdown');

    if (resumeContent && resumeMarkdown) {
        if (typeof marked !== 'undefined') {
            try {
                const parseMarkdown = typeof marked.parse === 'function' ? marked.parse : marked;
                resumeContent.innerHTML = parseMarkdown(resumeMarkdown.textContent.trim());
            } catch (e) {
                console.error('Error parsing markdown:', e);
                resumeContent.innerHTML = '<p>Error parsing resume content.</p>';
            }
        } else {
            console.error('Marked library not loaded');
            resumeContent.innerHTML = '<p>Error: Markdown parser not loaded. Please check your internet connection.</p>';
        }
    }

    function createCard(item) {
        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.title;
        img.loading = 'lazy'; // Image loading parameter (lazy, eager, auto)

        const content = document.createElement('div');
        content.className = 'card-content';

        const title = document.createElement('h3');
        title.className = 'card-title';
        title.textContent = item.title;

        const desc = document.createElement('p');
        desc.className = 'card-description';
        desc.textContent = item.description;

        content.appendChild(title);
        content.appendChild(desc);
        card.appendChild(img);
        card.appendChild(content);

        // lightbox
        card.addEventListener('click', () => {
            if (lightbox && lightboxImg) {
                console.log('Card clicked:', item.title); // Debug log
                lightboxImg.src = item.src;
                lightboxImg.alt = item.title;
                lightbox.classList.add('active');
                console.log('Lightbox active'); // Debug log
            } else {
                console.warn('Lightbox elements not found');
            }
        });

        return card;
    }
});
