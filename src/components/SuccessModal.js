import React from 'react';
import { CheckIcon } from '@heroicons/react/outline'

export default function SuccessModal({ closeModal, content }) {

  const {result, plateNumber , errorMessage } = content


  return (
    <div className="min-w-screen h-screen absolute bg-gray-600 bg-opacity-95 inset-0 z-0 flex justify-center items-center animated fadeIn">
      <div className='max-w-sm w-full bg-white rounded-xl shadow-lg relative px-4 pt-5 pb-4'>
        {/* banner */}
        <div className='flex items-center justify-center py-6'>
          <div className={`${result? 'bg-teal-100': 'bg-red-100'} h-16 w-16 rounded-full flex items-center justify-center`}>
            <CheckIcon className={`h-8 w-8 ${result? 'text-teal-600': 'text-red-600'}`} />
          </div>
        </div>
        {/* content */}
        <div className='flex flex-col items-center '>
          <h3 className={`text-2xl font-bold`}>{result ? "등록완료": "등록실패"}</h3>
          <p className='mt-3 text-center text-sm text-gray-500'>
            <span><span className='text-gray-900 text-base font-semibold'>{plateNumber} </span>차량을</span>
            <br />
            {result? "성공적으로 등록하였습니다" : "등록하는데 실패했습니다"}
          </p>
          {errorMessage?.length !== 0 && <p className='mt-1 text-center text-sm text-red-600'>{errorMessage}</p>}
        </div>
        {/* footer */}
        <div className='w-full mt-7' >
          <button 
            onClick={closeModal}
            className='bg-blue-600 w-full py-2 rounded-lg text-center text-white font-normal'
          >
            확인
          </button>
        </div>
      </div>
    </div>
  )
  
}