//################################################################################
// El departamento de seguridad exige validar los límites de aforo autorizados.
// Pide el límite inferior y superior del aforo (si el inferior es mayor, vuelve a pedirlo).
// A continuación introduce el número de espectadores de cada partido hasta pulsar 0.
// El programa informará de:
//  * La suma total de espectadores dentro del intervalo abierto.
//  * Cuántos partidos quedaron fuera del rango.
//  * Si algún partido registró exactamente el aforo de los límites.
//################################################################################
// Escribe tu código aquí

let limiteInferior, limiteSuperior;

do {
    const inputInf = prompt("Introduce el límite inferior del aforo:");
    const inputSup = prompt("Introduce el límite superior del aforo:");
    
    limiteInferior = parseInt(inputInf, 10);
    limiteSuperior = parseInt(inputSup, 10);

} while (limiteInferior > limiteSuperior);

let sumaDentroIntervalo = 0;
let partidosFueraRango = 0;
let huboCoincidenciaExacta = false;
let espectadores = null;

console.log(`Límites configurados: Límite Inferior = ${limiteInferior}, Límite Superior = ${limiteSuperior}`);

while (espectadores !== 0) {
    const inputEspectadores = prompt("Introduce el número de espectadores del partido (o 0 para terminar):");
    espectadores = parseInt(inputEspectadores, 10);

    if (isNaN(espectadores) || espectadores < 0) {
        alert("Error: Introduce un número entero mayor o igual a 0.");
    } else if (espectadores > 0) {

        if (espectadores === limiteInferior || espectadores === limiteSuperior) huboCoincidenciaExacta = true;
        
        if (espectadores > limiteInferior && espectadores < limiteSuperior) sumaDentroIntervalo += espectadores;
        else partidosFueraRango++;
    }
}

console.log("--- Informe del Departamento de Seguridad ---");
console.log(`Suma total de espectadores (dentro del intervalo abierto ${limiteInferior} - ${limiteSuperior}): ${sumaDentroIntervalo}`);
console.log(`Cantidad de partidos fuera del rango: ${partidosFueraRango}`);

if (huboCoincidenciaExacta) console.log("Atención: Al menos un partido registró exactamente el aforo de uno de los límites.");
else console.log("Ningún partido registró exactamente el aforo de los límites.");
