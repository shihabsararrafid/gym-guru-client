import { faArrowLeft, faArrowRight, faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Checkout = () => {
    const { state } = useLocation();
    const id = state.id;
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const selectedItem = services.find(service => service.id === id);
    // setInterval(() => {
    //     const line = document.getElementById('hr-line');
    //     line.style.display = "block";
    // }, 3000)
    // setInterval(() => {
    //     const line = document.getElementById('hr-line');
    //     line.style.display = "none";
    // }, 3000)
    setInterval(() => {
        const line = document.getElementById('heading');
        line.style.color = "#9805F6";
    }, 3000)
    setInterval(() => {
        const line = document.getElementById('heading');
        line.style.color = "violet";
    }, 5000)

    return (
        <div className=''>
            <h1 id='heading' className='text-center text-5xl  uppercase'>Checkout</h1>
            <hr id='hr-line' className='w-[230px] h-[3px] duration-500 hidden mx-auto bg-[black]' />
            <h1 className='text-center text-2xl my-10'>Hey , <span className='text-green-700 text-3xl'>RAFID</span> </h1>
            <p className='text-center text-xl block mb-5 text-red-500'>You have selected the follwing package:</p>

            <div className='bg-violet-500 rounded-xl shadow-2xl shadow-violet-100 mx-auto w-full lg:w-[30%] md:w-[79%] mb-6 border-[2px] '>
                <h1 className='text-2xl uppercase mb-6 font-semibold text-white text-center'>{selectedItem?.name}</h1>
                <div className='w-[100%]'>
                    <img className='w-[150px] p-5 bg-white rounded-full block mx-auto' src={selectedItem?.img} alt="" />
                </div>
                <p className='p-7 text-white text-justify'>{selectedItem?.deatils}</p>
            </div>
            <div className='mx-auto w-full lg:w-[30%] md:w-[79%] mb-14'>
                <p className='text-2xl'>This will cost you <span className='text-4xl text-violet-700'>${selectedItem?.price}</span> /Month</p>
                <p className='text-xl'>Are you ready to explore ?</p>

                <p className='text-xl flex items-center'>Then <button className='text-center block   w-[90%] ] mx-auto  my-6 text-lg py-4 border-[1px] font-semibold ml-5 border-black hover:text-[#6C05F6] hover:border-[#6C05F6] bg-violet-700 hover:bg-white text-white   rounded-full'>Confirm <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button> </p>
            </div>
            <div className='mx-auto w-full lg:w-[30%] md:w-[79%] mb-14'>
                <div className='flex items-center justify-center'>
                    <hr className='w-[40%] h-[2px] bg-[#6C05F6]' /><span className='block mx-3 font-bold'>OR</span><hr className='w-[40%] h-[2px] bg-[#6C05F6]' />
                </div>
                <p className='block mx-auto w-[80%] mb-7 text-2xl'>Are you confused?</p>
                <p className='font-bold text-lg text-violet-600'>Then feel free to have a free trial for 7 days.</p><button className='text-center block   w-[90%] ] mx-auto  my-6 text-lg py-4 border-[1px] font-semibold border-black hover:text-[#6C05F6] hover:border-[#6C05F6] bg-white text-black rounded-full'>CONFIRM FREE TRIAL<FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default Checkout;