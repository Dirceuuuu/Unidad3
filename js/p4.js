const Horario = {
    clases: [
        {
            materia: "FUND. TELECOM.",
            grupo: "B",
            creditos: 4,
            horarios: {
                lunes: "14:00-15:00/Aula:F5",
                martes: "14:00-15:00/Aula:F5",
                miércoles: "14:00-15:00/Aula:F5",
                jueves: "14:00-15:00/Aula:F5",
                viernes: "",
                sábado: ""
            }
        },
        {
            materia: "LENGUAJES Y AUTÓMATAS I",
            grupo: "B",
            creditos: 5,
            horarios: {
                lunes: "18:00-19:00/Aula:F5",
                martes: "18:00-19:00/Aula:F5",
                miércoles: "18:00-19:00/Aula:F5",
                jueves: "18:00-19:00/Aula:F5",
                viernes: "18:00-19:00/Aula:F5",
                sábado: "18:00-19:00/Aula:F5"
            }
        },
        {
            materia: "SISTEMAS OPERATIVOS",
            grupo: "B",
            creditos: 4,
            horarios: {
                lunes: "15:00-16:00/Aula:F3",
                martes: "15:00-16:00/Aula:F3",
                miércoles: "15:00-16:00/Aula:F3",
                jueves: "15:00-16:00/Aula:F3",
                viernes: "",
                sábado: ""
            }
        },
        {
            materia: "ARQ. DE COMPUT.",
            grupo: "B",
            creditos: 5,
            horarios: {
                lunes: "13:00-14:00/Aula:E1",
                martes: "13:00-14:00/Aula:E1",
                miércoles: "13:00-14:00/Aula:E1",
                jueves: "13:00-14:00/Aula:E1",
                viernes: "13:00-14:00/Aula:E1",
                sábado: "13:00-14:00/Aula:F7"
            }
        },
        {
            materia: "FUNDAMENTOS ING. DE SW.",
            grupo: "B",
            creditos: 4,
            horarios: {
                lunes: "16:00-17:00/Aula:F5",
                martes: "16:00-17:00/Aula:F5",
                miércoles: "16:00-17:00/Aula:F5",
                jueves: "16:00-17:00/Aula:F5",
                viernes: "",
                sábado: ""
            }
        },
        {
            materia: "TALLER DE B.D.",
            grupo: "B",
            creditos: 4,
            horarios: {
                lunes: "19:00-20:00/Aula:S1",
                martes: "19:00-20:00/Aula:S1",
                miércoles: "19:00-20:00/Aula:S1",
                jueves: "19:00-20:00/Aula:S1",
                viernes: "",
                sábado: ""
            }
        },
        {
            materia: "PROGRAMACIÓN WEB",
            grupo: "B",
            creditos: 5,
            horarios: {
                lunes: "17:00-18:00/Aula:S2",
                martes: "17:00-18:00/Aula:S2",
                miércoles: "17:00-18:00/Aula:S2",
                jueves: "17:00-18:00/Aula:S2",
                viernes: "17:00-18:00/Aula:S2",
                sábado: "17:00-18:00/Aula:S2"
            }
        },
        {
            materia: "ESTUDIANTINA",
            grupo: "A",
            creditos: 1,
            horarios: {
                lunes: "",
                martes: "",
                miércoles: "",
                jueves: "",
                viernes: "16:00-18:00/Gim",
                sábado: ""
            }
        }
    ],

    imprimirHorario: function () {
        let mensaje = ""; // Mensaje acumulado
        let limitePorAlerta = 2; // Número de materias por alerta
        let contador = 0;

        this.clases.forEach((materia) => {
            mensaje += `Materia: ${materia.materia} (Grupo: ${materia.grupo}, Créditos: ${materia.creditos})\n`;
            for (let dia in materia.horarios) {
                mensaje += `  ${dia}: ${materia.horarios[dia] || "Sin clase"}\n`;
            }
            mensaje += "\n"; // Espacio entre materias
            contador++;

            // Cuando alcanza el límite por alerta o es la última materia, muestra y reinicia
            if (contador === limitePorAlerta || materia === this.clases[this.clases.length - 1]) {
                alert(mensaje);
                mensaje = ""; // Reinicia el mensaje
                contador = 0;
            }
        });
    }
};

// Cuadro de confirmación para decidir si mostrar el horario
if (confirm("¿Quieres mostrar el horario del semestre?")) {
    Horario.imprimirHorario(); // Muestra el horario si seleccionas "Aceptar"
} else {
    alert("Has cancelado la acción."); // Mensaje si seleccionas "Cancelar"
}