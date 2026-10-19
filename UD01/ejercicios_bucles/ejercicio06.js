//################################################################################
// Un usuario adquiere el abono "Socio VIP" de ReservaYa a pagar en 20 meses.
// El primer mes paga 10€, el segundo 20€, el tercero 30€ y así sucesivamente.
// Realizar un algoritmo para determinar cuánto debe pagar mensualmente y el total
// acumulado tras los 20 meses.
//################################################################################
// Escribe tu código aquí

let pagoInicial = 10;
let total = 0;

for (let i = 1; i < 21; i++) {
    console.log(`Pago de mes ${i} = ${pagoInicial}`);
    total += pagoInicial
    pagoInicial += 10
}

console.log(`Se ha pagado un total de : ${total}`);
