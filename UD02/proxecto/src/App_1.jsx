import { useState } from "react"
import Button from "./practicas/Button"

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

function xogo(){
    const [xTurno,setXturno] = useState(RepetirCadrados)
    const [historial,setHistorial] = useState()
    const cadradosActuais = historial[historial.length -1]

    function handleXogo(novosCadrados) {
        //TODO
        setHistorial([...historial,novosCadrados])
        setXturno(!xTurno)
        console.log(historial);
    }

    const movementos = historial.map(
        (cadrados,index) => {
            <Button>{index == 0 && "Ir ao inicio"}{index != 0 && "Ir ao movemento #" + index}</Button>
    })
}

export default function Taboleiro() {
    return (
        <>
            <RepetirDiv long={3} />
        </>
    )
}