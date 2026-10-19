//################################################################################
// La tarifa de penalización por cancelación en ReservaYa se calcula con un
// multiplicador progresivo B (base real) elevado a E (exponente entero positivo) tramos.
// Pide por teclado la base B y el exponente E y calcula el resultado mediante un
// bucle (sin utilizar el operador ** ni Math.pow).
//################################################################################
// Escribe tu código aquí

let B = parseInt(prompt("Introduce a base real"))
let E = parseInt(prompt("Introduce el exponente entero positivo"))
let resultado = 1;

for (let i = 0; i < E; i++) {    
    resultado *= B
}

console.log(resultado);
