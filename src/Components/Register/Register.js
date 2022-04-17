import { faContactBook, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import google from './../../images/google.png';
import github from './../../images/github.png';
import facebook
    from './../../images/facebook.png';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='mt-10'>

            <form className=' w-[100%] md:w-[500px] login border-2 mb-10 mx-auto rounded-lg h-auto md:h-[1200px]' >
                {/* Buttons for social login */}








                <div>
                    <h1 className='font-bold text-center '>SIGN UP FOR FREE TO <span className='text-[#6C05F6]'>GYM GURU</span> </h1>
                    <button className='text-center hover:text-[#6C05F6] hover:border-[#6C05F6] flex items-center justify-evenly  w-[90%] ] mx-auto  my-6 text-lg py-4 border-[1px] font-semibold border-black bg-white text-black rounded-full'><img className='w-[30px]' src={google} alt="" /> <span>SIGN UP WITH GOOGLE</span></button>
                    <button className='text-center flex items-center justify-evenly  w-[90%] ] mx-auto  my-6 text-lg py-4 border-[1px] font-semibold border-black bg-[#3764B9] text-white rounded-full'><img className='w-[30px]' src={facebook} alt="" /><span>SIGN UP WITH FACEBOOK</span></button>
                    <button className='text-center hover:text-[#6C05F6] hover:border-[#6C05F6] flex items-center justify-evenly  w-[90%] ] mx-auto  my-6 text-lg py-4 border-[1px] font-semibold border-black bg-white text-black rounded-full'><img className='w-[30px]' src={github} alt="" /><span>SIGN UP WITH GITHUB</span>
                    </button>
                </div>





                {/* horijontal line for separating the two section */}
                <div className='flex items-center justify-center'>
                    <hr className='w-[40%] h-[2px] bg-[#6C05F6]' /><span className='block mx-3 font-bold'>OR</span><hr className='w-[40%] h-[2px] bg-[#6C05F6]' />
                </div>
                <h1 className='text-center text-[#6C05F6] font-bold text-3xl my-6'>SIGN UP</h1>




                {/* Input field for eamil and password login */}
                <label className='text-sm font-bold mx-14 mt-10' htmlFor="Email">WHAT'S YOUR NAME?</label>
                <div className='flex my-5 items-center'>
                    <p className='h-[50px] flex items-center justify-center w-[10%] border-[1px]'><FontAwesomeIcon className='h-[30px]' icon={faContactBook}></FontAwesomeIcon></p>
                    <input className='w-[90%] text-xl h-[50px] border-[1px]' placeholder='Enter a profile name' type="text" name="name" id="" />
                </div>
                <p className='text-gray-500 mb-10 ml-[30px]'>This appears on your profile</p>
                <label className='text-sm font-bold mx-14 my-10' htmlFor="Email">WHAT'S YOUR EMAIL?</label>
                <div className='flex my-5 items-center'>
                    <p className='h-[50px] flex items-center justify-center w-[10%] border-[1px]'><FontAwesomeIcon className='h-[30px]' icon={faEnvelope}></FontAwesomeIcon></p>
                    <input className='w-[90%] text-xl h-[50px] border-[1px]' placeholder='Enter Your Email' type="email" name="email" id="" />
                </div>
                <label className='text-sm font-bold uppercase mx-14 my-10' htmlFor="Password">CREATE a Password</label>
                <div className='flex my-5 items-center'>
                    <p className='h-[50px] flex items-center justify-center w-[10%] border-[1px]'><FontAwesomeIcon className='h-[30px] font-semibold' icon={faLock}></FontAwesomeIcon></p>
                    <input className='w-[90%] text-xl h-[50px] border-[1px]' placeholder='Create a Password' type="password" name="password" id="" />
                </div>
                <label className='text-sm font-bold uppercase mx-14 my-10' htmlFor="Confirm Password">Confirm your Password</label>
                <div className='flex my-5 items-center'>
                    <p className='h-[50px] flex items-center justify-center w-[10%] border-[1px]'><FontAwesomeIcon className='h-[30px] font-semibold' icon={faLock}></FontAwesomeIcon></p>
                    <input className='w-[90%] text-xl h-[50px] border-[1px]' placeholder='Confirm Your Password' type="password" name="confirm password" id="" />
                </div>
                <div className='flex items-center justify-between'>
                    <h1 className='text-center hover:text-red-500'>Forgot Password?</h1>
                    <button className='px-16 block mr-0 justify-end  w-[90%] lg:w-[60%]   my-6 text-xl py-4 border-2 border-[#6C05F6] font-bold duration-500 bg-[#6C05F6] text-white hover:text-[#6C05F6] hover:border-[#6C05F6] hover:bg-white rounded-full'>SIGN UP</button>
                </div>


                <h1 className='text-center text-2xl font-bold text-[#6C05F6]'>Already have an account? </h1>
                <Link to="/login"> <button className='text-center block   w-[90%] ] mx-auto  my-6 text-lg py-4 border-[1px] font-semibold border-black hover:text-[#6C05F6] hover:border-[#6C05F6] bg-white text-black rounded-full'>LOG IN  TO GYMGURU</button></Link>




            </form>
        </div>
    );
};

export default Register;