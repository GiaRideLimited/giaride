import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'; // Ensure the path is correct

const navItems = [
  { label: 'Home', path: '/home' },
  { label: 'Drop', path: '/drop' },
  { label: 'Xend', path: '/xend' },
  { label: 'Errand', path: '/errand' },
  { label: 'Hire Car', path: '/hire-car' },
  { label: 'Travel', path: '/travel' },
  { label: 'About', path: '/about' },
];


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    // Cleanup function to reset body overflow when component unmounts or menu closes
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const linkBaseClasses = 'cursor-pointer transition-colors pb-1';
  const hoverClasses = 'hover:text-[#FFE500] hover:border-b-2 hover:border-[#FFE500]';

  return (
    // Changed md:py-4 to lg:py-4
    <nav className="bg-black py-5 lg:py-4 relative z-50">
      <div className="max-w-[85%] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="relative z-50">
          <NavLink to="/">
            {/* Changed md:w-full to lg:w-full */}
            <img src={logo} alt="logo" className="relative w-[80%] lg:w-full" />
          </NavLink>
        </div>

        {/* Hamburger Menu (Mobile and Medium screens) */}
        {/* Changed md:hidden to lg:hidden */}
        <div className="lg:hidden relative z-50">
          <button onClick={toggleMobileMenu} className="text-white border border-white rounded-[10px] p-2">
            {isMobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>

        {/* Navigation Links (Large Desktop) */}
        {/* Changed md:flex to lg:flex */}
        <ul className="space-x-8 hidden lg:flex">
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

        {/* Actions (Large Desktop) */}
        {/* Changed md:flex to lg:flex */}
        <div className="space-x-4 hidden lg:flex text-sm font-medium">
          <NavLink to="/login">
            <button className="px-6 py-3 rounded-full border border-[#FFE500] text-white transition-colors">
              Login
            </button>
          </NavLink>
          <NavLink to="/signup">
            <button className="px-6 py-3 rounded-full bg-[#FFE500] text-black transition-colors">
              Sign up
            </button>
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu Fullscreen Overlay (for Mobile and Medium screens) */}
      {isMobileMenuOpen && (
        // The mt-[85px] assumes the navbar height is around 85px when mobile menu is active.
        // This should be fine as py-5 is active for screens < lg.
        <div className="fixed inset-0 right-[1px] bg-black bg-opacity-95 z-40 overflow-y-auto mt-[85px] lg:hidden">
          <div className="flex flex-col items-center justify-start mt-8 space-y-8 px-4">
            <ul className="flex flex-col space-y-6 text-center">
              {navItems.map(({ label, path }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    onClick={toggleMobileMenu} // Close menu on link click
                    className={({ isActive }) =>
                      `${linkBaseClasses} text-lg ${isActive ? 'text-[#FFE500] border-b-2 border-[#FFE500]' : 'text-gray-100'} ${hoverClasses}`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="flex flex-col space-y-4 w-full px-8 max-w-xs mx-auto"> {/* Added max-w-xs for better centering on wider mobile menu */}
              <NavLink to="/login" onClick={toggleMobileMenu}>
                <button className="px-6 py-3 rounded-full bg-[#FFE500] text-black hover:bg-yellow-600 transition-colors w-full">
                  Login
                </button>
              </NavLink>
              <NavLink to="/signup" onClick={toggleMobileMenu}>
                <button className="px-6 py-3 rounded-full border border-[#FFE500] text-white hover:text-black hover:bg-yellow-500 transition-colors w-full"> {/* Added hover:bg-yellow-500 for better contrast */}
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