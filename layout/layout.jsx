import Head from "next/head";
import React from "react";
import Sidebar from "../components/Sidebar";
import Modal from "react-modal";
import useQuiosco from "../hooks/useQuiosco";
import ModalProducto from "../components/ModalProducto";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#__next");

const Layout = ({ children, pagina = "" }) => {
  const { modal } = useQuiosco();
  return (
    <>
      <Head>
        <title>Café - {pagina}</title>
        <meta name="description" content="Esta es una página de quiosco" />
      </Head>

      <div className="md:flex">
        <aside className="md:min-w-[24rem]">
          <Sidebar />
        </aside>
        <main className="h-screen overflow-scroll">{children}</main>
      </div>

      <Modal isOpen={modal} style={customStyles} contentLabel="Example Modal">
        <ModalProducto />
      </Modal>
    </>
  );
};

export default Layout;
