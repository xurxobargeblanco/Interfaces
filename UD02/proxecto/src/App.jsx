
// 16/10/2026

// Matriz 3 x 3

const estiloFila = {
  display: 'flex',
  flexDirection: 'row'
}

function Cadrado({ valor }) {
  return <button className="square">{valor}</button>
}
function RepetirCadrados({ long, inicio }) {
  const cadrados = []

  for (let i = 0; i < long; i++) {
    cadrados.push(
      <Cadrado key={i} valor={inicio + i} />
    )
  }
  return cadrados
}

function RepetirDiv({ long }) {
  const divs = []

  for (let j = 0; j < long; j++) {
    divs.push(
      <div key={j} style={estiloFila}>
        <RepetirCadrados
          long={long}
          inicio={j * long + 1}
        />
      </div>
    )
  }

  return divs
}

export default function Taboleiro() {
  return (
    <>
   
      <RepetirDiv long={3} />

    </>
  )
}



