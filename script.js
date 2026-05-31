// 📚 Stories Database (කතා පොත් දත්ත)
const stories = {
    Lion: {
        title: "The Lion & The Mouse 🦁",
        body: "Once upon a time, a small mouse accidentally woke up a sleeping lion. The lion was angry but let the mouse go. Later, the lion was caught in a hunter's net. The little mouse chewed the ropes and freed the lion! \n\n**Lesson:** Little friends can be great friends!"
    },
    Tortoise: {
        title: "The Tortoise & The Hare 🐢",
        body: "A proud hare laughed at a slow tortoise. They decided to have a race. The hare ran fast and took a nap midway because he was confident. But the steady tortoise kept walking and won the race while the hare was sleeping! \n\n**Lesson:** Slow and steady wins the race!"
    }
};

// 🗣️ Speaking Section Phrases (පුහුණු වීමට වාක්‍ය)
const phrases = [
    "Good morning! Have a wonderful day!",
    "Reading books opens a world of magic.",
    "Practice makes perfect, keep trying!",
    "I love learning new things every day!"
];
let currentPhraseIndex = 0;

// Function to open Story Modal
function openBook(storyKey) {
    const modal = document.getElementById('book-modal');
    document.getElementById('modal-title').innerText = stories[storyKey].title;
    document.getElementById('modal-body').innerText = stories[storyKey].body;
    modal.style.display = 'flex';
}

// Function to close Story Modal
function closeBook() {
    document.getElementById('book-modal').style.display = 'none';
}

// 🔊 Text-To-Speech Feature (වචන ශ්‍රවණය කිරීම)
function speakPhrase() {
    const text = document.getElementById('phrase-display').innerText;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.8; // Kids-friendly slow speed
    window.speechSynthesis.speak(utterance);
}

// Change to next phrase
function nextPhrase() {
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    document.getElementById('phrase-display').innerText = `"${phrases[currentPhraseIndex]}"`;
}

// 📰 Kids Daily News (ළමා පුවත් පද්ධතිය)
const kidsNews = [
    {
        title: "🚀 Mars Rover Finds Fun Rocks!",
        desc: "Scientists found exciting shiny rocks on Mars today. Space exploration is getting cooler!"
    },
    {
        title: "🐼 Twin Baby Pandas Born!",
        desc: "A zoo celebrated the birth of cute twin pandas. They are healthy and love sleeping."
    }
];

function loadNews() {
    const newsContainer = document.getElementById('news-container');
    // Pick a random news for the day
    const randomNews = kidsNews[Math.floor(Math.random() * kidsNews.length)];
    newsContainer.innerHTML = `
        <h3>${randomNews.title}</h3>
        <p style="margin-top: 10px; color: #555;">${randomNews.desc}</p>
    `;
}

// Initialize components on load
window.onload = function() {
    loadNews();
};

