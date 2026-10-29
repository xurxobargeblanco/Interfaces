export default function Libro({ libro }) {
  return (
    <li>
      <h3>{libro.titulo}</h3>
      <p>
        {libro.autor}, {libro.ano}
      </p>
    </li>
  );
}