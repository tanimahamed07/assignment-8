import React from 'react';
import Hero from './Hero';
import Card from '../components/Card';
import { Link } from 'react-router';
import useApps from '../Hooks/useApps';

const Home = () => {
    const { apps } = useApps()
    return (

        <>
            <Hero />
            {/* card */}
            <div className='w-11/12 mx-auto py-[40px]'>
                <div className='text-center'>
                    <h1 className='text-[#001931] font-bold text-[48px]'>Trending Apps</h1>
                    <p className='text-[#627382] text-xl'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='py-[40px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[16px]'>
                    {/* card  */}
                    {
                        apps.slice(0, 8).map((app, index) => <Card key={index} app={app}></Card>)
                    }
                    {/* <Card></Card> */}
                </div>
            </div>
            <div className='flex justify-center'>
                <Link to='/apps' className="mb-[80px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] btn text-white text-[16px] font-semibold"> Show All</Link>
            </div>
        </>
    )
};

export default Home;