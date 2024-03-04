// script.js

const body = document.body;
const modeToggleBtn = document.getElementById('mode-toggle');
const enBtn = document.getElementById('en-btn');
const frBtn = document.getElementById('fr-btn');

// Check if dark mode is enabled
const isDarkMode = () => body.classList.contains('dark-mode');

// Check if language is currently French
const isFrench = () => body.classList.contains('french');

// Set language to English
function setLanguageToEnglish() {
    body.classList.remove('french');
    updateText(); // Update text content after language change
}

// Set language to French
function setLanguageToFrench() {
    body.classList.add('french');
    updateText(); // Update text content after language change
}

// Toggle between dark and light mode
function toggleDarkMode() {
    body.classList.toggle('dark-mode');
}

// Update text content based on language
function updateText() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        // Here you would have a dictionary of translations
        const translations = {
            'about': {
                'en': 'About Us',
                'fr': 'À Propos'
            },
            'events': {
                'en': 'Events',
                'fr': 'Événements'
            },
            'team': {
                'en': 'Our Team',
                'fr': 'Notre Équipe'
            },
            'join': {
                'en': 'Join Us',
                'fr': 'Rejoignez-nous'
            },
            // Add more translations as needed
        };

        if (translations[key]) {
            element.textContent = translations[key][isFrench() ? 'fr' : 'en'];
        }
    });
}

/*

// Event listener for mode toggle button
modeToggleBtn.addEventListener('click', () => {
    toggleDarkMode();
});
*/

// Event listener for language selection buttons
enBtn.addEventListener('click', () => {
    setLanguageToEnglish();
});

frBtn.addEventListener('click', () => {
    setLanguageToFrench();
});

// Initial update of text content based on default language
updateText();
