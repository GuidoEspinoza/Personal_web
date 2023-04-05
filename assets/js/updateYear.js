//* Función para la actualización automática del año

export function updateYear() {
    const yearSpan = document.querySelector('.footerYear');
    const year = new Date().getFullYear();
    yearSpan.textContent = year;
}