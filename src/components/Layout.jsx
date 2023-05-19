/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Hero from "../pages/Hero";

function Layout() {
  const [scroll, setScroll] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

  const openSidebar = (e) => {
    setSidebar(!sidebar);

    const body = document.getElementsByTagName("body")[0];
    if (sidebar) {
      body.classList.remove("mobile-nav-active");
    } else {
      body.classList.add("mobile-nav-active");
    }
  };

  return (
    <>
      <i
        class={`${
          sidebar ? "bi bi-x" : "bi bi-list"
        } mobile-nav-toggle d-xl-none`}
        onClick={openSidebar}
      ></i>

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
