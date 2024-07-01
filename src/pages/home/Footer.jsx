import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1b2a4e] text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 py-6 lg:py-8">
        <div className="flex flex-col items-start">
          <img
            className="w-20 mb-4"
            src="/assets/images/logo-white.png"
            alt="Logo"
          />
          <p className="text-sm mb-4">
            These droplets can land on objects and surfaces around the person
            such as tables, doorknobs and handrails.
          </p>
          <ul className="flex mt-4 space-x-1">
            <li>
              <i className="ti-facebook bg-[#293f73] text-white p-2 rounded-lg"></i>
            </li>
            <li>
              <i className="ti-twitter-alt bg-[#293f73] text-white p-2 rounded-lg"></i>
            </li>
            <li>
              <i className="ti-linkedin bg-[#293f73] text-white p-2 rounded-lg"></i>
            </li>
            <li>
              <i className="ti-youtube bg-[#293f73] text-white p-2 rounded-lg"></i>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold">Quick Links</h4>
          <ul>
            <li className="text-sm mb-2">Prevention</li>
            <li className="text-sm mb-2">Quarantine</li>
            <li className="text-sm mb-2">About</li>
            <li className="text-sm">Help</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold">About</h4>
          <ul>
            <li className="text-sm mb-2">Hand Wash</li>
            <li className="text-sm mb-2">Social Distance</li>
            <li className="text-sm mb-2">Isolate</li>
            <li className="text-sm">Difference</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold">Help</h4>
          <ul>
            <li className="text-sm mb-2">Hand Wash</li>
            <li className="text-sm mb-2">Social Distance</li>
            <li className="text-sm mb-2">Isolate</li>
            <li className="text-sm">Difference</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-3 border-t border-[#223461]">
        <p className="text-xs">© Copyright 2020. All Rights Reserved</p>
        <p className="text-xs">Design by COVIDongas</p>
      </div>
    </footer>
  );
};

export default Footer;
