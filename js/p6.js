// Función para manejar el clic en el botón "Cambiar"
document.getElementById('cambiar-btn').addEventListener('click', function() {
    alert('¡Has hecho clic en el botón!');
});

document.querySelectorAll('.grid').forEach(function(gridItem) {
    gridItem.addEventListener('click', function() {
        // Cambiar el fondo de la página al color de fondo de la barra
        document.body.style.backgroundColor = getComputedStyle(gridItem).backgroundColor;
    });
});

document.querySelectorAll('.grid').forEach(function(gridItem) {
    gridItem.addEventListener('mouseover', function() {
        gridItem.querySelector('h3').textContent = "¡Estás sobre mí!";
    });

    gridItem.addEventListener('mouseout', function() {
        gridItem.querySelector('h3').textContent = "Elemento de barra";
    });
});

document.querySelectorAll('.grid a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
        alert("¡Has hecho clic en un enlace!");
    });
});

document.getElementById('cambiar-btn').addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
});

document.getElementById('cambiar-btn').addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
});

document.getElementById('cambiar-btn').addEventListener('click', function() {
    const extraContent = document.getElementById('extra-content');
    if (extraContent.style.display === 'none' || extraContent.style.display === '') {
        extraContent.style.display = 'block';
    } else {
        extraContent.style.display = 'none';
    }
});
