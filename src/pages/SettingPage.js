import React from 'react';
//components
import Container from '../components/Container';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import { divisions } from '../data/division';

const SettingPage = () => {



  return (
    <Container>
      <Navbar />
      <Logo />
      <div>
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <li className="col-span-1 flex shadow-sm rounded-md">
              <div className={'bg-[#005BD7] flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'}>
                ALL
              </div>
              <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                <span className="text-gray-900 font-medium px-4 py-2 hover:text-gray-600">
                  전체
                </span>
              </div>
            </li>
            <li className="col-span-1 flex shadow-sm rounded-md">
              <div className={'bg-[#0080A7] flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'}>
                MI
              </div>
              <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                <span className="text-gray-900 font-medium px-4 py-2 hover:text-gray-600">
                  사역자
                </span>
              </div>
            </li>
            <li className="col-span-1 flex shadow-sm rounded-md">
              <div className={'bg-[#154E3F] flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'}>
                MM
              </div>
              <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                <span className="text-gray-900 font-medium px-4 py-2 hover:text-gray-600">
                  남선교회
                </span>
              </div>
            </li>
            <li className="col-span-1 flex shadow-sm rounded-md">
              <div className={'bg-[#EE4E6B] flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'}>
                WM
              </div>
              <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                <span className="text-gray-900 font-medium px-4 py-2 hover:text-gray-600">
                  여선교회
                </span>
              </div>
            </li>
            <li className="col-span-1 flex shadow-sm rounded-md">
              <div className={'bg-[#EA5F01] flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'}>
                YM
              </div>
              <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                <span className="text-gray-900 font-medium px-4 py-2 hover:text-gray-600">
                  청장년
                </span>
              </div>
            </li>
            <li className="col-span-1 flex shadow-sm rounded-md">
              <div className={'bg-[#F9CE0B] flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'}>
                YC
              </div>
              <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                <span className="text-gray-900 font-medium px-4 py-2 hover:text-gray-600">
                  영커플
                </span>
              </div>
            </li>
            <li className="col-span-1 flex shadow-sm rounded-md">
              <div className={'bg-[#9972E5] flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'}>
                IN
              </div>
              <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                <span className="text-gray-900 font-medium px-4 py-2 hover:text-gray-600">
                  인터치
                </span>
              </div>
            </li>
            <li className="col-span-1 flex shadow-sm rounded-md">
              <div className={'bg-[#C07D53] flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'}>
                SE
              </div>
              <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                <span className="text-gray-900 font-medium px-4 py-2 hover:text-gray-600">
                  시니어
                </span>
              </div>
            </li>
            <li className="col-span-1 flex shadow-sm rounded-md">
              <div className={'bg-[#FFEDC8] flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'}>
                NF
              </div>
              <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                <span className="text-gray-900 font-medium px-4 py-2 hover:text-gray-600">
                  새가족
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default SettingPage;