//* Cerrar menú navbar

export function closeMenuNavbar() {
    const menuHamburguesa = document.querySelector('.navbar-collapse');
    const documento = document.querySelector('body');

    documento.addEventListener('click', function (evento) {
        const estaDentroDelMenu = menuHamburguesa.contains(evento.target);
        if (!estaDentroDelMenu) {
            menuHamburguesa.classList.remove('show');
        }
    });
}