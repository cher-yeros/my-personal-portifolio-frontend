/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Portifolio from "./Portifolio";
import Resume from "./Resume";
import Services from "./Services";
import Skills from "./Skills";
import Testimonials from "./Testimonials";

function Home() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

  return (
    <>
      {/* <Hero /> */}
      <About />
      {/* <Facts /> */}
      <Skills />
      <Resume />
      <Portifolio />
      <Services />
      <Testimonials />
      <Contact />

      <a
        href="#"
        className={`back-to-top d-flex align-items-center justify-content-center ${
          scroll && "active"
        }`}
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}

export default Home;
