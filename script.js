// script.js

const body = document.body;
const modeToggleBtn = document.getElementById('mode-toggle');
const languageSelect = document.getElementById('language-select');

// Check if dark mode is enabled
const isDarkMode = () => body.classList.contains('dark-mode');

// Get selected language from dropdown
const getSelectedLanguage = () => languageSelect.value;

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
            element.textContent = translations[key][getSelectedLanguage()];
        }
    });
}

// Event listener for mode toggle button
modeToggleBtn.addEventListener('click', () => {
    toggleDarkMode();
});

// Event listener for language selection change
languageSelect.addEventListener('change', () => {
    updateText(); // Update text content after language selection change
});

// Initial update of text content based on selected language
updateText();
