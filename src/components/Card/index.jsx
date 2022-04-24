import React from 'react';
import PropTypes from 'prop-types';
import {
  Ellipsis,
  Work,
  Exercise,
  Play,
  SelfCare,
  Social,
  Study,
} from 'data/images';
import useStore from 'store';
import { motion } from 'framer-motion';

const Card = ({ title = 'Work', timeframes }) => {
  const iconTypeBg = {
    Work: 'bg-red-primary',
    Play: 'bg-blue-soft',
    Exercise: 'bg-lime-primary',
    Social: 'bg-violet-primary',
    Study: 'bg-red-secondary',
    'Self Care': 'bg-orange-soft',
  };

  const timeframe = useStore((state) => state.timeframeType);

  return (
    <React.Fragment>
      <div className='relative overflow-hidden flex justify-center items-center w-full lg:h-[200px] h-[150px]'>
        {/* Icon and background color */}
        <div
          className={`h-full w-full ${iconTypeBg[title]} rounded-2xl rounded-b-3xl flex justify-end`}
        >
          {title === 'Work' && <Work className='absolute -top-3 right-3' />}
          {title === 'Exercise' && (
            <Exercise className='absolute -top-1 right-3' />
          )}
          {title === 'Play' && <Play className='absolute -top-3 right-3' />}
          {title === 'Self Care' && (
            <SelfCare className='absolute -top-4 right-3' />
          )}
          {title === 'Social' && <Social className='absolute -top-4 right-3' />}
          {title === 'Study' && <Study className='absolute -top-2 right-3' />}
        </div>

        {/* Content */}
        <div className='absolute bottom-0 left-0 w-full h-[80%] bg-blue-dark  md:px-10 lg:px-5 p-5 z-10 rounded-2xl flex flex-col items-center justify-around cursor-pointer hover:bg-blue-desaturated duration-300'>
          <div className='flex items-center w-full justify-between'>
            <h2 className='font-medium text-lg'>{title}</h2>
            <Ellipsis className='fill-[#BBC0FF] hover:fill-white duration-300' />
          </div>

          <motion.div
            key={timeframe}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className='flex lg:flex-col lg:items-start items-center justify-between w-full'
          >
            <h3 className='text-3xl font-light lg:mb-2'>
              {timeframes ? timeframes[timeframe].current : 0}hrs
            </h3>
            <p className='text-xs text-blue-pale'>
              {timeframe === 'daily'
                ? 'Yesterday'
                : timeframe === 'weekly'
                ? 'Last week'
                : 'Last Month'}{' '}
              - {timeframes ? timeframes[timeframe].previous : 0}hrs
            </p>
          </motion.div>
        </div>
      </div>
    </React.Fragment>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  timeframes: PropTypes.object,
};

export default Card;
