//################################################################################
// Simula el proceso de verificación de pago de una reserva. Mediante un bucle while,
// simula una petición en la que se comprueba el estado de la reserva.
// El bucle debe continuar pidiendo confirmación hasta que el estado cambie a "confirmada".
//################################################################################
// Escribe tu código aquí


//Forma 1
let confirmada = false
while (!confirmada) {
    console.log(`Pendiente de pago`);

    let respuesta = prompt(`Pagar? S/N`)

    if (respuesta.toUpperCase === 'S') {
        console.log(`Pago confirmado`);
        confirmada = true;
    }

}

console.log(`Reserva realizada`);

//Forma 2
let i = 0;
while(i<3){
    console.log("Esperando pago ...");
    i++
}
console.log("Pago realizado");
