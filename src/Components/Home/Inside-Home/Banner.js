import React from "react";
import car from "../../../Assets/Images/Banner-min.png"
import { BsArrowRightShort } from 'react-icons/bs';

const Banner = () => {
  return (
    <section style={{ backgroundImage: `url(${car})` }} className="mt-[70px] text-white bg-no-repeat bg-cover bg-center h-screen">
      <div class="grid lg:grid-cols-2 gap-4 max-w-7xl lg:ml-10">
        <div className="py-10 pl-5">
          <h1 className="font-bold uppercase">
            Lorem ipsum dolor sit amet.
          </h1>
          <p className="lg:my-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ipsum adipisci facilis animi nostrum quia, praesentium voluptates fuga ut odit, aut maiores libero provident? Reprehenderit, pariatur quas nemo nisi dolores excepturi porro. Laborum nam asperiores alias ab tempora, similique soluta. Sequi veritatis quibusdam saepe beatae impedit esse ratione voluptatem reiciendis?
          </p>
          <button className="btn red-bg capitalize rounded border-none px-14 text-white">Subscribe  <BsArrowRightShort className="font-semibold text-2xl" /></button>

        </div>

      </div>
    </section>
  );
};

export default Banner;
