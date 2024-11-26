const Calificaciones = {
    listaCalificaciones: [],

    // Método para solicitar calificaciones
    pedirCalificaciones: function () {
        let continuar = true;
        while (continuar) {
            let calificacion = prompt("Ingresa una calificación (o presiona cancelar para finalizar):");
            if (calificacion !== null) {
                let numero = parseFloat(calificacion.trim());
                if (!isNaN(numero)) {
                    this.listaCalificaciones.push(numero); // Agrega al arreglo si es un número válido
                } else {
                    alert("Por favor, ingresa un número válido.");
                }
            } else {
                continuar = false; // Finaliza el ciclo si el usuario presiona cancelar
            }
        }
    },

    calcularPromedio: function () {
        if (this.listaCalificaciones.length === 0) return 0;
        let suma = this.listaCalificaciones.reduce((a, b) => a + b, 0);
        return suma / this.listaCalificaciones.length;
    },

    // Método principal
    ejecutar: function () {
        this.pedirCalificaciones();
        let promedio = this.calcularPromedio();
        alert("Las calificaciones ingresadas son: " + this.listaCalificaciones.join(", "));
        alert("El promedio de las calificaciones es: " + promedio.toFixed(2));
    }
};

document.getElementById("btnCalificaciones").addEventListener("click", function () {
    Calificaciones.ejecutar();
});
