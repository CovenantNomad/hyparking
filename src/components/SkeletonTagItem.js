import React from 'react';

const SkeletonTagItem = () => {
  return (
    <div className="animate-pulse grid grid-cols-3 grid-rows-2 border rounded-lg gap-1 p-1">
      <div className='col-span-1 row-span-2 bg-slate-200 rounded m-2'></div>
      <div className="h-3 bg-slate-200 rounded col-span-2 row-span-1"></div>
      <div className="h-3 bg-slate-200 rounded col-span-2 row-span-1"></div>
  </div>
  );
}

export default SkeletonTagItem;