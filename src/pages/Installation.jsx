import React, { useState } from 'react';
// import { getStoredApps } from '../utils/localStorage';
// import useApps from '../Hooks/useApps';
import InstalledApps from './InstalledApps';
import { loadInstalledList } from '../utils/localStorage';

const Installation = () => {
    const [appList, setAppList] = useState(() => loadInstalledList());

    const [sortOrder, setSortOrder] = useState('none')

    const sortedItem = (() => {
        if (sortOrder === 'size-asc') {
            return [...appList].sort((a, b) => a.size - b.size)
        } else if (sortOrder === 'size-desc') {
            return [...appList].sort((a, b) => b.size - a.size)
        } else {
            return appList
        }
    })()


    // const appList = loadInstalledList()
    // console.log(appList)
    // const { apps } = useApps()
    // console.log(apps)
    // const installedAppsId = getStoredApps();
    // console.log(installedAppsId)
    // const installedApps = apps.filter(app => installedAppsId.includes(app.id.toString()));
    // console.log(installedApps.slice(0, 1))


    return (
        <div className='w-11/12 mx-auto'>
            <div className='text-center pt-[80px] pb-[40px]'>
                <h1 className='text-[#001931] font-bold text-[48px]'>Trending Apps</h1>
                <p className='text-[#627382] text-xl'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex items-center justify-between pb-4'>
                <h1 className='text-[24px] font-semibold'>{appList.length} Apps Found</h1>
                <label className='form-control w-full max-w-xs'>
                    <select
                        className='select select-border'
                        value={sortOrder}
                        onChange={e => setSortOrder(e.target.value)}>
                        <option value="none">Sort by price</option>
                        <option value="size-asc">Low-&gt;High</option>
                        <option value="size-desc">High-&gt;Low</option>
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