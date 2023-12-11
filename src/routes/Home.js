import React from "react";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import HomeButton from "../components/HomeButton/HomeButton";
import HomeVideo from "../components/HomeVideo_Section/HomeVideo";
import ClientSection from "../components/ClientSection/ClientSection";
import HomeVideoOne from "../assets/img/Showreel Aug 17.mp4";


import AOS from 'aos';
import 'aos/dist/aos.css';
import HomePhotography from "../components/HomePhotography/HomePhotography";
import HomeAbout from "../components/HomeAboutSection/HomeAbout";

AOS.init(); 

const Home = () => {
  
  return (
    <>
      <HomeBanner />
      <HomePhotography />
      <HomeAbout />
      <HomeVideo video1={HomeVideoOne} path="/films"/>
      <ClientSection />
      <HomeButton heading="Get in touch" path="/contact" />
    </>
  );
};

export default Home;
