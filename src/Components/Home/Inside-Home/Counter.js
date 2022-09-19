import React from 'react';
import CountUp from 'react-countup';
import handShake from "../../../Assets/Icons/handshake.png"
import like from "../../../Assets/Icons/like.png"
import service from "../../../Assets/Icons/customer-support.png"

const Counter = () => {
    return (
        <section className='p-16 bg-black mt-40'>
        <div className="bg-cover rounded-lg w-[80%] bg-no-repeat bg-inherit bg-fixed bg-gray-900 text-white py-10 h-56 lg:flex justify-around items-center my-36 mx-auto">
            <div className='text-center flex flex-col justify-center items-center'>
            <img src={handShake} className="w-16 my-4" alt="" />
            <h3 className='font-bold'><CountUp className='font-bold' style={{fontSize:"60px"}} delay={3} end={4800} /> +</h3>
            <h3 className='text-xl'>Total Soled</h3>
            </div>
            <div className='text-center  flex flex-col justify-center items-center'>
            <img src={like} className="w-16 my-5" alt="" />
            <h3 className='font-bold'><CountUp className='font-bold' style={{fontSize:"60px"}} delay={3} end={8760} /> +</h3>
            <h3 className='text-xl'>Get Review</h3>
            </div>
            <div className='text-center  flex flex-col justify-center items-center'>
            <img src={service} className="w-16 my-5" alt="" />
            <h3 className='font-bold'><CountUp className='font-bold' style={{fontSize:"60px"}} delay={3} end={4800} /> +</h3>
            <h3 className='text-xl'>Service</h3>
            </div>
        </div>
        </section>
    );
};

export default Counter;