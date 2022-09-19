import React from 'react';
import Banner from './Inside-Home/Banner';
import Brands from './Inside-Home/Brands';
import FAQ from './Inside-Home/FAQ';
import Services from './Services/Services';

const Home = () => {
    return (
        <section>
            <Banner />
            <Services></Services>
            <Brands />
            <FAQ />
        </section>
    );
};

export default Home;