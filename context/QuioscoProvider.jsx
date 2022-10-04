import { useRouter } from "next/router";
import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  // UseState
  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState({});
  const [producto, setProducto] = useState({});
  const [modal, setModal] = useState(false);
  const [pedido, setPedido] = useState([]);

  const route = useRouter();

  //Funciones
  const getCategorias = async () => {
    const response = await fetch("/api/categorias");
    const res = await response.json();
    setCategorias(res);
  };
  const handleClickCategoria = (categoria) => {
    setCategoriaActual(categoria);

    route.push("/");
  };

  const handleClickProducto = (producto) => {
    setProducto(producto);
  };

  const handleChangeModal = () => {
    setModal(!modal);
  };

  const cambiarCantidadResumen = (id) => {
    const productoEditar = pedido.filter((producto) => producto.id === id);

    setProducto(productoEditar[0]);

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

  const handleEliminarProducto = (id) => {
    const nuevoArr = pedido.filter(
      (productoPedido) => productoPedido.id !== id
    );

    setPedido(nuevoArr);
    toast.success("Se eliminó correctamente");
  };

  const enviarPedido = async (e, nombre) => {
    e.preventDefault();
    const total = pedido?.reduce(
      (total, producto) => total + producto.precio * producto.cantidad,
      0
    );
    try {
      const respuesta = await fetch("/api/ordenes", {
        method: "POST",
        body: JSON.stringify({
          nombre,
          pedido,
          total,
          fecha: new Date().toString(),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await respuesta.json();

      //Resetapp
      setCategoriaActual(categorias[0]);
      setProducto({});
      setPedido([]);

      toast.success("Pedido enviado correctamente");
      setTimeout(() => {
        route.push("/");
      }, 3000);
    } catch (error) {
      console.log(error);
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
        cambiarCantidadResumen,
        handleEliminarProducto,
        enviarPedido,
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export { QuioscoProvider };

export default QuioscoContext;
