// GEN Z DICTIONARY DATASET
const genzDictionary = [
    { word: "Rizz", meaning: "Charisma, especially in flirting. Short for 'charisma'.", example: "Bro has unlimited rizz - got her number in 2 minutes flat.", emojis: ["😂", "👑", "💀"] },
    { word: "Gyatt", meaning: "Exclamation about someone's curvy physique (originated from 'god damn').", example: "GYATT! Did you see her new gym fit?", emojis: ["🍑", "😳", "🔥"] },
    { word: "Skibidi", meaning: "Nonsense term from viral meme, now means anything chaotic.", example: "This group chat is skibidi af right now.", emojis: ["🤪", "🚽", "🎭"] },
    { word: "Sigma", meaning: "A lone wolf who succeeds without validation (contrast to 'alpha').", example: "He's such a sigma - built his business with zero help.", emojis: ["🐺", "💼", "🧊"] }
];

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // After 3 seconds, fade out intro
    setTimeout(() => {
        const intro = document.getElementById('intro');
        intro.style.opacity = '0';

        // After fade completes, hide intro and show app
        setTimeout(() => {
            intro.style.display = 'none';
            document.getElementById('app').style.display = 'block';
            document.querySelector('.current-year').textContent = new Date().getFullYear();
            renderWords(genzDictionary);
        }, 500); // Matches the CSS transition time
    }, 3000);

    // Theme toggle functionality
    document.getElementById('theme-toggle').addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLightMode = document.body.classList.contains('light-mode');
        document.getElementById('theme-toggle').textContent = isLightMode ? '🌞' : '🌙';
    });

    // Search functionality
    document.querySelector('.search-bar input').addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = genzDictionary.filter(word =>
            word.word.toLowerCase().includes(term) ||
            word.meaning.toLowerCase().includes(term)
        );
        renderWords(filtered);
    });
});

function renderWords(words) {
    const container = document.getElementById('word-list');
    container.innerHTML = '';

    words.forEach(item => {
        const card = document.createElement('div');
        card.className = 'word-card';
        card.innerHTML = `
            <div class="word">${item.word}</div>
            <div class="meaning">${item.meaning}</div>
            <div class="example">"${item.example}"</div>
            <div class="emoji-reactions">
                ${item.emojis.map(emoji => `<button class="emoji-btn">${emoji}</button>`).join('')}
            </div>
        `;
        container.appendChild(card);
    });

    // Add emoji reaction effects
    document.querySelectorAll('.emoji-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            this.style.transform = 'scale(1.3)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });
}