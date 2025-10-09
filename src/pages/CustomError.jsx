import React from 'react';
import custom from '../assets/App-Error.png'
import { Link } from 'react-router';
const CustomError = () => {
    return (
        <div className="flex flex-col justify-center items-center text-center px-3 py-8 space-y-3 sm:px-4 sm:py-10 sm:space-y-4">
            <div className="w-[220px] sm:w-[400px]">
                <img src={custom} alt="Not Found" className="w-full h-auto" />
            </div>
            <h1 className="text-[22px] sm:text-[48px] font-semibold">OOPS!! APP NOT FOUND </h1>
            <p className="text-[14px] sm:text-xl text-[#627382] max-w-[320px] sm:max-w-[600px]">
                The App you are requesting is not found on our system. Please try another app.
            </p>
            <Link to="/">
                <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] btn text-white text-[14px] sm:text-[16px] font-semibold px-5 py-2"> Go Back!
                </button>
            </Link>
        </div>
    );
};

export default CustomError;