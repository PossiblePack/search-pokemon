import React from "react";

const LoadingCard = () => {
  return (
    <div className='w-full lg:w-[85%] min-h-[80vh] items-start justify-center p-4 grid gap-2'>
      <div className='flex h-full w-full items-center justify-center gap-2'>
        <div className='circular-progress'></div>
        <p>Loading ...</p>
      </div>
    </div>
  );
};

export default LoadingCard;
