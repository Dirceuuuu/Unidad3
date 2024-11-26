const Numeros = {
    listaNumeros: [10, 20, 30], // Arreglo inicial

    // Método para agregar números
    pedirNumeros: function () {
        let continuar = true;
        while (continuar) {
            let numero = prompt("Ingresa un número (o presiona cancelar para finalizar):");
            if (numero !== null) {
                let valor = parseFloat(numero.trim());
                if (!isNaN(valor)) {
                    this.listaNumeros.push(valor); // Agrega al arreglo si es un número válido
                } else {
                    alert("Por favor, ingresa un número válido.");
                }
            } else {
                continuar = false; // Finaliza el ciclo si el usuario presiona cancelar
            }
        }
    },

    // Método para calcular la suma total
    calcularSuma: function () {
        return this.listaNumeros.reduce((a, b) => a + b, 0);
    },

    // Método principal
    ejecutar: function () {
        this.pedirNumeros();
        let suma = this.calcularSuma();
        alert("Los números ingresados son: " + this.listaNumeros.join(", "));
        alert("La suma total de los números es: " + suma);
    }
};

// Vincular botón al programa
document.getElementById("btnNumeros").addEventListener("click", function () {
    Numeros.ejecutar();
});
