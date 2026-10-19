//################################################################################
// Para generar un token codificado de confirmación de pista, el sistema toma el
// nombre de la pista y genera una nueva cadena invirtiendo todos sus caracteres.
//################################################################################
// Escribe tu código aquí

let nombreInicial = prompt("Introduce el nombre de la pista:") || "PISTA04";
let tokenInvertido = "";

for (let i = nombreInicial.length - 1; i >= 0; i--) {
    tokenInvertido += nombreInicial[i];
}

console.log(`Nombre original: ${nombreInicial}`);
console.log(`Token codificado: ${tokenInvertido}`);