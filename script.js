// Налаштуй назви, картинки та посилання (url) тут
const projects = [
    {
        title: "HL2 Beta Ru",
        desc: "The largest archive of Half-Life 2 Beta content.",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/70/0000002344.1920x1080.jpg",
        url: "https://hl2-beta.ru/"
    },
    {
        title: "Wasnous HL2 Mod",
        desc: "Custom Half-Life 2 mod with new visuals, levels and atmosphere.",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/70/0000002345.1920x1080.jpg",
        url: "https://example.com/wasnous-hl2-mod"
    },
    {
        title: "Valve Archive",
        desc: "Leaks, documents and original source assets.",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/70/0000002347.1920x1080.jpg",
        url: "https://valvearchive.com"
    },
    {
        title: "Lambda Generation",
        desc: "News and community hub for Half-Life fans.",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/70/0000002344.1920x1080.jpg",
        url: "https://lambdageneration.com"
    },
    {
        title: "Combined Labs",
        desc: "Secret development and modding tools.",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/70/0000002345.1920x1080.jpg",
        url: "https://google.com"
    },
    {
        title: "Xen Chronicles",
        desc: "Alien dimension exploration and lore archive.",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/70/0000002347.1920x1080.jpg",
        url: "https://example.com"
    },
    {
        title: "Black Mesa Redux",
        desc: "Complete remake of the original Half-Life.",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/70/0000002344.1920x1080.jpg",
        url: "https://example.com"
    },
    {
        title: "City 17 Unleashed",
        desc: "Advanced graphics and physics overhaul mod.",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/70/0000002345.1920x1080.jpg",
        url: "https://example.com"
    }
];

const grid = document.getElementById('projectGrid');

projects.forEach(proj => {
    // Створюємо картку проекту
    const card = document.createElement('div');
    card.className = 'project-card';

    card.innerHTML = `
        <div class="img-wrapper">
            <img src="${proj.image}" alt="${proj.title}" loading="lazy">
        </div>
        <div class="card-info">
            <h3>${proj.title}</h3>
            <p>${proj.desc}</p>
        </div>
    `;

    grid.appendChild(card);

    const wrapper = card.querySelector('.img-wrapper');
    const img = card.querySelector('img');

    img.onerror = () => {
        img.src = 'https://via.placeholder.com/800x450/111111/ffffff?text=No+image';
        img.style.filter = 'grayscale(0)';
    };

    wrapper.addEventListener('mousemove', event => {
        const rect = wrapper.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width * 100;
        const y = (event.clientY - rect.top) / rect.height * 100;
        const offsetX = (x - 50) / 10;
        const offsetY = (y - 50) / 10;
        img.style.transform = `scale(1.18) translate(${offsetX}%, ${offsetY}%)`;
    });

    wrapper.addEventListener('mouseenter', () => {
        img.style.transition = 'transform 0.15s ease-out, filter 0.4s ease';
        img.style.filter = 'grayscale(0)';
    });

    wrapper.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1) translate(0, 0)';
        img.style.filter = 'grayscale(1)';
    });
});
