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

  const maxWords = 20;
  const storyWords = story ? story.split(' ') : [];
  const isLong = storyWords.length > maxWords;
  const preview = storyWords.slice(0, maxWords).join(' ');

  return (
    <div className="relative flex flex-col items-start p-6 rounded-2xl bg-white hover:shadow-2xl transition-shadow duration-300 w-full max-w-2xl border border-gray-200">
      {/* Favourite Icon */}
      <div
        className="absolute top-4 right-4 z-10 cursor-pointer text-red-500 text-3xl"
        onClick={() => onFavouriteToggle(!isFavourite)}
      >
        {isFavourite ? <AiFillHeart /> : <AiOutlineHeart />}
      </div>

      {/* Image */}
      <img
        src={imageUrl}
        alt={title}
        title={title}
        className="w-full h-60 object-cover rounded-xl mb-4 shadow-md"
      />

      {/* Title */}
      <h2 className="text-2xl font-bold text-slate-800 mb-2">{title}</h2>

      {/* Story Preview */}
      <p className="text-gray-700 mb-2 leading-relaxed whitespace-pre-wrap">
        {showFullStory || !isLong ? story : `${preview}...`}
      </p>

      {/* Read More / Less */}
      {isLong && (
        <button
          onClick={toggleStory}
          className="text-blue-600 hover:underline text-sm mb-3"
        >
          {showFullStory ? 'Show less ▲' : 'Read more ▼'}
        </button>
      )}

      {/* Location */}
      <div className="flex items-center text-gray-600 mb-3">
        <FaLocationDot className="text-blue-500 mr-2" />
        <span className="text-sm">
          {Array.isArray(visitedLocations)
            ? visitedLocations.join(', ')
            : visitedLocations}
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex  space-x-52 mt-auto pt-2">
        <button
          onClick={onPreview}
          className="flex items-center px-4 py-1.5 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-md transition"
        >
          <MdPreview className="mr-1" /> Preview
        </button>
        <button
          onClick={onEdit}
          className="flex items-center px-4 py-1.5 text-sm font-medium text-blue-700 border border-blue-500 hover:bg-blue-50 rounded-md transition"
        >
          <FiEdit2 className="mr-1" /> Edit
        </button>
      </div>
    </div>
  );
};

export default Timelinecard;
