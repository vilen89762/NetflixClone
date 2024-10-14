import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const Movies = ({ item }) => {
  // State to track the like status
  const [like, setLike] = useState(false);

  // Toggle like status
  const toggleLike = () => {
    setLike(!like);
  };

  return (
    <div
      key={item?.id}
      className="w-[160px] relative p-2 sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer"
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
        alt=""
        className="w-full h-auto rounded-md"
      />
      <div className="absolute top-0 left-0 h-full w-full opacity-0 bg-black text-white transition-opacity hover:opacity-90 flex flex-col items-center justify-center p-4 rounded-lg shadow-lg">
        <p className="text-sm md:text-sm whitespace-normal font-poppins font-semibold">
          {item?.title}
        </p>
        <p onClick={toggleLike}>
          {like ? (
            <FaHeart className="absolute left-4 top-4 text-red-500" />
          ) : (
            <FaRegHeart className="absolute left-4 top-4 text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movies;
