import React from "react";
import BrandSlider from "../components/Home/BradsSlider";
import Slider from "../components/Home/Slider";
import CategoriesCards from "../components/Home/CategoriesCards";
import Testimonials from "../components/Home/Testimonials";
import RecentProducts from "../components/Home/RecentProducts";
import RecentBlogSlider from "../components/Home/RecentBlogSlider";
import Cards from "../components/Home/Cards";
import MainTemplate from "../templates/MainTemplate";

const Home = () => {
  return (
    <>
      <MainTemplate>
        <Slider />
        <Cards />
        <Testimonials />
        <CategoriesCards />
        <RecentProducts />
        <BrandSlider />
        <RecentBlogSlider />
      </MainTemplate>
    </>
  );
};

export default Home;
