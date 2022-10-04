import React from "react";
import ResumenProducto from "../components/ResumenProducto";
import useQuiosco from "../hooks/useQuiosco";
import Layout from "../layout/layout";

const resumen = () => {
  const { pedido } = useQuiosco();
  return (
    <Layout pagina="Resumen">
      {" "}
      <div className=" px-4">
        <h2 className="text-4xl font-black">Resumen</h2>
        <p className="text-xl mt-5">
          {pedido.length > 0
            ? "Revisa tu pedido"
            : "No hay ningún elemento en tu lista de pedidos, comienza agregando uno."}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        {pedido?.map((producto) => (
          <ResumenProducto key={producto.id} producto={producto} />
        ))}
      </div>
    </Layout>
  );
};

export default resumen;
