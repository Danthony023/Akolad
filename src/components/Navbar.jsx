import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/images/logo.png";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const scrollToContact = () => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollToContact: true } });
    } else {
      setTimeout(() => {
        const contactForm = document.getElementById("contact-form");
        if (contactForm) {
          contactForm.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const navigateAndClose = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md shadow-primary">
      <nav className="max-w-full mx-auto px-6 md:px-30 py-1 flex items-center justify-between">
        {/* Logo */}
        <div onClick={() => navigate("/")} className="cursor-pointer">
          <img src={Logo} alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 font-medium text-gray-700">
          <div
            onClick={() => navigate("/")}
            className={`cursor-pointer hover:text-primary ${
              isActive("/") ? "text-primary" : ""
            }`}
          >
            Home
          </div>
          <div
            onClick={() => navigate("/about")}
            className={`cursor-pointer hover:text-primary ${
              isActive("/about") ? "text-primary" : ""
            }`}
          >
            About Us
          </div>
          <div
            onClick={() => navigate("/athletes")}
            className={`cursor-pointer hover:text-primary ${
              isActive("/athletes") ? "text-primary" : ""
            }`}
          >
            Athletes
          </div>
          <div
            onClick={() => navigate("/events")}
            className={`cursor-pointer hover:text-primary ${
              isActive("/events") ? "text-primary" : ""
            }`}
          >
            Live Events
          </div>
          <div
            onClick={() => navigate("/gallery")}
            className={`cursor-pointer hover:text-primary ${
              isActive("/gallery") ? "text-primary" : ""
            }`}
          >
            Gallery
          </div>
          <button
            onClick={scrollToContact}
            className="uppercase ml-4 px-4 py-2 bg-primary text-white rounded-xl hover:bg-primary/80"
          >
            CONTACT US
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Links */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4 space-y-4 font-medium text-gray-700">
          <div
            onClick={() => navigateAndClose("/")}
            className={`cursor-pointer hover:text-primary ${
              isActive("/") ? "text-primary" : ""
            }`}
          >
            Home
          </div>
          <div
            onClick={() => navigateAndClose("/about")}
            className={`cursor-pointer hover:text-primary ${
              isActive("/about") ? "text-primary" : ""
            }`}
          >
            About Us
          </div>
          <div
            onClick={() => navigateAndClose("/athletes")}
            className={`cursor-pointer hover:text-primary ${
              isActive("/athletes") ? "text-primary" : ""
            }`}
          >
            Athletes
          </div>
          <div
            onClick={() => navigateAndClose("/events")}
            className={`cursor-pointer hover:text-primary ${
              isActive("/events") ? "text-primary" : ""
            }`}
          >
            Live Events
          </div>
          <div
            onClick={() => navigateAndClose("/gallery")}
            className={`cursor-pointer hover:text-primary ${
              isActive("/gallery") ? "text-primary" : ""
            }`}
          >
            Gallery
          </div>
          <button
            onClick={scrollToContact}
            className="w-full text-left px-4 py-2 bg-primary text-white rounded hover:bg-primary/80"
          >
            CONTACT US
          </button>
        </div>
      )}
    </header>
  );
}
