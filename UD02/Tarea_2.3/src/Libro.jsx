export function Libro({libro}) {
    <li key={libro.id}>
      <h3>{libro.titulo}</h3>
      <p>
        {libro.autor}, {libro.ano}
      </p>
    </li>
}