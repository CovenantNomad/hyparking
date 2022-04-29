import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pb-4">
      <div className="container max-w-5xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}

export default React.memo(Container);