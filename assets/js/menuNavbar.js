//* Menú navbar

//* Función para cerrar el menú al hacer click en un ítem

export function closeMenuNavbar() {
    const navLinks = document.querySelectorAll(".navLink");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            const navMenu = document.querySelector(".contentNavbar");
            navMenu.classList.remove("active");
        });
    });
}

//* Función para cerrar el menú al hacer click fuera de él

export function closeMenuNavbarOutsideClick() {
    const header = document.getElementById('header');
    const contentNavbar = header.querySelector('.contentNavbar');
    document.addEventListener('click', (event) => {
        const isClickInside = header.contains(event.target);
        if (!isClickInside && contentNavbar.classList.contains('active')) {
            contentNavbar.classList.remove('active');
        }
    });
}

//* Función para desplegar el menú en mobile

export function showNavbarMobile() {
    const btnNavbarMenu = document.querySelector('.btnNavbarMenu');
    const contentNavbar = document.querySelector('.contentNavbar');

    btnNavbarMenu.addEventListener('click', () => {
        contentNavbar.classList.toggle('active');
    });
}