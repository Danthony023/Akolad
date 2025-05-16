import React from "react";
import { useNavigate } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import Logo from "../assets/images/logo.png";
import { FaFacebookF, FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  const navigate = useNavigate();
  const isActive = (path) => location.pathname === path;

  // Define the pages for the footer
  const pages = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Athletes", path: "/athletes" },
    { name: "Live Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
  ];

  return (
    <footer className="mt-12 z-20">
      {/* Primary footer */}
      <div className="bg-primary text-white px-6 md:px-30 py-8 grid grid-cols-1 md:grid-cols-2">
        {/* Navigation Pages */}
        <div className="flex flex-col items-center">
          <div className="bg-white w-full flex flex-col items-center">
            <img src={Logo} alt="Logo" className="h-12 w-auto" />
          </div>
          <ul className="space-y-4 mt-4">
            {pages.map((page) => (
              <li
                key={page.name}
                onClick={() => navigate(page.path)}
                className={`cursor-pointer hover:underline ${
                  isActive(page.path) ? "" : ""
                }`}
              >
                {page.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          {/* Contact Info */}
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-lg text-center flex flex-col justify-center text-primary mt-4 md:mt-0 bg-white h-12 w-full">
              Contact Information
            </h3>
            <div>
              <ul className="space-y-4 mt-4">
                <li className="gap-2">
                  <p className="font-semibold">Email</p>
                  <p className="font-light">info@akoladproject.com</p>
                </li>
                <li className="gap-2">
                  <p className="font-semibold">Location</p>
                  <p className="font-light">Lagos, Nigeria</p>
                </li>
                <li className="gap-2">
                  <p className="font-semibold">Phone Number</p>
                  <p className="font-light">+234 812 345 6789</p>
                </li>
              </ul>
              {/* Social Icons */}
              <div className="flex space-x-4 mt-4 text-black text-lg">
                <FaFacebookF className="cursor-pointer hover:text-gray-300" />
                <FaInstagram className="cursor-pointer hover:text-gray-300" />
                <FaXTwitter className="cursor-pointer hover:text-gray-300" />
                <FaYoutube className="cursor-pointer hover:text-gray-300" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary footer */}
      <div className="bg-white text-black text-center py-4">
        <p>
          &copy; {new Date().getFullYear()} AKOLAD CONCEPTS. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
