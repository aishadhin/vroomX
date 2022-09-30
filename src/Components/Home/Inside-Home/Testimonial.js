import React from "react";
import star from "../../../Assets/Icons/star.png"
const Testimonial = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-4 lg:px-0">
      <h1 className="font-bold">Testimonial</h1>
     <div className="lg:grid lg:grid-cols-2">
         {/* card start here  */}
      <div>
      <div className=" w-96 h-[30%] bg-base-100 hover:border-2 rounded-xl border-2 hover:shadow-xl flex items-center hover:rounded-xl my-10">
        {/* img card  */}
        <div className="p-5">
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src="https://placeimg.com/192/192/people" alt="" />
            </div>
          </div>
        </div>
        {/* text card  */}
        <div>
          <h4>Shahriar Rahman</h4>
          <p>We are using cookies for no reason.</p>
        </div>
      </div>
      <div className=" w-96 h-[30%] bg-base-100 hover:border-2 rounded-xl border-2 hover:shadow-xl flex items-center hover:rounded-xl my-10">
        {/* img card  */}
        <div className="p-5">
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src="https://placeimg.com/192/192/people" alt="" />
            </div>
          </div>
        </div>
        {/* text card  */}
        <div>
          <h4>Shahriar Rahman</h4>
          <p>We are using cookies for no reason.</p>
        </div>
      </div>
      <div className=" w-96 h-[30%] bg-base-100 hover:border-2 rounded-xl border-2 hover:shadow-xl flex items-center hover:rounded-xl my-10">
        {/* img card  */}
        <div className="p-5">
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src="https://placeimg.com/192/192/people" alt="" />
            </div>
          </div>
        </div>
        {/* text card  */}
        <div>
          <h4>Shahriar Rahman</h4>
          <p>We are using cookies for no reason.</p>
        </div>
      </div>
      </div>
      {/* card end here  */}


      {/* card content start here  */}
      <div>
        {/* heading with reacting  */}
<div>
<h5 className="font-bold">It was a great experience </h5>
{/* rating  */}
<div className="flex justify-start my-3">
<img src={star} className="w-4 mr-1" alt="" />
<img src={star} className="w-4 mx-1" alt="" />
<img src={star} className="w-4 mx-1" alt="" />
<img src={star} className="w-4 mx-1" alt="" />
<img src={star} className="w-4 ml-1" alt="" />
</div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque explicabo nostrum in dolorem, minus illum velit quisquam rem quis, libero optio adipisci quod error voluptatibus. Doloribus, quam provident. Quam fuga officiis cum. Quo quas, hic ex in quae similique vel ab beatae delectus, unde officiis quis dolorem earum enim quasi?</p>
<p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque explicabo nostrum in dolorem, minus illum velit quisquam rem quis, libero optio adipisci quod error voluptatibus. Doloribus, quam provident. Quam fuga officiis cum. Quo quas, hic ex in quae similique vel ab beatae delectus, unde officiis quis dolorem earum enim quasi?</p>
</div>
      </div>
     </div>
    </div>
  );
};

export default Testimonial;
