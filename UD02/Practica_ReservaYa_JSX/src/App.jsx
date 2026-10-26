import './App.css'
import Card from './Card.jsx'

function App() {
  return (
    <section>
      <h1>Concello de Ourense</h1>
      <p>Instalacións Deportivas Municipais</p>

      <Card
        nome="Pista de Pádel 1"
        ubicacion="Polideportivo Municipal — Zona Norte"
        prezo={12}
      />
      <Card
        nome="Campo de Fútbol 7"
        ubicacion="Campo Municipal A Ponte"
        prezo={45}
      />
      <Card
        nome="Pista de Tenis 2"
        ubicacion="Polideportivo Municipal — Zona Norte"
        prezo={8}
      />
      <Card
        nome="Pista de Baloncesto"
        ubicacion="Pavillón Municipal do Couto"
        prezo={18}
      />
    </section>
  )
}

export default App
