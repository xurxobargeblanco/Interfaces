// RETO 4 · Lista cun separador
//
// Agora cada paso móstrase nun <p>. Cambia o compoñente para que haxa unha liña <hr />
// ENTRE os pasos: non antes do primeiro nin despois do último.
//
// Pistas:
//   - Cada elemento vai ter varios nodos (<hr /> e <p>). A sintaxe curta <>...</> non admite key,
//     así que usa <Fragment key={...}> importado de "react".
//   - O map() dá o índice como segundo parámetro: (paso, indice) => ...
//   - Mostra o <hr /> só cando indice > 0.
//
// Como usalo: copia este código en src/App.jsx.
// Comproba que non hai avisos na consola do navegador.

// import { Fragment } from "react";

import { Fragment } from "react";

const pasos = [
  { id: 1, texto: "Executa npm run build." },
  { id: 2, texto: "Proba a versión final con npm run preview." },
  { id: 3, texto: "Sube o proxecto a GitHub." },
  { id: 4, texto: "Publica o sitio no servizo que escollas." },
];

export default function App() {
const elementos = pasos.map((paso, indice) => (
  <Fragment key={paso.id}>
    {indice > 0 && <hr />}
    <p>{paso.texto}</p>
  </Fragment>
));
  return (
    <article>
      <h1>Como despregar o proxecto</h1>
      {elementos}
    </article>
  );
}