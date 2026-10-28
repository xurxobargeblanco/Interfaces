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
      {/* TODO: aquí vai a lista de cancións */}
    </section>
  ));

  return (
    <article>
      <h1>As miñas playlists</h1>
      {elementos}
    </article>
  );
}