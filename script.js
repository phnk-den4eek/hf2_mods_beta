// Налаштуй назви, картинки та посилання (url) тут
const projects = [
    {
        title: "HL2 Beta Ru",
        desc: "The largest archive of Half-Life 2 Beta content.",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/70/0000002344.1920x1080.jpg",
        url: "https://hl2-beta.ru/"
    },
    {
        title: "Valve Archive",
        desc: "Leaks, documents and original source assets.",
        image: "https://www.overclockers.ua/games/half-life-2-rtx/01-half-life-2-rtx.jpg",
        url: "https://valvearchive.com"
    },
    {
        title: "Lambda Generation",
        desc: "News and community hub for Half-Life fans.",
        image: "https://images.squarespace-cdn.com/content/v1/5bf3648936099b244799015c/1559864228965-F0V1M83V4S0W6V4W3M6G/halflife_01.jpg",
        url: "https://lambdageneration.com"
    },
    {
        title: "Combined Labs",
        desc: "Secret development and modding tools.",
        image: "https://blob.game.info/blogs/embed/5897103855531.jpg",
        url: "https://google.com" // Заміни на потрібне
    }
];

const grid = document.getElementById('projectGrid');

projects.forEach(proj => {
    // Створюємо посилання-картку
    const card = document.createElement('a');
    card.href = proj.url;
    card.target = "_blank"; // Відкривати в новій вкладці
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
});