//################################################################################
// En ReservaYa se quiere mostrar la asignación de pistas de forma gráfica.
// Pide al usuario el número total de pistas N (entre 1 y 20).
// Muestra en consola las pistas desde la 1 hasta la N, imprimiendo el número de 
// pista repetido tantas veces como su propio valor (ej: Pista 1 una vez, Pista 2 dos veces...).
//################################################################################
// Escribe tu código aquí

let N = parseInt(prompt(`Introduce o numero de pistas (1-20)`))

for (let i = 1; i <= N; i++) {
        const salida = `${i} `.repeat(i).trim();
        console.log(`Pista ${i}: ${salida}`);
}