const nombresAleatorios = [
    "🇫🇮 Ana Maria 🇫🇮",
        "🇨🇦 Carolina Garcia 🇨🇦",
        "🇦🇺 NAKARY MILLER 🇦🇺",
        "🇺🇸 GRACIELA CATERINA 🇺🇸",
        "🇻🇪 Valentina Ribeiro 🇻🇪",
        "🇻🇪 G R A C I E L A 💘 🇻🇪",
        "🇵🇪 Mariana López 🇵🇪",
        "🇷🇴 Andrei Popescu 🇷🇴",
        "🇧🇪 Emma Dubois 🇧🇪",
        "🇬🇷 Ioanna Papadopoulos 🇬🇷",
        "🇨🇱 Matías Silva 🇨🇱",
        "🇭🇺 Levente Kovács 🇭🇺",
        "🇸🇦 Fatima Al-Mansoori 🇸🇦",
        "🇲🇽 Alejandra Hernández 🇲🇽",
        "🇵🇦 Camila González 🇵🇦",
        "🇨🇮 Aminata Diop 🇨🇮",
        "🇨🇴 Isabela Ríos 🇨🇴",
        "🇮🇹 Sofia Santoro 🇮🇹",
        "🇳🇴 Emilie Andersen 🇳🇴",
        "🇦🇹 Lara Hofmann 🇦🇹",
        "🇳🇿 Harper Wilson 🇳🇿",
        "🇨🇿 Klára Nováková 🇨🇿",
        "🇮🇪 Aoife Murphy 🇮🇪",
        "🇨🇭 Alessia Rossi 🇨🇭",
        "🇮🇳 Aarav Patel 🇮🇳",
        "🇦🇪 Layla Khan 🇦🇪",
        "🇸🇪 Malin Lindström 🇸🇪",
        "🇿🇦 Thabo Molefe 🇿🇦",
        "🇳🇱 Daan van der Berg 🇳🇱",
        "🇧🇷 Maria da Silva 🇧🇷",
        "🇫🇷 Léa Dubois 🇫🇷",
        "🇰🇷 Min-jun Kim 🇰🇷",
        "🇯🇵 Yui Tanaka 🇯🇵",
        "🇩🇪 Lena Müller 🇩🇪",
        "🇬🇧 Oliver Hughes 🇬🇧",
        "🇪🇸 Marta García 🇪🇸",
    // Agrega más nombres según sea necesario
];

const textosAleatorios = [
    "WATCH ME MASTURBATE NOW ❤️",
    "📞🔥CALLS,💥 CUSTOM VIDEOS,😋 LIVE BROADCASTS, YOUR NAME ON MY 🍒TITS!",
    "Made in Czech 🇨🇿🍺 Big smile and big...heart🍒 Cum join me in my adventures as I show off just for you baby❤️ ❤️",
    "❣ Exclusive VIP Content 🔞|Seduction and Sensuality Unleashed 🦊| Monthly Nude Delights📸",
    "😻 Model, 👩‍🎓student 🔥I make exclusive videos, 📞calls! Sexsting LIVE -broadcasts!!🍑🍒 #fuck",
    "Model, 20 y.o 🇪🇸 Wanna chat with me? Check all my links 😍",
    "Hi I’m Molly! ❤️ Just a sweet girl who loves to be naughty 🤫😈💋CHECK ALL MY LINKS via IG! ✨",
    "🔥 Hot and ready for you! 😈 Let's play together and make your fantasies come true 💦",
    "🍑 Curvy and fun! 💋 Join me for exclusive content and live shows 📸",
    "🌟 Your favorite cam girl! 🎥 Live shows, custom videos, and more 🔞",
    "💖 Sensual and seductive! 😘 Exclusive content just for you 💌",
    "🔥 Naughty but nice! 💋 Cum play with me and let's have some fun 🍒",
    "🌺 Sweet and sexy! 💫 Join me for a private show and let's get wild together 🚀",
    "👅 Ready to please! 💦 Let's explore your wildest desires together 🔥",
    "🔞 Explicit content and live shows! 💋 Cum chat with me and let's have some fun 😘",
    "🌈 Fun and flirty! 💖 Exclusive content and private shows just for you 🌟",
    "💥 Wild and willing! 🔞 Let's get naughty together and have an unforgettable time 😈",
    "Hi, my name is Mia, I love traveling, sex and making videos 💖",
    "Hi, I'm Anna 23 yo 💋, ready for smth hot?🔞🔞",
    "Welcome to my page 💎 You will notice that I am always sweet and friendly! 💗 Feel free to ask me anything - I'll always chat with you😌",
    // Agrega más textos según sea necesario
];



// Función para cambiar aleatoriamente el nombre
function changeRandomName() {
    const nameElement = document.getElementById('randomName');
    const randomIndex = Math.floor(Math.random() * nombresAleatorios.length);
    const newName = nombresAleatorios[randomIndex];

    nameElement.textContent = newName;
}

// Función para cambiar aleatoriamente el texto
function changeRandomText() {
    const textElement = document.getElementById('randomText');
    const randomIndex = Math.floor(Math.random() * textosAleatorios.length);
    const newText = textosAleatorios[randomIndex];

    textElement.textContent = newText;
}

// Ejecutar las funciones al cargar la página
window.onload = function () {
    changeRandomVideo();
    changeRandomName();
    changeRandomText();
};

function recargarPagina() {
    // Recargar la página
    location.reload();
}