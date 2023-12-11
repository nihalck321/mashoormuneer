import React from "react";
// import { Link } from "react-router-dom";

import "./HomeBanner.css";
// import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { motion } from "framer-motion";
import { transition1 } from "../../transitions";


import slider1 from "../../assets/img/home-slider/IMG_3990 1-min-compressed.jpg";
import slider2 from "../../assets/img/home-slider/IMG_0908 1-compressed.jpg";
import slider3 from "../../assets/img/home-slider/MSR04725-compressed.jpg";
import slider4 from "../../assets/img/home-slider/MSR03658 1-min-compressed.jpg";

const images = [
  {
    src: slider1,
    alt: "Image 1",
  },
  {
    src: slider2,
    alt: "Image 2",
  },
  {
    src: slider3,
    alt: "Image 3",
  },
  {
    src: slider4,
    alt: "Image 3",
  },
];
const HomeBanner = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: -5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition1}
        className="slider position-relative ">
        <Swiper
          spaceBetween={30}
          speed={3000}
          effect={"fade"}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          className="mySwiper "
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="mask">
              <img src={image.src} alt={image.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="home_banner-content">
          <h1 className="mt-lg-0 mt-4 mb-0 pre_line letters">
            <span className="lettersspan">
              <span className="letter_1" style={{ color: "#ffff" }}>

              </span>
            </span>
            <br />
            <span className="lettersspan">
              <span className="letter_2"> Mashoor Muneer</span>
            </span>
          </h1>
          <p>
            Filmmaker, Photographer, Content Creator{" "}
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default HomeBanner;
