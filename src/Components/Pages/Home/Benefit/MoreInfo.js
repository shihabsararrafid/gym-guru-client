import React from 'react';
import sixPack from './../../../../images/benefit/six-pack.png';
import social from './../../../../images/benefit/community.png';
import stress from './../../../../images/benefit/self-esteem.png';
import sleeping from './../../../../images/benefit/sleeping.png';
import guidance from './../../../../images/benefit/guidance.png';
const MoreInfo = () => {
    return (
        <div className='mx-7 my-10'>
            <h1 className='text-4xl font-bold mb-10'>  Why should you go to <span className='uppercase text-[#6C05F6]'>gym </span> ?</h1>

            <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-10'>
                <div className=' rounded-lg shadow-2xl shadow-gray-400'>
                    <h1 className='text-2xl text-center text-[#6C05F6] font-bold'>Have a nice body</h1>
                    <img className='w-[120px] mt-5 block mx-auto' src={sixPack} alt="" />
                    <p className='p-7'>Being healthy is always great. It’s good for your body and it’s just good for your overall health and longevity.On another note, as dumb as it may sound, having a nice body can help you out more than you would think.</p>


                </div>
                <div className=' rounded-lg shadow-2xl shadow-gray-400'>
                    <h1 className='text-2xl text-center text-[#6C05F6] font-bold'>See your friends</h1>
                    <img className='w-[120px] mt-5 block mx-auto' src={social} alt="" />
                    <p className='p-7'>The gym can be a great place to socialize and see your friends. Now I’m not saying let it get in the way of your workout, but with proper gym socializing etiquette (yea I made that up) it can be a great way to catch up with your buddies.</p>
                </div>
                <div className=' rounded-lg shadow-2xl shadow-gray-400'>
                    <h1 className='text-2xl text-center text-[#6C05F6] font-bold'>Great way to relieve stress</h1>
                    <img className='w-[120px] mt-5 block mx-auto' src={stress} alt="" />
                    <p className='p-7'>Hitting the gym is one of the best stress relievers there is.So hit the gym, turn that phone off and do your body some good.</p>
                </div>
                <div className=' rounded-lg shadow-2xl shadow-gray-400'>
                    <h1 className='text-2xl text-center text-[#6C05F6] font-bold'>Exercise promotes better sleep</h1>
                    <img className='w-[120px] mt-5 block mx-auto' src={sleeping} alt="" />
                    <p className='p-7'>Struggling to snooze? Regular physical activity can help you fall asleep faster, get better sleep and deepen your sleep. Just don't exercise too close to bedtime, or you may be too energized to go to sleep.</p>
                </div>
                <div className=' rounded-lg shadow-2xl shadow-gray-400'>
                    <h1 className='text-2xl text-center text-[#6C05F6] font-bold'>Get a proper Guidance</h1>
                    <img className='w-[120px] mt-5 block mx-auto' src={guidance} alt="" />
                    <p className='p-7'>You may do your exercise by own.But it has some problems .It may injure yourself as you don't know the proper usage of the supplements.In that case , I am here to serve you. </p>
                </div>
            </div>
        </div>
    );
};

export default MoreInfo;