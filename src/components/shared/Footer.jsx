import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import logoSrc from "../../assets/logo_crab.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo and Social Media */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 md:gap-3">
              <img
                src={logoSrc}
                alt="CrabCross logo"
                className="h-12 md:h-16 w-auto"
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
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-lime-500 hover:bg-lime-600 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} className="text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-lime-500 hover:bg-lime-600 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-white" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-lime-500 hover:bg-lime-600 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-white" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-lime-500 hover:bg-lime-600 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} className="text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services/it-infrastructure"
                  className="text-gray-400 hover:text-lime-500 transition-colors"
                >
                  IT Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  to="/services/cloud-solutions"
                  className="text-gray-400 hover:text-lime-500 transition-colors"
                >
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/services/cybersecurity"
                  className="text-gray-400 hover:text-lime-500 transition-colors"
                >
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link
                  to="/services/ai-and-data-analytics"
                  className="text-gray-400 hover:text-lime-500 transition-colors"
                >
                  AI & Data Analytics
                </Link>
              </li>
              <li>
                <Link
                  to="/services/software-development"
                  className="text-gray-400 hover:text-lime-500 transition-colors"
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/consulting-and-support"
                  className="text-gray-400 hover:text-lime-500 transition-colors"
                >
                  Consulting & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Vital Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Vital Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-lime-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-lime-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="/Crab-Cross-Technology-company-profile.pdf"
                  download="CrabCross_Company_Profile.pdf"
                  className="text-gray-400 hover:text-lime-500 transition-colors"
                >
                  Company Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Privacy */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Legal & Privacy
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/terms"
                  className="text-gray-400 hover:text-lime-500 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-400 hover:text-lime-500 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    // Trigger cookie preferences modal
                    const event = new CustomEvent("openCookieSettings");
                    window.dispatchEvent(event);
                  }}
                  className="text-gray-400 cursor-pointer hover:text-lime-500 transition-colors"
                >
                  Manage Cookies
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-6">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} CrabCross | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
