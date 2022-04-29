import React from 'react';

const SkeletonVehicle = () => {
  return (
    <div className='border rounded-lg shadow animate-pulse'>
      <div className='grid grid-cols-5 grid-rows-2 gap-2 p-3'>
        <div className="h-3 bg-slate-200 rounded col-span-3 row-span-1"></div>
        <div className="bg-slate-200 rounded-full col-span-2 row-span-2"></div>
        <div className="h-3 bg-slate-200 rounded col-span-2 row-span-1"></div>
      </div>
      <div className='grid gird-cols-2 grid-flow-col auto-cols-fr gap-2 border-t border-gray-300 p-3'>
        <div className="h-3 bg-slate-200 rounded col-span-1"></div>
        <div className="h-3 bg-slate-200 rounded col-span-1"></div>
      </div>
    </div>
  );
}

export default SkeletonVehicle;