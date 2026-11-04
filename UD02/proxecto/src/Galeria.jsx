

import { useState } from "react";
import Button from "./Button";

const imaxes = [
  { src: "/images1.jpeg", num: 1, detalles: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fugiat blanditiis unde impedit laboriosam excepturi, asperiores consectetur accusamus optio aperiam obcaecati similique a recusandae eos autem. Vitae nostrum eius alias." },
  { src: "/logo.png", num: 2, detalles: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fugiat blanditiis unde impedit laboriosam excepturi, asperiores consectetur accusamus optio aperiam obcaecati similique a recusandae eos autem. Vitae nostrum eius alias." }
];

export function Galeria() {
  const [indice, setIndice] = useState(0);
  const [mostrarDetalles, setMostrarDetalles] = useState(false);

  return (
    <>
      <h2>Galería de imaxes</h2>

      <h3>Imaxe: {imaxes[indice].num}</h3>

      <img
        src={imaxes[indice].src}
        alt="Imaxe da galería"
        width="300"
      />

      {mostrarDetalles && (
        <h3>Detalles: {imaxes[indice].detalles}</h3>
      )}

      <Button onClick={() => setIndice((indice + 1) % imaxes.length)}>Seguinte</Button>
      <Button onClick={() => setMostrarDetalles(!mostrarDetalles)}>{mostrarDetalles ? "Ocultar" : "Mostar Detalles"}</Button>

    </>
  );
}


