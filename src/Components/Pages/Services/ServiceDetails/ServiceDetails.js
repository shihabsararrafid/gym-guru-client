import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceDetails = ({ service }) => {
    const navigate = useNavigate();
    const id = service.id;
    const proceed = (id, destination) => {
        navigate(destination);

    }
    return (
        <div className='bg-white rounded-lg group hover:bg-violet-400 hover:text-white duration-300  text-black'>
            <h1 className='uppercase group-hover:text-white text-center text-violet-700  font-bold py-4'>{service.name}</h1>
            <img className='w-[120px] block mx-auto' src={service.img} alt="" />
            <p className='p-4  text-justify'>{service.deatils}</p>
            <marquee behavior="" direction=""><h1 className='p-4 font-bold group-hover:text-white text-violet-700 text-justify'>Price : ${service.price}/Month</h1></marquee>
            <button onClick={() => navigate('/checkout', { state: { id } })} className='px-16 block mr-0 justify-end   w-[100%]    my-6 text-xl py-4 border-2  font-bold duration-500 bg-[black] text-white hover:text-violet-700 hover:border-violet-700 hover:bg-white rounded-full'>BOOK NOW</button>
        </div>
    );
};

export default ServiceDetails;