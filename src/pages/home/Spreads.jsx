import React from "react";

const Spreads = () => {
  return (
    <section id="diseaseSpreadsWrapper" className="px-0 py-[50px]">
      <div className="diseaseSpreadsContainer text-center px-0 py-[50px]">
        <div className="spreadsTitleCenter mb-10">
          <h2 className="text-[1rem] text-[#262f5a] font-bold">Spreads</h2>
          <h3 className="text-[2rem] text-[#262f5a] font-bold">
            Disease spreads from person to person
          </h3>
        </div>
        <div className="spreadsCards grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <div className="spreadPersonalCard bg-white shadow-[0px_30px_60px_#a09fca73] flex flex-col items-start m-[15px] p-4 rounded-[10px]">
            <div className="spreadImageContent w-full overflow-hidden mb-4">
              <img
                className="w-full rounded-[10px]"
                src="/assets/images/p-1.jpg"
                alt="facemask"
              />
            </div>
            <div className="spreadTextContent text-start flex flex-col items-start">
              <h4 className="text-[1.2rem] text-[#262f5a] font-bold mb-2">
                Wear Facemask
              </h4>
              <p className="text-[0.8rem] font-light text-[#262f5a]">
                Fever is a key symptom, experts say. Don't fixate on a number,
                but know it's really not a fever until your temperature reaches
                at least 100
              </p>
            </div>
          </div>
          <div className="spreadPersonalCard bg-white shadow-[0px_30px_60px_#a09fca73] flex flex-col items-start m-[15px] p-4 rounded-[10px]">
            <div className="spreadImageContent w-full overflow-hidden mb-4">
              <img
                className="w-full rounded-[10px]"
                src="/assets/images/p-2.jpg"
                alt="washHands"
              />
            </div>
            <div className="spreadTextContent text-start flex flex-col items-start">
              <h4 className="text-[1.2rem] text-[#262f5a] font-bold mb-2">
                Wash your hands often
              </h4>
              <p className="text-[0.8rem] font-light text-[#262f5a]">
                Coughing is another key symptom, but it's not just any cough,
                said Schaffner. It should be a dry cough that you feel in your
                chest.
              </p>
            </div>
          </div>
          <div className="spreadPersonalCard bg-white shadow-[0px_30px_60px_#a09fca73] flex flex-col items-start m-[15px] p-4 rounded-[10px]">
            <div className="spreadImageContent w-full overflow-hidden mb-4">
              <img
                className="w-full rounded-[10px]"
                src="/assets/images/p-6.jpg"
                alt="distance"
              />
            </div>
            <div className="spreadTextContent text-start flex flex-col items-start">
              <h4 className="text-[1.2rem] text-[#262f5a] font-bold mb-2">
                Keep social distance
              </h4>
              <p className="text-[0.8rem] font-light text-[#262f5a]">
                Shortness of breath can be a third -- and very serious --
                manifestation of Covid-19, and it can occur on its own, without
                a cough.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spreads;
