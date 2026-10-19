//################################################################################
// ReservaYa necesita calcular cuántas combinaciones únicas de partidos se pueden
// formar en la fase final de un torneo con N equipos participantes (factorial de N).
// Crea un programa que pida el número de equipos (entero positivo) y calcule el total
// de combinaciones posibles.
//################################################################################
// Escribe tu código aquí

let N = parseInt(prompt("Introduce el numero de equipos participantes"))

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (i != j) {
           console.log(`Equipo ${i + 1} vs Equipo ${j + 1}`);    
        }     
    }
}

