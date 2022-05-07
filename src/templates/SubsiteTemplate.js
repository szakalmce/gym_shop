import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const SubsiteTemplate = ({ children }) => {
  return (
    <>
      <Navbar position="relative" bg="black" />
      {children}
      <Newsletter margin={0} />
      <Footer />
    </>
  );
};

export default SubsiteTemplate;
