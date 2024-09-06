import React from "react";

const CircularProgress: React.FC = () => {
  return (
    <div className='w-full flex justify-center gap-4 items-center h-[75vh]'>
      <div className='circular-progress'></div>
      <p>Loading ...</p>
    </div>
  );
};

export default CircularProgress;
