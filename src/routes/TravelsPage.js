import React from "react";
import ImageOnlySection from "../components/ImageOnlySection/ImageOnlySection";
import TravelsPageData from "./TravelsPageData";

const TravelsPage = () => {
  return (
    <>
      {TravelsPageData.map((props, index) => (
        <ImageOnlySection
          key={index}
          img1={props.travelImg1}
          img2={props.travelImg2}
        />
      ))}
    </>
  );
};

export default TravelsPage;
