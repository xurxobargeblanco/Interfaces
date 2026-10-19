//################################################################################
// Un usuario introduce su nombre y dos apellidos para el registro de ReservaYa.
// Crea un programa que extraiga e imprima las iniciales en mayúsculas para generar
// su avatar de perfil.
//################################################################################
// Escribe tu código aquí

let nombre = prompt("Introduce tu nombre")
let apellido1 = prompt("Introduce tu primer apellido")
let apellido2 = prompt("Inttroduce tu segundo apellido")

let avatar = nombre[0] + apellido1[0] + apellido2[0]

console.log(`Su nuevo avatar : ${avatar.toUpperCase()}`);

