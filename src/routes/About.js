import React from "react";
import AboutPage from "../components/About/About";


import { motion } from "framer-motion";
import { transition1 } from "../transitions";

import About1 from "../assets/img/about/mashoor_about.jpg";


const About = () => {
  
  return (
    <>
    
      <motion.div
        initial={{ opacity: 0, y: "80%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "80%" }}
        transition={transition1}
      >
        <AboutPage
          img={About1}
          heading="Mashoor Muneer"
          text="Tempus, aliquam etiam ut adipiscing nec nibh. Nisi, enim arcu
                sit vulputate. Neque, volutpat dolor, vitae leo aenean in. Id
                blandit quis at etiam tortor, mattis leo. Ridiculus dolor congue
                eros, faucibus vulputate non felis tempus. Convallis auctor duis
                vitae commodo mauris risus. Fames mattis blandit rhoncus
                suspendisse eu nisl."
        />
      </motion.div>
    </>
  );
};

export default About;
