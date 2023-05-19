import React from "react";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div className="hero-container" data-aos="fade-in">
        <h1>Yerosen Diriba</h1>
        <p>
          I'm{" "}
          <span
            className="typed"
            data-typed-items="Designer, Developer, Freelancer, Photographer"
          >
            <TypeAnimation
              sequence={["Web Developer", 1000, "Freelancer", 1000]}
              speed={30}
              repeat={Infinity}
            />
          </span>
        </p>
      </div>
    </section>
  );
}

export default Hero;
