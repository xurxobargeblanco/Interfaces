// ============================================================================
// DESAFÍO: PROCESADOR DE INVENTARIO - TIENDA ESPACIAL (COMPLETO)
// Conceptos a trabajar:
// 1. Funciones Flecha (Arrow Functions)
// 2. Métodos .map(), .filter(), .sort() y .reduce()
// 3. Desestructuración de Objetos y Arrays
// 4. Operador Spread (...)
// ============================================================================

// DATOS INICIALES DE PRUEBA

const productos = [
  { id: 1, nombre: 'Traje Espacial', precio: 1200, categoria: 'Equipamiento', stock: 5 },
  { id: 2, nombre: 'Pistola Láser', precio: 500, categoria: 'Armas', stock: 0 },
  { id: 3, nombre: 'Módulo de Oxígeno', precio: 300, categoria: 'Equipamiento', stock: 12 },
  { id: 4, nombre: 'Ración de Comida', precio: 50, categoria: 'Suministros', stock: 50 }
];

// ----------------------------------------------------------------------------
// INSTRUCCIÓN 1: Aplicar Descuento a 'Equipamiento'
// Crea una función flecha `aplicarDescuento` que reciba un array de productos.
// Usa `.map()` para devolver un NUEVO array donde los productos de categoría 
// 'Equipamiento' tengan un 10% de descuento en el precio.
// PISTA: Usa el Spread Operator (`...`) dentro de `.map()` para no mutar los objetos originales.
// ----------------------------------------------------------------------------

// Tu código aquí:

const aplicarDescuento = (listaProductos) => listaProductos.map(p => p.categoria === 'Equipamiento' ? { ...p, precio: p.precio * 0.90 } : p );
console.log("aplicarDescuento(productos)");

// ----------------------------------------------------------------------------
// INSTRUCCIÓN 2: Formatear Mensajes
// Crea una función flecha `generarEtiquetas` que tome un array de productos.
// Usa `.map()` desestructurando los parámetros de la función flecha ({ nombre, precio })
// para devolver un array de strings con formato: "Producto: [nombre] - Precio: $[precio]"
// ----------------------------------------------------------------------------

// Tu código aquí:

const generarEtiquetas = (listaProductos) => listaProductos.map(({ nombre, precio }) => `Producto: ${nombre} - Precio: $${precio}`);
console.log(generarEtiquetas(productos));


// ----------------------------------------------------------------------------
// INSTRUCCIÓN 3: Reorganizar Elementos de Arrays
// Dada la siguiente lista con los más vendidos:

const topVentas = ['Traje Espacial', 'Módulo de Oxígeno', 'Ración de Comida'];


// Usa DESESTRUCTURACIÓN DE ARRAYS para extraer:
// - `top1`: El primer elemento ('Traje Espacial')
// - `top3`: El tercer elemento ('Ración de Comida')
// PISTA: Omite el segundo elemento usando comas.
// ----------------------------------------------------------------------------

// Tu código aquí:

const [top1, , top3] = topVentas;

console.log(top1); // 'Traje Espacial'
console.log(top3); // 'Ración de Comida'

// ----------------------------------------------------------------------------
// INSTRUCCIÓN 4: Combinar Listas con Spread Operator
// Llegan nuevos productos:

const nuevosProductos = [
  { id: 5, nombre: 'Batería de Plasma', precio: 800, categoria: 'Equipamiento', stock: 8 }
];

// Usa el Spread Operator (`...`) para fusionar `productos` y `nuevosProductos` 
// en una constante llamada `inventarioCompleto`.
// ----------------------------------------------------------------------------

// Tu código aquí:

const inventarioCompleto = [...productos, ...nuevosProductos];

console.log(inventarioCompleto);

// ----------------------------------------------------------------------------
// INSTRUCCIÓN 5: Propiedad Calculada (enStock)
// Crea una función flecha `agregarEstadoStock` que reciba el array de productos.
// Usa `.map()` para retornar un nuevo array de objetos agregando la propiedad `enStock: true/false`
// según si el `stock` es mayor a 0 (usa retorno implícito o explícito + spread operator).
// ----------------------------------------------------------------------------

// Tu código aquí:

const agregarEstadoStock = (listaProductos) => { return listaProductos.map(p => { return { ...p, enStock: p.stock > 0 }; }); };

// ----------------------------------------------------------------------------
// INSTRUCCIÓN 6: Filtrar Disponibles
// Crea una función flecha `obtenerDisponibles` que reciba un array de productos.
// Usa `.filter()` desestructurando la propiedad `stock` en los parámetros
// para devolver solo los productos que tengan stock disponible (stock > 0).
// ----------------------------------------------------------------------------

// Tu código aquí:

const obtenerDisponibles = (listaProductos) => listaProductos.filter(({ stock }) => stock > 0);

// ----------------------------------------------------------------------------
// INSTRUCCIÓN 7: Ordenar por Precio
// Crea una función flecha `ordenarPorPrecioDesc` que ordene los productos de mayor a menor precio.
// PISTA IMPORTANTE: `.sort()` MUTA (modifica) el array original.
// Usa el Spread Operator (`[...lista]`) primero para hacer una copia y luego aplicar `.sort()`.
// ----------------------------------------------------------------------------

// Tu código aquí:

const ordenarPorPrecioDesc = (listaProductos) => [...listaProductos].sort((a, b) => b.precio - a.precio);

// ----------------------------------------------------------------------------
// INSTRUCCIÓN 8: Calcular Valor Total del Inventario (NUEVO)
// Crea una función flecha `calcularValorTotalInventario` que tome un array de productos.
// Usa `.reduce()` desestructurando `{ precio, stock }` en cada iteración
// para multiplicar el precio por el stock de cada producto y acumular el total general.
// PISTA: Recuerda pasar `0` como valor inicial del acumulador.
// ----------------------------------------------------------------------------

// Tu código aquí:

const calcularValorTotalInventario = (listaProductos) => listaProductos.reduce((acumulador, { precio, stock }) => acumulador + (precio * stock), 0);