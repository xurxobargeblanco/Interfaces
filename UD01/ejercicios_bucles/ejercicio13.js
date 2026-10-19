//################################################################################
// El recepcionista introduce los cobros en metálico de la jornada en el TPV de ReservaYa.
// El programa pide importes en euros hasta que se introduce un 0.
// Al terminar, debe imprimir la recaudación total y el ticket medio por cobro.
//################################################################################
// Escribe tu código aquí


let totalRecaudado = 0;
let cantidadCobros = 0;
let importe = null;

while (importe !== 0) {
    const input = prompt("Introduce el importe del cobro en € (o 0 para terminar):");
    importe = parseFloat(input);

    if (isNaN(importe) || importe < 0) {
        console.log("Error: Por favor, introduce un numero válido mayor o igual a 0.");
    } else if (importe > 0) {
        totalRecaudado += importe;
        cantidadCobros++;
    }
}

console.log("--- Cierre de Caja TPV - ReservaYa ---");
console.log(`Recaudación total: ${totalRecaudado.toFixed(2)} €`);

if (cantidadCobros > 0) {
    const ticketMedio = totalRecaudado / cantidadCobros;
    console.log(`Numero total de cobros: ${cantidadCobros}`);
    console.log(`Ticket medio por cobro: ${ticketMedio.toFixed(2)} €`);
} else console.log("No se registró ningún cobro en la jornada.");
