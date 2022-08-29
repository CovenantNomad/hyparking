import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = ({ register, errors}) => {
  const navigate = useNavigate()
  
  return (
    <div className='bg-zinc-200 pb-4'>
      <div>
        <div id='left-container'>
          <div className='px-4 py-4'>
            <h3 className='text-lg font-medium text-gray-900 leading-6'>차량등록</h3>
            <p className='text-sm text-gray-600 mt-1 whitespace-pre-wrap'>
              {`신규차량등록을 위해 아래사항들을 기입해 주세요.`}
            </p>
          </div>
        </div>
        <div id="right-container" >
          <div className="overflow-hidden px-4">
            <div className="px-4 py-5 bg-white rounded-md shadow sm:p-6">
              <div className="grid grid-cols-6 gap-6">

                <div className="col-span-6">
                  <label htmlFor="owner" className="block text-sm font-medium text-gray-700">
                    이름
                  </label>
                  <input
                    type="text"
                    name="owner"
                    id="owner"
                    {...register("owner", { 
                      required: "이름을 입력해주세요",
                      setValueAs: v => v.replace(/ /g, "")
                    })}
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                  {errors.owner && <p className='mt-1 text-red-600'>{errors.owner.message}</p>}
                </div>

                <div className="col-span-6 md:col-span-3">
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700">
                    직분
                  </label>
                  <input
                    type="text"
                    name="position"
                    id="position"
                    {...register("position", { 
                      required: "직분을 입력해주세요",
                      setValueAs: v => v.replace(/ /g, "")
                    })}
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                  {errors.position && <p className='mt-1 text-red-600'>{errors.position.message}</p>}
                </div>

                <div className="col-span-6 md:col-span-3">
                  <label htmlFor="division" className="block text-sm font-medium text-gray-700">
                    소속
                  </label>
                  <select
                    type="text"
                    name="division"
                    id="division"
                    {...register("division", { 
                      validate: {
                        selection: v => v !== "none" || '소속을 선택해주세요',
                      }
                     })}
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  >
                    <option value={"none"}>소속을 선택해주세요</option>
                    <option value={"남선교회"}>남선교회</option>
                    <option value={"여선교회"}>여선교회</option>
                    <option value={"청장년"}>청장년</option>
                    <option value={"영커플"}>영커플</option>
                    <option value={"인터치"}>인터치</option>
                    <option value={"시니어"}>시니어</option>
                    <option value={"새가족"}>새가족</option>
                    <option value={"사역자"}>사역자</option>
                  </select>
                  {errors.division && <p className='mt-1 text-red-600'>{errors.division.message}</p>}
                </div>

                <div className="col-span-2">
                  <label htmlFor="plateFront" className="block text-sm font-medium text-gray-700">번호 앞자리</label>
                  <input
                    type="text"
                    name="plateFront"
                    id="plateFront"
                    {...register("plateFront", { 
                      required: "차량번호를 입력해주세요",
                      setValueAs: v => v.replace(/ /g, "")
                    })}
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                  {errors.plateFront && <p className='mt-1 text-red-600'>{errors.plateFront.message}</p>}
                </div>
                <div className="col-span-4">
                  <label htmlFor="plateNumber" className="block text-sm font-medium text-gray-700">차량번호판 뒷자리</label>
                  <input
                    type="text"
                    name="plateNumber"
                    id="plateNumber"
                    {...register("plateNumber", { 
                      required: "차량번호를 입력해주세요",
                      setValueAs: v => v.replace(/ /g, "")
                    })}
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                  {errors.plateNumber && <p className='mt-1 text-red-600'>{errors.plateNumber.message}</p>}
                </div>

                <div className="col-span-6">
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">전화번호</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    {...register("phoneNumber", { 
                      required: "핸드폰번호를 입력해주세요",
                      setValueAs: v => v.replace(/ /g, "")
                    })}
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                  {errors.phoneNumber && <p className='mt-1 text-red-600'>{errors.phoneNumber.message}</p>}
                </div>
              </div>

              <div className="pt-6 text-right space-x-2 lg:space-x-4">
                <button
                  type="button"
                  onClick={() => navigate('/')}
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  등록하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(RegistrationForm);