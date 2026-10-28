// RETO 3 · Extraer un compoñente para cada elemento
//
// O código de cada libro está escrito dentro do map().
// Crea un compoñente Libro que reciba o libro por props e devolva ese mesmo <li>.
// Despois usa <Libro key={libro.id} libro={libro} /> dentro do map().
//
// Como usalo: copia este código en src/App.jsx.
// Comproba que non hai avisos na consola do navegador.

const libros = [
  { id: 1, titulo: "Dom Quixote", autor: "Miguel de Cervantes", ano: 1605 },
  { id: 2, titulo: "Cen anos de soidade", autor: "Gabriel García Márquez", ano: 1967 },
  { id: 3, titulo: "Os Lusíadas", autor: "Luís de Camões", ano: 1572 },
  { id: 4, titulo: "Memorias dun neno labrego", autor: "Xosé Neira Vilas", ano: 1961 },
];

export default function App() {
  const elementos = libros.map((libro) => (
    <li key={libro.id}>
      <h3>{libro.titulo}</h3>
      <p>
        {libro.autor}, {libro.ano}
      </p>
    </li>
  ));

  return (
    <section>
      <h1>Biblioteca</h1>
      <ul>{elementos}</ul>
    </section>
  );
}
