import React, { useState } from 'react';
import icon from '../../../Assets/Icons/goal-min.png';

const FAQ = () => {

    const ReadMore = ({ children }) => {
        const text = children;
        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {
            setIsReadMore(!isReadMore);
        };
        return (
            <p className="text">
                {isReadMore ? text.slice(0, 200) + " ...." : text}
                <br />
                <button onClick={toggleReadMore} className="read-or-hide btn btn-link p-0 text-[#F02441]">
                    {isReadMore ? "read more" : "show less"}
                </button>
            </p>
        );
    };

    return (
        <section className='mx-auto max-w-screen-xl px-6 sm:px-6 mb-28 mt-52'>

            <div className='border-t-2'></div>

            <h2 class="text-center mt-10 font-bold">FAQ</h2>

            <p className='text-center mt-3'>Everything you need to know</p>

            <div className='grid lg:grid-cols-2 mt-16'>

                {/* FAQ of Left Side Starts From Here */}
                <div className='mx-auto'>

                    {/* Question 01 Starts From Here */}
                    <ol class="border-l-2 border-[#F02441]">
                        <li>
                            <div class="md:flex flex-center">
                                <div class="bg-white w-10 h-10 flex items-center justify-center rounded-full -ml-5">
                                    <img src={icon} alt="" />
                                </div>
                                <div class="block p-6 rounded-lg border hover:shadow-xl transition duration-300 ease-in-out max-w-lg ml-6 lg:mb-10">

                                    <h4 className='font-bold text-lg mb-3'> What kind of training do your mechanics have?</h4>

                                    <ReadMore>In the same vein, people don’t want someone working on their car without the proper experience and training. Just because a shop is insured and bonded doesn’t mean the employees know what they’re doing—provide the answer here so that your audience has peace of mind in your entire team. Explain the onboarding process, requirements for all employees, and training that you provide to assist them throughout their careers. </ReadMore>
                                </div>
                            </div>
                        </li>
                    </ol>
                    {/* Question 01 Ends Here */}

                    {/* Question 02 Starts From Here */}
                    <ol class="border-l-2 border-[#F02441]">
                        <li>
                            <div class="md:flex flex-center">
                                <div class="bg-white w-10 h-10 flex items-center justify-center rounded-full -ml-5">
                                    <img src={icon} alt="" />
                                </div>
                                <div class="block p-6 rounded-lg border hover:shadow-lg transition duration-300 ease-in-out max-w-lg ml-6 lg:mb-10">

                                    <h4 className='font-bold text-lg mb-3'>Is your shop licensed and insured?</h4>

                                    <ReadMore>People spend a lot of money on their vehicles. They don’t want to take them to just anyone when they need a little TLC, and especially if they need a major repair. Provide the information about your shop’s licensing and insurance, as well as any other relevant information, like how long you’ve been in business or professional organizations that you belong to. This will give people confidence in your transparency and your professionalism alike.</ReadMore>
                                </div>
                            </div>
                        </li>
                    </ol>
                    {/* Question 02 Ends Here */}

                    {/* Question 03 Starts From Here */}
                    <ol class="border-l-2 border-[#F02441]">
                        <li>
                            <div class="md:flex flex-center">
                                <div class="bg-white w-10 h-10 flex items-center justify-center rounded-full -ml-5">
                                    <img src={icon} alt="" />
                                </div>
                                <div class="block p-6 rounded-lg border hover:shadow-lg transition duration-300 ease-in-out max-w-lg ml-6 lg:mb-10">

                                    <h4 className='font-bold text-lg mb-3'>What is an ASE Master Certified Technician?</h4>

                                    <ReadMore>ASE is short for National Institute for Automotive Service Excellence. ASE is an independent, non-profit organization that tests and certifies automotive professionals. It is a way to gauge the level of technical expertise a technician has and brings confidence to the vehicle owner. To be an ASE master certified technician, you have to pass a variety of ASE tests in different subject matters.  To remain ASE certified, a technician must re-test every five years to verify they are keeping with all the advancements in the profession.</ReadMore>
                                </div>
                            </div>
                        </li>
                    </ol>

                    <ol class="border-l-2 hidden lg:block border-[#F02441]">
                        <li>
                            <div class="md:flex flex-center">
                                <div class="bg-[#F02441] w-5 h-5 flex items-center justify-center rounded-full -ml-[11.5px]">

                                </div>

                            </div>
                        </li>
                    </ol>
                    {/* Question 03 Ends Here */}
                </div>
                {/* FAQ of Left Side Ends Here */}

                {/* FAQ of Right Side Starts From Here */}
                <div className='mx-auto'>

                    {/* Question 04 Starts From Here */}
                    <ol class="border-l-2 border-[#F02441]">
                        <li>
                            <div class="md:flex flex-center">
                                <div class="bg-white w-10 h-10 flex items-center justify-center rounded-full -ml-5">
                                    <img src={icon} alt="" />
                                </div>
                                <div class="block p-6 rounded-lg border hover:shadow-xl transition duration-300 ease-in-out max-w-lg ml-6 lg:mb-10">

                                    <h4 className='font-bold text-lg mb-3'>Do you offer any sort of warranty?</h4>

                                    <ReadMore>VroomX is a certified NAPA AutoCare center which means we are able to offer a 24 months or 24,000 miles, whichever comes first Peace of Mind® Warranty on qualifying repairs.  Best of all, this warranty is a nationwide warranty which means you are covered at any NAPA AutoCare Center if you are traveling or relocate.  We offer a 12 months or 12,000 miles warranty on all other repairs.</ReadMore>
                                </div>
                            </div>
                        </li>
                    </ol>
                    {/* Question 04 Ends Here */}

                    {/* Question 05 Starts From Here */}
                    <ol class="border-l-2 border-[#F02441]">
                        <li>
                            <div class="md:flex flex-center">
                                <div class="bg-white w-10 h-10 flex items-center justify-center rounded-full -ml-5">
                                    <img src={icon} alt="" />
                                </div>
                                <div class="block p-6 rounded-lg border hover:shadow-lg transition duration-300 ease-in-out max-w-lg ml-6 lg:mb-10">

                                    <h4 className='font-bold text-lg mb-3'>What is preventative maintenance?</h4>

                                    <ReadMore>Preventative maintenance for your car really comes down to REGULAR maintenance.  This helps to ensure your vehicle is running optimally and helps to avoid larger issues from developing.  Overall, preventative maintenance makes your car safe, dependable, efficient, and in the end, saves you money.  A well maintained car will not only last longer but will get better gas mileage.</ReadMore>
                                </div>
                            </div>
                        </li>
                    </ol>
                    {/* Question 05 Ends Here */}

                    {/* Question 06 Starts From Here */}
                    <ol class="border-l-2 border-[#F02441]">
                        <li>
                            <div class="md:flex flex-center">
                                <div class="bg-white w-10 h-10 flex items-center justify-center rounded-full -ml-5">
                                    <img src={icon} alt="" />
                                </div>
                                <div class="block p-6 rounded-lg border hover:shadow-lg transition duration-300 ease-in-out max-w-lg ml-6 lg:mb-10">

                                    <h4 className='font-bold text-lg mb-3'>Can I apply for financing through VroomX?</h4>

                                    <ReadMore>Absolutely! VroomX offers financing through NAPA EasyPay credit card with Synchrony bank.  Click here to learn more.  An added benefit to using your NAPA EasyPay credit card for your repairs is it extends your Peace of Mind® Warranty on qualifying repairs to 36 months or 36,000 miles whichever comes first.</ReadMore>
                                </div>
                            </div>
                        </li>
                    </ol>

                    <ol class="border-l-2 border-[#F02441]">
                        <li>
                            <div class="md:flex flex-center">
                                <div class="bg-[#F02441] w-5 h-5 flex items-center justify-center rounded-full -ml-[11.5px]">

                                </div>

                            </div>
                        </li>
                    </ol>
                    {/* Question 06 Ends Here */}
                </div>
                {/* FAQ of Right Side Ends Here */}

            </div>

        </section>
    );
};

export default FAQ;