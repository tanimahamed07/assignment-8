import React from 'react';
import download from '../assets/icon-downloads.png'
import star from '../assets/icon-ratings.png'
import { Link } from 'react-router';
const Card = ({app}) => {
    const {image, title, ratingAvg, downloads, id} = app
 
    return (
        
          <Link to={`/apps/${id}`}>
            <div className='card-body shadow p-[16px] rounded-[4px] bg-white'>
                <div className=''>
                    <img className='rounded-[8px] w-full' src={image} alt="" />
                </div>
                <h1 className='text-[20px]'>{title}</h1>
                <div className='flex justify-between items-center'>
                    <button className='bg-[#F1F5E8] px-[10px] py-[6px] flex items-center gap-[8px] text-[#00D390]'><img className='w-[11px] h-[12px]' src={download} alt="" /> {downloads}M</button>
                    <button className='bg-[#FFF0E1] px-[10px] py-[6px] flex items-center gap-[8px] text-[#FF8811]'><img className='w-[11px] h-[12px]' src={star} alt="" /> {ratingAvg}</button>
                </div>
            </div>
          </Link>
        
    );
};

export default Card;