//################################################################################
// Diseña un panel de gestión para el recepcionista de ReservaYa.
// Muestra un menú por pantalla que se repita mientras el usuario no elija salir:
// 1. Ver estado de pistas
// 2. Crear nueva reserva
// 3. Cancelar reserva
// 4. Salir
//################################################################################
// Escribe tu código aquí

let salir = false;

do {
    let seleccion = parseInt(prompt(`1. Ver estado de pistas \n2. Crear nueva reserva \n3. Cancelar reserva \n4. Salir `))
    switch (seleccion) {
        case 1:
            console.log("Ver estado de pista...");
            break;
        case 2: 
            console.log("Crear nueva reserva...");
            break
        case 3:
            console.log("Cancelar reserva...");
            break
        case 4: 
            console.log("Saliendo...");
            salir = true;
        default:
            break;
    }
} while (!salir);
