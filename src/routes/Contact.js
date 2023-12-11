import React from "react";




import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import ContactPage from "../components/Contact/Contact";

const Contact = () => {
  return (
    <>
     
      <motion.div
        initial={{ opacity: 0, y: "80%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "80%" }}
        transition={transition1}
      >
        
        
        
        
        
        
        <ContactPage />
        
        
        
        {/* <AboutContact
          img={Contact1}
          heading="Contact"
          text="Tempus, aliquam etiam ut adipiscing nec nibh. Nisi, enim arcu
              sit vulputate. Neque, volutpat dolor, vitae leo aenean in. Id
              blandit quis at etiam tortor, mattis leo. Ridiculus dolor congue
              eros, faucibus vulputate non felis tempus. Convallis auctor duis
              vitae commodo mauris risus. Fames mattis blandit rhoncus
              suspendisse eu nisl."
          st={{ color: "#212529" }}
          align={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
          }}
        /> */}
      </motion.div>
    </>
  );
};

export default Contact;
