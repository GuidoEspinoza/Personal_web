//* Actualización automática del año

export function updateYear() {
    const yearSpan = document.querySelector('.footerYear');
    const year = new Date().getFullYear();
    yearSpan.textContent = year;
}