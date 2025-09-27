import React from 'react';
import TicketCard from './TicketCard/TicketCard';
import TaskStatusCard from './TaskStatusCard/TaskStatusCard';
import ResolvedTaskCard from './TicketCard/ResolvedTaskCard/ResolvedTaskCard';

const DashboardSection = ({
  tickets,
  handleTicketCardClick,
  statusCard,
  handleComplete,
  resolvedCard,
}) => {
  return (
    <section className="grid grid-cols-3 lg:grid-cols-8 gap-3 lg:gap-8">
      {/* Ticket Section */}
      <div className="col-span-2 lg:col-span-6 grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-5">
        <h2 className="col-span-1 lg:col-span-2 font-semibold text-base lg:text-2xl whitespace-nowrap">
          Customer Tickets : {tickets.length - resolvedCard.length}
        </h2>

        {/* Ticket Card */}
        {tickets
          .filter((ticket) => {
            const isResolved = resolvedCard.some((t) => t.id === ticket.id);
            return !isResolved;
          })
          .map((ticket) => {
            // Update Ticket Card for Status Changing
            const updatedTicket =
              statusCard.find((t) => t.id === ticket.id) || ticket;
            return (
              <TicketCard
                key={ticket.id}
                ticket={updatedTicket}
                handleTicketCardClick={handleTicketCardClick}
              />
            );
          })}
      </div>

      {/* Status Section */}
      <div className="col-span-1 lg:col-span-2 space-y-5 lg:space-y-8 sticky top-24 self-start max-h-screen overflow-y-auto">
        {/* Task Status */}
        <div className="space-y-1 lg:space-y-5">
          <h2 className="font-semibold text-base lg:text-2xl lg:whitespace-nowrap">
            Task Status
          </h2>
          {/* Blank Message for Task Status */}
          {statusCard.length === 0 && (
            <div className="bg-white px-2 lg:px-4 py-4 lg:py-10 flex flex-col justify-between items-center gap-2 lg:gap-4 shadow-sm hover:shadow-md active:shadow-inner rounded-md">
              <h3 className="text-sm lg:text-lg">No Task in Progress</h3>
              <p className="text-[#627382] text-xs lg:text-lg lg:tracking-wide">
                Click on a{' '}
                <span className="text-[#02A53B] underline underline-offset-4 cursor-pointer ">
                  Ticket
                </span>{' '}
                to start working
              </p>
            </div>
          )}
          {/* Task Status Card */}
          {statusCard.map((card) => (
            <TaskStatusCard
              key={card.id}
              card={card}
              handleComplete={handleComplete}
            />
          ))}
        </div>

        {/* Resolve Task */}
        <div className="space-y-1 lg:space-y-5">
          <h2 className="font-semibold text-base lg:text-2xl lg:whitespace-nowrap">
            Resolved Task
          </h2>
          {/* Blank Message for Resolved Task */}
          {resolvedCard.length === 0 && (
            <div className="bg-white px-2 lg:px-4 py-4 lg:py-10 flex flex-col justify-between items-center gap-2 lg:gap-4 shadow-sm hover:shadow-md active:shadow-inner rounded-md">
              <h3 className="text-sm lg:text-lg">No Resolved Task Yet</h3>
            </div>
          )}

          {/* Resolved Task Card */}
          {resolvedCard.map((card) => (
            <ResolvedTaskCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
