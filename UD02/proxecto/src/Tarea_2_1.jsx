
/*

1. Arranxa o código :

const produtos = [
  { id: 1, nome: "Teclado", prezo: 25 }, 
  { id: 2, nome: "Rato", prezo: 15 },
];

export default function Tenda() { {/* Por convencion a primeira letra en Mayuscula /} 
  return (
    <> {/* Faltaba devolver un elemento enteiro /} 
    <h1 className="titulo">Tenda</h1> {/* Faltaba o peche da etiqueta img ---- Declaracion de clase con palabra reservada/} 
    <img src="logo.png" alt="Logo"/> 
    <ul>
      {produtos.map((p) => (
        <li  id = {p.id} >{p.nome} - {p.prezo} €</li> /* Faltaba asignarlle ao li o id  /
      ))}
    </ul>
    </>
  );
}
*/


/* 2. */
/*
const source = 'foto.jpg'
const alternative = 'Foto de Lucía'
const forLabel = 'correo'
const lis = ['HTML', 'CSS', 'JavaScript']
const nome = 'Lucía'
const rol = 'Deseñadora web'
const foto = '/foto.jpg'
const inicio = 2019


const estilo = {
  color: 'gray',
  fontSize: 14
}

export default function App() {
  return (
    <>
      <h1>{nome} Pérez</h1>

      <img
        src={source}
        alt={alternative}
        className="foto"
      />

      <p>{rol}</p>

      <p>Anos de experiencia: {2026 - inicio}</p>

      <p className="rol">Deseñadora web</p>

      <label htmlFor={forLabel}>Correo</label>
      <input
        id={forLabel}
        type="email"
        tabIndex={1}
      />

      <ul>
        {lis.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>

      <p style={estilo}>Dispoñible para proxectos</p>
    </>
  )
}

*/
/* 

3. A túa páxina



*/

/*

const r = 'Restaurante'
const source = '/foto.jpg'
const alternative = 'Foto de restaurante'
const txt = 'texto , '
const uls = ['Entrantes', 'Platos principales', 'Postres']
const lis = ['Plato 1', 'Plato 2', 'Plato 3']

export default function App() {
  return (
    <>
      <h1>{r} 22045</h1>

      <img
        src={source}
        alt={alternative}
        className="foto"
      />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Esse suscipit omnis ipsum voluptas magnam quas veniam
        tempora temporibus, eos quam error quis ex, exercitationem
        dolorem eum cumque rerum eveniet voluptatum?
      </p>

      <p>{'inicio , ' + txt.repeat(30) + 'fin'}</p>

      <h2>Menú:</h2>

      <ul>

        {uls.map((u) => (
          <li key={u}>
            {u}
            <ul>
              {lis.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </li>
        ))}

      </ul>
    </>
  )
}

*/


/* 

  4. Contesta
    1. - Que erro da Parte A che custou máis atopar?
      export default function Tenda() { {/* Por convencion a primeira letra en Mayuscula /} 
    2. - Que diferenza hai entre { } e {{ }} en JSX? :
      {} e para atributos e {{}} e para objetos

*/