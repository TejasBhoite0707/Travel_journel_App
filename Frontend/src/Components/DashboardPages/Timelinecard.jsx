import React, { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const Timelinecard = ({
  title,
  story,
  visitedLocations,
  imageUrl,
  visitedDate,
  isFavourite,
  onFavouriteToggle,
  onEdit
}) => {

  const [showFullStory, setShowFullStory] = useState(false);
  const toggleStory = () => {
    setShowFullStory(!showFullStory);
  };

  const maxWords = 10;
  const storyWords = story ? story.split(' ') : [];
  const isLong = storyWords.length > maxWords;
  const preview = storyWords.slice(0, maxWords).join(' ');

  return (
    <div className="relative flex flex-col items-start p-6 shadow-xl rounded-2xl bg-gradient-to-br from-white to-slate-100 w-full max-w-xl hover:scale-[1.03] transition-transform duration-300 ease-in-out border border-gray-200">
      {/* Favourite Icon */}
      <div
        className="absolute top-4 right-4 z-10 cursor-pointer text-red-500 text-3xl drop-shadow-md"
        onClick={() => onFavouriteToggle(!isFavourite)}
      >
        {isFavourite ? <AiFillHeart /> : <AiOutlineHeart />}
      </div>

      {/* Image */}
      <img
        src={imageUrl}
        alt={title}
        title={title}
        className="w-full h-60 object-cover rounded-xl mb-4 shadow-sm"
      />

      {/* Title */}
      <h2 className="mb-2 text-3xl font-bold text-cyan-900">{title}</h2>

      {/* Story Preview */}
      <p className="text-base text-gray-700 leading-relaxed whitespace-pre-wrap mb-1">
        {showFullStory || !isLong ? story : `${preview}...`}
      </p>

      {/* Read More / Less */}
      {isLong && (
        <button
          onClick={toggleStory}
          className="text-blue-600 hover:underline text-sm font-medium mb-2"
        >
          {showFullStory ? 'Show less' : 'Read more'}
        </button>
      )}

      {/* Location */}
      <div className="flex items-center space-x-3 mt-2 text-gray-600">
        <FaLocationDot className="text-blue-500 text-lg" />
        <p className="text-md">
          {Array.isArray(visitedLocations)
            ? visitedLocations.join(', ')
            : visitedLocations}
        </p>
      </div>

      {/* ✏️ Edit Button */}
      <button
        className="absolute bottom-4 right-4 text-sm text-blue-700 hover:underline"
        onClick={onEdit}
      >
        ✏️ Edit Story
      </button>
    </div>
  );
};

export default Timelinecard;
