import React from "react";
import PotratesTravelStreet from "../components/PotratesTravelStreet/PotratesTravelStreet";
import img1 from "../assets/img/portfolio/Portraites_thumbnail.jpg";
import img2 from "../assets/img/portfolio/travels_thumbnail.JPG";
import img3 from "../assets/img/portfolio/img3.png";

const Photography = () => {
  return (
    <>
      <PotratesTravelStreet
        img={img1}
        path="/PortraitesPageTwo"
        sub="Show more +"
        heading="Portraites"
        img2={img2}
        path2="/travelsPage1"w
        sub2="Show more +"
        heading2="Travels"
        img3={img3}
        path3="/street"
        sub3="Show more +"
        heading3="Street"
      />
    </>
  );
};

export default Photography;