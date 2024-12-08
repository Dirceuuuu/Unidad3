// Función suma (Arrow Function)
const suma = (a, b) => a + b;

function sumar() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultado = suma(num1, num2);
    document.getElementById("resultadoSuma").textContent = `Resultado: ${resultado}`;
}

// Función esPar (Arrow Function)
const esPar = (num) => num % 2 === 0;

function determinarPar() {
    const numero = parseInt(document.getElementById("numeroPar").value);
    const resultado = esPar(numero);
    document.getElementById("resultadoPar").textContent = resultado ? "El número es par" : "El número es impar";
}

// Función para obtener nombres de una lista de objetos
const obtenerNombres = () => {
    const lista = [
        { nombre: "Juan" },
        { nombre: "Ana" },
        { nombre: "Carlos" },
        { nombre: "Laura" }
    ];

    const nombres = lista.map(persona => persona.nombre);
    const listaNombres = document.getElementById("listaNombres");

    listaNombres.innerHTML = ''; // Limpiar lista antes de agregar nuevos elementos

    nombres.forEach(nombre => {
        const li = document.createElement('li');
        li.textContent = nombre;
        listaNombres.appendChild(li);
    });
}
