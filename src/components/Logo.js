import React from 'react';

const Logo = () => {
  return (
    <div className="my-8">
      <h1 className="text-center text-4xl font-extrabold text-gray-900">
        <span className="text-sky-600">화양교회 </span>
        <span >주차관리시스템</span>
      </h1>
    </div>
  );
}

export default React.memo(Logo);