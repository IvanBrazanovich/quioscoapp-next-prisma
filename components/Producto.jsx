import Image from "next/image";
import React from "react";
import { transformCurrency } from "../helpers/helpers";
import useQuiosco from "../hooks/useQuiosco";

const Producto = ({ producto }) => {
  const { handleClickProducto, handleChangeModal } = useQuiosco();
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

      <button
        onClick={(e) => {
          handleChangeModal();
          handleClickProducto(producto);
        }}
        className="text-center w-full bg-indigo-600 text-white py-2 font-bold uppercase mt-5"
      >
        Agregar
      </button>
    </div>
  );
};

export default Producto;
