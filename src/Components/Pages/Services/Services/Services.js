import React from 'react';
import body from './../../../../images/services/muscles.png';
import kardio from './../../../../images/services/treadmill.png';
import dev from './../../../../images/services/exercising-with-gymnastic-ball.png';
import chart from './../../../../images/services/stats.png';
const Services = () => {
    return (
        <div className='bg-black text-white'>
            <div className='font-semibold p-7'>
                <h1 className='text-4xl text-center'>WHY CHOICE ME ?</h1>
                <p className='text-lg text-center'>I am offering a large type of services with a less amount of money. I assure you that I will be with you untill you work hard.</p>
            </div>
            <div>
                <h1 className='text-5xl mx-10 font-semibold'>Services</h1>
                <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-10 p-16'>
                    <div className='bg-white rounded-lg   text-black'>
                        <h1 className='uppercase text-center text-violet-700  font-bold py-4'>Body building</h1>
                        <img className='w-[120px] block mx-auto' src={body} alt="" />
                        <p className='p-4  text-justify'>Bodybuilding is the use of progressive resistance exercise to control and develop one's muscles by muscle hypertrophy for aesthetic purposes.I will help you to build your muscle strong.</p>
                        <marquee behavior="" direction=""><h1 className='p-4 font-bold text-violet-700 text-justify'>Price : $99/Month</h1></marquee>
                        <button className='px-16 block mr-0 justify-end   w-[100%]    my-6 text-xl py-4 border-2  font-bold duration-500 bg-[black] text-white hover:text-violet-700 hover:border-violet-700 hover:bg-white rounded-full'>BOOK NOW</button>
                    </div>
                    <div className='bg-white rounded-lg shadow-2xl   text-black'>
                        <h1 className='uppercase text-violet-700  text-center font-bold py-4'>Cardio Work</h1>
                        <img className='w-[120px] block mx-auto' src={kardio} alt="" />
                        <p className='p-4  text-justify'>
                            Cardio exercise, which is sometimes referred to as aerobic exercise, is any rhythmic activity that raises your heart rate into your target heart rate zone. This is specially for the bulky people who has more fat and weight in his body.
                        </p>
                        <marquee behavior="" direction=""><h1 className='p-4 font-bold text-violet-700 text-justify'>Price : $45/Month</h1></marquee>

                        <button className='px-16 block mr-0 justify-end  w-[100%]     my-6 text-xl py-4 border-2  font-bold duration-500 bg-[black] text-white hover:text-violet-700 hover:border-violet-700 hover:bg-white rounded-full'>BOOK NOW </button>
                    </div>
                    <div className='bg-white rounded-lg  text-black'>
                        <h1 className='uppercase text-violet-700  text-center font-bold py-4'>Dev Muscles</h1>
                        <img className='w-[120px] block mx-auto' src={dev} alt="" />
                        <p className='p-4  text-justify'>In this case , we specially  care at preserving muscle . Sometimes , when we do irregular and unhealthy diet chart to lose our weight then we face a problem that our muscle may be lost without losing the fat. In this case , we specially care about that type of people. </p>
                        <marquee behavior="" direction=""><h1 className='p-4 font-bold text-violet-700 text-justify'>Price : $59/Month</h1></marquee>
                        <button className='px-16 block mr-0 justify-end   w-[100%]    my-6 text-xl py-4 border-2  font-bold duration-500 bg-[black] text-white hover:text-violet-700 hover:border-violet-700 hover:bg-white rounded-full'>BOOK NOW</button>
                    </div>
                    <div className='bg-white rounded-lg  text-black'>
                        <h1 className='uppercase text-violet-700  text-center font-bold py-4'>Dynamo Fitness</h1>
                        <img className='w-[120px] block mx-auto' src={chart} alt="" />
                        <p className='p-4  text-justify'>This is specially for the people who want to  achieve their goal to be fit. To lose weigth it is more important to control the food . In survey , it has been said that losing weight 70-80% dependent on food and rest percentage dependent on exercise. I will provide you the exact food chart as your need.</p>
                        <marquee behavior="" direction=""><h1 className='p-4 font-bold text-violet-700 text-justify'>Price : $85/Month</h1></marquee>
                        <button className='px-16 block mr-0 justify-end  w-[100%]    my-6 text-xl py-4 border-2  font-bold duration-500 bg-[black] text-white hover:text-violet-700 hover:border-violet-700 hover:bg-white rounded-full'>BOOK NOW</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;