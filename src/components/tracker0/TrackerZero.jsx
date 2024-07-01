import "./trackerZero.css";
import GeneralInformation from "./GeneralInformation.jsx";
import TopCountries from "./TopCountries.jsx";

const TrackerZero = () => {
  return (
    <div
      className="w-full xl:min-w-[400px] lg:min-w-[200px] px-3 py-5 border-r border-solid border-strongGray z-1 h-screen 
      scrollBar overflow-hidden focus:overflow-y-scroll hover:overflow-y-scroll active:overflow-y-scroll scroll-smooth cursor-grab hidden lg:block"
    >
      <GeneralInformation />
      <TopCountries />
    </div>
  );
};

export default TrackerZero;
