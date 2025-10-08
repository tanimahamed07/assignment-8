import React from 'react';
import download from '../assets/icon-downloads.png'
import star from '../assets/icon-ratings.png'
import { removeFromAppsList } from '../utils/localStorage';
import { toast } from 'react-toastify';
// import { removeFromLocalStorage } from '../utils/localStorage';
const InstalledApps = ({ app, setAppList }) => {
    const handleRemove = (id) => {
        removeFromAppsList(id)
        setAppList(prev => prev.filter(a => a.id !== id))
        toast.success(`${title} - App un-installed from your Device!`,{
            position: "top-center"
        })
    }
    console.log(app)
    const { title, size, ratingAvg, downloads, image, id } = app;
     
    return (
        <div>
            <div className='flex items-center gap-5 rounded-[4px] justify-between p-4 bg-white mb-4'>
                <div className='flex gap-5 items-center'>
                    <img className='max-w-[80px] max-h-[80px] rounded-[8px]' src={image} alt="" />
                    <div>
                        <h2 className='text-[20px]'>{title}</h2>
                        <div className='flex gap-4'>
                            <div className='flex gap-1 items-center text-[#00D390]'><img className='w-[12px] h-[12px]' src={download} alt="" /> {downloads}</div>
                            <div className='flex gap-1 items-center text-[#FF8811]'><img className='w-[12px] h-[12px]' src={star} alt="" /> {ratingAvg}</div>
                            <div className='flex gap-1 items-center text-[#627382]'>{size} MB</div>
                        </div>
                    </div>
                </div>
                <button onClick={() => handleRemove(id)} className='btn text-white bg-[#00D390]'>Uninstall</button>
            </div>
        </div>
    );
};

export default InstalledApps;