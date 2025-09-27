import React, { use } from 'react';
import HeroSection from './components/HeroSection';
import DashboardSection from './components/DashboardSection';

const HomePage = ({
  ticketsPromise,
  handleTicketCardClick,
  inProgressCount,
  statusCard,
  handleComplete,
  resolvedCount,
  resolvedCard,
}) => {
  // console.log(ticketsPromise);

  const ticketsData = use(ticketsPromise);
  // console.log(ticketsData);

  const tickets = ticketsData.tickets;
  // console.log(tickets);

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        inProgressCount={inProgressCount}
        resolvedCount={resolvedCount}
      />

      {/* Dashboard Section */}
      <DashboardSection
        tickets={tickets}
        handleTicketCardClick={handleTicketCardClick}
        statusCard={statusCard}
        handleComplete={handleComplete}
        resolvedCard={resolvedCard}
      />
    </>
  );
};

export default HomePage;
