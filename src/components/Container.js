import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start">
      <div className="container max-w-2xl px-2 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}

export default React.memo(Container);