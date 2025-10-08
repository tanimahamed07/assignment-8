import React, { useState } from 'react';
import useApps from '../Hooks/useApps';
import Card from '../components/Card';

const Apps = () => {
    const { apps  } = useApps()
    const [search, setSearch] = useState('');
    const term = search.trim().toLocaleLowerCase()
  const searchedApps = term 
    ? apps.filter(app => app.title.toLocaleLowerCase().includes(term))
    : apps;
    return (
        <>
            <div className='w-11/12 mx-auto py-[40px]'>
                <div className='text-center'>
                    <h1 className='text-[#001931] font-bold text-[48px]'>Our All Applications</h1>
                    <p className='text-[#627382] text-xl'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
                <div className='flex justify-between items-center pt-[40px]'>
                    <div className='text-2xl font-semibold'>({apps.length}) Apps Found</div>
                    {/* Search  */}
                    <div>
                        <label className="input w-[400px]">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input onChange={(e)=> setSearch(e.target.value)} defaultValue={search} type="search" required placeholder="Search Apps" />
                        </label>
                    </div>
                </div>
                <div className='py-[40px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[16px]'>
                    {/* card  */}
                    {
                        searchedApps.map((app, index) => <Card key={index} app={app}></Card>)
                    }
                    {/* <Card></Card> */}
                </div>
            </div>
        </>
    );
};

export default Apps;