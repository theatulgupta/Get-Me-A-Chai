import imageLinks from '@/imageLinks';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-12 px-4 text-white bg-gray-900">
      <div className="flex items-center justify-center text-lg font-bold logo">
        <Image className="mb-3" src={imageLinks.hotTea} height={30} width={30} alt="Logo" />
        <span>Get Me A Chai</span>
      </div>
      {/* <ul className="flex justify-between gap-4">
        <li>Home</li>
        <li>About Us</li>
        <li>Projects</li>
        <li>Contact Us</li>
        <li>Login</li>
      </ul> */}
      <div className="flex">
        <Link href={'/login'}>
          <button
            type="button"
            className="px-5 py-2 text-sm font-medium text-center text-white rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
