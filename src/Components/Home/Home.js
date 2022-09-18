import React from 'react';
import Banner from './Inside-Home/Banner';
import Brands from './Inside-Home/Brands';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <Brands />
            <Services></Services>
        </div>
    );
};

export default Home;