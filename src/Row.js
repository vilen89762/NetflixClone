import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Movies from './Movies';

const Row = ({ fetchUrl, title, RowID }) => {
  const [movies, setMovies] = useState([]);

  const sliderLeft = () => {
    var slider = document.getElementById('slider' + RowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const sliderRight = () => {
    var slider = document.getElementById('slider' + RowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchUrl]);

  return (
    <div className="bg-black">
      <h2 className='font-poppins text-white font-bold md:text-xl p-4'>{title}</h2>

      <div className='relative group items-center flex'>
        <MdChevronLeft
          onClick={sliderLeft}
          size={40}
          className='bg-white left-0 group-hover:block z-10 cursor-pointer rounded-full absolute opacity-50 hover:opacity-100'
        />
        <div
          id={'slider' + RowID}
          className="h-full overflow-x-scroll scrollbar-hide whitespace-nowrap scroll-smooth w-full"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // For Firefox and Internet Explorer/Edge
        >
          {movies.map((item, index) => (
            <Movies key={index} item={item} />
          ))}
        </div>
        <MdChevronRight
          onClick={sliderRight}
          size={40}
          className='bg-white right-0 group-hover:block z-10 cursor-pointer rounded-full absolute opacity-50 hover:opacity-100'
        />
      </div>
    </div>
  );
};

export default Row;
