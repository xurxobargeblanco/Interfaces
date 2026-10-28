// RETO 1 · Dividir unha lista en dúas
//
// Agora móstranse todas as linguaxes nunha única lista.
// Cambia o compoñente para que se vexan dúas listas, unha despois da outra:
//   1. "Interpretadas": as que teñen tipo === "interpretada".
//   2. "Outras": todas as demais.
//
// Como usalo: copia este código en src/App.jsx.
// Comproba que non hai avisos na consola do navegador.

const linguaxes = [
  { id: 0, nome: "JavaScript", tipo: "interpretada", ano: 1995 },
  { id: 1, nome: "Java", tipo: "compilada", ano: 1995 },
  { id: 2, nome: "Python", tipo: "interpretada", ano: 1991 },
  { id: 3, nome: "C", tipo: "compilada", ano: 1972 },
  { id: 4, nome: "PHP", tipo: "interpretada", ano: 1995 },
  { id: 5, nome: "Go", tipo: "compilada", ano: 2009 },
];

export default function App() {
  const elementos = linguaxes.map((linguaxe) => (
    <li key={linguaxe.id}>
      <b>{linguaxe.nome}</b> ({linguaxe.tipo}, {linguaxe.ano})
    </li>
  ));

  return (
    <article>
      <h1>Linguaxes de programación</h1>
      <ul>{elementos}</ul>
    </article>
  );
}
