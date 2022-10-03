import Head from "next/head";
import React from "react";

const Layout = ({ children, pagina = "" }) => {
  return (
    <>
      <Head>
        <title>Café - {pagina}</title>
        <meta name="description" content="Esta es una página de quiosco" />
      </Head>

      <div className="md:flex">
        <aside className="md:w-1/4">Sidebar aquí</aside>
        <main className="md:w-3/4">{children}</main>
      </div>
    </>
  );
};

export default Layout;
