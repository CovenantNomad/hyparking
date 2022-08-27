import React from 'react';
//components
import Container from '../components/Container';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import { divisions } from '../data/division';

const SettingPage = () => {

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <Container>
      <Navbar />
      <Logo />
      <div>
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {divisions.map((division) => (
              <li key={division.id} className="col-span-1 flex shadow-sm rounded-md">
                <div
                  className={classNames(
                    division.color,
                    'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'
                  )}
                >
                  {division.short}
                </div>
                <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                  <div className="flex-1 px-4 py-2 text-sm truncate">
                    <div className="text-gray-900 font-medium hover:text-gray-600">
                      {division.name}
                    </div>
                  </div>
                  <div className="flex-shrink-0 pr-2">
                    <button
                      type="button"
                      className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <span className="sr-only">Open options</span>
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default SettingPage;