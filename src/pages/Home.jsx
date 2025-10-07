import React from 'react';
import play from '../assets/fi_16076057.png'
import app from '../assets/fi_5977575.png'

const Home = () => {
    return (

        <div>
            {/* hero */}
            <div className='flex flex-col items-center'>
                <h1 className='font-bold text-[72px] max-w-[600px] text-center'>We Build
                    <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'> Productive</span> Apps
                </h1>
                <p className='text-[#627382] py-[16px] text-center'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='flex justify-center gap-[16px] py-[40px]'>
                    <button className='btn border-[#D2D2D2] text-xl p-[24px]'><img className='' src={play} alt="" /> Google Play</button>
                    <button className='btn border-[#D2D2D2]  text-xl p-[24px]'><img src={app} alt="" />App Store</button>
        
                </div>
            </div>
        </div>
    );
};

export default Home;