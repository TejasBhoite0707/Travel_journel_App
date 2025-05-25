import moment from 'moment';
import { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdOutlineDateRange } from 'react-icons/md';

const FavouriteMemoryCard = ({ title, story, visitedLocation, imageUrl ,visitedDate}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 max-w-md w-full overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="h-56 w-full object-cover"
      />

      <div className="p-5">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>

        <p className="text-gray-600 text-sm mb-4">
          {isExpanded ? story : story.slice(0, 120) + (story.length > 120 ? '...' : '')}
          {story.length > 120 && (
            <span
              className="text-blue-600 ml-1 hover:underline cursor-pointer"
              onClick={toggleReadMore}
            >
              {isExpanded ? 'Show less' : 'Read more'}
            </span>
          )}
        </p>

        <div className="flex items-center text-gray-500 text-sm">
          <FaMapMarkerAlt className="text-red-500 mr-2" />
          <span>{visitedLocation}</span>
        </div>
 <div className="flex items-center text-gray-500 text-sm mt-2">
      <MdOutlineDateRange className="text-blue-500 mr-2" />
      <span>{visitedDate ? moment(visitedDate).format("Do MMM YYYY") : 'Unknown date'}</span>
    </div>

      </div>
    </div>
  );
};

export default FavouriteMemoryCard;
