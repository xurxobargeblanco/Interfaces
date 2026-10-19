//################################################################################
// EJERCICIO A
// Generar un vector "temperaturas" de 7 valores aleatorios entre -5 y 35 grados.
// Mostrar cada temperatura junto con su equivalente en Fahrenheit y si es
// "Fría", "Templada" o "Calurosa".
//################################################################################
const temperaturas = Array.from({length: 7}, () => Math.floor(Math.random()*41)-5)
console.log("Vector de temperaturas (°C):", temperaturas);
console.log("--- Análisis de Temperaturas ---");
temperaturas.forEach(t => {
    const f = (t * 9/5 + 32).toFixed(1)
    const categoria = t < 10 ? "Fría" : t < 25 ? "Templada" : "Calurosa";
    console.log(`Temperatura ${t} ºC, Farenheit ${f}Fº , Categoría : ${categoria}`);
    
})
//################################################################################
// EJERCICIO B
// Crear un vector de 5 cadenas leídas por teclado. Copiarlas en otro vector
// pero invertidas letra a letra, y mostrar ambos vectores.
//################################################################################
const vector1 = Array.from({length : 5}).map(() => prompt("Introduce..."));
const vector2 = vector1.map(palabra => palabra.split("").reverse().join(""));
console.log("Vector original:", vector1);
console.log("Vector invertido letra a letra:", vector2);
//################################################################################
// EJERCICIO C
// Leer 6 notas (0-10). Mostrar todas, la media, la más alta, la más baja
// y cuántas son aprobado (>=5).
//################################################################################
const notas = [];
for (let i = 0; i < 6; i++) {
    let nota = parseInt(prompt(`Introduce la nota ${i + 1} (entre 0 y 10):`));
    notas.push(nota);
}
const aprobados = notas.filter(nota => nota >= 5);
let suma = 0;
let notaAlta = notas[0];
let notaBaja = notas[0];
for (let i = 0; i < notas.length; i++) {
    const actual = notas[i];
    suma += actual;
    switch (true) {
        case (actual > notaAlta):
            notaAlta = actual;
            break;
        case (actual < notaBaja):
            notaBaja = actual;
            break;
    }
}
const media = (suma / notas.length).toFixed(2);
console.log("Todas las notas:", notas);
console.log(`Media: ${media}`);
console.log(`Nota más alta: ${notaAlta}`);
console.log(`Nota más baja: ${notaBaja}`);
console.log(`Aprobados (${aprobados.length}):`, aprobados);
//################################################################################
// EJERCICIO D
// Vector de hasta 7 elementos. Pedir números hasta llenarlo o hasta que se
// introduzca un 0. Mostrar los elementos introducidos y su suma.
//################################################################################
const numeros1 = []
let acabar = false
let total = 0
do {
    let num = parseInt(prompt("Introduce un numero"))

    if (num === 0) acabar = true 
    else {
        numeros1.push(num)
        total += num
    }
    
} while (numeros1.length < 7 && !acabar);
console.log(`Lista de numeros : ${numeros1.join(', ')}, Suma de los numeros : ${total}`);
//################################################################################
// EJERCICIO E
// Vector de 7 números aleatorios (0-50). Ordenar de mayor a menor y calcular
// la mediana.
//################################################################################
const numeros = Array.from({ length: 7 }).map(() => Math.floor(Math.random() * 50) + 1);
const ordenados = numeros.toSorted((a, b) => b - a);
const mediana = (ordenados.length % 2 !== 0) ? ordenados[Math.floor(ordenados.length / 2)] : (ordenados[Math.floor(ordenados.length / 2) - 1] + ordenados[Math.floor(ordenados.length / 2)]) / 2;
console.log(`Mediana: ${mediana} Ordenado de mayor a menor : ${ordenados}` );
//################################################################################
// EJERCICIO F
// Pedir un número de día (1-7) y mostrar su nombre y si es fin de semanas
// o día laborable, usando un vector.
//################################################################################
const semana = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']
let numero = parseInt(prompt("Introduce 1 numero (1-7)"))
console.log(`Dia da semana correspondente :${semana[numero - 1]} es ${parseInt(semana[numero - 1]) >=6 ? "laborable" : "fin de semana"}`);
//################################################################################
// EJERCICIO G
// Declarar dos vectores de 5 enteros, pedir sus valores y calcular:
// vector3 = producto elemento a elemento, y la suma total (producto escalar).
//################################################################################
const v1 = Array.from({length : 5}).map(() => parseInt(prompt("Introduce numeros....")))
const v2 = Array.from({length : 5}).map(() => parseInt(prompt("Introduce numeros....")))
const v3 = v1.map((num, i) => num * v2[i]);
const productoEscalar = v3.reduce((acumulador, actual) => acumulador + actual, 0);
console.log("Vector 1:", v1);
console.log("Vector 2:", v2);
console.log("Vector 3 (Producto elemento a elemento):", v3);
console.log("Producto Escalar (Suma total):", productoEscalar);
//################################################################################
// EJERCICIO H
// Matriz 4x4 con valores aleatorios (1-9). Calcular la suma de la diagonal
// principal y de la diagonal secundaria.
//################################################################################
const n = 4;
const matriz = Array.from({ length: n }, () => Array.from({ length: n }, () => Math.floor(Math.random() * 9) + 1));
console.log("Matriz 4x4:");
console.table(matriz); 
const sumaDiagonalPrincipal = matriz.reduce((acum, fila, i) => acum + fila[i], 0);
const sumaDiagonalSecundaria = matriz.reduce((acum, fila, i) => acum + fila[n - 1 - i], 0);
console.log(`Suma de la diagonal principal: ${sumaDiagonalPrincipal}`);
console.log(`Suma de la diagonal secundaria: ${sumaDiagonalSecundaria}`);