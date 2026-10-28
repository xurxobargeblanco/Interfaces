// RETO 2 · Listas aniñadas nun só compoñente
//
// Cada playlist ten un array de cancións, pero agora só se mostra o seu nome.
// Cambia o compoñente para que debaixo de cada nome apareza a lista das súas cancións.
//
// Como usalo: copia este código en src/App.jsx.
// Comproba que non hai avisos na consola do navegador.

const playlists = [
  {
    id: 1,
    nome: "Para estudar",
    cancions: ["Mañá de luns", "Bosque de cores", "Cafeteira"],
  },
  {
    id: 2,
    nome: "Para correr",
    cancions: ["Tren de medianoite", "Ritmo de présa", "Costa arriba", "Meta"],
  },
  {
    id: 3,
    nome: "Para cociñar",
    cancions: ["Sal e pementa", "Lume lento"],
  },
];

export default function App() {
  const elementos = playlists.map((playlist) => (
    <section key={playlist.id}>
      <h2>{playlist.nome}</h2>

      <ul>
        {playlist.cancions.map((cancion, index) => (
          <li key={index}>{cancion}</li>
        ))}
      </ul>
    </section>
  ));

  return (
    <article>
      <h1>As miñas playlists</h1>
      {elementos}
    </article>
  );
}
