import React from "react";
import Banner from "./Inside-Home/Banner";
import Brands from "./Inside-Home/Brands";
import Counter from "./Inside-Home/Counter";
import FAQ from "./Inside-Home/FAQ";
import Services from "./Inside-Home/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <Brands />
      <Services />
      <Counter></Counter>
      <FAQ></FAQ>
    </div>
  );

};

export default Home;
