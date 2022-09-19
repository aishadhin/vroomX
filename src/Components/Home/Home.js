import React from "react";
import Banner from "./Inside-Home/Banner";
import Brands from "./Inside-Home/Brands";
import Counter from "./Inside-Home/Counter";
import Services from "./Inside-Home/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <Brands />
      <Services />
      <Counter></Counter>
    </div>
  );

};

export default Home;
