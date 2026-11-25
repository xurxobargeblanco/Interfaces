import { useState } from "react"
import Button from "./practicas/Button"

const estiloFila = {
    display: 'flex',
    flexDirection: 'row'
}

const estiloGanador = {
    backgroundColor: '#a7f3d0',
    fontWeight: 'bold'
}

function calcularGanador(cadrados) {
    const liñas = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < liñas.length; i++) {
        const [a, b, c] = liñas[i]
        if (cadrados[a] && cadrados[a] === cadrados[b] && cadrados[a] === cadrados[c]) {
            return {
                ganador: cadrados[a],
                liña: [a, b, c]
            }
        }
    }

    return null
}

function obterCoordenadas(indice, long = 3) {
    const fila = Math.floor(indice / long) + 1
    const columna = (indice % long) + 1
    return `(${columna}, ${fila})`
}

function Cadrado({ valor, onClickCadrado, esGanador }) {
    return (
        <button
            className="square"
            onClick={onClickCadrado}
            style={esGanador ? estiloGanador : undefined}
        >
            {valor}
        </button>
    )
}

function RepetirCadrados({ long, fila, cadrados, onXogarCadrado, liñaGanadora }) {
    const elementos = []

    for (let i = 0; i < long; i++) {
        const indice = fila * long + i
        elementos.push(
            <Cadrado
                key={indice}
                valor={cadrados[indice]}
                onClickCadrado={() => onXogarCadrado(indice)}
                esGanador={liñaGanadora.includes(indice)}
            />
        )
    }

    return elementos
}

function RepetirDiv({ long, cadrados, onXogarCadrado, liñaGanadora }) {
    const divs = []

    for (let j = 0; j < long; j++) {
        divs.push(
            <div key={j} style={estiloFila}>
                <RepetirCadrados
                    long={long}
                    fila={j}
                    cadrados={cadrados}
                    onXogarCadrado={onXogarCadrado}
                    liñaGanadora={liñaGanadora}
                />
            </div>
        )
    }

    return divs
}

function Taboleiro({ xTurno, cadrados, onXogar, infoGanador }) {
    function handleClick(i) {
        if (cadrados[i] || infoGanador) {
            return
        }

        const novosCadrados = [...cadrados]
        novosCadrados[i] = xTurno ? "X" : "O"
        onXogar(novosCadrados, i)
    }

    let estadoTexto
    if (infoGanador) {
        estadoTexto = `Gañou: ${infoGanador.ganador}`
    } else if (!cadrados.includes(null)) {
        estadoTexto = "Resultado: empate"
    } else {
        estadoTexto = `Turno actual: ${xTurno ? "X" : "O"}`
    }

    const liñaGanadora = infoGanador ? infoGanador.liña : []

    return (
        <>
            <p>{estadoTexto}</p>
            <RepetirDiv
                long={3}
                cadrados={cadrados}
                onXogarCadrado={handleClick}
                liñaGanadora={liñaGanadora}
            />
        </>
    )
}

export default function Xogo() {
    const [xTurno, setXTurno] = useState(true)
    const [historial, setHistorial] = useState([
        { cadrados: Array(9).fill(null), coords: null }
    ])
    const [movementoActual, setMovementoActual] = useState(0)
    const [ordeAscendente, setOrdeAscendente] = useState(true)

    const entradaActual = historial[movementoActual]
    const cadradosActuais = entradaActual.cadrados
    const infoGanador = calcularGanador(cadradosActuais)

    function handleXogo(novosCadrados, indiceXogado) {
        const novoHistorial = [
            ...historial.slice(0, movementoActual + 1),
            {
                cadrados: novosCadrados,
                coords: obterCoordenadas(indiceXogado, 3)
            }
        ]
        setHistorial(novoHistorial)
        setMovementoActual(novoHistorial.length - 1)
        setXTurno(!xTurno)
    }

    function irAMovemento(seguinteMovemento) {
        setMovementoActual(seguinteMovemento)
        setXTurno(seguinteMovemento % 2 === 0)
    }

    const listaMovementos = historial.map((entrada, index) => {
        if (index === movementoActual) {
            const sufixoCoords = entrada.coords ? ` ${entrada.coords}` : ""
            return (
                <li key={index}>
                    <span>Estás no movemento #{index}{sufixoCoords}</span>
                </li>
            )
        }

        const baseTexto = index === 0
            ? "Ir ao inicio"
            : `Ir ao movemento #${index} ${entrada.coords}`

        return (
            <li key={index}>
                <Button onClick={() => irAMovemento(index)}>
                    {baseTexto}
                </Button>
            </li>
        )
    })

    const movementosOrdenados = ordeAscendente
        ? listaMovementos
        : [...listaMovementos].reverse()

    return (
        <div className="xogo">
            <div className="taboleiro">
                <Taboleiro
                    xTurno={xTurno}
                    cadrados={cadradosActuais}
                    onXogar={handleXogo}
                    infoGanador={infoGanador}
                />
            </div>
            <div className="informacion">
                <button type="button" onClick={() => setOrdeAscendente(!ordeAscendente)}>
                    Orde: {ordeAscendente ? "Ascendente" : "Descendente"}
                </button>
                <ol>{movementosOrdenados}</ol>
            </div>
        </div>
    )
}