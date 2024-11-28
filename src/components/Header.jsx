import React, { useState } from "react";
import { LOGO_IMG, NAV_DATA } from "../utils/constants/header/nav";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaArrowLeft,
  FaChevronRight,
  FaChevronDown,
} from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(null);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleSubmenu = (index) => {
    setSubmenuOpen(submenuOpen === index ? null : index);
  };

  return (
    <div className="bg-primary-color flex items-center justify-between lg:justify-around px-4 py-3">
      <img src={LOGO_IMG} alt="logo" className="w-24 rounded-full" />

      {/* Desktop Navigation */}
      <nav className="hidden lg:block">
        <ul className="flex space-x-6 text-white text-nowrap">
          {NAV_DATA.map((item, index) => (
            <li key={index} className="relative group">
              {item.dropdown ? (
                <button className="hover:text-gray-300 flex items-center  gap-2">
                  {item.name} <IoMdArrowDropdown />
                </button>
              ) : (
                <Link to={item.link} className="hover:text-gray-300">
                  {item.name}
                </Link>
              )}

              {item.dropdown && (
                <ul className="absolute left-0 top-4 mt-2 hidden group-hover:block bg-white text-black shadow-md rounded z-30">
                  {item.dropdown.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="px-4 py-2 hover:bg-gray-200 hover:rounded"
                    >
                      <Link to={subItem.link}>{subItem.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Icon */}
      <button
        className="block lg:hidden text-[#EEBB1E] text-xl "
        onClick={toggleMobileMenu}
      >
        <FaBars />
      </button>

      <div
        className={`fixed top-0 right-0 h-full z-20 bg-[#050066] text-white w-64 transform transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className="p-4 text-2xl" onClick={toggleMobileMenu}>
          <FaArrowLeft />
        </button>

        <ul className="space-y-4 p-4">
          {NAV_DATA.map((item, index) => (
            <li key={index} className="flex flex-col">
              <div className="flex justify-between items-center">
                {item.dropdown ? (
                  <button
                    onClick={() => toggleSubmenu(index)}
                    className="hover:text-gray-300"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    to={item.link}
                    onClick={toggleMobileMenu}
                    className="hover:text-gray-300"
                  >
                    {item.name}
                  </Link>
                )}

                {item.dropdown && (
                  <button
                    className="ml-2 text-xl"
                    onClick={() => toggleSubmenu(index)}
                  >
                    {submenuOpen === index ? (
                      <FaChevronDown />
                    ) : (
                      <FaChevronRight />
                    )}
                  </button>
                )}
              </div>
              {item.dropdown && submenuOpen === index && (
                <ul className="pl-4 mt-2">
                  {item.dropdown.map((subItem, subIndex) => (
                    <li key={subIndex} className="py-1">
                      <Link
                        to={subItem.link}
                        onClick={toggleMobileMenu}
                        className="hover:text-gray-300"
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
