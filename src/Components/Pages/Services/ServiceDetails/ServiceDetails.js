import React from 'react';

const ServiceDetails = ({ service }) => {
    return (
        <div className='bg-white rounded-lg   text-black'>
            <h1 className='uppercase text-center text-violet-700  font-bold py-4'>{service.name}</h1>
            <img className='w-[120px] block mx-auto' src={service.img} alt="" />
            <p className='p-4  text-justify'>{service.deatils}</p>
            <marquee behavior="" direction=""><h1 className='p-4 font-bold text-violet-700 text-justify'>Price : ${service.price}/Month</h1></marquee>
            <button className='px-16 block mr-0 justify-end   w-[100%]    my-6 text-xl py-4 border-2  font-bold duration-500 bg-[black] text-white hover:text-violet-700 hover:border-violet-700 hover:bg-white rounded-full'>BOOK NOW</button>
        </div>
    );
};

export default ServiceDetails;