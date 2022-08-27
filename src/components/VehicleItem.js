import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getColor } from '../utils/utils';

const VehicleItem = ({ item }) => {
  const navigate = useNavigate()

  return (
    <div className="border rounded-lg shadow">
      <div className="flex p-4">
        <div className='flex-1'>
          <div className="flex items-center">
            <h4 className='text-lg font-semibold mr-2'>{item.owner}</h4>
            <p className={`text-white ${getColor(item.division)} text-xs px-2 py-1 rounded-2xl`}>{item.division}</p>
          </div>
          <p className='text-md text-gray-400'>{item.position}</p>
        </div>
        <div className='flex items-center'>
          <div className="flex flex-col rounded-full bg-black w-14 h-14 items-center justify-center sm:w-12 sm:h-12">
            <button 
              onClick={() => navigate("/edit", {state : { 
                owner: item.owner,
                division: item.division,
                position: item.position,
                plateFront: item.plateFront,
                plateNumber: item.plateNumber,
                phoneNumber: item.phoneNumber,
              }})}
              className='flex flex-col rounded-full bg-black w-14 h-14 items-center justify-center sm:w-12 sm:h-12'
            >
              <span className="block text-white text-xs font-bold">{item.plateFront}</span>
              <span className="block text-white text-xs font-bold">{item.plateNumber}</span>
            </button>
          </div>
        </div>
      </div>
      <div className="grid gird-cols-2 grid-flow-col auto-cols-fr border-t border-gray-300">
        <div className="col-span-1 text-gray-600 flex items-center justify-center py-4 border-r border-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <span className="text-base">연락처</span>
        </div>
        <div className="col-span-1 text-center py-4">
          <span className="block text-base text-gray-600">{item.phoneNumber}</span>
        </div>
      </div>
    </div>
  );
}

export default React.memo(VehicleItem);