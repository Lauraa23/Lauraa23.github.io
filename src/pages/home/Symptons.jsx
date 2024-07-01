import React from "react";

const Symptoms = () => {
  return (
    <>
      <section
        id="symptomWrapper"
        className="text-center px-0 py-[50px]"
        style={{ background: "aliceblue" }}
      >
        <div className="basicSymptom w-35">
          <h2 className="text-[1rem] text-[#262f5a] font-bold">Symptom</h2>
          <h3 className="text-[3rem] text-[#262f5a] font-bold">
            Basic Symptom Against Coronavirus
          </h3>
        </div>
        <div className="symptomCarousel grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center py-10">
          <div className="symptomCard bg-white shadow-[0_30px_60px_#0000001a] flex flex-col items-start px-5 py-5 rounded-[10px] w-[80vw] md:w-[40vw] lg:w-[25vw]">
            <span>
              <img
                className="w-20"
                src="/assets/images/banner-right.png"
                alt="lungs"
              />
            </span>
            <h4 className="text-[1rem] text-[#262f5a] font-bold">
              Aches and pains
            </h4>
            <p className="text-[0.9rem] text-start text-[#262f5a] m-0">
              Fever is a key symptom, experts say. Don't fixate on a number, but
              know it's really not a fever until your temperature reaches at
              least 100
            </p>
          </div>
          <div className="symptomCard bg-white shadow-[0_30px_60px_#0000001a] flex flex-col items-start px-5 py-5 rounded-[10px] w-[80vw] md:w-[40vw] lg:w-[25vw]">
            <span>
              <img
                className="w-20"
                src="/assets/images/runny-nose.png"
                alt="cough"
              />
            </span>
            <h4 className="text-[1rem] text-[#262f5a] font-bold">Runny nose</h4>
            <p className="text-[0.9rem] text-start text-[#262f5a] m-0">
              People of all ages who experience fever and/or cough associated
              with difficulty breathing/shortness of breath.
            </p>
          </div>
          <div className="symptomCard bg-white shadow-[0_30px_60px_#0000001a] flex flex-col items-start px-5 py-5 rounded-[10px] w-[80vw] md:w-[40vw] lg:w-[25vw]">
            <span>
              <img
                className="w-20"
                src="/assets/images/sore-throat.png"
                alt="breathing"
              />
            </span>
            <h4 className="text-[1rem] text-[#262f5a] font-bold">
              Sore throat
            </h4>
            <p className="text-[0.9rem] text-start text-[#262f5a] m-0">
              Older people, and those with underlying medical problems like high
              blood pressure, heart and lung problems, diabetes, or cancer
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Symptoms;
