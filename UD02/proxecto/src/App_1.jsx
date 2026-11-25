import { useState } from "react"
import Button from "./practicas/Button"

const estiloFila = {
    display: 'flex',
    flexDirection: 'row'
}

function Cadrado({ valor, onClickCadrado }) {
    return (
        <button className="square" onClick={onClickCadrado}>
            {valor}
        </button>
    )
}

function RepetirCadrados({ long, fila, cadrados, onXogarCadrado }) {
    const elementos = []

    for (let i = 0; i < long; i++) {
        const indice = fila * long + i
        elementos.push(
            <Cadrado
                key={indice}
                valor={cadrados[indice]}
                onClickCadrado={() => onXogarCadrado(indice)}
            />
        )
    }

    return elementos
}

function RepetirDiv({ long, cadrados, onXogarCadrado }) {
    const divs = []

    for (let j = 0; j < long; j++) {
        divs.push(
            <div key={j} style={estiloFila}>
                <RepetirCadrados
                    long={long}
                    fila={j}
                    cadrados={cadrados}
                    onXogarCadrado={onXogarCadrado}
                />
            </div>
        )
    }

    return divs
}

function Taboleiro({ xTurno, cadrados, onXogar }) {
    function handleClick(i) {
        if (cadrados[i]) {
            return
        }

        const novosCadrados = [...cadrados]
        novosCadrados[i] = xTurno ? "X" : "O"
        onXogar(novosCadrados)
    }

    return (
        <>
            <p>Turno actual: {xTurno ? "X" : "O"}</p>
            <RepetirDiv
                long={3}
                cadrados={cadrados}
                onXogarCadrado={handleClick}
            />
        </>
    )
}

export default function Xogo() {
    const [xTurno, setXTurno] = useState(true)
    const [historial, setHistorial] = useState([Array(9).fill(null)])
    const [movementoActual, setMovementoActual] = useState(0)

    const cadradosActuais = historial[movementoActual]

    function handleXogo(novosCadrados) {
        const novoHistorial = [...historial.slice(0, movementoActual + 1), novosCadrados]
        setHistorial(novoHistorial)
        setMovementoActual(novoHistorial.length - 1)
        setXTurno(!xTurno)
    }

    function irAMovemento(seguinteMovemento) {
        setMovementoActual(seguinteMovemento)
        setXTurno(seguinteMovemento % 2 === 0)
    }

    const movementos = historial.map((cadrados, index) => {
        const descricion = index === 0 ? "Ir ao inicio" : `Ir ao movemento #${index}`
        return (
            <li key={index}>
                <Button onClick={() => irAMovemento(index)}>
                    {descricion}
                </Button>
            </li>
        )
    })

    function ordenarPasos(){
        
    }

    return (
        <div className="xogo">
            <div className="taboleiro">
                <Taboleiro
                    xTurno={xTurno}
                    cadrados={cadradosActuais}
                    onXogar={handleXogo}
                />
            </div>
            <div className="informacion">
                <ol>{movementos}</ol>
            </div>
            <div className="ordenacion">
                <Button onClick={() => ordenarPasos}>
                    {"Ascendente"}
                </Button>
                <Button onClick={() => ordenarPasos}>
                    {"Descendente"}
                </Button>
            </div>
        </div>
    )
}