import React from "react";
import Banner from "./Inside-Home/Banner";
import Brands from "./Inside-Home/Brands";
import Counter from "./Inside-Home/Counter";
import FAQ from "./Inside-Home/FAQ";
import Services from "./Inside-Home/Services";
import Testimonial from "./Inside-Home/Testimonial";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Banner />
      <Brands />
      <Services />
      <FAQ></FAQ>
      <Testimonial/>
      <Counter></Counter>
    </div>
  );

};

export default Home;
