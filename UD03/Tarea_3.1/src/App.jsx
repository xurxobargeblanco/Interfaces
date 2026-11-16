import { useState } from 'react';
import BarraBusca from '../BarraBuscar';
import ListaProductos from './ListaProductos.jsx';

const PRODUCTOS = [
  'Teclado mecánico',
  'Rato sen fíos',
  'Monitor 4K',
  'Auriculares bluetooth',
  'Alfombrilla RGB',
  'Cámara web HD'
];

export default function App() {
  const [textoBusca, setTextoBusca] = useState('');

  const produtosFiltrados = PRODUCTOS.filter((produto) =>
    produto.toLowerCase().includes(textoBusca.toLowerCase())
  );

  return (
    <div>
      <h1>Produtos</h1>
      <BarraBusca textoBusca={textoBusca} CambioBusca={setTextoBusca} />
      <ListaProductos produtos={produtosFiltrados} textoBusca={textoBusca} />
    </div>
  );
}
