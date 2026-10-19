//################################################################################
// El sistema de megafonía clasifica las pistas por la letra de su sector.
// Si la letra es una vocal (A, E, I, O, U) imprime 'PABELLÓN CUBIERTO',
// en caso contrario imprime 'PISTAS EXTERIORES'. El programa termina al introducir un espacio.
//################################################################################
// Escribe tu código aquí

let entrada = "";

while (entrada !== " ") {
    entrada = prompt("Introduce la letra del sector (o un espacio para terminar):");

    if (entrada === " ") {
        console.log("Programa finalizado.");
    } 
    else if (entrada !== null && entrada.trim().length === 1) {
        const letra = entrada.toUpperCase();

        if (letra === 'A' || letra === 'E' || letra === 'I' || letra === 'O' || letra === 'U') {
            console.log(`Sector '${letra}': PABELLÓN CUBIERTO`);
        } else {
            console.log(`Sector '${letra}': PISTAS EXTERIORES`);
        }
    } 
    else if (entrada !== null) {
        alert("Por favor, introduce una sola letra o un espacio para salir.");
    }
}