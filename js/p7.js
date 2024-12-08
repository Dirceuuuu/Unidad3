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

    // Agregar un nuevo enlace al menú pidiendo el nombre y URL mediante prompt
    agregarBoton.addEventListener('click', () => {
        // Pedir al usuario el nombre de la película y la URL
        const nombrePelicula = prompt("Introduce el nombre de la película:");
        const urlPelicula = prompt("Introduce la URL de la película:");

        // Verificar si el usuario proporcionó ambos datos
        if (nombrePelicula && urlPelicula) {
            // Crear el nuevo elemento <li> con el enlace
            const nuevoEnlace = document.createElement('li');
            const enlace = document.createElement('a');
            enlace.href = urlPelicula;
            enlace.textContent = nombrePelicula;

            // Agregar el enlace al nuevo <li>
            nuevoEnlace.appendChild(enlace);

            // Agregar el nuevo <li> al final del menú
            menuList.appendChild(nuevoEnlace);
        } else {
            alert("Por favor, ingresa tanto el nombre como la URL de la película.");
        }
    });
});
