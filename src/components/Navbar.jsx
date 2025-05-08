import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'; // Ensure the path is correct

// Define navigation items with label and path
const navItems = [
  { label: 'Drop', path: '/drop' },
  { label: 'Xend', path: '/xend' },
  { label: 'Errand', path: '/errand' },
  { label: 'Hire Car', path: '/hire-car' },
  { label: 'Travel', path: '/travel' },
  { label: 'About', path: '/about' },
];
const mobileNavItems = [
  { label: 'Drop', path: '/drop' },
  { label: 'Xend', path: '/xend' },
  { label: 'Travel Booking', path: '/travel-booking' },
  { label: 'Hire Car', path: '/hire-car' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Prevent body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const linkBaseClasses = 'cursor-pointer transition-colors pb-1';
  const hoverClasses = 'hover:text-[#FFE500] hover:border-b-2 hover:border-[#FFE500]';

  return (
    <nav className="bg-black py-5 md:py-4 relative z-50">
      <div className="max-w-[85%] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="relative z-50">
          <NavLink to="/">
            <img src={logo} alt="logo" className="relative w-[80%] md:w-full" />
          </NavLink>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden relative z-50">
          <button onClick={toggleMobileMenu} className="text-white border border-white rounded-[10px] p-2">
            {isMobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <ul className="space-x-8 hidden md:flex">
          {navItems.map(({ label, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `${linkBaseClasses} ${isActive ? 'text-[#FFE500] border-b-2 border-[#FFE500]' : 'text-gray-100'} ${hoverClasses}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Actions (Desktop) */}
        <div className="space-x-4 hidden md:flex text-sm font-medium">
          <NavLink to="/login">
            <button className="px-6 py-3 rounded-full border border-[#FFE500] text-white hover:bg-yellow-500 hover:text-black transition-colors">
              Login
            </button>
          </NavLink>
          <NavLink to="/signup">
            <button className="px-6 py-3 rounded-full bg-[#FFE500] text-black hover:bg-yellow-600 transition-colors">
              Sign up
            </button>
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu Fullscreen Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 right-[1px] bg-black bg-opacity-95 z-40 overflow-y-auto mt-[85px]">
          <div className="flex flex-col items-center justify-start mt-16 space-y-8 px-4">
            <ul className="flex flex-col space-y-6 text-center">
              {mobileNavItems.map(({ label, path }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    onClick={toggleMobileMenu}
                    className={({ isActive }) =>
                      `${linkBaseClasses} text-lg ${isActive ? 'text-[#FFE500] border-b-2 border-[#FFE500]' : 'text-gray-100'} ${hoverClasses}`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-center space-y-4 w-full px-8">
              <NavLink to="/login" onClick={toggleMobileMenu}>
                <button className="px-6 py-3 rounded-full bg-[#FFE500] text-black hover:bg-yellow-600 transition-colors w-full">
                  Login
                </button>
              </NavLink>
              <NavLink to="/signup" onClick={toggleMobileMenu}>
                <button className="px-6 py-3 rounded-full border border-[#FFE500] text-white hover:text-black transition-colors w-full">
                  Sign up
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;