import { Cards } from 'containers';
import React from 'react';

const App = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-blue-darker text-white'>
      <main className='container py-24 text-sm xl:text-base'>
        <Cards />
      </main>
    </div>
  );
};

export default App;
