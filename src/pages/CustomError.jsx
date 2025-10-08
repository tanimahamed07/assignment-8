import React from 'react';
import custom from '../assets/App-Error.png'
import { Link } from 'react-router';
const CustomError = () => {
    return (
        <div className='flex flex-col justify-center items-center text-center'>
            <div><img src={custom} alt="" /></div>
            <h1 className='text-[48px]  font-semibold'>OPPS!! APP NOT FOUND</h1>
            <p className='text-xl text-[#627382]'>The App you are requesting is not found on our system.  please try another apps</p>      
           <Link to='/'><button className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] btn text-white text-[16px] font-semibold'>Go Back!</button>  </Link> 
        </div>
    );
};

export default CustomError;