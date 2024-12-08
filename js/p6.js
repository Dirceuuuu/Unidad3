document.addEventListener('DOMContentLoaded', () => {
    const botonCambiarEstilo = document.getElementById('changeStyleButton');
    const contenedorBento = document.getElementById('bentoGrid');

    let estiloCambiado = false;

    if (botonCambiarEstilo && contenedorBento) {
        botonCambiarEstilo.addEventListener('click', () => {
            if (!estiloCambiado) {
                // Cambiar fondo de la página con transición
                document.body.style.transition = 'background-color 0.5s ease';
                document.body.style.backgroundColor = '#121212';

                // Cambiar estilo del contenedor con transición
                contenedorBento.style.transition = 'all 0.5s ease';
                contenedorBento.style.padding = '50px';
                contenedorBento.style.borderRadius = '20px';
                contenedorBento.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';

                // Cambiar estilo de los elementos dentro del grid con efectos suaves
                const itemsGrid = contenedorBento.querySelectorAll('.grid');
                itemsGrid.forEach((item, index) => {
                    item.style.transition = 'all 0.3s ease';
                    item.style.backgroundColor = index % 2 === 0 ? '#bb86fc' : '#03dac6';
                    item.style.color = '#ffffff';
                    item.style.transform = 'scale(1.05)';
                    item.style.padding = '20px';
                    item.style.borderRadius = '15px';
                });

                // Cambiar texto y estilo del botón
                botonCambiarEstilo.textContent = 'Restaurar Estilo';
                botonCambiarEstilo.style.transition = 'all 0.3s ease';
                botonCambiarEstilo.style.backgroundColor = '#03dac6';
                botonCambiarEstilo.style.color = '#121212';
                botonCambiarEstilo.style.transform = 'scale(1.1)';
            } else {
                // Restaurar los estilos originales con transición
                document.body.style.transition = 'background-color 0.5s ease';
                document.body.style.backgroundColor = '';

                // Restaurar los estilos del contenedor con transición
                contenedorBento.style.transition = 'all 0.5s ease';
                contenedorBento.style.padding = '';
                contenedorBento.style.borderRadius = '';
                contenedorBento.style.boxShadow = '';

                // Restaurar estilo de los elementos dentro del grid
                const itemsGrid = contenedorBento.querySelectorAll('.grid');
                itemsGrid.forEach(item => {
                    item.style.transition = 'all 0.3s ease';
                    item.style.backgroundColor = '';
                    item.style.color = '';
                    item.style.transform = '';
                    item.style.padding = '';
                    item.style.borderRadius = '';
                });

                // Cambiar texto y estilo del botón
                botonCambiarEstilo.textContent = 'Cambiar Estilo';
                botonCambiarEstilo.style.transition = 'all 0.3s ease';
                botonCambiarEstilo.style.backgroundColor = '';
                botonCambiarEstilo.style.color = '';
                botonCambiarEstilo.style.transform = '';
            }
            estiloCambiado = !estiloCambiado;
        });
    } else {
        console.error('No se encontró el botón o el contenedor.');
    }
});
