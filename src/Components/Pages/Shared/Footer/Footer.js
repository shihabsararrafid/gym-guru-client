import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import gymLogo from './../../../../2599735.png';
import instagram from './../../../../images/instagram.png';
import LineIcon from "react-lineicons";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FiTwitter, FiFacebook } from "react-icons/fi";

const Footer = () => {
    let currentyear = new Date();
    let year = currentyear.getFullYear();
    return (
        <div>
            <div className='lg:h-[300px] text-white bg-black justify-around border-2 absolute w-[100%] items-center flex lg:flex-row flex-col border-black '>
                <div>
                    <img className='rounded-full w-[60px]' src={gymLogo} alt="" />
                </div>
                <div>
                    <p className='text-[#919496] text-lg  cursor-pointer'>About</p>
                    <p className='my-2 hover:text-green-600 cursor-pointer'>Jobs</p>
                    <p className='my-2 hover:text-green-600 cursor-pointer'>Location</p>
                </div>
                <div>
                    <h1 className='text-[#919496] text-lg cursor-pointer'>Communities</h1>
                    <p className='my-2 hover:text-green-600 cursor-pointer'>For Children</p>
                    <p className='my-2 hover:text-green-600 cursor-pointer'>For Men</p>
                    <p className='my-2 hover:text-green-600 cursor-pointer'>For Women</p>

                </div>
                <div>
                    <h1 className='text-[#919496] text-lg cursor-pointer'>Useful Links</h1>
                    <p className='my-2 hover:text-green-600 cursor-pointer'>Support</p>
                    <p className='my-2 hover:text-green-600 cursor-pointer'>Free Mobile App</p>
                </div>
                <div className=''>
                    {/* <LineIcon name="instagram"></LineIcon>
                <LineIcon name="facebbok"></LineIcon>
                <LineIcon name="twitter"></LineIcon> */}

                    <FaInstagram className='my-3 cursor-pointer' size={40}></FaInstagram>
                    <FiTwitter className='my-3 cursor-pointer' size={40}></FiTwitter>
                    <FiFacebook className='my-3 cursor-pointer' size={40}></FiFacebook>

                </div>
                <div className='text-white bg-black'>
                    <p>&copy; Maco the Gym trainer </p>
                    <p>{year}</p>
                </div>
            </div>

        </div>

    );
};

export default Footer;