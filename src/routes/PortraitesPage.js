import React from "react";

import img1 from "../assets/img/portfolio-one/MSR08099.png";

// import StreetPage from "../components/Street/StreetPage";
import PortraitesPageData from "./PortraitesPageData";
import ImageOnlySection from "../components/ImageOnlySection/ImageOnlySection";
import StreetPageHead from "../components/Street/StreetPageHead";

const PortraitesPage = () => {
  return (
    <>


      {/* <StreetPage
        heading="Eyes: Out of the street"
        st={{ paddingBottom: "0" }}
      /> */}

      <StreetPageHead
        img={img1}
        st={{ paddingTop: "0" }}
      />


      {PortraitesPageData.map((props, index) => (
        <ImageOnlySection key={index} img1={props.img1_1} img2={props.img1_2} />
      ))}



    </>
  );
};

export default PortraitesPage;
