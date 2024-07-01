import React from "react";

const data = {
  "total-confirmed": {
    title: "Total Confirmed",
    imageUrl: "/assets/icons/covid-defult.svg",
  },
  "total-recovered": {
    title: "Total Recovered",
    imageUrl: "/assets/icons/covid-green.svg",
  },
  "total-deaths": {
    title: "Total Deaths",
    imageUrl: "/assets/icons/covid-red.svg",
  },
  "new-deaths": {
    title: "New Deaths",
    imageUrl: "/assets/icons/covid-redark.svg",
  },
  "help-number": {
    title: "Help Line No.",
    imageUrl: "/assets/icons/telephone.svg",
  },
};

const SmallCard = ({ information, infoData }) => {
  const { title, imageUrl } = data[information];
  return (
    <div className="flex bg-white 2xl:w-[20%] xl:w-[32%] md:w-[49%] w-full p-[15px] flex-grow">
      <div className="flex gap-[10px]">
        <div className="icon self-center w-[50px]">
          <img src={imageUrl} alt="iconCovid" className="w-[50px]" />
        </div>
        <div className="info">
          <h5 className="text-navyBlue text-[20]">{title}</h5>
          <h3 className="text-navyBlue text-[35px] font-semibold mb-0">
            {infoData ? infoData : "0"}
          </h3>
        </div>
      </div>
    </div>
  );
};
export default SmallCard;
