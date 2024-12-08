document.addEventListener('DOMContentLoaded', () => {
    const eliminarBoton = document.getElementById('eliminarEnlace');
    const agregarBoton = document.getElementById('agregarEnlace');
    const menuList = document.getElementById('menu-list');

    // Eliminar el primer enlace del menú
    eliminarBoton.addEventListener('click', () => {
        const primerElemento = menuList.querySelector('li');
        if (primerElemento) {
            primerElemento.remove();
        }
    });

    // Agregar un nuevo enlace al menú
    agregarBoton.addEventListener('click', () => {
        // Crear el nuevo elemento <li> con el enlace
        const nuevoEnlace = document.createElement('li');
        const enlace = document.createElement('a');
        enlace.href = "https://pelicula6.com";
        enlace.textContent = "Pelicula 6";

        // Agregar el enlace al nuevo <li>
        nuevoEnlace.appendChild(enlace);

        // Agregar el nuevo <li> al final del menú
        menuList.appendChild(nuevoEnlace);
    });
});