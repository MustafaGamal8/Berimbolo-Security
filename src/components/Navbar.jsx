import React, { useState, useRef, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RiMenu2Line } from "react-icons/ri";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const searchInputRef = useRef(null);
  const menuRef = useRef(null);

  // Function to handle clicks outside the search input
  const handleClickOutside = (event) => {
    if (searchInputRef.current && !searchInputRef.current.contains(event.target)) {
      setIsSearchOpen(false);
    }
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  // Add event listener when the component mounts
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  useEffect(() => {    
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  // Function to handle click on the search input
  const handleSearchClick = (event) => {
    event.stopPropagation(); // Stop event propagation
    setIsSearchOpen(!isSearchOpen);
  };

  // Function to handle click on the menu button
   const handleMenuClick = (event) => {
     event.stopPropagation(); // Stop event propagation
     setIsMenuOpen(!isMenuOpen);
   }

  // Define navigation links as an array of objects
  const navLinks = [
    { title: "Home", href: "#hero" },
    { title: "Products", href: "#products" },
    { title: "About Us", href: "#about" },
    { title: "Service", href: "#services" },
    { title: "Pricing", href: "#pricing" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <nav className={` ${isScrolled ? "fixed top-0 left-0 w-full bgtrans animate__slideInDown animate__faster animate__animated  ":""} z-[2]`}>
      <div className=" relative  w-full  mx-auto lg:px-8 h-20">
        <div className={`flex justify-around items-center h-full `}>
          {/* Logo */}
          <div className="flex-shrink-0 h-full">
            <a href="#" className="flex items-center h-full">
              <img
                className="scale-[200%] h-full object-cover"
                src="/assets/logo2.png"
                alt=""
              />
            </a>
          </div>
          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="flex space-x-4">
              {/* Map over the navLinks array to create navigation items */}
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="text-dark group  px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1  transition-all"
                >
                  <div className="bg-primary rounded-full w-2 group-hover:h-2  transition-all  "></div>
                  {link.title}
                </a>
              ))}
            </div>
          </div>
          {/* Search Input */}
          <div onClick={handleSearchClick} className="text-dark cursor-pointer text-2xl">
            <AiOutlineSearch />
          </div>

          {/* Menu Button */}
          <div onClick={handleMenuClick} className="text-dark cursor-pointer text-2xl md:hidden ">
            <RiMenu2Line />
          </div>
        </div>
    

      {/* search */}
      {isSearchOpen && (
        <div className="absolute top-0 left-0 bgtrans h-20 w-full flex px-12 items-center justify-between animate__fadeInDown animate__animated">
          <div className="flex items-center justify-center gap-2">
            <AiOutlineSearch className="text-dark cursor-pointer text-2xl" />
            <input
              ref={searchInputRef}
              className="bg-transparent focus:outline-none "
              type="text"
              name=""
              id=""
              autoFocus
              placeholder="Search.."
            />
          </div>

          <div className="bg-dark text-white p-4  h-8 rounded-lg flex items-center justify-center cursor-pointer">
            <h1>Search</h1>
          </div>
        </div>
      )}
      {isMenuOpen && (
        <div ref={menuRef} className="absolute top-0 left-0 bgtrans h-20 w-full flex  items-center justify-center animate__fadeInDown animate__animated">
          <div className="flex items-center justify-center  ">
              {/* Map over the navLinks array to create navigation items */}
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="text-dark group text-center py-2 rounded-md text-xs text-nowrap font-medium flex items-center gap-1  transition-all"
                >
                  <div className="bg-primary rounded-full w-2 group-hover:h-2  transition-all  "></div>
                  {link.title}
                </a>
              ))}
            </div>
        </div>
      )}
        </div>
    </nav>
  );
};

export default Navbar;
