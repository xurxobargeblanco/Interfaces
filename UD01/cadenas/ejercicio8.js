//################################################################################
// Un sistema de lector óptico de tarjetas de socio lee los nombres con las mayúsculas
// y minúsculas invertidas. Realiza un programa que lea la cadena y convierta las
// mayúsculas a minúsculas y las minúsculas a mayúsculas.
//################################################################################
// Escribe tu código aquí

let nombre = prompt("Introduce el nombre del socio:") || 'Xurxo Barge Blanco';
let nombreInvertido = "";

for (let i = 0; i < nombre.length; i++) {
    let caracter = nombre[i];
    if (caracter === caracter.toUpperCase()) nombreInvertido += caracter.toLowerCase();
    else nombreInvertido += caracter.toUpperCase();
}

console.log(`Nombre original: ${nombre}`);
console.log(`Nombre corregido: ${nombreInvertido}`);

