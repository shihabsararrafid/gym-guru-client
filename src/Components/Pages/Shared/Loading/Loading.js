import React from 'react';
import imgLoad from './../../../../images/giphy.gif';
const Loading = () => {
    return (
        <div className='w-full h-auto'>
            <img src={imgLoad} alt="" />
        </div>
    );
};

export default Loading;