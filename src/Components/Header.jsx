import React from 'react';
import '../Styles/Header.css'; // Import a separate CSS file for styling

function Header() {
  return (
    <header className='bg-cyan-600 text-white py-4'>
      <div className='container mx-auto flex items-center justify-between'>
        <h1 className='font-bold text-2xl ml-4'>
          Shortly
        </h1>
        <nav className='hidden md:flex'>
          <ul className='flex space-x-5'>
            <li>
              <a href="/" className='font-bold text-white'>Home</a>
            </li>
            <li>
              <a href="/" className='font-bold text-white'>Features</a>
            </li>
            <li>
              <a href="/" className='font-bold text-white'>Pricing</a>
            </li>
            <li>
              <a href="/" className='font-bold text-white'>Resources</a>
            </li>
          </ul>
        </nav>
        <nav className='flex items-center md:hidden'>
          {/* Mobile menu icon goes here */}
        </nav>
        <ul className=' justify-end hidden md:flex'>
          <li>
            <a className='mr-4 font-bold text-xs'>LOG IN</a>
          </li>
          <li>
            <button className='rounded-full bg-yellow-300 p-2 font-bold text-xs text-black w-20'>SIGN UP</button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
