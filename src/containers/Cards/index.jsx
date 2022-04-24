import { Card, CardProfile } from 'components';
import React from 'react';
import { motion } from 'framer-motion';
import activities from 'data/data.json';

const Cards = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className='row-span-2 flex justify-center items-center'
      >
        <CardProfile />
      </motion.div>
      {/* Sub Cards */}
      {activities.map((activity, index) => (
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: index * 0.2 }}
          className='flex justify-center items-center'
          key={index}
        >
          <Card
            title={activity.title}
            timeframes={activity ? activity.timeframes : {}}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Cards;
