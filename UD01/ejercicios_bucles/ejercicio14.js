//################################################################################
// Las 5 pistas centrales de ReservaYa tienen iluminación inteligente cuyo consumo
// eléctrico escala de forma cuadrática según la potencia de la pista (del 1 al 5).
// Realiza un programa que calcule la suma de los consumos de las 5 pistas (1² + 2² + 3² + 4² + 5²).
//################################################################################
// Escribe tu código aquí

let WporPista = parseInt(prompt("Cual es el consumo de pontencia medio ?"))

let consumoTotal = 0

for (let i = 0; i < 5; i++) {
    consumoTotal += Math.pow(WporPista,2)
}
console.log(consumoTotal);
