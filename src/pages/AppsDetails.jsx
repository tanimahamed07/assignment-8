import React, { useState } from 'react';
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import download from '../assets/icon-downloads.png'
import star from '../assets/icon-ratings.png'
import like from '../assets/icon-review.png'
import { updateList } from '../utils/localStorage';
// import { addToLocalStorage } from '../utils/localStorage';
const AppsDetails = () => {
    const params = useParams()
    const { apps } = useApps()
    const [toggle, setToggle] = useState(false)
    // console.log(params.id)
    const id = params.id;
    const appDetails = apps.find(app => app.id == id) || {}
    // console.log(appDetails)
    if(toggle){
        updateList(appDetails)
    }
    const { image, title, companyName, ratingAvg, reviews, downloads, size } = appDetails
    return (
        <div className='w-11/12 mx-auto'>
            <div>
                <div className='flex items-center gap-[40px] pt-[80px] pb-[40px] '>
                    <div>
                        <img className='shadow max-w-[350px] max-h-[350px]' src={image} alt="" />
                    </div>
                    <div className='w-full'>
                        <h1 className='text-[32px] font-bold'>{title}</h1>
                        <p className='text-[20px]'><span className='text-[#627382]'>Developed by</span> <span className='text-[#632EE3] font-semibold'>{companyName}</span></p>
                        <hr className="border-t border-gray-300 my-[30px] w-full" />
                        <div className='flex gap-[30px]'>
                            <div className='w-[150px]'><img src={download} alt="" /><p>Downloads</p> <h1 className='text-[40px] font-extrabold'>{downloads}K</h1></div>
                            <div className='w-[150px]'><img src={star} alt="" /><p>Average Ratings</p><h1 className='text-[40px] font-extrabold'>{ratingAvg}</h1></div>
                            <div className='w-[150px]'><img src={like} alt="" /><p>Total Reviews</p><h1 className='text-[40px] font-extrabold'>{reviews}K</h1></div>
                        </div>
                        <button onClick={()=> setToggle(true)} className={`
                        ${toggle ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00D390]'}
                            bg-[#00D390] disable text-white px-[20px] py-[14px] rounded-[4px] mt-[30px]`}>{toggle ? 'Installed': 'Install'} ({size} MB)</button>
                    </div>
                </div>
                <hr className="border-t-3 border-gray-300 my-[30px] w-full" />
            </div>
        </div>
    );
};

export default AppsDetails;