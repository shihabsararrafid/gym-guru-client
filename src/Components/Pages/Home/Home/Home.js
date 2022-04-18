import React from 'react';


import Services from '../../Services/Services/Services';
import Banner from '../Banner/Banner';
import MoreInfo from '../Benefit/MoreInfo';
import img1 from './../../../../images/Carousel/anastase-maragos-7kEpUPB8vNk-unsplash-min.jpg';
import img2 from './../../../../images/Carousel/charles-gaudreault-xXofYCc3hqc-unsplash-min.jpg';
import img3 from './../../../../images/Carousel/karsten-winegeart-0Wra5YYVQJE-unsplash-min.jpg';
import img4 from './../../../../images/Carousel/logan-weaver-lgnwvr-Ug9ZVq24CIk-unsplash-min.jpg';

const Home = () => {
    return (

        < div className='mt-10'>


            <Banner></Banner>
            <Services></Services>
            <MoreInfo></MoreInfo>
        </div >
    );
};

export default Home;