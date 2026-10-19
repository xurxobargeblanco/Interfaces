//################################################################################
// El equipo de mantenimiento debe pasar la máquina cepilladora solo por las pistas
// con número par ubicadas entre dos delimitadores introducidos por el usuario.
// Pide los dos números de pista e imprime todos los números pares del intervalo.
//################################################################################
// Escribe tu código aquí

const input1 = prompt("Introduce el primer número de pista (delimitador 1):");
const input2 = prompt("Introduce el segundo número de pista (delimitador 2):");

const pista1 = parseInt(input1, 10);
const pista2 = parseInt(input2, 10);

const inicio = Math.min(pista1, pista2);
const fin = Math.max(pista1, pista2);

console.log(`--- Pistas pares a cepillar entre la ${inicio} y la ${fin} ---`);

let hayPares = false;

for (let i = inicio; i <= fin; i++) {
    if (i % 2 === 0) {
        console.log(`Pista ${i}`);
        hayPares = true;
    }
}

if (!hayPares) {
    console.log("No hay pistas pares en el intervalo introducido.");
}
