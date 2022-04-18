import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
const Confirmation = () => {
    const [done, setDone] = useState(0);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        setDone(1);
    };

    if (done) {
        setTimeout(() => {
            const msg = document.getElementById('msg');
            msg.style.display = "flex";
        }, [0])
        setTimeout(() => {
            const msg = document.getElementById('msg');
            msg.style.display = "none";
        }, [3000])
        setDone(0);
    }

    // watch input value by passing the name of it


    return (
        <div className='lg:w-1/2 md:w-3/4 relative w-full mt-0 mb-10 mx-auto'>
            <div id="msg" className={`border-[1px] mx-auto right-1/2  mt-0 top-0 w-[300px] rounded-lg hidden items-center justify-center  border-violet-500`}>
                <h1 className='bg-violet-700 text-white w-full text-center rounded-lg px-5 py-3  font-bold text-lg'>Thanks For Your Booking</h1>
            </div>
            <h1 className='text-3xl text-violet-700 mb-10 mt-16 text-center'>Please provide your detail info</h1>


            < form className='mt-10' onSubmit={handleSubmit(onSubmit)}>

                {/* User name section with validation */}
                <h1 className='text-md  font-bold'>Username:</h1>
                <input placeholder='Enter Your User Name' className='w-[90%] rounded-lg outline-gray-600 h-[50px] mb-4 block border-2 border-indigo-500'  {...register("Username", { pattern: /^[A-Za-z]+$/i })} />
                {errors.Username && <span className='text-red-600'><FontAwesomeIcon icon={faXmarkCircle}></FontAwesomeIcon> Please Give Valid UserName <span className='text-green-700'>(Only character is valid)</span> </span>}


                <h1 className='text-md  font-bold'>Mobile Number:</h1>
                {/* Phone Number section with validation */}
                <input placeholder='Enter Your Mobile Number' className='w-[90%] rounded-lg outline-gray-600 h-[50px] mb-4 block border-2 border-indigo-500'  {...register("phoneNumber", { pattern: /^[0-9]+$/ })} />
                {errors.phoneNumber && <span className='text-red-600'><FontAwesomeIcon icon={faXmarkCircle}></FontAwesomeIcon> Please Give Valid Mobile Number <span className='text-green-700'>(Only NUmber is valid)</span> </span>}



                <h1 className='text-md  font-bold'>Address:</h1>
                {/* Address section with validation */}
                <input placeholder='Enter Your Detail Address' className='w-[90%] rounded-lg outline-gray-600 h-[50px] mb-4 block border-2 border-indigo-500'  {...register("Address", { required: true })} />
                {errors.Address && <span className='text-red-600'><FontAwesomeIcon icon={faXmarkCircle}></FontAwesomeIcon> This field is required</span>}



                <h1 className='text-md  font-bold'>Email:</h1>
                {/* Email Section With required field state */}
                <input placeholder='Enter Your Email' className='w-[90%] h-[50px] rounded-lg outline-gray-600 block border-2 border-indigo-500' {...register("email", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.email && <span className='text-red-600'><FontAwesomeIcon icon={faXmarkCircle}></FontAwesomeIcon> This field is required</span>}





                {/* Submit Button with onsubmit hook function */}
                <input className='text-center block cursor-pointer   w-[90%] ] mx-auto  my-6 text-lg py-4 border-[1px] font-semibold ml-5 border-black hover:text-[#6C05F6] duration-300 hover:border-[#6C05F6] bg-violet-700 hover:bg-white text-white   rounded-full' type="submit" />


            </form>
        </div >
    );
};

export default Confirmation;