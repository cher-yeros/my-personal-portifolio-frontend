/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import GLightbox from "glightbox";
import { Link } from "react-router-dom";
import { useState } from "react";
import PortifolioDetail from "./PortifolioDetail";
import Isotope from "isotope-layout";

function Portifolio() {
  const [showPortifolioDetail, setShowPortifolioDetail] = useState(false);
  const [portfolioIsotope, setPortfolioIsotope] = useState(null);

  const [isotope, setIsotope] = React.useState(null);
  // state for storing the filter keyword, with an initial value of *, which matches everything
  const [filterKey, setFilterKey] = React.useState("*");

  useEffect(() => {
    new GLightbox({
      selector: ".portfolio-lightbox",
    });

    const portfolioContainer = document.getElementById("portifolio-container");

    let pi = new Isotope(portfolioContainer, {
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
    });

    setIsotope(pi);
  }, []);

  useEffect(() => {
    if (isotope) {
      filterKey === "*"
        ? isotope.arrange({ filter: `*` })
        : isotope.arrange({ filter: `.${filterKey}` });
    }
  }, [isotope, filterKey]);

  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li
                data-filter="*"
                className="filter-active"
                onClick={(e) => setFilterKey("*")}
              >
                All
              </li>
              <li
                data-filter=".filter-web"
                onClick={(e) => setFilterKey("filter-web")}
              >
                Web App
              </li>
              <li
                data-filter=".filter-app"
                onClick={(e) => setFilterKey("filter-app")}
              >
                Mobile App
              </li>
              <li
                data-filter=".filter-app"
                onClick={(e) => setFilterKey("filter-app")}
              >
                Graphic Design
              </li>
            </ul>
          </div>
        </div>

        <div
          id="portifolio-container"
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-1.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-links">
                <a
                  href="assets/img/portfolio/portfolio-1.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="App 1"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a
                  onClick={(e) => setShowPortifolioDetail(true)}
                  title={"More Details"}
                >
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-2.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-links">
                <a
                  href="assets/img/portfolio/portfolio-2.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Web 3"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <Link to={"/portifolio-detail"} title={"More Details"}>
                  <i className="bx bx-link"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-3.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-links">
                <a
                  href="assets/img/portfolio/portfolio-3.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="App 2"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <Link to={"/portifolio-detail"} title={"More Details"}>
                  <i className="bx bx-link"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-4.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-links">
                <a
                  href="assets/img/portfolio/portfolio-4.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Card 2"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <Link to={"/portifolio-detail"} title={"More Details"}>
                  <i className="bx bx-link"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-5.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-links">
                <a
                  href="assets/img/portfolio/portfolio-5.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Web 2"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <Link to={"/portifolio-detail"} title={"More Details"}>
                  <i className="bx bx-link"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-6.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-links">
                <a
                  href="assets/img/portfolio/portfolio-6.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="App 3"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <Link to={"/portifolio-detail"} title={"More Details"}>
                  <i className="bx bx-link"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-7.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-links">
                <a
                  href="assets/img/portfolio/portfolio-7.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Card 1"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <Link to={"/portifolio-detail"} title={"More Details"}>
                  <i className="bx bx-link"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-8.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-links">
                <a
                  href="assets/img/portfolio/portfolio-8.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Card 3"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <Link to={"/portifolio-detail"} title={"More Details"}>
                  <i className="bx bx-link"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-9.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-links">
                <a
                  href="assets/img/portfolio/portfolio-9.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Web 3"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <Link to={"/portifolio-detail"} title={"More Details"}>
                  <i className="bx bx-link"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PortifolioDetail
        show={showPortifolioDetail}
        onHide={(e) => setShowPortifolioDetail(false)}
      />
    </section>
  );
}

export default Portifolio;
