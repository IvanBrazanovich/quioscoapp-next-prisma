import React, { useEffect, useState } from "react";
import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";
import { transformCurrency } from "../helpers/helpers";
import "react-toastify/dist/ReactToastify.css";

const ModalProducto = () => {
  const [cantidad, setCantidad] = useState(1);
  const [edicion, setEdicion] = useState(false);
  const { producto, handleChangeModal, handleChangePedido, pedido } =
    useQuiosco();
  const { nombre, precio, imagen } = producto;

  useEffect(() => {
    pedido.forEach((productoPedido) => {
      if (productoPedido.id === producto.id) {
        setEdicion(true);
        setCantidad(productoPedido.cantidad);
      }
    });
  }, [producto, pedido]);

  return (
    <div className="producto gap-10 flex p-3">
      <Image
        src={`/assets/img/${imagen}.jpg`}
        width={200}
        height={300}
        alt={`Imágen de ${nombre}`}
      />

      <div className="wrapper">
        <button onClick={handleChangeModal} className="flex justify-end w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="font-black text-2xl my-2">{nombre}</h2>
        <h3 className="font-black text-3xl my-2 text-amber-400">
          {transformCurrency(precio)}
        </h3>

        <div className="flex gap-4 mt-7">
          <button
            onClick={(e) => {
              if (cantidad <= 1) return;
              setCantidad(cantidad - 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 text-indigo-500 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <p className="text-2xl font-bold text-indigo-500"> {cantidad}</p>
          <button
            onClick={(e) => {
              if (cantidad >= 5) return;
              setCantidad(cantidad + 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 text-indigo-500 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
        <button
          onClick={(e) => {
            handleChangePedido({ ...producto, cantidad });
            handleChangeModal();
          }}
          className="py-3 px-5 text-white bg-indigo-600 mt-8 uppercase font-bold"
        >
          {!edicion ? `Añadir al pedido` : "Guardar Cambios"}
        </button>
      </div>
    </div>
  );
};

export default ModalProducto;
