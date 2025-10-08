import React from 'react';
import error from '../assets/error-404.png'

const ErrorPage = () => {
    return (
        <div className='flex items-center justify-center'>
            <div><img src={error} alt="" /></div>
            <h1 className='text-[48px]  font-semibold'>Oops, page not found!</h1>
            <p className='text-xl text-[#627382]'>The page you are looking for is not available.</p>
        </div>
    );
};

export default ErrorPage;