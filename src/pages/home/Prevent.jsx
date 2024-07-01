import React from "react";

const Prevent = () => {
  return (
    <>
      <section
        id="preventWrapper"
        className="text-center px-0 py-[50px]"
        style={{ background: "#f0f0f0" }}
      >
        <div className="preventTitle">
          <h2 className="text-[1rem] text-[#262f5a] font-bold">Prevent</h2>
          <h3 className="text-[2.5rem] text-[#262f5a] font-bold">
            Best way to prevent is avoid virus.
          </h3>
        </div>
        <div className="preventWrapperContainer grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center py-10">
          <div className="preventCardsLeft flex flex-col">
            <div className="preventExplanation flex gap-5 items-center text-left">
              <div className="mainImageContainer flex flex-col items-center justify-center w-2/5">
                <div className="hexImageContainer h-[5em] relative w-[7em] bg-white mx-0 my-[4em] before:content-[''] before:h-0 before:absolute before:top-[-2em] before:w-0 before:border-b-[2em] before:border-b-white before:border-x-[3.4641em] before:border-x-transparent before:border-solid before:inset-x-0 after:bottom-[-2em] after:content-[''] after:h-0 after:absolute after:w-0 after:border-t-[2em] after:border-t-white after:border-x-[3.4641em] after:border-x-transparent after:border-solid after:inset-x-0"></div>
                <img
                  className="w-[6.5%] absolute transition-transform duration-[0.3s] ease-[ease]"
                  src="/assets/icons/avoid.png"
                  alt="personalContact"
                />
              </div>
              <div className="preventTextContent">
                <h4 className="text-[1rem] text-[#262f5a] font-bold">
                  Personal Contact
                </h4>
                <p className="text-sm text-start text-[#262f5a]">
                  Fever is a key symptom, experts say. Don't fixate on a number,
                  but know it's really not a fever until your temperature
                  reaches at least 100
                </p>
              </div>
            </div>
            <div className="preventExplanation flex gap-5 items-center text-left">
              <div className="mainImageContainer flex flex-col items-center justify-center w-2/5 transition-transform duration-[0.3s] ease-[ease]">
                <div className="hexImageContainer h-[5em] relative w-[7em] bg-white mx-0 my-[4em] before:content-[''] before:h-0 before:absolute before:top-[-2em] before:w-0 before:border-b-[2em] before:border-b-white before:border-x-[3.4641em] before:border-x-transparent before:border-solid before:inset-x-0 after:bottom-[-2em] after:content-[''] after:h-0 after:absolute after:w-0 after:border-t-[2em] after:border-t-white after:border-x-[3.4641em] after:border-x-transparent after:border-solid after:inset-x-0"></div>
                <img
                  className="w-[6.5%] absolute transition-transform duration-[0.3s] ease-[ease]"
                  src="/assets/icons/wash-hand.png"
                  alt="washHands"
                />
              </div>
              <div className="preventTextContent">
                <h4 className="text-[1rem] text-[#262f5a] font-bold">
                  Wash hands
                </h4>
                <p className="text-sm text-start text-[#262f5a]">
                  Maintain at least 1 metre (3 feet) distance between yourself &
                  anyone who is coughing or sneezing. If you are too close, get
                  chance to infected.
                </p>
              </div>
            </div>
            <div className="preventExplanation flex gap-5 items-center text-left">
              <div className="mainImageContainer flex flex-col items-center justify-center w-2/5 transition-transform duration-[0.3s] ease-[ease]">
                <div className="hexImageContainer h-[5em] relative w-[7em] bg-white mx-0 my-[4em] before:content-[''] before:h-0 before:absolute before:top-[-2em] before:w-0 before:border-b-[2em] before:border-b-white before:border-x-[3.4641em] before:border-x-transparent before:border-solid before:inset-x-0 after:bottom-[-2em] after:content-[''] after:h-0 after:absolute after:w-0 after:border-t-[2em] after:border-t-white after:border-x-[3.4641em] after:border-x-transparent after:border-solid after:inset-x-0"></div>
                <img
                  className="w-[6.5%] absolute transition-transform duration-[0.3s] ease-[ease]"
                  src="/assets/images/icon2.png"
                  alt="socialDistancing"
                />
              </div>
              <div className="preventTextContent">
                <h4 className="text-[1rem] text-[#262f5a] font-bold">
                  Social distancing
                </h4>
                <p className="text-sm text-start text-[#262f5a]">
                  Hands touch many surfaces and can pick up viruses. So, hands
                  can transfer the virus to your eyes, nose or mouth and can
                  make you sick.
                </p>
              </div>
            </div>
          </div>
          <div className="preventCardsRight flex flex-col">
            <div className="preventExplanation flex gap-5 items-center text-left">
              <div className="mainImageContainer flex flex-col items-center justify-center w-2/5 transition-transform duration-[0.3s] ease-[ease]">
                <div className="hexImageContainer h-[5em] relative w-[7em] bg-white mx-0 my-[4em] before:content-[''] before:h-0 before:absolute before:top-[-2em] before:w-0 before:border-b-[2em] before:border-b-white before:border-x-[3.4641em] before:border-x-transparent before:border-solid before:inset-x-0 after:bottom-[-2em] after:content-[''] after:h-0 after:absolute after:w-0 after:border-t-[2em] after:border-t-white after:border-x-[3.4641em] after:border-x-transparent after:border-solid after:inset-x-0"></div>
                <img
                  className="w-[6.5%] absolute transition-transform duration-[0.3s] ease-[ease]"
                  src="/assets/icons/mouth-tissue.png"
                  alt="respiratory"
                />
              </div>
              <div className="preventTextContent">
                <h4 className="text-[1rem] text-[#262f5a] font-bold">
                  Respiratory hygiene
                </h4>
                <p className="text-sm text-start text-[#262f5a]">
                  Maintain good respiratory hygiene as covering your mouth &
                  nose with your bent elbow or tissue when cough or sneeze.
                </p>
              </div>
            </div>
            <div className="preventExplanation flex gap-5 items-center text-left">
              <div className="mainImageContainer flex flex-col items-center justify-center w-2/5 transition-transform duration-[0.3s] ease-[ease]">
                <div className="hexImageContainer h-[5em] relative w-[7em] bg-white mx-0 my-[4em] before:content-[''] before:h-0 before:absolute before:top-[-2em] before:w-0 before:border-b-[2em] before:border-b-white before:border-x-[3.4641em] before:border-x-transparent before:border-solid before:inset-x-0 after:bottom-[-2em] after:content-[''] after:h-0 after:absolute after:w-0 after:border-t-[2em] after:border-t-white after:border-x-[3.4641em] after:border-x-transparent after:border-solid after:inset-x-0"></div>
                <img
                  className="w-[6.5%] absolute transition-transform duration-[0.3s] ease-[ease]"
                  src="/assets/icons/soap.png"
                  alt="disinfect"
                />
              </div>
              <div className="preventTextContent">
                <h4 className="text-[1rem] text-[#262f5a] font-bold">
                  Clean And Disinfect
                </h4>
                <p className="text-sm text-start text-[#262f5a]">
                  Fever is a key symptom, experts say. Don't fixate on a number,
                  but know it's really not a fever until your temperature
                  reaches at least 100
                </p>
              </div>
            </div>
            <div className="preventExplanation flex gap-5 items-center text-left">
              <div className="mainImageContainer flex flex-col items-center justify-center w-2/5 transition-transform duration-[0.3s] ease-[ease]">
                <div className="hexImageContainer h-[5em] relative w-[7em] bg-white mx-0 my-[4em] before:content-[''] before:h-0 before:absolute before:top-[-2em] before:w-0 before:border-b-[2em] before:border-b-white before:border-x-[3.4641em] before:border-x-transparent before:border-solid before:inset-x-0 after:bottom-[-2em] after:content-[''] after:h-0 after:absolute after:w-0 after:border-t-[2em] after:border-t-white after:border-x-[3.4641em] after:border-x-transparent after:border-solid after:inset-x-0"></div>
                <img
                  className="w-[6.5%] absolute transition-transform duration-[0.3s] ease-[ease]"
                  src="/assets/images/icon4.png"
                  alt="personalContact"
                />
              </div>
              <div className="preventTextContent">
                <h4 className="text-[1rem] text-[#262f5a] font-bold">
                  Wear a Facemask
                </h4>
                <p className="text-sm text-start text-[#262f5a]">
                  Our comprehensive Online Marketing strategy will boost your
                  website traffic hence monthly sales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Prevent;
