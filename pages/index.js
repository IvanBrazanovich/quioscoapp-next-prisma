import { categorias } from "../prisma/data/categorias";
import { productos } from "../prisma/data/productos";
import { PrismaClient } from "@prisma/client";
import Layout from "../layout/layout";

export default function Home() {
  return (
    <Layout>
      <h3 className="text-blue-300 text-2xl">Next js </h3>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const prisma = new PrismaClient();

  const categorias = await prisma.categoria.findMany();
  console.log(categorias);
  return {
    props: {},
  };
};
