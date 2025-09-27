import React from 'react';

const Header = () => {
  return (
    <header className=" w-full sticky top-0 backdrop-blur-sm p-2 shadow-sm bg-white/50 z-50">
      <div className="container mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>Changelog</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Download</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <a className="font-bold lg:text-2xl tracking-wider cursor-pointer text-[#02A53B] whitespace-nowrap">
            CS — Ticket System
          </a>
        </div>

        <div className="navbar-end flex justify-end items-center gap-4">
          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal px-1 flex flex-nowrap justify-between items-center gap-4">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>Changelog</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Download</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <a className="py-1 px-2 lg:py-2 lg:px-3 rounded-md bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white cursor-pointer whitespace-nowrap">
            <span> + </span> New Ticket
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
