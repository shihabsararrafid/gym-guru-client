import React from 'react';
import Carousel from 'react-elastic-carousel';
import Item from '../../../Item';
import Services from '../../Services/Services/Services';
import Banner from '../Banner/Banner';
import MoreInfo from '../Benefit/MoreInfo';
import img1 from './../../../../images/Carousel/anastase-maragos-7kEpUPB8vNk-unsplash-min.jpg';
import img2 from './../../../../images/Carousel/charles-gaudreault-xXofYCc3hqc-unsplash-min.jpg';
import img3 from './../../../../images/Carousel/karsten-winegeart-0Wra5YYVQJE-unsplash-min.jpg';
import img4 from './../../../../images/Carousel/logan-weaver-lgnwvr-Ug9ZVq24CIk-unsplash-min.jpg';
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];
const items = [
    { id: 1, url: img1 },
    { id: 2, url: img2 },
    { id: 3, url: img3 },
    { id: 4, url: img4 }
]
const Home = () => {
    return (

        < div className='mt-10'>
            {/* <Carousel className='ml-0' initialActiveIndex={0} itemsToScroll={1} itemPadding={[0, 10]} itemsToShow={1} > */}
            {/* <img src="./../../../../images/Carousel/anastase-maragos-7kEpUPB8vNk-unsplash-min.jpg" alt="" srcset="" />
                <Item><img src="./../../../../images/Carousel/charles-gaudreault-xXofYCc3hqc-unsplash-min.jpg" alt="" srcset="" /></Item>
                <Item>  <img src="./../../../../images/Carousel/karsten-winegeart-0Wra5YYVQJE-unsplash-min.jpg" alt="" srcset="" /></Item>
                <Item><img src="./../../../../images/Carousel/logan-weaver-lgnwvr-Ug9ZVq24CIk-unsplash-min.jpg" alt="" srcset="" /></Item> */}
            {/* <Item>1</Item>
                {

                }
                <Item>2</Item>
                <Item>3</Item>
                <Item>4</Item>
                <Item>5</Item>
                <Item>6</Item>
                <Item>7</Item>
                <Item>8</Item> */}

            {/* 
                {
                    items.map(item => <>
                        <img className='h-[500px] object-cover   w-full' key={item.id} src={item.url}></img>
                        <p>I am dijfdksjfk;las</p></>)
                }

            </Carousel> */}

            <Banner></Banner>
            <Services></Services>
            <MoreInfo></MoreInfo>
        </div >
    );
};

export default Home;