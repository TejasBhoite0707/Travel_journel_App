import React, { useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { MdPreview } from 'react-icons/md';
import { FiEdit2 } from 'react-icons/fi';

const Timelinecard = ({
  title,
  story,
  visitedLocations,
  imageUrl,
  visitedDate,
  isFavourite,
  onFavouriteToggle,
  onEdit,
  onPreview
}) => {
  const [showFullStory, setShowFullStory] = useState(false);
  const toggleStory = () => setShowFullStory(!showFullStory);

  const maxWords = 25;
  const storyWords = story ? story.split(' ') : [];
  const isLong = storyWords.length > maxWords;
  const preview = storyWords.slice(0, maxWords).join(' ');

  return (
    <div className="relative flex flex-col items-start p-4 sm:p-6 rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 w-full max-w-sm sm:max-w-md md:max-w-2xl border border-gray-100 mx-auto">
      {/* Favourite Icon */}
      <div
        className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 cursor-pointer text-red-500 text-xl sm:text-2xl md:text-3xl drop-shadow"
        onClick={() => onFavouriteToggle(!isFavourite)}
      >
        {isFavourite ? <AiFillHeart /> : <AiOutlineHeart />}
      </div>

      {/* Image */}
      <div className="w-full rounded-xl overflow-hidden shadow-sm">
        <img
          src={imageUrl}
          alt={title}
          title={title}
          className="w-full h-40 sm:h-56 md:h-64 lg:h-72 object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Title */}
      <h2 className="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl font-bold text-slate-800 tracking-tight">
        {title}
      </h2>

      {/* Story Preview */}
      <p className="mt-2 text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
        {showFullStory || !isLong ? story : `${preview}...`}
      </p>

      {/* Read More / Less */}
      {isLong && (
        <button
          onClick={toggleStory}
          className="text-blue-600 hover:underline text-xs sm:text-sm mt-1"
        >
          {showFullStory ? 'Show less ▲' : 'Read more ▼'}
        </button>
      )}

      {/* Location */}
      <div className="flex items-center text-gray-600 mt-3 text-xs sm:text-sm md:text-base flex-wrap">
        <FaLocationDot className="text-blue-500 mr-2" />
        <span className="font-medium">
          {Array.isArray(visitedLocations)
            ? visitedLocations.join(', ')
            : visitedLocations}
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row sm:justify-between gap-3 w-full mt-4 sm:mt-5">
        <button
          onClick={onPreview}
          className="flex items-center justify-center px-4 sm:px-5 py-2 text-sm sm:text-base font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-lg shadow transition-all w-full sm:w-auto"
        >
          <MdPreview className="mr-2" /> Preview
        </button>
        <button
          onClick={onEdit}
          className="flex items-center justify-center px-4 sm:px-5 py-2 text-sm sm:text-base font-medium text-blue-700 border border-blue-500 hover:bg-blue-50 rounded-lg transition-all w-full sm:w-auto"
        >
          <FiEdit2 className="mr-2" /> Edit
        </button>
      </div>
    </div>
  );
};

export default Timelinecard;
