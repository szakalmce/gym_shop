import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const MainTemplate = ({ children }) => {
  return (
    <>
      <Navbar position="absolute" bg={"transparent"} />
      {children}
      <Newsletter margin={-10} />
      <Footer />
    </>
  );
};

export default MainTemplate;
