/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import About from "./About";
import Contact from "./Contact";
import Facts from "./Facts";
import Hero from "./Hero";
import Portifolio from "./Portifolio";
import Resume from "./Resume";
import Services from "./Services";
import Skills from "./Skills";
import Testimonials from "./Testimonials";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Facts />
      <Skills />
      <Resume />
      <Portifolio />
      <Services />
      <Testimonials />
      <Contact />

      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}

export default Home;
