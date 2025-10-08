import React from 'react';
import custom from '../assets/App-Error.png'
const CustomError = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div><img src={custom} alt="" /></div>
            <h1 className='text-[48px]  font-semibold'>OPPS!! APP NOT FOUND</h1>
            <p className='text-xl text-[#627382]'>The App you are requesting is not found on our system.  please try another apps</p>
        </div>
    );
};

export default CustomError;