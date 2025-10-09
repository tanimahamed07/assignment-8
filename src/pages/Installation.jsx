import React, { useState } from 'react';
// import { getStoredApps } from '../utils/localStorage';
// import useApps from '../Hooks/useApps';
import InstalledApps from './InstalledApps';
import { loadInstalledList } from '../utils/localStorage';

const Installation = () => {
    const [appList, setAppList] = useState(() => loadInstalledList());
    const [sortOrder, setSortOrder] = useState('none')
    const sortedItem = (() => {
        if (sortOrder === 'download-asc') {
            return [...appList].sort((a, b) => a.downloads - b.downloads)
        } else if (sortOrder === 'download-desc') {
            return [...appList].sort((a, b) => b.downloads - a.downloads)
        } else {
            return appList
        }
    })()
    return (
        <div className='w-11/12 mx-auto'>
            <div className='text-center pt-[80px] pb-[40px]'>
                <h1 className='text-[#001931] font-bold text-[48px]'>Your Installed Apps</h1>
                <p className='text-[#627382] text-xl'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pb-4">
           
                <h1 className="text-[20px] md:text-[24px] font-semibold text-center md:text-left">
                    {appList.length} Apps Found
                </h1>

                <label className="form-control w-full md:w-auto max-w-xs mx-auto md:mx-0">
                    <select
                        className="select select-bordered w-full"
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                    >
                        <option value="none">Sort by download count</option>
                        <option value="download-asc">Low → High</option>
                        <option value="download-desc">High → Low</option>
                    </select>
                </label>
            </div>
            <div className=''>
                {
                    sortedItem.map(app => <InstalledApps setAppList={setAppList} key={app.id} app={app}></InstalledApps>)
                }
            </div>
        </div>
    );
};

export default Installation;