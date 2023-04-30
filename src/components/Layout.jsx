import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Hero from "../pages/Hero";

function Layout() {
  return (
    <>
      <Header />
      <Hero />
      <main id="main">
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default Layout;
