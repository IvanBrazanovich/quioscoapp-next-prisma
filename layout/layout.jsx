import Head from "next/head";
import React from "react";
import Sidebar from "../components/Sidebar";

const Layout = ({ children, pagina = "" }) => {
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
    </>
  );
};

export default Layout;
