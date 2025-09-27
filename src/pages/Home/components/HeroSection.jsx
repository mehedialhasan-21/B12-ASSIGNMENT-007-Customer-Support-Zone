import React from 'react';
import vector1 from '../../../assets/images/vector1.png';
import styles from './HeroSection.module.css';

const HeroSection = ({ inProgressCount, resolvedCount }) => {
  return (
    <section className="flex flex-col justify-between gap-5 lg:gap-10">
      {/* Marquee Section */}
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeContent}>
          <span className={styles.marqueeItem}>
            🎉 Welcome to Customer Support Dashboard
          </span>
          <span className={styles.marqueeItem}>
            📊 Real-time ticket management system
          </span>
          <span className={styles.marqueeItem}>
            ⚡ Fast and efficient customer service
          </span>
          <span className={styles.marqueeItem}>
            🚀 Track your progress instantly
          </span>
          <span className={styles.marqueeItem}>
            💼 Professional ticket handling
          </span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-7">
        {/* In Progress Section */}
        <div className="relative w-full h-[140px] lg:h-[250px] p-10 rounded-xl bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white flex flex-col justify-center items-center gap-5 overflow-hidden">
          <h2 className="text-xl lg:text-2xl">In-Progress</h2>
          <span className="font-semibold text-3xl lg:text-5xl">
            {' '}
            {inProgressCount}{' '}
          </span>
          <div className="absolute flex justify-between inset-0 w-full h-full object-cover">
            <img src={vector1} alt="" />
            <img src={vector1} alt="" className="rotate-y-180" />
          </div>
        </div>

        {/* Resolve Section */}
        <div className="relative w-full h-[140px] lg:h-[250px] p-10 rounded-xl bg-linear-to-br from-[#54CF68] to-[#00827A] text-white flex flex-col justify-center items-center gap-5 overflow-hidden">
          <h2 className="text-xl lg:text-2xl">Resolved</h2>
          <span className="font-semibold text-3xl lg:text-5xl">
            {' '}
            {resolvedCount}{' '}
          </span>
          <div className="absolute flex justify-between inset-0 w-full h-full object-cover">
            <img src={vector1} alt="" />
            <img src={vector1} alt="" className="rotate-y-180" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
