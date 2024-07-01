import React from "react";
import { cn } from "../../utils/utils.js";

export const Card = ({ children }) => {
  return (
    <div id="container">
      <div
        id="card"
        className=" bg-white group relative overflow-hidden rounded shadow-[0_15px_30px_0_rgba(20,50,90,0.05)] p-[15px] py-4 hover:translate-y-[-10px] cursor-pointer"
      >
        <div id="info">{children}</div>
      </div>
    </div>
  );
};

export default Card;

export const CardTitle = ({ children }) => {
  return (
    <h5 className="text-lg font-medium text-black mt-[-15px] mb-2.5 -mx-5 px-5 py-[15px] border-b border-strongGray">
      {children}
    </h5>
  );
};

export const CardData = ({ children, className }) => {
  return (
    <h3 className={cn("text-black text-[35px] font-semibold mb-0", className)}>
      {children}
    </h3>
  );
};

export const CardImage = ({ src }) => {
  return (
    <div
      id="icon"
      className="w-[140px] h-[140px] absolute right-[-30px] top-[-30px] leading-[60px] text-white text-xl opacity-10 group-hover:animate-spinner"
    >
      <img src={src} alt="" className=" w-full align-middle" />
    </div>
  );
};
