import React, { useState } from 'react';
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import download from '../assets/icon-downloads.png'
import star from '../assets/icon-ratings.png'
import like from '../assets/icon-review.png'
import { updateList } from '../utils/localStorage';
import { toast } from 'react-toastify';
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import CustomError from './CustomError';
import Spinner from './Spinner';
// import { addToLocalStorage } from '../utils/localStorage';
const AppsDetails = () => {
    const params = useParams()
    const { apps, loading } = useApps()
    const [toggle, setToggle] = useState(false)
    // console.log(params.id)
    const id = params.id;
    const appDetails = apps.find(app => app.id == id) || {}
    // console.log(appDetails)
    const handleInstall = () => {
        updateList(appDetails);
        toast.success(`${appDetails.title} - App installed from your Device!`, {
            position: "top-center"
        });
        setToggle(true);
    };
    const { image, title, companyName, ratingAvg, reviews, downloads, size, ratings, description } = appDetails
    console.log(ratings)
    if (loading) return <Spinner></Spinner>
    if (!appDetails.id) return <CustomError></CustomError>;
    return (
        <div className='w-11/12 mx-auto'>
            <div>
                <div className='flex flex-col md:flex-row items-center gap-[40px] pt-[80px] pb-[40px] '>
                    <div>
                        <img className='shadow max-w-[350px] max-h-[350px]' src={image} alt="" />
                    </div>
                    <div className='w-full'>
                        <h1 className='text-[32px] font-bold'>{title}</h1>
                        <p className='text-[20px]'><span className='text-[#627382]'>Developed by</span> <span className='text-[#632EE3] font-semibold'>{companyName}</span></p>
                        <hr className="border-t border-gray-300 my-[30px] w-full" />
                        <div className="flex flex-col md:flex-row gap-[20px] md:gap-[30px] items-center md:items-start">
                            <div className="w-[150px] text-center md:text-left">
                                <img src={download} alt="" className="mx-auto md:mx-0" />
                                <p>Downloads</p>
                                <h1 className="text-[32px] md:text-[40px] font-extrabold">{downloads}M</h1>
                            </div>

                            <div className="w-[150px] text-center md:text-left">
                                <img src={star} alt="" className="mx-auto md:mx-0" />
                                <p>Average Ratings</p>
                                <h1 className="text-[32px] md:text-[40px] font-extrabold">{ratingAvg}</h1>
                            </div>

                            <div className="w-[150px] text-center md:text-left">
                                <img src={like} alt="" className="mx-auto md:mx-0" />
                                <p>Total Reviews</p>
                                <h1 className="text-[32px] md:text-[40px] font-extrabold">{reviews}K</h1>
                            </div>
                        </div>
                        <button
                            onClick={handleInstall}
                            disabled={toggle}
                            className={`${toggle ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00D390]'} text-white px-[20px] py-[14px] rounded-[4px] mt-[30px]`}
                        >
                            {toggle ? 'Installed' : 'Install'} ({size} MB)
                        </button>
                    </div>
                </div>
                <hr className="border-t-3 border-gray-300 my-[30px] w-full" />
                <h1>Ratings</h1>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                        layout="vertical"
                        data={ratings}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" fill="#FF8811" />
                    </BarChart>
                </ResponsiveContainer>
                <hr className="border-t-3 border-gray-300 my-[30px] w-full" />
                <div className='space-y-1.5 pt-[40px] pb-[80px]'>
                    <h1 className='font-semibold text-[24px]'>Description</h1>
                    <p className='text-[#627382]'>{description}</p>
                </div>
            </div>
        </div >
    );
};

export default AppsDetails;