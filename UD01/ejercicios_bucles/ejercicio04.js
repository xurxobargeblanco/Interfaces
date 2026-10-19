//################################################################################
// Tienes un array con los importes recaudados por cada reserva durante una jornada:
// const ingresos = [15, 20, 15, 30, 25, 15, 40];
// Utiliza un bucle para calcular la recaudación total del día y la media de ingresos.
//################################################################################
// Escribe tu código aquí

const ingresos = [15, 20, 15, 30, 25, 15, 40];

let total = 0
let media = 0

for (const i of ingresos) {
    total += i
}

media = total/ingresos.length

console.log(`Recaudouse un total de : ${total} e media de : ${media.toFixed(2)} euros.`);
