// Función 1: Mostrar bienvenida y recolectar datos
function recolectarDatos() {
    let nombre = prompt("¿Cuál es tu nombre?");
    let actividad = prompt("¿Cuál es tu actividad favorita?");
    return { nombre, actividad };
}

// Función 2: Confirmar los datos
function confirmarDatos(nombre, actividad) {
    return confirm(`¿Estás seguro de que tu actividad favorita es "${actividad}", ${nombre}?`);
}

// Función 3: Mostrar el mensaje final
function mostrarMensaje(confirmado, nombre, actividad) {
    if (confirmado) {
        alert(`¡Gracias, ${nombre}! Tu actividad favorita "${actividad}" se ha registrado correctamente.`);
    } else {
        alert("No se ha guardado la información. Por favor, vuelve a intentarlo.");
    }
}

// Función libre: Reintentar si no confirma
function iniciarPrograma() {
    let datos;
    let confirmado;
    do {
        datos = recolectarDatos();
        confirmado = confirmarDatos(datos.nombre, datos.actividad);
        mostrarMensaje(confirmado, datos.nombre, datos.actividad);
    } while (!confirmado);
}

iniciarPrograma ()