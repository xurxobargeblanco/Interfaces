function Card({ nome, ubicacion, prezo }) {
  return (
    <div className="tarxeta-pista">
      <div className="cabeceira">
        <div>
          <h3>{nome}</h3>
          <p className="ubicacion">{ubicacion}</p>
          <p className="prezo-etiqueta">{prezo} € / hora</p>
        </div>
      </div>
      <button className="btn btn-primario">Reservar</button>
    </div>
  )
}

export default Card