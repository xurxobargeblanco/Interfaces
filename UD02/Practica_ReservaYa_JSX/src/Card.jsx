function Card({ nome, ubicacion, prezo,disponible }) {
  return (
    <div className="tarxeta-pista">
      <div className="cabeceira">
        <div>
          <h3>{nome}</h3>
          <p className="ubicacion">{ubicacion}</p>
          <p className="prezo-etiqueta">{prezo} € / hora</p>
          <p className={disponible ? "disponible" : "nondisponible"}> {disponible ? "Dispoñible" : "Non dispoñible"} </p>
          <br />
        </div>
      </div>
      <button className="btn btn-primario">Reservar</button>
    </div>
  )
}

export default Card