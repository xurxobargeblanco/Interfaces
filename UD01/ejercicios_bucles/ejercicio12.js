//################################################################################
// El sistema de taquillas automáticas de ReservaYa necesita generar N códigos
// de acceso seguros. Un código seguro es aquel número que solo se puede dividir
// exactamente por 1 y por sí mismo (números primos).
// Solicita al usuario por teclado cuántos códigos de taquilla desea mostrar.
//################################################################################
// Escribe tu código aquí


let N = parseInt(prompt("Introduce cuantos códigos queres generar."))

let encontrados = 0;
let numeroActual = 2; 

    while (encontrados < N) {
        let esPrimo = true;

        for (let i = 2; i < numeroActual; i++) {
            if (numeroActual % i === 0) {
                esPrimo = false;
                break; 
            }
        }

        if (esPrimo) {
            encontrados++;
            console.log(`Taquilla ${encontrados}: Código ${numeroActual}`);
        }

        numeroActual++;
    }