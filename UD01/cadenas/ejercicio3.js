//################################################################################
// Se solicita el código de seguridad de una taquilla y un carácter alfabético
// (debes validar que sea una única letra). El programa debe contar y mostrar
// cuántas veces aparece dicha letra dentro del código sin diferenciar mayúsculas de minúsculas.
//################################################################################
// Escribe tu código aquí

let codigo = prompt("Introduce tu código de seguridad:");
let letra = prompt("Introduce una sola letra a buscar:");

if (!letra || letra.length !== 1 || !/[a-zA-ZáéíóúÁÉÍÓÚñÑ]/.test(letra)) {
    alert("Error: Debes introducir exactamente un único carácter alfabético.");
} else {
    let total = 0;
    
    const codigoMinusculas = codigo.toLowerCase();
    const letraMinuscula = letra.toLowerCase();

    for (let i = 0; i < codigoMinusculas.length; i++) {
        if (codigoMinusculas[i] === letraMinuscula) {
            total++;
        }
    }

    console.log(`La letra '${letra}' aparece ${total} veces en el código '${codigo}'.`);
}
