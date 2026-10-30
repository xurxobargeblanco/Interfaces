import './App.css'
import Card from './Card.jsx'
import Navbar from './NavBar.jsx';
import "./bootstrap.min.css";


function App() {
  return (
    <section>
      <h1>Concello de Ourense</h1>
      <p>Instalacións Deportivas Municipais</p>

      <hr />

      <Navbar></Navbar>

      <Card
        nome="Pista de Pádel 1"
        ubicacion="Polideportivo Municipal — Zona Norte"
        prezo={12}
        disponible={false}
      />
      <Card
        nome="Campo de Fútbol 7"
        ubicacion="Campo Municipal A Ponte"
        prezo={45}
        disponible={true}
      />
      <Card
        nome="Pista de Tenis 2"
        ubicacion="Polideportivo Municipal — Zona Norte"
        prezo={8}
        disponible={true}

      />
      <Card
        nome="Pista de Baloncesto"
        ubicacion="Pavillón Municipal do Couto"
        prezo={18}
        disponible={true}
      />
    </section>
  )
}

export default App
