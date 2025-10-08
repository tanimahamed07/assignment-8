import React from 'react';
import { HashLoader } from 'react-spinners';

const Spinner = () => {
    return (
        <div className='flex flex-col h-[80vh] justify-center items-center '>
            <HashLoader></HashLoader>
        </div>
    );
};

export default Spinner;