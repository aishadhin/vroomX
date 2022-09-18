import React from "react";
import car from "../../../Assets/Icons/car.png";
import carService from "../../../Assets/Icons/car-service.png";
import carBuy from "../../../Assets/Icons/car (1).png";

const Services = () => {
  return (
    <section className="bg-slate-100">
      <div className="lg:grid lg:grid-cols-2 gap-4 py-5">
      {/* text  */}
        <div className="lg:mx-auto text-center lg:text-start">
          <h1 className="font-bold">
            Buying <br />Selling <br />Service.
          </h1>
          <button className="px-8 py-4  red-bg capitalize rounded border-none text-white">
            Subscribe{" "}
          </button>
        </div>
        {/* card */}
        <div className="mb-[-180px]">
        <div class="flex max-w-md bg-white shadow-lg rounded-xl overflow-hidden h-[200px] p-5 m-5">
          <div class="w-1/3 bg-cover bg-landscape">
            <img src={car} className="w-[80%]" alt="" />
          </div>
          <div class="w-2/3 p-4">
            <h4 class="font-bold">Car Sell</h4>
            <p class="mt-2 text-gray-600 text-sm">
              You can&#x27;t buy your future, but you can do it. Money is
              nothing, you&#x27;r everything.
            </p>
          </div>
        </div>
        <div class="flex max-w-md bg-white shadow-lg rounded-xl overflow-hidden h-[200px] p-5 m-5">
          <div class="w-1/3 bg-cover bg-landscape">
            <img src={carService} className="w-[80%]" alt="" />
          </div>
          <div class="w-2/3 p-4">
            <h4 class="font-bold">Car Servicing</h4>
            <p class="mt-2 text-gray-600 text-sm">
              You can&#x27;t buy your future, but you can do it. Money is
              nothing, you&#x27;r everything.
            </p>
          </div>
        </div>
        <div class="flex max-w-md bg-white shadow-lg rounded-xl overflow-hidden h-[200px] p-5 m-5">
          <div class="w-1/3 bg-cover bg-landscape">
            <img src={carBuy} className="w-[80%]" alt="" />
          </div>
          <div class="w-2/3 p-4">
            <h4 class="font-bold">Car Buy</h4>
            <p class="mt-2 text-gray-600 text-sm">
              You can&#x27;t buy your future, but you can do it. Money is
              nothing, you&#x27;r everything.
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
