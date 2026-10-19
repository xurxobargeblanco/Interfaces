//################################################################################
// ReservaYa audita las solicitudes de cancelación de reservas.
// Se pide por teclado la cantidad de solicitudes a revisar.
// El programa debe informar de cuántos balances son positivos (cobro de penalización),
// cuántos son negativos (devolución al cliente) y cuántos son iguales a 0 (cancelación neutra).
//################################################################################
// Escribe tu código aquí

let CantidadSolicitudes = parseInt(prompt("Cuantas solicitudes vamos a auditorar ?"))
let acabar = false;
let positivos = 0, negativos=0,iguales=0;
do {
    let balance = parseInt(prompt("Indique tipo de balance"))

    if (balance > 0) {
        positivos++
    }else if (balance<0) {
        negativos++
    }else if (balance == 0) {
        iguales++
    }else{
        acabar = true;
    }
} while (!acabar || positivos + iguales + negativos == CantidadSolicitudes);

console.log(`En la auditoria con un total de ${CantidadSolicitudes} solicitudes : \n - Cobro de penalización : ${positivos} \n - Devolución al cliente : ${negativos} \n - Cancelación neutra : ${iguales}`);
