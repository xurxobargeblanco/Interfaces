export default function ListaProductos({ produtos, textoBusca }) {
  if (produtos.length === 0) {
    return <p>Non se atoparon resultados para: {textoBusca}</p>;
  }

  return (
    <ul>
      {produtos.map((produto) => (
        <li key={produto}>{produto}</li>
      ))}
    </ul>
  );
}