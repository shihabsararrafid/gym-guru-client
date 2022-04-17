import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import gymLogo from './../../../../2599735.png';
import bar from '../../../../images/bars-solid.svg';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import CustomLink from '../../../CustomLink/CustomLink';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className={`h-[100px] ${open ? 'h-[200px]' : 'h-[100px]'} bg-black text-white  flex items-center justify-between`}>
            <div className="left-nav flex mx-8 items-center">

                <img className='rounded-full w-[80px]' src={gymLogo} alt="" />
                <h1 className='lg:text-4xl text-2xl text-[white]  mx-5 font-bold'>GYM GURU</h1>
            </div>



            <nav className={` lg:flex ${open ? 'flex' : 'hidden'} ${open ? 'flex-col' : 'hidden'} flex-row ${open ? 'w-[70px]' : 'hidden'} lg:w-[50%] text-xl uppercase font-bold justify-around`}>
                <div className='group'>
                    <CustomLink className='block hover:text-[#07F31F] box-border duration-700 border-black' to="/home">Home</CustomLink>
                    <div className='border-b-2   -translate-x-14  group-hover:translate-x-0  group-hover:border-[#07F31F] duration-700 border-black'></div>
                </div>
                <div className='group'>
                    <CustomLink className='block hover:text-[#07F31F] box-border duration-700 border-black' to="/services">Services</CustomLink>
                    <div className='border-b-2   -translate-x-14  group-hover:translate-x-0  group-hover:border-[#07F31F] duration-700 border-black'></div>
                </div>
                <div className='group'>
                    <CustomLink className='block hover:text-[#07F31F] box-border duration-700 border-black' to="/about">About</CustomLink>
                    <div className='border-b-2   -translate-x-14  group-hover:translate-x-0  group-hover:border-[#07F31F] duration-700 border-black'></div>
                </div>
                <div className='group'>
                    <CustomLink className='block hover:text-[#07F31F] box-border duration-700 border-black' to="/blogs">Blogs</CustomLink>
                    <div className='border-b-2   -translate-x-14  group-hover:translate-x-0  group-hover:border-[#07F31F] duration-700 border-black'></div>
                </div>
                <div className='group'>
                    <CustomLink className='block hover:text-[#07F31F] box-border duration-700 border-black' to="/login">Login</CustomLink>
                    <div className='border-b-2   -translate-x-14  group-hover:translate-x-0  group-hover:border-[#07F31F] duration-700 border-black'></div>
                </div>
            </nav>
            <div className='lg:hidden block '>
                <FontAwesomeIcon onClick={() => setOpen(!open)} className='w-[40px]' icon={faBars}></FontAwesomeIcon>
            </div>





            {/*<CustomLink to="/services">Services</CustomLink>
               <CustomLink to="/about">About</CustomLink>
               <CustomLink to="/blogs">Blog</CustomLink>
               <CustomLink to="/login">Login</CustomLink> */}



        </div>
    );
};

export default Header;