//################################################################################
// El sistema de códigos promocionales de ReservaYa necesita sustituir un carácter
// obsoleto por uno nuevo dentro del código de cupón.
// Pide el código y dos caracteres alfabéticos (valida que sean letras únicas) y
// reemplaza todas las apariciones del primer carácter por el segundo.
//################################################################################
// Escribe tu código aquí

let codigo = prompt("Introduce tu código") || 'ABC123.ABC'
let letra = prompt("Introduce que letra quieres substituir")
let letraSustitutiva = prompt("Introduce la letra sustitutiva")

if ((!letra || letra.length !== 1 || !/[a-zA-ZáéíóúÁÉÍÓÚñÑ]/.test(letra)) || (!letraSustitutiva || letraSustitutiva.length !== 1 || !/[a-zA-ZáéíóúÁÉÍÓÚñÑ]/.test(letraSustitutiva))) {
    alert("Error: Debes introducir exactamente un único carácter alfabético.");
} else {
    let codigoModificado = codigo.replaceAll(letra, letraSustitutiva);
    console.log(codigoModificado);
}