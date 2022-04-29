import React from 'react';

const Logo = () => {
  return (
    <div className="my-8">
      <h1 className="text-center text-4xl font-extrabold text-gray-900">
        <span className="text-sky-500">화양의 </span>
        <span >주차장</span>
      </h1>
    </div>
  );
}

export default React.memo(Logo);