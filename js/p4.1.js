const Materias = {
    listaMaterias: [
        { materia: "FUND. TELECOM.", grupo: "B", calificacion: 0 },
        { materia: "LENGUAJES Y AUTÓMATAS I", grupo: "B", calificacion: 0 },
        { materia: "SISTEMAS OPERATIVOS", grupo: "B", calificacion: 0 },
        { materia: "ARQ. DE COMPUT.", grupo: "B", calificacion: 0 },
        { materia: "FUNDAMENTOS ING. DE SW.", grupo: "B", calificacion: 0 },
    ],

    // Método para pedir calificaciones
    pedirCalificaciones: function () {
        this.listaMaterias.forEach((materia) => {
            materia.calificacion = parseFloat(
                prompt(`¿Qué calificación sacaste en ${materia.materia}?`)
            );
        });
    },

    // Método para calcular la suma de calificaciones
    calcularSuma: function () {
        let suma = 0;
        this.listaMaterias.forEach((materia) => {
            suma += materia.calificacion;
        });
        return suma;
    },

    // Método para calcular el promedio de calificaciones
    calcularPromedio: function () {
        const suma = this.calcularSuma();
        const promedio = suma / this.listaMaterias.length;
        return promedio;
    },

    // Método principal para ejecutar el programa
    ejecutar: function () {
        if (confirm("¿Quieres ingresar las calificaciones y calcular los resultados?")) {
            this.pedirCalificaciones();
            const suma = this.calcularSuma();
            const promedio = this.calcularPromedio();
            alert(`La suma de tus calificaciones es: ${suma}`);
            alert(`El promedio de tus calificaciones es: ${promedio.toFixed(2)}`);
        } else {
            alert("Has cancelado la acción.");
        }
    },
};

Materias.ejecutar();
