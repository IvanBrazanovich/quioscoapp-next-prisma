import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState({});
  const [producto, setProducto] = useState({});
  const [modal, setModal] = useState(false);
  const [pedido, setPedido] = useState([]);

  const getCategorias = async () => {
    const response = await fetch("/api/categorias");
    const res = await response.json();
    setCategorias(res);
  };
  const handleClickCategoria = (categoria) => {
    setCategoriaActual(categoria);
  };

  const handleClickProducto = (producto) => {
    setProducto(producto);
  };

  const handleChangeModal = () => {
    setModal(!modal);
  };

  const handleChangePedido = ({ categoriaId, ...producto }) => {
    const hay = pedido.some((p) => p.id === producto.id);

    if (!hay) {
      setPedido([...pedido, producto]);
      toast.success("Agregado correctamente");
    } else {
      const newArr = pedido.map((p) => (p.id === producto.id ? producto : p));
      setPedido(newArr);
      toast.success("Guardado correctamente");
    }
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
        handleClickProducto,
        handleChangeModal,
        modal,
        producto,
        handleChangePedido,
        pedido,
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export { QuioscoProvider };

export default QuioscoContext;
