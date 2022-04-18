import React from 'react';
import myimg from './../../../images/my-bg.png';
import education from './../../../images/about/mortarboard.png';
import goal from './../../../images/about/goal.png';
import hard from './../../../images/about/struggle.png';
const About = () => {
    return (
        <div className='mb-10'>
            <div className='grid lg:grid-cols-2 grid-cols-1 items-center justify-around mx-10 w-full'>

                <div>
                    <h1 className='text-3xl'>Assalamu Alaikum,I am </h1>
                    <h1 className='text-2xl'>
                        <span className='lg:text-5xl text-3xl text-violet-600 uppercase'>Shihab Sarar Islam Rafid</span> </h1>
                    <p>From Netrokona ,Bangladesh </p>

                </div>
                <div>
                    <img className='lg:w-[60%] w-[80%]   ' src={myimg} alt="" />
                </div>
            </div>
            <h1 className='text-violet-600 ml-6 font-bold text-4xl mt-6'>MY INFO:</h1>
            <hr className='w-[160px] h-[2px] mb-7 ml-6 bg-gray-600' />
            <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-10 mx-5'>
                <div className='rounded-lg shadow-2xl shadow-gray-400'>
                    <h1 className='text-2xl text-center text-[#6C05F6] uppercase font-bold'>education :</h1>
                    <img className='w-[120px] block mx-auto' src={education} alt="" />
                    <p className='text-justify p-4'> At present , I am studying Computer Science And Engineering in Rajshahi University Of Engineering And Technology.I am in the first semester now @ 2022</p>
                </div>

                <div className='rounded-lg shadow-2xl shadow-gray-400'>
                    <h1 className='text-2xl text-center text-[#6C05F6] uppercase font-bold'>
                        Goal:
                    </h1>
                    <img className='w-[120px]  block mx-auto' src={goal} alt="" />
                    <p className='text-justify p-4'>
                        My Goal is to be dedicated problem solver and a full stack developer .
                        I also want to take my varsity to ICPC final round in sha Allah .
                        For backend , I want to learn Python and it's famous framework DJango.
                    </p>
                </div>
                <div className='rounded-lg shadow-2xl shadow-gray-400'>
                    <h1 className='text-2xl text-center text-[#6C05F6] font-bold uppercase'>
                        Mission:
                    </h1>
                    <img className='w-[120px]  block mx-auto' src={hard} alt="" />
                    <p className='text-justify p-4'>
                        I want to learn more data structure and algorithm .For enhance my problem solving skill I want to participate more competitive programming contest in both offline and online. I want to work hard .
                    </p>
                </div>
            </div>

        </div>

    );
};

export default About;