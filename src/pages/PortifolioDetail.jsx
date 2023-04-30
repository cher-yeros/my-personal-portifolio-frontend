import React from "react";
import { Modal } from "react-bootstrap";
import { Navigation, Pagination, Scrollbar } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function PortifolioDetail(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Portfoio Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <section id="portfolio-details" class="portfolio-details">
          <div class="container">
            <div class="row gy-4 align-items-stretch">
              <div class="col-lg-8">
                <div class="portfolio-details-slider swiper">
                  <Swiper
                    modules={[Navigation, Pagination, Scrollbar]}
                    spaceBetween={50}
                    slidesPerView={1}
                    // navigation
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    autoplay
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    <SwiperSlide>
                      <img
                        src="assets/img/portfolio/portfolio-details-1.jpg"
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src="assets/img/portfolio/portfolio-details-2.jpg"
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src="assets/img/portfolio/portfolio-details-3.jpg"
                        alt=""
                      />
                    </SwiperSlide>
                  </Swiper>

                  <div class="swiper-pagination"></div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="portfolio-info">
                  <h3>Project information</h3>
                  <ul>
                    <li>
                      <strong>Category</strong>: Web design
                    </li>
                    <li>
                      <strong>Client</strong>: ASU Company
                    </li>
                    <li>
                      <strong>Project date</strong>: 01 March, 2020
                    </li>
                    <li>
                      <strong>Project URL</strong>:{" "}
                      <a href="#">www.example.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-12">
                <div class="portfolio-description">
                  <h2>This is an example of portfolio detail</h2>

                  <p>
                    Autem ipsum nam porro corporis rerum. Quis eos dolorem eos
                    itaque inventore commodi labore quia quia. Exercitationem
                    repudiandae officiis neque suscipit non officia eaque itaque
                    enim. Voluptatem officia accusantium nesciunt est omnis
                    tempora consectetur dignissimos. Sequi nulla at esse enim
                    cum deserunt eius.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Modal.Body>
    </Modal>
  );
}

export default PortifolioDetail;
