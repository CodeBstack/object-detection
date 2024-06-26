import React from 'react';
import LogoIcon from './Vectors/LogoIcon';
import CountdownTimer from './CountDownTimer';

const NavBar = () => {
  return (
    <nav className="px-5 md:px-10 lg:px-[5vw] py-4 md:pt-6 flex flex-col md:flex-row gap-6 md:justify-between md:items-center bg-white">
      <div className="flex gap-3 items-center">
        <LogoIcon />

        <div>
          <p className="font-medium text-lg md:text-xl text-black">
            Frontend developer
          </p>
          <p className="text-sm text-[#8C8CA1]">
            Skill assessment test
          </p>
        </div>
      </div>

      <div className="self-end flex gap-2.5 items-center">
        <CountdownTimer />

        <button
          type="button"
          className="bg-[#E6E0FF] hover:bg-[#E6E0FF]/60 rounded-full flex justify-center items-center w-[30px] h-[30px]"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.9833 10C12.9833 11.65 11.65 12.9833 10 12.9833C8.35 12.9833 7.01667 11.65 7.01667 10C7.01667 8.35 8.35 7.01666 10 7.01666C11.65 7.01666 12.9833 8.35 12.9833 10Z"
              stroke="#755AE2"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 16.8917C12.9417 16.8917 15.6833 15.1583 17.5917 12.1583C18.3417 10.9833 18.3417 9.00834 17.5917 7.83334C15.6833 4.83334 12.9417 3.10001 10 3.10001C7.05834 3.10001 4.31667 4.83334 2.40834 7.83334C1.65834 9.00834 1.65834 10.9833 2.40834 12.1583C4.31667 15.1583 7.05834 16.8917 10 16.8917Z"
              stroke="#755AE2"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
