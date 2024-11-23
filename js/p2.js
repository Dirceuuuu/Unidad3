let nombre = prompt("¿Cuál es tu nombre?");
let edad = prompt("¿Cuántos años tienes?");
let pais = prompt("¿En qué país naciste?");
let boolean = prompt("El registro es correcto: " + nombre + ", " + edad + ", " + pais + ". ¿Es correcto? (Si/No)");

if (boolean === "Si" || boolean === "si") {
    alert("Registro de datos guardado correctamente: " + nombre + ", " + edad + ", " + pais);
} else {
    alert("Registro borrado, volver a rellenar");
}
