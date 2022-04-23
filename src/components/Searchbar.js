import React from 'react';
import { XIcon } from '@heroicons/react/outline';

const Searchbar = ({ register, reset, isDirty }) => {

  return (
    <div className="flex justify-between px-2">
      <div className="flex flex-1 items-center mr-2 border border-gray-300 rounded-3xl">
        <label className="p-2" htmlFor='plateNumber'>
          <svg width={20} height={20} viewBox={'0 0 20 20'}>
            <path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none"></path>
          </svg>
        </label>
        <input 
          name="plateNumber"
          type={"text"}
          placeholder="차량번호를 검색해주세요" 
          className="appearance-none rounded-none outline-none w-full py-3 px-1 text-lg rounded-tr-3xl rounded-br-3xl"
          autoFocus
          {...register("plateNumber", { required: true })}
        />
        {isDirty && (
          <button className="p-2 rounded-tr-3xl rounded-br-3xl" type='button' onClick={() => reset({ plateNumber: "" })}>
            <span className="sr-only">Reset Search</span>
            <XIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        )}
      </div>
      <div className="flex justify-center items-center">
        <button type="submit" className="rounded-xl border px-4 py-3 bg-blue-500 text-white font-semibold">
          제출
        </button>
      </div>
    </div>
  );
}

export default React.memo(Searchbar);