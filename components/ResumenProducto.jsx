import Image from "next/image";
import React from "react";
import { transformCurrency } from "../helpers/helpers";
import useQuiosco from "../hooks/useQuiosco";

const ResumenProducto = ({ producto }) => {
  const { cambiarCantidadResumen, handleEliminarProducto } = useQuiosco();
  const { imagen, nombre, precio, cantidad } = producto;

  return (
    <div className="producto flex flex-col lg:flex-row   px-7 py-4 shadow-md gap-5 items-center">
      <Image
        src={`/assets/img/${imagen}.jpg`}
        width={150}
        height={200}
        alt={`Foto de platillo ${nombre}`}
      />

      <div className="wrapper grow shrink">
        <h3 className="heading text-3xl font-bold my-2">{nombre}</h3>
        <p className="font-bold text-lg my-2">Cantidad: {cantidad}</p>
        <p className="font-extrabold  text-lg my-2 text-amber-500">
          Precio: {transformCurrency(precio)}
        </p>

        <p>Subtotal: {transformCurrency(precio * cantidad)}</p>
      </div>

      <div className="wrapper  flex flex-col  gap-4 min-w-[10rem]">
        <button
          onClick={(e) => cambiarCantidadResumen(producto.id)}
          className="py-2 w-10/12 flex gap-2 justify-center uppercase rounded-md bg-blue-500 text-center font-bold text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
            />
          </svg>
          Editar
        </button>
        <button
          onClick={(e) => handleEliminarProducto(producto.id)}
          className="py-2 w-10/12 flex gap-2 justify-center uppercase rounded-md bg-red-500 text-center font-bold text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default ResumenProducto;
