
// 16/10/2026

// Matriz 3 x 3

// const estiloFila = {
//  display: 'flex',
//  flexDirection: 'row'
// }

// function Cadrado({ valor }) {
//  return <button className="square">{valor}</button>
// }
// function RepetirCadrados({ long, inicio }) {
//  const cadrados = []

//  for (let i = 0; i < long; i++) {
//    cadrados.push(
//      <Cadrado key={i} valor={inicio + i} />
//    )
//  }
//  return cadrados
//}

// function RepetirDiv({ long }) {
//  const divs = []

//  for (let j = 0; j < long; j++) {
//    divs.push(
//      <div key={j} style={estiloFila}>
//        <RepetirCadrados
//          long={long}
//          inicio={j * long + 1}
//        />
//      </div>
//    )
//  }

//  return divs
// }

// export default function Taboleiro() {
//  return (
//    <>
   
//      <RepetirDiv long={3} />

//    </>
//  )
// }

// 29/10/2026 - Estilos con css global e modulos css

//import Tarxeta from "./practicas/Tarxeta.jsx";
//import Aviso from "./practicas/Aviso.jsx";
//import ProductCard from "./practicas/ProductCard.jsx";

//export default function App() {
//  return (
//    <>
//      <Tarxeta />
//      <Aviso />
//      <ProductCard nome={"Ordenador"} precio={"22"}></ProductCard>
//    </>
//  );
//}
// 30/10/2026

import "./bootstrap.min.css";

export default function App(){
  return(
    <>
    <nav class="navbar md:navbar-expand bg-1">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarDrawer" aria-controls="navbarDrawer" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon" aria-hidden="true"></span>
        </button>
        <dialog class="drawer drawer-end" tabindex="-1" id="navbarDrawer" aria-labelledby="navbarDrawerLabel">
          <div class="drawer-header">
            <h5 class="drawer-title" id="navbarDrawerLabel">Menu</h5>
            <button type="button" class="btn-close" data-bs-dismiss="drawer" aria-label="Close"></button>
          </div>
          <div class="drawer-body mb-2 md:mb-0">
            <ul class="nav navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <button class="nav-link" type="button" data-bs-toggle="menu" aria-expanded="false">
                  Menu
                </button>
                <div class="menu">
                  <a class="menu-item" href="#">Action</a>
                  <a class="menu-item" href="#">Another action</a>
                  <hr class="menu-divider"/>
                  <a class="menu-item" href="#">Something else here</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form class="hstack gap-2" role="search">
              <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn-solid btn-icon theme-secondary" type="submit">
                <svg class="bi" width="16" height="16"><use href="#search" /></svg>
              </button>
            </form>
          </div>
        </dialog>
      </div>
    </nav>
    </>
    
  )
}






