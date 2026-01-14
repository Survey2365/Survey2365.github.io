// Array of games (the "table" you mentioned)
const games = [
    {
        name: "Retro Bowl",
        url: "https://raw.githubusercontent.com/ironsnoutonline/ironsnoutonline.github.io/main/index.html"
    },
    {
        name: "Slope",
        url: "https://slopegame.github.io"
    },
    {
        name: "Smash Karts",
        url: "https://smashkarts.io"
    }
];

// Container for the cards
const container = document.getElementById("gameContainer");

// Dynamically create each game card
games.forEach(game => {
    const card = document.createElement("div");
    card.className = "game-card";

    // iframe for the game
    const frame = document.createElement("div");
    frame.className = "game-frame";
    const iframe = document.createElement("iframe");
    iframe.src = game.url;
    frame.appendChild(iframe);

    // Info bar
    const info = document.createElement("div");
    info.className = "game-info";

    const name = document.createElement("span");
    name.textContent = game.name;

    const fullscreenBtn = document.createElement("button");
    fullscreenBtn.className = "fullscreen-btn";
    fullscreenBtn.textContent = "FULLSCREEN";
    fullscreenBtn.onclick = () => iframe.requestFullscreen();

    info.appendChild(name);
    info.appendChild(fullscreenBtn);

    // Combine into card
    card.appendChild(frame);
    card.appendChild(info);

    // Add to container
    container.appendChild(card);
});
