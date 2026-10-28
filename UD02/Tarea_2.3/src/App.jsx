const linguaxes = [
  { id: 0, nome: "JavaScript", tipo: "interpretada", ano: 1995 },
  { id: 1, nome: "Java", tipo: "compilada", ano: 1995 },
  { id: 2, nome: "Python", tipo: "interpretada", ano: 1991 },
  { id: 3, nome: "C", tipo: "compilada", ano: 1972 },
  { id: 4, nome: "PHP", tipo: "interpretada", ano: 1995 },
  { id: 5, nome: "Go", tipo: "compilada", ano: 2009 },
];

export default function App() {
  const interpretadas = linguaxes.filter((l) => l.tipo === "interpretada");
  const outras = linguaxes.filter((l) => l.tipo !== "interpretada");

  const elementosInterpretadas = interpretadas.map((linguaxe) => (
    <li key={linguaxe.id}>
      <b>{linguaxe.nome}</b> ({linguaxe.tipo}, {linguaxe.ano})
    </li>
  ));

  const elementosOutras = outras.map((linguaxe) => (
    <li key={linguaxe.id}>
      <b>{linguaxe.nome}</b> ({linguaxe.tipo}, {linguaxe.ano})
    </li>
  ));

  return (
    <article>
      <h1>Linguaxes de programación</h1>
      
      <h2>Interpretadas</h2>
      <ul>{elementosInterpretadas}</ul>

      <h2>Outras</h2>
      <ul>{elementosOutras}</ul>
    </article>
  );
}