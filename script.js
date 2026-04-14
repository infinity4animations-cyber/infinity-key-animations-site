document.addEventListener('DOMContentLoaded', () => {
    const ideas = [
        'AI Writing Assistant',
        'AI Image Generator',
        'AI Chatbot for Customer Service',
        'AI Music Composer',
        'AI Video Editing Tool',
        'AI Personal Trainer',
        'AI Recipe Generator',
        'AI-Based Personal Finance Manager',
        'AI Language Translator',
        'AI for Predictive Analytics',
        'AI Art Critic',
        'AI-based Social Media Manager',
        'AI for Game Development',
        'AI in Healthcare Diagnostics',
        'AI for Manufacturing Quality Control',
    ];

    const ideaList = [];
    const generateBtn = document.getElementById('generateBtn');
    const recentIdeasCount = 10;

    generateBtn.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * ideas.length);
        const selectedIdea = ideas[randomIndex];

        if (ideaList.length >= recentIdeasCount) {
            ideaList.shift(); // Remove the oldest idea
        }
        ideaList.push(selectedIdea);

        updateIdeaListDisplay();
    });

    function updateIdeaListDisplay() {
        const display = document.getElementById('ideaList');
        display.innerHTML = '';
        ideaList.forEach(idea => {
            const item = document.createElement('li');
            item.textContent = idea;
            display.appendChild(item);
        });
    }
});