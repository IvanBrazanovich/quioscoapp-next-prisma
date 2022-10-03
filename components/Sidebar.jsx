import React, { useEffect } from "react";
import useQuiosco from "../hooks/useQuiosco";
import Image from "next/image";
import Categoria from "./Categoria";

const Sidebar = () => {
  const { categorias } = useQuiosco();
  return (
    <div className="py-3 px-5">
      <Image
        src="/assets/img/logo.svg"
        alt="Logo de cafetería"
        width={300}
        height={100}
      />

      <div className="wrapper my-10 flex flex-col ">
        {categorias?.map((categoria) => (
          <Categoria key={categoria.id} categoria={categoria} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
