import { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logoSrc from "../../assets/logo_crab.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const isServicesActive = location.pathname.startsWith("/services");

  const linkClass = ({ isActive }) =>
    `transition-colors hover:text-lime-400 ${isActive ? "text-lime-400" : ""}`;

  const services = [
    { name: "IT Infrastructure", slug: "it-infrastructure" },
    { name: "Cloud Solutions", slug: "cloud-solutions" },
    { name: "Cybersecurity", slug: "cybersecurity" },
    { name: "AI & Data Analytics", slug: "ai-and-data-analytics" },
    { name: "Software Development", slug: "software-development" },
    { name: "Consulting & Support", slug: "consulting-and-support" },
  ];

  const handleDropdownToggle = () => setIsServicesOpen((prev) => !prev);

  // Close dropdown or menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  return (
    <div className="absolute top-4 md:top-6 left-4 md:left-6 right-4 md:right-6 lg:left-12 lg:right-12 z-30">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-3 md:p-4 bg-black/40 rounded-2xl backdrop-blur-md border border-white/10 relative">
        {/* Logo */}
        <div
          className="flex items-center gap-2 md:gap-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={logoSrc}
            alt="CrabCross logo"
            className="h-10 md:h-12 w-auto"
          />
          <div className="text-white">
            <p className="text-sm md:text-base font-bold leading-tight">
              CrabCross
            </p>
            <p className="text-xs md:text-sm leading-tight opacity-90">
              Technologies
            </p>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex md:gap-6 lg:gap-8 md:items-center text-sm font-semibold text-gray-200 relative">
          <li>
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
          </li>

          {/* Services Dropdown */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={handleDropdownToggle}
              aria-haspopup="menu"
              aria-expanded={isServicesOpen}
              className={`flex cursor-pointer items-center gap-1 transition-colors ${
                isServicesActive ? "text-lime-400" : "hover:text-lime-400"
              }`}
            >
              Services
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  isServicesOpen ? "rotate-180 text-lime-400" : ""
                }`}
              />
            </button>

            <div
              className={`absolute left-0 mt-2 w-56 bg-black/90 border border-white/10 rounded-xl backdrop-blur-md shadow-lg py-2 z-40 transform transition-all duration-200 origin-top ${
                isServicesOpen
                  ? "opacity-100 scale-100 visible"
                  : "opacity-0 scale-95 invisible"
              }`}
              role="menu"
            >
              {services.map((service) => (
                <NavLink
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className={({ isActive }) =>
                    `block w-full text-left px-4 py-2 transition-all text-sm ${
                      isActive
                        ? "text-lime-400 font-semibold bg-white/5"
                        : "text-gray-200 hover:text-lime-400 hover:bg-white/10"
                    }`
                  }
                  onClick={() => setIsServicesOpen(false)}
                >
                  {service.name}
                </NavLink>
              ))}
            </div>
          </li>

          <li>
            <NavLink to="/insights" className={linkClass}>
              Insights
            </NavLink>
          </li>
        </ul>

        {/* Contact Button (Desktop) */}
        <NavLink
          to="/contact"
          className="hidden md:inline-block ml-2 md:ml-4 rounded-full bg-lime-500 hover:bg-lime-600 text-white px-3 md:px-10 py-2 text-xs md:text-sm font-semibold transition-colors"
        >
          Contact Us
        </NavLink>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden mt-2 bg-black/90 border border-white/10 backdrop-blur-md rounded-2xl p-4 text-gray-200 text-sm font-semibold transform transition-all duration-300 origin-top ${
          isMenuOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <NavLink
          to="/"
          className={linkClass}
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </NavLink>
        <hr className="my-2 border-white/10" />

        <NavLink
          to="/about"
          className={linkClass}
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </NavLink>
        <hr className="my-2 border-white/10" />

        {/* Mobile Services Accordion */}
        <div className="relative">
          <button
            onClick={() => setIsServicesOpen((prev) => !prev)}
            className={`flex items-center justify-between w-full py-2 ${
              isServicesActive ? "text-lime-400" : "hover:text-lime-400"
            }`}
          >
            Services
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${
                isServicesOpen ? "rotate-180 text-lime-400" : ""
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              isServicesOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pl-4 space-y-2">
              {services.map((service) => (
                <NavLink
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className={({ isActive }) =>
                    `block w-full text-left transition-all text-sm ${
                      isActive
                        ? "text-lime-400 font-semibold"
                        : "text-gray-200 hover:text-lime-400"
                    }`
                  }
                  onClick={() => {
                    setIsServicesOpen(false);
                    setIsMenuOpen(false);
                  }}
                >
                  {service.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>

        <hr className="my-2 border-white/10" />
        <NavLink
          to="/insights"
          className={linkClass}
          onClick={() => setIsMenuOpen(false)}
        >
          Insights
        </NavLink>
        <hr className="my-2 border-white/10" />
        <NavLink
          to="/contact"
          onClick={() => setIsMenuOpen(false)}
          className="block text-center rounded-full bg-lime-500 hover:bg-lime-600 text-white px-5 py-2 mt-2 transition-colors"
        >
          Contact Us
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
