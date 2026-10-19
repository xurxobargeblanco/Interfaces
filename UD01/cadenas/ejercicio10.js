//################################################################################
// El sistema de verificación de cupones simétricos de ReservaYa comprueba si el
// código promocional introducido es un palíndromo (se lee igual de izquierda a
// derecha que de derecha a izquierda).
//################################################################################
// Escribe tu código aquí

let codigo = prompt("Introduce el código promocional:") || 'radar';
let codigoLimpio = codigo.toLowerCase().replaceAll(" ", "");

let codigoInvertido = codigoLimpio.split("").reverse().join("");

if (codigoLimpio === codigoInvertido) {
    console.log(`El código '${codigo}' SÍ es un palíndromo.`);
} else {
    console.log(`El código '${codigo}' NO es un palíndromo.`);
}