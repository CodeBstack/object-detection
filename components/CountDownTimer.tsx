'use client'

import React, {
  useState,
  useEffect,
} from 'react';

const CountdownTimer: React.FC = () => {
  const initialTime = 30 * 60; // 30 minutes in seconds
  const [timeLeft, setTimeLeft] =
    useState<number>(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0) {
          clearInterval(interval);
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Format the remaining time into minutes and seconds
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="rounded-lg bg-[#ECE8FF] text-[#755AE2] px-4 py-2.5 flex gap-2.5 items-center">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="12"
          fill="#E6E0FF"
        />
        <path
          d="M12 9.33334V12.6667"
          stroke="#755AE2"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 18.6667C8.77999 18.6667 6.16666 16.0533 6.16666 12.8333C6.16666 9.61333 8.77999 7 12 7C15.22 7 17.8333 9.61333 17.8333 12.8333"
          stroke="#755AE2"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10 5.33334H14"
          stroke="#755AE2"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.9333 16.3333V15.56C13.9333 14.6067 14.6133 14.2133 15.44 14.6933L16.1067 15.08L16.7733 15.4667C17.6 15.9467 17.6 16.7267 16.7733 17.2067L16.1067 17.5933L15.44 17.98C14.6133 18.46 13.9333 18.0667 13.9333 17.1133V16.3333Z"
          stroke="#755AE2"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <p className="font-bold text-base md:text-lg">
        {minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}{' '}
        <span className="font-medium text-sm">
          {' '}
          time left
        </span>
      </p>
    </div>
  );
};

export default CountdownTimer;
