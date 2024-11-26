const Frutas = {
    listaFrutas: [],

    // Método para solicitar frutas al usuario
    pedirFrutas: function () {
        let continuar = true; // Variable para continuar solicitando frutas
        while (continuar) {
            let fruta = prompt("Ingresa el nombre de una fruta (o presiona cancelar para finalizar):");
            if (fruta) {
                this.listaFrutas.push(fruta.trim()); // Agrega la fruta al arreglo
            } else {
                continuar = false; // Finaliza el ciclo si el usuario cancela
            }
        }
    },

    // Método para mostrar las frutas ingresadas
    mostrarFrutas: function () {
        if (this.listaFrutas.length > 0) {
            alert("Las frutas que ingresaste son: " + this.listaFrutas.join(", "));
        } else {
            alert("No ingresaste ninguna fruta.");
        }
    },

    // Método principal para ejecutar el programa
    ejecutar: function () {
        this.pedirFrutas();
        this.mostrarFrutas();
    }
};

document.getElementById("btnFrutas").addEventListener("click", function () {
    Frutas.ejecutar();
});
