import React from 'react';
import play from '../assets/fi_16076057.png'
import app from '../assets/fi_5977575.png'
import hero from '../assets/hero.png'

const Hero = () => {
    return (
        <div>
            <div className='flex flex-col items-center'>
                <h1 className='font-bold text-[72px] max-w-[600px] text-center'>We Build
                    <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'> Productive</span> Apps
                </h1>
                <p className='text-[#627382] py-[16px] text-center'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='flex justify-center gap-[16px] py-[40px]'>
                    <a href='https://play.google.com/store/games'><button className='btn border-[#D2D2D2] text-xl p-[24px]'><img className='' src={play} alt="" /> Google Play</button> </a>
                    <a href='https://www.apple.com/app-store/'> <button className='btn border-[#D2D2D2]  text-xl p-[24px]'><img src={app} alt="" />App Store</button></a>
                </div>
                <div><img className='' src={hero} alt="" /></div>
            </div>
            <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-[80px]'>
                <h1 className='text-center text-[48px] font-bold text-white'>Trusted by Millions, Built for You</h1>
                <div className='flex justify-around py-[40px]'>
                    <div className='text-center max-w-[342px]'>
                        <p className='text-white'>Total Downloads</p>
                        <h1 className='text-white font-extrabold text-[64px]'>29.6M</h1>
                        <p className='text-white'>21% more than last month</p>
                    </div>
                    <div className='text-center max-w-[342px]'>
                        <p className='text-white'>Total Reviews</p>
                        <h1 className='text-white font-extrabold text-[64px]'>906K</h1>
                        <p className='text-white'>46% more than last month</p>
                    </div>
                    <div className='text-center max-w-[342px]'>
                        <p className='text-white'>Active Apps</p>
                        <h1 className='text-white font-extrabold text-[64px]'>132+</h1>
                        <p className='text-white'>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;