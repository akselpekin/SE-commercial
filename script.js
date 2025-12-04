document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const card = createCard(item);
                gallery.appendChild(card);
            });
        })
        .catch(error => console.error('Error loading gallery data:', error));

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

        // Add click event to open lightbox
        card.addEventListener('click', () => {
            console.log('Card clicked:', item.title); // Debug log
            lightboxImg.src = item.src;
            lightboxImg.alt = item.title;
            lightbox.classList.add('active');
            console.log('Lightbox active'); // Debug log
        });

        return card;
    }
});
