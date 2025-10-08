import React from 'react';
import error from '../assets/error-404.png'
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className='text-center'>
                <img className='' src={error} alt="" />
                <h1 className='text-[48px]  font-semibold'>Oops, page not found!</h1>
                <p className='text-xl text-[#627382]'>The page you are looking for is not available.</p>
                <Link to='/'><button className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] btn text-white text-[16px] font-semibold'>Go Back!</button>  </Link>
            </div>
        </div>
    );
};

export default ErrorPage;