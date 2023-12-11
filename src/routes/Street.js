import React from "react";
import ImageOnlySection from "../components/ImageOnlySection/ImageOnlySection";
import StreetPageHead from "../components/Street/StreetPageHead";
import StreetData from "./StreetData";
import img1 from "../assets/img/Street/000.png";

const Street = () => {
  return (
    <>
      <StreetPageHead
        img={img1}
        st={{ paddingTop: "0" }}
        
      />
      {StreetData.map((props, index) => (
        <ImageOnlySection
          key={index}
          img1={props.img1}
          img2={props.img2}
        />
      ))}
    </>
  );
};

export default Street;