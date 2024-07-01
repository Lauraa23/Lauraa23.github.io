import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import TrackerZero from "../components/tracker0/TrackerZero.jsx";

const Layout = () => {
  return (
    <div className="flex box-border m-0 p-0 cursor-grab">
      <div className="flex w-auto lg:w-[500px]">
        <Navbar />
        <TrackerZero />
      </div>
      <main className="w-screen h-[100vh] bg-light overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
