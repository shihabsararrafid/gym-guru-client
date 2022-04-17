import React from 'react';
import banner from './../../../../images/Banner/young-handsome-man-sportswear-gym-min.jpg';
import './Banner.css';
const Banner = () => {
    return (
        <div>
            <div className='banner w-[100%] flex justify-center items-center mb-10 h-auto lg:h-[800px]'>

                <div className="right-banner text-white ">
                    <h1 className='lg:text-7xl text-3xl mx-10' >HELLO THIS IS
                        <p className='text-[#6C05F6] font-bold'>SHEVRON MARCO</p> </h1>
                    <p className='w-[40%] mt-10 mx-10 text-white'>A Gym Trainer , have a experience over 10 years and being suucessful for many body transfromation .I have an experience to work with different types of people .Nowadays , in our busy life we often find difficulties to maintain our health fit . Due to lots of pressure of daily life many of us becoming bulky day by day . So , it's become obvious to do some workout daily .  </p>
                </div>
            </div>
        </div>

    );
};

export default Banner;