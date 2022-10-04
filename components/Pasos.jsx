import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Pasos = () => {
  const pasos = [
    { paso: 1, url: "/", nombre: "Menú" },
    { paso: 2, url: "/resumen", nombre: "Resumen" },
    { paso: 3, url: "/total", nombre: "Datos y Total" },
  ];

  const path = useRouter();

  const calcularPorcentaje = () => {
    let porcentaje;
    switch (path.pathname) {
      case "/":
        porcentaje = 5;
        break;
      case "/resumen":
        porcentaje = 47;
        break;

      case "/total":
        porcentaje = 100;
        break;
      default:
        break;
    }
    return porcentaje;
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="pasos my-4 flex justify-between px-5">
        {pasos.map((paso) => (
          <Link key={paso.paso} href={paso.url}>
            <a className="text-xl font-bold text-gray-700">{paso.nombre}</a>
          </Link>
        ))}
      </div>
      <div className="barra  bg-slate-100  my-4 ">
        <div
          className={`fill bg-amber-400 p-1 rounded-md`}
          style={{ width: `${calcularPorcentaje()}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Pasos;
