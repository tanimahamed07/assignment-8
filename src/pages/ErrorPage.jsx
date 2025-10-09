import React from 'react';
import error from '../assets/error-404.png'
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className="text-center px-4 py-10 md:px-0 md:py-0">
                <img
                    className="w-[250px] mx-auto mb-4 md:w-auto"
                    src={error}
                    alt="Error Illustration"
                />
                <h1 className="text-xl font-semibold mb-2 md:text-[48px]">
                    Oops, page not found!
                </h1>
                <p className="text-sm text-[#627382] mb-4 md:text-xl">
                    The page you are looking for is not available.
                </p>
                <Link to="/">
                    <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white text-sm font-semibold py-2 px-5 rounded-md shadow-sm hover:opacity-90 transition md:text-[16px] md:py-2.5 md:px-6">
                        Go Back!
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default ErrorPage;