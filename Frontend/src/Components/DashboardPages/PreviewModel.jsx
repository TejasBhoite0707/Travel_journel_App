import React, { useState } from "react";
import { FaMapPin } from "react-icons/fa";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Modal } from 'antd';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import moment from "moment";
import toast from "react-hot-toast";
import axiosInstance from "../../utils/ApiService";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
const PreviewModelFn = ({ open, onClose, story, onUpdateFavourite }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [previewStory, setpreviewStory] = useState(story);

    const handleFavouriteToggle = async () => {
        try {
            const updatedValue = !previewStory.isFavourite;
            await axiosInstance.put(`/api/update-is-favourite/${previewStory._id}`, {
                isFavourite: updatedValue,
            });
            setpreviewStory({ ...previewStory, isFavourite: updatedValue })
        } catch (err) {
            toast.error("Failed to update favourite")
        }
    };
    return (
        <div className={isDarkMode ? 'dark' : ''}>
            <Modal
                title={
                    <div className="flex justify-between items-center">
                        <span className="text-xl font-semibold text-cyan-900 dark:text-white">{previewStory?.title}</span>
                        <div className="cursor-pointer text-2xl text-red-500"
                            onClick={handleFavouriteToggle}
                        >
                            {previewStory?.isFavourite ? <AiFillHeart /> : <AiOutlineHeart />}
                        </div>
                    </div>
                }
                open={open}
                onCancel={onClose}
                footer={null}
                bodyStyle={{ backgroundColor: isDarkMode ? '#1f2937' : '#fff' }}
            >
                <div className=" relative text-gray-800 dark:text-white">
                    <button
                        onClick={() => setIsDarkMode(prev => !prev)}
                        className="absolute top-2 right-2 z-50 text-xs bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded"
                    >
                        {isDarkMode ? <CiLight /> : <MdOutlineDarkMode />}
                    </button>
                {
                    Array.isArray(previewStory?.imageUrls) && previewStory.imageUrls.length >0?(
                        <Carousel showThumbs={false} infiniteLoop useKeyboardArrows>
                         {previewStory.imageUrls.map((url,idx)=>(
                            <div key={idx}>
                            <img src={url} alt={`Memory ${idx+1}`} className="rounded-xl h-60 object-cover w-full"/>
                            </div>
                         ))}
                        </Carousel>
                    ):(
                        <img
                        src={previewStory?.imageUrl}
                        alt={previewStory?.title}
                        className="w-full h-50 object-cover rounded-xl mb-4"
                        />
                    )
                }
<div></div>


                </div>
            </Modal>
        </div>
    )


}
