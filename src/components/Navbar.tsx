import React from "react";

const Navbar = () => {
  return (
    <header className="bg-violet-500 text-white shadow-md py-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-turquoise-500">
          {/* Placeholder for Logo */}
          <span className="text-turquoise-400">P</span>inClone
        </div>

        {/* Search Bar */}
        <div className="flex-grow max-w-lg mx-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 rounded-lg border border-violet-300 focus:outline-none focus:ring-2 focus:ring-turquoise-400"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <a href="#" className="text-white hover:text-turquoise-400">
            Home
          </a>
          <a href="#" className="text-white hover:text-turquoise-400">
            Explore
          </a>
          <a href="#" className="text-white hover:text-turquoise-400">
            Notifications
          </a>
          <a href="#" className="text-white hover:text-turquoise-400">
            Profile
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
