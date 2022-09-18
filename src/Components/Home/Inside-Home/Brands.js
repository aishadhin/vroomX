import React from 'react';
import { Link } from 'react-router-dom';
import bmw from "../../../Assets/Images/bmw.jpg";
import mercedez from "../../../Assets/Images/mercedez.jpg";
import tesla from "../../../Assets/Images/tesla.jpg";
import audi from "../../../Assets/Images/audi.jpg";

const Brands = () => {
    return (
        <section className='grid lg:grid-cols-2'>

            {/* Brand 1 Starts From Here */}
            <Link to="" class="relative block bg-black group">
                <img alt="Developer" src={bmw} class="absolute inset-0 object-cover w-full h-full opacity-75 transition-opacity group-hover:opacity-50" />

                <div class="relative p-8">

                    <h2 class="text-white">BMW</h2>

                    <div class="lg:mt-64">
                        <div class="opacity-0 transition-all transform translate-y-8 group-hover:opacity-100 group-hover:translate-y-0">
                            <p class="text-sm text-white">
                                The special fascination of the BMW Group not only lies in its products and technology, but also in the company’s history, written by inventors, pioneers and brilliant designers. Today, the BMW Group, with its 31 production and assembly facilities in 15 countries as well as a global sales network, is the world’s leading manufacturer of premium automobiles and motorcycles, and provider of premium financial and mobility services.
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
            {/* Brand 1 Ends Here */}

            {/* Brand 2 Starts From Here */}
            <Link to="" class="relative block bg-black group">
                <img alt="Developer" src={audi} class="absolute inset-0 object-cover w-full h-full opacity-75 transition-opacity group-hover:opacity-50" />

                <div class="relative p-8">

                    <h2 class="text-white">Audi</h2>

                    <div class="lg:mt-64">
                        <div class="opacity-0 transition-all transform translate-y-8 group-hover:opacity-100 group-hover:translate-y-0">
                            <p class="text-sm text-white">
                                The AUDI AG stands for sporty vehicles, high build quality and progressive design – for “Vorsprung durch Technik.” The Audi Group is among the world’s leading producers of premium cars. To play an instrumental role in shaping the transformation as we head into a new age of mobility the Company is implementing its strategy step by step.
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
            {/* Brand 2 Ends Here */}

            {/* Brand 3 Starts From Here */}
            <Link to="" class="relative block bg-black group">
                <img alt="Developer" src={mercedez} class="absolute inset-0 object-cover w-full h-full opacity-75 transition-opacity group-hover:opacity-50" />

                <div class="relative p-8">

                    <h2 class="text-white">Mercedes</h2>

                    <div class="lg:mt-64">
                        <div class="opacity-0 transition-all transform translate-y-8 group-hover:opacity-100 group-hover:translate-y-0">
                            <p class="text-sm text-white">
                                Mercedes-Benz USA is committed to Driving Your Future, our corporate social responsibility program designed to empower the next generation. Through partnerships with nonprofit organizations Junior Achievement USA®, Safe Kids Worldwide®, and Johnny Mac Soldiers Fund, the initiative will support educational programs around technology and sustainability, career readiness, and child and teen injury prevention.
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
            {/* Brand 3 Ends Here */}

            {/* Brand 4 Starts From Here */}
            <Link to="" class="relative block bg-black group">
                <img alt="Developer" src={tesla} class="absolute inset-0 object-cover w-full h-full opacity-75 transition-opacity group-hover:opacity-50" />

                <div class="relative p-8">

                    <h2 class="text-white">Tesla</h2>

                    <div class="lg:mt-64">
                        <div
                            class="opacity-0 transition-all transform translate-y-8 group-hover:opacity-100 group-hover:translate-y-0">
                            <p class="text-sm text-white">
                                Tesla, Inc. is an American multinational automotive and clean energy company headquartered in Austin, Texas. Tesla designs and manufactures electric vehicles, battery energy storage from home to grid-scale, solar panels and solar roof tiles, and related products and services.
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
            {/* Brand 4 Ends Here */}

        </section>
    );
};

export default Brands;