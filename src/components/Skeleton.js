import React from 'react';

const Skeleton = () => {
  return (
    <div className="border border-gray-200 shadow rounded-md max-w-xs w-full mx-auto min-h-[280px]">
      <div className="animate-pulse flex-1 space-y-6 py-1">
        <div className="flex justify-center items-center p-6">
          <div className="flex flex-col rounded-full bg-slate-200 w-28 h-28 items-center justify-center"></div>
        </div>
        <div className="space-y-3 flex flex-col items-center">
          <div className="h-2 w-1/2 bg-slate-200 rounded "></div>
          <div className="h-2 w-1/2 bg-slate-200 rounded"></div>
          <div className="h-2 w-1/2 bg-slate-200 rounded"></div>
        </div>
        <div className="grid grid-cols-2 grid-flow-col auto-cols-fr gap-4">
          <div className="h-3 bg-slate-200 rounded mb-4"></div>
          <div className="h-3 bg-slate-200 rounded mb-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Skeleton;