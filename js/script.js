// script.js - Funcionalidade de Dark/Light Mode

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Verifica se há preferência salva no localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        toggleButton.textContent = '🌙'; // Ícone para dark mode
    } else {
        toggleButton.textContent = '☀️'; // Ícone para light mode
    }

    // Evento de clique no botão
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const isLight = body.classList.contains('light-mode');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        toggleButton.textContent = isLight ? '🌙' : '☀️';
    });
});