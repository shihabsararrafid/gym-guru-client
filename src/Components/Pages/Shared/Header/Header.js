import React from 'react';
import { Link } from 'react-router-dom';
import gymLogo from './../../../../2599735.png';
import './Header.css';

const Header = () => {
    return (
        <div className='h-[100px] bg-[#6C09F1] text-white  flex items-center justify-between'>
            <div className="left-nav flex mx-8 items-center">

                <img className='rounded-full w-[80px]' src={gymLogo} alt="" />
                <h1 className='text-4xl mx-5 font-semibold'>GYM KING</h1>
            </div>
            <nav className='flex w-[50%] text-xl uppercase font-bold justify-around'>
                <div className='group'>
                    <Link className='block hover: box-border duration-700 border-black' to="/home">Home</Link>
                    <div className='border-b-2   -translate-x-14  group-hover:translate-x-0  group-hover:border-[#07F3EA] duration-700 border-[#6C09F1]'></div>
                </div>
                <div className='group'>
                    <Link className='block hover: box-border duration-700 border-black' to="/services">Services</Link>
                    <div className='border-b-2   -translate-x-14  group-hover:translate-x-0  group-hover:border-[#07F3EA] duration-700 border-[#6C09F1]'></div>
                </div>
                <div className='group'>
                    <Link className='block hover: box-border duration-700 border-black' to="/about">About</Link>
                    <div className='border-b-2   -translate-x-14  group-hover:translate-x-0  group-hover:border-[#07F3EA] duration-700 border-[#6C09F1]'></div>
                </div>
                <div className='group'>
                    <Link className='block hover: box-border duration-700 border-black' to="/blog">Blog</Link>
                    <div className='border-b-2   -translate-x-14  group-hover:translate-x-0  group-hover:border-[#07F3EA] duration-700 border-[#6C09F1]'></div>
                </div>
                <div className='group'>
                    <Link className='block hover: box-border duration-700 border-black' to="/login">Login</Link>
                    <div className='border-b-2   -translate-x-14  group-hover:translate-x-0  group-hover:border-[#07F3EA] duration-700 border-[#6C09F1]'></div>
                </div>

                {/* <Link to="/services">Services</Link>
                <Link to="/about">About</Link>
                <Link to="/blogs">Blog</Link>
                <Link to="/login">Login</Link> */}
            </nav>
        </div>
    );
};

export default Header;