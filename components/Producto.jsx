import Image from "next/image";
import React from "react";
import { transformCurrency } from "../helpers/helpers";

const Producto = ({ producto }) => {
  const { nombre, imagen, precio } = producto;
  return (
    <div className="producto border p-3">
      <Image
        src={`/assets/img/${imagen}.jpg`}
        width={250}
        height={300}
        alt={`Imágen de ${nombre}`}
      />

      <h2 className="font-extrabold text-xl my-2">{nombre}</h2>
      <h3 className="font-black text-3xl my-2 text-amber-400">
        {transformCurrency(precio)}
      </h3>
    </div>
  );
};

export default Producto;
