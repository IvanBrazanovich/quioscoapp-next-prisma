import React, { useEffect, useState } from "react";
import { transformCurrency } from "../helpers/helpers";
import useQuiosco from "../hooks/useQuiosco";
import Layout from "../layout/layout";

const Total = () => {
  const { pedido, enviarPedido } = useQuiosco();

  const [nombre, setNombre] = useState("");

  const consultarPedido = () => {
    return pedido.length === 0 || nombre === "" || nombre.length < 3;
  };

  useEffect(() => {
    consultarPedido();
  }, [pedido]);

  return (
    <Layout pagina="Resumen">
      {" "}
      <div className=" px-4">
        <h2 className="text-4xl font-black">Total y confirmar pedido</h2>
        <p className="text-xl mt-5">Confirma tu pedido a continuación</p>
      </div>
      <div className="form mt-10 mx-5">
        <form onSubmit={(e) => enviarPedido(e, nombre)}>
          <label
            className=" block font-extrabold text-xl uppercase text-gray-700"
            htmlFor="nombre"
          >
            Nombre
          </label>
          <input
            className="py-2 bg-slate-200 rounded-md my-4 w-80 px-4 font-bold text-gray-600 "
            type="text"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <p className="text-2xl font-semibold text-gray-600 mt-5">
            Total a pagar:{" "}
            {transformCurrency(
              pedido?.reduce(
                (total, producto) =>
                  total + producto.precio * producto.cantidad,
                0
              )
            )}
          </p>
          <input
            type="submit"
            className={`${
              !consultarPedido()
                ? "bg-indigo-600 cursor-pointer hover:bg-indigo-800"
                : "bg-indigo-200 "
            }  text-white text-center uppercase font-bold  mt-5 rounded-md px-4 py-2`}
            disabled={consultarPedido()}
            value="Confirmar pedido"
          />
        </form>
      </div>
    </Layout>
  );
};

export default Total;
