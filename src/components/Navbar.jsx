import React from 'react';


function Navbar() {
  return (
    <div className='flex justify-between'>
   
    <div className="text-2xl pl-10 font-bold  items-center">⚡ SpeedVitals</div>
    <div>


    <nav className="flex space-x-5 pr-16 ">
    <a href="/" className="text-gray-600 hover:text-black hidden sm:block">Home</a>
          <a href="/" className="text-gray-600 hover:text-black hidden sm:block">Performance Test</a>
          <a href="/" className="text-gray-600 hover:text-black hidden sm:block">About</a>
          <a href="/" className="text-gray-600 hover:text-black hidden sm:block">Contact</a>
    </nav>
    </div>

  </div>
  );
}

export default Navbar;