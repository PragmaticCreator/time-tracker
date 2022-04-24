import React, { useEffect } from 'react';
import useStore from 'store';
import { jeremyImg } from 'data/images';

const CardProfile = () => {
  const timeframe = useStore((state) => state.timeframeType);
  const setTimeframe = (value) => {
    useStore.setState({ timeframeType: value });
  };

  return (
    <div className='flex flex-col bg-blue-dark w-full  h-[150px] lg:h-full rounded-2xl'>
      {/* User Profile */}
      <div className='flex lg:flex-col items-center lg:items-start justify-start md:justify-center px-7 bg-blue-primary rounded-2xl h-[70%]'>
        <img
          src={jeremyImg}
          alt='jeremy'
          className='w-[60px] border-2 border-white rounded-full mr-5 lg:mb-7'
        />
        <p className='text-left flex flex-col text-xs lg:text-base text-blue-pale'>
          Report for{' '}
          <span className='text-2xl lg:text-4xl text-white capitalize font-light'>
            jeremy Robson
          </span>
        </p>
      </div>
      {/* Menu */}
      <ul className='flex lg:flex-col h-[30%] justify-between md:justify-around px-7 mt-4 lg:mt-0 text-blue-desaturated'>
        {['daily', 'weekly', 'monthly'].map((value, index) => (
          <li key={index}>
            <button
              onClick={() => setTimeframe(value)}
              className={`${
                timeframe === value ? 'text-white' : ''
              } capitalize hover:text-white duration-300 text-base`}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardProfile;
