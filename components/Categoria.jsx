import React from "react";
import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";

const Categoria = ({ categoria }) => {
  const { categoriaActual, handleClickCategoria } = useQuiosco();
  return (
    <div
      onClick={(e) => handleClickCategoria(categoria)}
      className={`${
        categoriaActual?.id === categoria.id && "bg-amber-400"
      }  categoria_wrapper flex items-center gap-4 border p-3  w-full cursor-pointer `}
    >
      <div className="img_wrapper">
        <Image
          src={`/assets/img/icono_${categoria.icono}.svg`}
          alt={`Icono de ${categoria.nombre}`}
          width={70}
          height={70}
        />
      </div>
      <h3 className="text-2xl font-black text-gray-700">{categoria.nombre}</h3>
    </div>
  );
};

export default Categoria;
