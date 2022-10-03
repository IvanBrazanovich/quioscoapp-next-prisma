import React, { createContext, useEffect, useState } from "react";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState({});

  const handleClickCategoria = (categoria) => {
    setCategoriaActual(categoria);
  };

  const getCategorias = async () => {
    const response = await fetch("/api/categorias");
    const res = await response.json();
    setCategorias(res);
  };

  useEffect(() => {
    getCategorias();
  }, []);

  useEffect(() => {
    setCategoriaActual(categorias[0]);
  }, [categorias]);

  return (
    <QuioscoContext.Provider
      value={{
        categorias,
        categoriaActual,
        handleClickCategoria,
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export { QuioscoProvider };

export default QuioscoContext;
