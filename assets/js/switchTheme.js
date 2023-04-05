//* Función para el cambio entre Modo Oscuro y Modo Claro

export function switchThemeBtn() {
    const switchTheme = document.querySelector('.switchTheme');

    switchTheme.addEventListener('click', () => {
        const html = document.querySelector('html');
        html.classList.toggle('light-mode');
        switchTheme.textContent = html.classList.contains('light-mode') ? 'Dark Mode' : 'Light Mode';
    });
}