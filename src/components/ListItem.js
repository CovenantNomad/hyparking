import React from 'react';

const ListItem = ({ item }) => {

  return (
    <div className="border border-blue-100 shadow rounded-md p-4 max-w-sm w-full mx-auto mb-3">
      <div className="flex-1 space-y-6 py-1">
        <h3 className="text-2xl font-bold">{item.fullPlateNumber}</h3>
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-gray-400 text-base mr-3">이름</span>
              <span className="text-2xl">{item.owner}</span>
            </div>
            <div>
              <span className="text-gray-400 text-base mr-3">직분</span>
              <span className="text-2xl">{item.position}</span>
            </div>
          </div>
          <div>
            <span className="text-gray-400 text-base mr-3">소속</span>
            <span className="text-2xl">{item.division}</span>
          </div>
          <div className="">
            <span className="text-gray-400 text-base mr-3">핸드폰번호</span>
            <span className="text-2xl">{item.phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(ListItem);