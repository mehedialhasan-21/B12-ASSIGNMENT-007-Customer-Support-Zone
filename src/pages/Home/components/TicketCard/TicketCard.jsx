import React from 'react';
import { FaCircle } from 'react-icons/fa';
import { CiCalendar } from 'react-icons/ci';

const TicketCard = ({ ticket, handleTicketCardClick }) => {
  const getPriorityColor = (priority) => {
    switch (priority.toUpperCase()) {
      case 'HIGH':
        return 'text-[#F83044]';
      case 'MEDIUM':
        return 'text-[#FEBB0C]';
      case 'LOW':
        return 'text-[#02A53B]';
      case 'URGENT':
        return 'text-[#8B0000]';
      default:
        return 'text-[#627382]';
    }
  };

  return (
    <>
      <div
        onClick={() => handleTicketCardClick(ticket)}
        className="bg-white p-4 flex flex-col justify-between items-center gap-4 shadow-sm hover:shadow-md active:shadow-inner rounded-md cursor-pointer transform  hover:scale-101 active:scale-98
              transition-all duration-300 ease-in-out"
      >
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-2 font-semibold text-sm lg:text-lg text-[#001931]">
          <h3>{ticket.title}</h3>{' '}
          <span
            className={`text-xs lg:text-base flex justify-center items-center gap-1 px-2 py-[2px] rounded-full whitespace-nowrap
            ${ticket.status === 'Open' && 'bg-[#B9F8CF] text-[#0B5E06]'} ${
              ticket.status === 'In Progress' && 'bg-[#F8F3B9] text-[#9C7700]'
            }`}
          >
            <FaCircle
              className={`${ticket.status === 'Open' && 'text-[#02A53B]'} ${
                ticket.status === 'In Progress' && 'text-[#FEBB0C]'
              }`}
            />{' '}
            {ticket.status}
          </span>
        </div>
        <div className="w-full  py-2">
          <p className=" text-[#627382] text-xs lg:text-base leading-relaxed">
            {ticket.description}
          </p>
        </div>
        <div className="w-full flex-col lg:flex-row gap-1.5 lg:gap-2.5 py-2 flex justify-between items-center text-[#627382]">
          <div className="flex justify-between items-center gap-10">
            <span className="text-xs lg:text-base whitespace-nowrap">
              # {ticket.id}
            </span>
            <span
              className={`font-medium text-xs lg:text-base ${getPriorityColor(
                ticket.priority
              )}`}
            >
              {ticket.priority} PRIORITY
            </span>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span className="text-xs lg:text-base">{ticket.customer}</span>
            <span className="flex justify-between items-center gap-2">
              {' '}
              <CiCalendar
                className="text-base lg:text-2xl"
                strokeWidth={1}
              />{' '}
              <span className="text-xs lg:text-base"> {ticket.createdAt} </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketCard;
