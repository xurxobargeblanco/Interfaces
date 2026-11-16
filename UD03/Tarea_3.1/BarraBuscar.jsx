export default function BarraBusca({ textoBusca, CambioBusca }) {
  return (
    <input
      type="text"
      placeholder="Buscar produto..."
      value={textoBusca}
      onChange={(e) => CambioBusca(e.target.value)}
    />
  );
}