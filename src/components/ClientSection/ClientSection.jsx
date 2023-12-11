import React from "react";

import "./ClientSection.css";

import { Col, Container, Row } from "react-bootstrap";
import Clients1 from "../../assets/img/Clients/ALJVD+CLient+Logos.png";
import Clients2 from "../../assets/img/Clients/ALJVD+CLient+Logos4.png";
import Clients3 from "../../assets/img/Clients/ALJVD+CLient+Logos5.png";
import Clients4 from "../../assets/img/Clients/ALJVD+CLient+Logos19.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, FreeMode, Pagination } from "swiper";

const ClientSection = () => {
  return (
    <section className="pt-100 client_section">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="client_main">
              <h1 className="mt-lg-0 mt-4 mb-0 pre_line letters client-logo">
                <span className="lettersspan">
                  <span className="letter_1" style={{ color: "#212529" }}>
                    Trusted by
                  </span>
                </span>
                <br />
                <br />
              </h1>
            </div>
          </Col>
          <Col>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              // pagination={{
              //   clickable: true,
              // }}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay, FreeMode, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={Clients1} alt="#" className="img-fluid" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Clients2} alt="#" className="img-fluid" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Clients3} alt="#" className="img-fluid" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Clients4} alt="#" className="img-fluid" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Clients1} alt="#" className="img-fluid" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Clients2} alt="#" className="img-fluid" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Clients3} alt="#" className="img-fluid" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Clients4} alt="#" className="img-fluid" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Clients1} alt="#" className="img-fluid" />
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ClientSection;
