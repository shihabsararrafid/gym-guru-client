import React, { useEffect, useState } from 'react';
import body from './../../../../images/services/muscles.png';
import kardio from './../../../../images/services/treadmill.png';
import dev from './../../../../images/services/exercising-with-gymnastic-ball.png';
import chart from './../../../../images/services/stats.png';
import yoga from './../../../../images/services/exercise.png';
import personal from './../../../../images/services/trainer.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id='services' className='bg-black text-white'>
            <div className='font-semibold p-7'>
                <h1 className='text-4xl text-center'>WHY CHOICE ME ?</h1>
                <p className='text-lg text-center'>I am offering a large type of services with a less amount of money. I assure you that I will be with you untill you work hard.</p>
            </div>
            <div>
                <h1 className='text-5xl mx-10 font-semibold'>Services</h1>
                <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-10 p-16'>
                    {

                        services.map(service => <ServiceDetails service={service} key={service.id}></ServiceDetails>)
                    }


                </div>

            </div>
        </div>
    );
};

export default Services;