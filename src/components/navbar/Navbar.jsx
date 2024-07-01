import React from "react";

import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-24 h-full bg-light flex-shrink-0">
      <div className="pl-0 pr-0 w-full border-r border-solid border-strongGray">
        <ul className="flex flex-col p-0 m-0 h-screen list-none">
          <li className="text-center box-border">
            <NavLink
              to="/"
              className="leading-100 text-center inline-block mb-5 cursor-pointer content-center h-full"
            >
              <div className="animate-spinner">
                <img
                  className="w-12 relative align-middle border-none m-auto"
                  src="../assets/images/coronavirus.png"
                  alt="logo covid"
                />
              </div>
            </NavLink>
          </li>
          <li className="text-center p-[15px]">
            <NavLink
              to="/trackers/1"
              className="[&.active]:bg-primary hover:bg-primary [&.active]:text-white hover:text-white text-primary rounded-lg text-center px-4 py-3 outline-none relative"
              data-tab="chats"
            >
              <span className="block w-2 h-2 rounded-lg absolute top-1 right-1 bg-warning"></span>
              <i className="ti-pie-chart text-inherit text-2xl relative top-1"></i>
            </NavLink>
          </li>
          <li className="text-center p-[15px]">
            <NavLink
              to="/trackers/2"
              className="[&.active]:bg-primary hover:bg-primary [&.active]:text-white hover:text-white text-primary rounded-lg text-center px-4 py-3 outline-none relative"
              data-tab="chats"
            >
              <span className="block w-2 h-2 rounded-lg absolute top-1 right-1 bg-red"></span>
              <i className="ti-view-list text-inherit text-2xl relative top-1"></i>
            </NavLink>
          </li>
          <li className="text-center p-[15px]">
            <NavLink
              to="/trackers/3"
              className="[&.active]:bg-primary hover:bg-primary [&.active]:text-white hover:text-white text-primary rounded-lg text-center px-4 py-3 outline-none relative"
              data-tab="chats"
            >
              <i className="ti-view-grid text-inherit text-2xl relative top-1"></i>
            </NavLink>
          </li>
          <li className="text-center p-[15px]">
            <NavLink
              to="/trackers/4"
              className="[&.active]:bg-primary hover:bg-primary [&.active]:text-white hover:text-white text-primary rounded-lg text-center px-4 py-3 outline-none relative"
              data-tab="chats"
            >
              <i className="ti-layout-tab text-inherit text-2xl relative top-1"></i>
            </NavLink>
          </li>
          {/* links inhabilitados */}
          <li className=" text-center">
            <div
              className="rounded-lg text-center px-4 py-3 outline-none relative"
              data-tab="chats"
            >
              <i className="ti-layers-alt text-primary text-2xl relative top-1"></i>
            </div>
          </li>
          <li className=" text-center">
            <div
              to="/"
              className="rounded-lg text-center px-4 py-3 outline-none relative"
              data-tab="chats"
            >
              <i className="ti-stats-up text-primary text-2xl relative top-1"></i>
            </div>
          </li>
          <li className=" text-center">
            <div
              to="/"
              className="rounded-lg text-center px-4 py-3 outline-none relative"
              data-tab="chats"
            >
              <i className="ti-world text-primary text-2xl relative top-1"></i>
            </div>
          </li>
          <li className=" flex-auto text-center">
            <div
              to="/"
              className="rounded-lg text-center px-4 py-3 outline-none relative"
              data-tab="chats"
            >
              <i className="ti-comment text-primary text-2xl relative top-1"></i>
            </div>
          </li>
          <li className=" text-center">
            <div
              to="/"
              className="rounded-lg text-center px-4 py-3 outline-none relative"
              data-tab="chats"
            >
              <i className="ti-flickr-alt text-primary text-2xl relative top-1"></i>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
