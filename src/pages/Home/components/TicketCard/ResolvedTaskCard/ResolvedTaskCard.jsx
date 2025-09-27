import React from 'react';
import { FaCheck } from 'react-icons/fa6';

const ResolvedTaskCard = ({ card }) => {
  return (
    <>
      <div className="space-y-1 lg:space-y-5">
        <div className="  p-2 lg:p-4 flex flex-col justify-between items-center gap-1 lg:gap-4 shadow-sm hover:shadow-md active:shadow-inner rounded-md transform  hover:scale-101 active:scale-98 transition-all duration-300 ease-in-out  bg-[#B9F8CF]">
          <h3 className="w-full font-medium lg:font-semibold text-xs lg:text-lg text-[#001931]">
            {card.title}
          </h3>
          <div className="w-full flex flex-col lg:flex-row gap-1 justify-between items-center px-1 lg:px-3 py-0.5 lg:py-2 rounded-md">
            <div className="flex justify-between items-center gap-1 lg:gap-2.5 text-[#02A53B]">
              <span>
                <FaCheck />
              </span>
              <span className="text-sm lg:text-base">Completed</span>
            </div>
            <button className="text-[#627382] hover:text-[red] text-xs lg:text-sm hover:underline underline-offset-4 cursor-pointer">
              Click to Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResolvedTaskCard;
