//################################################################################
// ¡Promoción ReservaYa! Si adivinas el número de la Pista Mágica (del 1 al 100)
// obtienes una reserva gratuita. Tienes un máximo de 10 intentos.
// Tras cada intento, el sistema te indicará si el número buscado es mayor o menor.
// El programa termina cuando acertaste o al agotar los 10 intentos.
//################################################################################
// Escribe tu código aquí
const MAX_INTENTOS = 10;
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

let intentoActual = 0;
let acertado = false;
let cancelado = false;

console.log("   ¡Bienvenido a la Promoción ReservaYa!");
console.log(" Adivina el número de la Pista Mágica (1 al 100)");
console.log(` Tienes un máximo de ${MAX_INTENTOS} intentos.`);

while (intentoActual < MAX_INTENTOS && !acertado && !cancelado) {
    let entrada = prompt(`Intento ${intentoActual + 1} de ${MAX_INTENTOS}:\nIntroduce un número del 1 al 100:`);

    if (entrada === null) {
        console.log("Juego cancelado por el usuario.");
        cancelado = true;
    } else {
        let respuesta = parseInt(entrada, 10);

        if (isNaN(respuesta) || respuesta < 1 || respuesta > 100) {
            console.log("-> Por favor, introduce un número válido entre 1 y 100.\n");
        } else {
            intentoActual++;

            if (respuesta === numeroSecreto) {
                acertado = true;
                console.log(`¡FELICIDADES! Has acertado el número ${numeroSecreto} en ${intentoActual} intento(s).`);
                console.log("¡Has obtenido tu RESERVA GRATUITA con ReservaYa!");
            } else if (intentoActual === MAX_INTENTOS) {
                console.log(`Agotaste tus ${MAX_INTENTOS} intentos.`);
                console.log(`El número de la Pista Mágica era: ${numeroSecreto}`);
                console.log("¡Gracias por participar! Inténtalo de nuevo la próxima vez.");
            } else if (respuesta < numeroSecreto) {
                console.log("-> El número buscado es MAYOR.\n");
            } else {
                console.log("-> El número buscado es MENOR.\n");
            }
        }
    }
}