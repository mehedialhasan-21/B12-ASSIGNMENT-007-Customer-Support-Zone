import React, { Suspense, useState } from 'react';
import { toast } from 'react-toastify';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import HomePage from '../../pages/Home/HomePage';

const fetchTickets = async () => {
  const res = await fetch('/tickets.json');
  return await res.json();
};

const ticketsPromise = fetchTickets();
// console.log(ticketsPromise);

const MainLayout = () => {
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);
  const [statusCard, setStatusCard] = useState([]);
  const [resolvedCard, setResolvedCard] = useState([]);

  // Card Item Click Handler
  const handleTicketCardClick = (ticket) => {
    // console.log('Ticket Card Clicked.', ticket);

    const alreadyInProgress = statusCard.find((t) => t.id === ticket.id);

    if (!alreadyInProgress) {
      const updateTicket = { ...ticket, status: 'In Progress' };

      setInProgressCount((prev) => prev + 1);
      setStatusCard((prev) => [...prev, updateTicket]);

      toast.success(`Ticket "${ticket.title}" is now In Progress !`, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      toast.info(`Ticket "${ticket.title}" is already In Progress !`, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  // Complete Button Click Handler
  const handleComplete = (ticket) => {
    // console.log('Complete Button Clicked.', ticket);

    const completedTask = statusCard.find((t) => t.id === ticket.id);
    if (!completedTask) return;

    // Remove from statusCard
    setStatusCard((prev) => prev.filter((t) => t.id !== ticket.id));
    setInProgressCount((prev) => (prev > 0 ? prev - 1 : 0));

    // Add to resolvedCard
    setResolvedCount((prev) => prev + 1);
    setResolvedCard((prev) => [...prev, { ...completedTask }]);

    toast.success(`Ticket "${ticket.title}" marked as Completed !`, {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="flex flex-col justify-between min-h-screen">
      {/* Header Section */}
      <Header />

      {/* Main Section */}
      <Suspense
        fallback={
          <div className="min-h-screen flex justify-center items-center">
            <div className="flex w-52 flex-col gap-4">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          </div>
        }
      >
        <main className="bg-[#f5f5f5]">
          <div className="container flex flex-col gap-8 lg:gap-16 px-5 lg:px-0 py-5 lg:py-16 mx-auto flex-1">
            <HomePage
              ticketsPromise={ticketsPromise}
              handleTicketCardClick={handleTicketCardClick}
              inProgressCount={inProgressCount}
              statusCard={statusCard}
              handleComplete={handleComplete}
              resolvedCount={resolvedCount}
              resolvedCard={resolvedCard}
            />
          </div>
        </main>
      </Suspense>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default MainLayout;
