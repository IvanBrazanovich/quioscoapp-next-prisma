import { categorias } from "../prisma/data/categorias";
import { productos } from "../prisma/data/productos";
import { PrismaClient } from "@prisma/client";
import Layout from "../layout/layout";
import useQuiosco from "../hooks/useQuiosco";
import Producto from "../components/Producto";

export default function Home() {
  const { categoriaActual } = useQuiosco();
  return (
    <Layout pagina={`Menú ${categoriaActual?.nombre}`}>
      <div className="pt-10 pb-5 ">
        <h2 className="text-4xl font-black">{categoriaActual?.nombre}</h2>
        <p className="text-xl mt-10">
          Elige y personaliza tu pedido a continuación
        </p>
      </div>
      <div className="wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-2 p-5  justify-items-center">
        {categoriaActual?.productos?.map((producto) => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </div>
    </Layout>
  );
}
