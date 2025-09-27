import React from 'react';
const TaskStatusCard = ({ card, handleComplete }) => {
  // console.log(card);

  return (
    <>
      <div className="space-y-1 lg:space-y-5">
        <div
          className="bg-white p-2 lg:p-4 flex flex-col justify-between items-center gap-1 lg:gap-4 shadow-sm hover:shadow-md active:shadow-inner rounded-md transform  hover:scale-101 active:scale-98
  transition-all duration-300 ease-in-out"
        >
          <h3 className="w-full font-medium lg:font-semibold text-xs lg:text-lg text-[#001931]">
            {card.title}
          </h3>
          <button
            onClick={() => handleComplete(card)}
            className="w-full text-sm lg:text-base px-1 lg:px-3 py-0.5 lg:py-2 rounded-md bg-[#02A53B] text-white cursor-pointer"
          >
            Complete
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskStatusCard;
