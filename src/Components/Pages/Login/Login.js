import { faEnvelope, faLock, faMailBulk, faMailReply, faMessage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import google from './../../../images/google.png';
import github from './../../../images/github.png';
import facebook
    from './../../../images/facebook.png';
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='mt-10'>

            <form className='w-[100%] md:w-[500px] login border-2 mb-10 mx-auto rounded-lg h-auto h-[900px]' >
                <div>
                    <h1 className='font-bold text-center '>To Continue, log in to <span className='text-[#6C05F6]'>GYM GURU</span> </h1>
                    <button className='text-center hover:text-[#6C05F6] hover:border-[#6C05F6] flex items-center justify-evenly  w-[90%] ] mx-auto  my-6 text-lg py-4 border-[1px] font-semibold border-black bg-white text-black rounded-full'><img className='w-[30px]' src={google} alt="" /> <span>CONTINUE WITH TO GOOGLE</span></button>
                    <button className='text-center flex items-center justify-evenly  w-[90%] ] mx-auto  my-6 text-lg py-4 border-[1px] font-semibold border-black bg-[#3764B9] text-white rounded-full'><img className='w-[30px]' src={facebook} alt="" /><span>CONTINUE WITH TO FACEBOOK</span></button>
                    <button className='text-center hover:text-[#6C05F6] hover:border-[#6C05F6] flex items-center justify-evenly  w-[90%] ] mx-auto  my-6 text-lg py-4 border-[1px] font-semibold border-black bg-white text-black rounded-full'><img className='w-[30px]' src={github} alt="" /><span>CONTINUE WITH TO GITHUB</span>
                    </button>
                </div>
                <div className='flex items-center justify-center'>
                    <hr className='w-[40%] h-[2px] bg-[#6C05F6]' /><span className='block mx-3 font-bold'>OR</span><hr className='w-[40%] h-[2px] bg-[#6C05F6]' />
                </div>
                <h1 className='text-center text-[#6C05F6] font-bold text-3xl my-6'>LOG IN</h1>
                <label className='text-lg font-semibold mx-14 my-10' htmlFor="Email">Email</label>
                <div className='flex my-5 items-center'>
                    <p className='h-[50px] flex items-center justify-center w-[10%] border-[1px]'><FontAwesomeIcon className='h-[30px]' icon={faEnvelope}></FontAwesomeIcon></p>
                    <input className='w-[90%] text-xl h-[50px] border-[1px]' type="email" name="" id="" />
                </div>
                <label className='text-lg font-semibold mx-14 my-10' htmlFor="Password">Password</label>
                <div className='flex my-5 items-center'>
                    <p className='h-[50px] flex items-center justify-center w-[10%] border-[1px]'><FontAwesomeIcon className='h-[30px] font-semibold' icon={faLock}></FontAwesomeIcon></p>
                    <input className='w-[90%] text-xl h-[50px] border-[1px]' type="password" name="" id="" />
                </div>
                <div className='flex items-center justify-between'>
                    <h1 className='text-center hover:text-red-500'>Forgot Password?</h1>
                    <button className='px-16 block mr-0 justify-end  w-[90%] lg:w-[60%]   my-6 text-xl py-4 border-2 border-[#6C05F6] font-bold duration-500 bg-[#6C05F6] text-white hover:text-[#6C05F6] hover:border-[#6C05F6] hover:bg-white rounded-full'>LOG IN</button>
                </div>


                <h1 className='text-center text-2xl font-bold text-[#6C05F6]'>Don't Have An Account ?</h1>
                <Link to="/register"> <button className='text-center block   w-[90%] ] mx-auto  my-6 text-lg py-4 border-[1px] font-semibold border-black hover:text-[#6C05F6] hover:border-[#6C05F6] bg-white text-black rounded-full'>SIGN UP TO GYMGURU</button></Link>




            </form>
        </div>
    );
};

export default Login;