import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <section
        id="header"
        className="text-white relative bg-center"
        style={{
          background:
            "linear-gradient(to right, #1e0c9db3, #06cdecb3), url('/assets/images/3626307.jpg') center center / cover no-repeat local",
        }}
      >
        <nav
          id="navbarHome"
          className="w-full flex justify-between items-center justify-evenly bg-transparent px-8 py-5"
        >
          <img
            className="logoNavbar h-5"
            src="assets/images/logo-white.png"
            alt="coronavirus"
          />
          <div className="navLinks">
            <ul className="navbarItems list-none flex gap-5 items-center text-[0.8rem]">
              <li className="cursor-pointer text-white">Home</li>
              <li className="cursor-pointer text-white">Prevention</li>
              <li className="cursor-pointer text-white">Quarantine</li>
              <li className="cursor-pointer text-white">Pages</li>
              <li className="cursor-pointer text-white">About</li>
              <li className="cursor-pointer text-white">Help</li>
              <li>
                <NavLink
                  to="trackers/1"
                  className="bg-[#2d2f91] text-white no-underline text-center px-5 py-2.5 rounded-[20px] hover:bg-[#1565c0]"
                >
                  Trackers
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <div className="bannerContainer grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center gap-8 lg:gap-0 py-10 lg:py-0">
          <div className="messageSection flex flex-col items-center h-[90vh] w-[90%] lg:w-[80%] justify-start lg:justify-center text-center lg:text-left">
            <h3 className="text-[2.5rem] font-bold">
              Stay Home, And Prayer For Victim Of Corona Virus
            </h3>
            <p className="text-[1rem] font-light">
              Human coronaviruses are common and are typically associated with
              mild illnesses, similar to the common cold.The corona virus
              COVID-19 is affecting 210 countries & territories around the world
              and 2 international conveyances.
            </p>
          </div>
          <div className="imageSection flex justify-center lg:justify-end">
            <img
              className="bannerRightImage w-[80vw] lg:w-[28vw]"
              src="/assets/images/banner-right-image1.png"
              alt="bannerRight"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
