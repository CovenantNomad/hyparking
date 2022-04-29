import React from 'react';

const TagItem = ({ item, onClickHandler }) => {
  
  return (
    <div className="flex border rounded-lg hover:cursor-pointer" onClick={()=>onClickHandler(item.name)}>
      <div className={`rounded-l-lg w-16 flex justify-center items-center ${item.color}`}>
        <h4 className="text-xs text-white">{item.short}</h4>
      </div>
      <div className="flex w-full px-2 py-1 rounded-r-lg">
        <div className="flex flex-col flex-1">
          <h4 className="font-semibold">{item.name}</h4>
          <p className="text-gray-400">{item.totalNumber}명</p>
        </div>
      </div>
    </div>
  );
}

export default React.memo(TagItem);