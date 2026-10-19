//################################################################################
// Un cliente introduce las observaciones o requisitos especiales para su reserva en una frase.
// Realiza un programa que cuente e imprima cuántas palabras contiene dicha frase.
//################################################################################
// Escribe tu código aquí

let observaciones = prompt("Escribe ...")

let palabras = observaciones.split(" ")

console.log(`La frase ${observaciones} tiene ${palabras.length} palabras , son : ${palabras}`);
