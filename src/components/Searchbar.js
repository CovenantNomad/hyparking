import React from 'react';

const Searchbar = ({ register }) => {

  return (
    <>
      <label className="sr-only" htmlFor='plateNumber'>차량번호로 검색해주세요</label>
      <div className="relative">
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <svg width={20} height={20} viewBox={'0 0 20 20'}>
            <path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none"></path>
          </svg>
        </div>
        <input
          id="plateNumber" 
          name="plateNumber"
          type="number"
          placeholder="차량번호 4자리로 검색해주세요" 
          className="block outline-none w-full py-4 pl-10 text-lg rounded-3xl focus:outline-none active:outline-none focus:appearance-none active:appearance-none placeholder:text-sm"
          autoFocus
          {...register("plateNumber", { 
            required: "검색할 차량번호를 입력해주세요",
            minLength: {
              value: 4,
              message: "4자리를 입력해주세요"
            },
            valueAsNumber: {
              value: true,
              message: "숫자만 입력해주세요"
            }
          })}
        />
        <div className="absolute right-3 inset-y-0 flex items-center">
          <button type="submit" className="rounded-xl border px-6 py-2 bg-blue-500 hover:bg-blue-600 focus:ring-blue-600 text-white font-semibold">
            제출
          </button>
        </div>
      </div>
    </>
  );
}

export default React.memo(Searchbar);