// js/index.js - salva perfil selecionado em localStorage

document.addEventListener('DOMContentLoaded', () => {
    const profileLinks = document.querySelectorAll('.profiles .profile');

    profileLinks.forEach(link => {
        link.addEventListener('click', event => {
            const figure = link.querySelector('figure');
            if (!figure) return;

            const img = figure.querySelector('img');
            const caption = figure.querySelector('figcaption');
            if (!img || !caption) return;

            localStorage.setItem('perfilAtivoNome', caption.textContent.trim());
            localStorage.setItem('perfilAtivoImagem', img.src);
            // mantém navegação normal para catalogo.html
        });
    });
});
