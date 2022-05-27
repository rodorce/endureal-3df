import React from "react";

const FlameRetardant = () => {
  return (
    <div className="bg-[url('https://cf.zortrax.com/static/img/endureal/pei_bg.jpg')] bg-cover">
      <div className="container py-14">
        <h2 className="font-normal text-5xl text-center py-6 text-white">
          Z-PEI 9085 flame-retardant aerospace-grade polymer
        </h2>
        <p className="text-white mb-10">
          Based on a durable polyetherimide blend, Z-PEI 9085 has
          strength-to-weight ratio comparable to aluminum 6061 with much better
          thermal shock resistance. The material is designed primarily for
          aerospace and automotive engineering applications.
        </p>
        <div className="flex flex-col lg:flex-row pt-4">
          <div className="lg:w-1/4 mx-4 bg-white mb-4">
            <img
              src="https://zortrax.com/static/img/endureal/pei1.jpg"
              alt=""
              srcset=""
            />

            <h3 className="font-semibold text-xl px-4 py-2">
              High flame-retardancy
            </h3>
            <p className="px-4 pb-4">
              Z-PEI 9085 has a UL94 V-0 flammability rating and has been tested
              in accordance with the FAR 25.853 procedures which means it can be
              safely used in aerospace interiors. This flammability rating means
              that a vertically oriented sample printed with Z-PEI 9085
              extinguishes within 10 seconds from when the fire has been applied
              to it.
            </p>
          </div>
          <div className="lg:w-1/4 mx-4 bg-white mb-4">
            <img
              src="https://zortrax.com/static/img/endureal/pei2.jpg"
              alt=""
              srcset=""
            />

            <h3 className="font-semibold text-xl px-4 py-2">
              Flight-readiness
            </h3>
            <p className="px-4 pb-4">
              Z-PEI 9085 has a UL94 V-0 flammability rating and has been tested
              in accordance with the FAR 25.853 procedures which means it can be
              safely used in aerospace interiors. This flammability rating means
              that a vertically oriented sample printed with Z-PEI 9085
              extinguishes within 10 seconds from when the fire has been applied
              to it.
            </p>
          </div>
          <div className="lg:w-1/4 mx-4 bg-white mb-4">
            <img
              src="https://zortrax.com/static/img/endureal/pei3.jpg"
              alt=""
              srcset=""
            />

            <h3 className="font-semibold text-xl px-4 py-2">
              Excellent thermals
            </h3>
            <p className="px-4 pb-4">
              Z-PEI 9085 retains its mechanical properties in temperatures
              reaching 167° C which means its performance is on par with
              aerospace-grade aluminum 6061. That's why Z-PEI can be used for
              various parts in automobile engines which typically have operating
              temperatures between 90° C and 105° C.
            </p>
          </div>
          <div className="lg:w-1/4 mx-4 bg-white mb-4">
            <img
              src="https://zortrax.com/static/img/endureal/pei4.jpg"
              alt=""
              srcset=""
            />

            <h3 className="font-semibold text-xl px-4 py-2">
              Proven outgassing properties
            </h3>
            <p className="px-4 pb-4">
              Z-PEI 9085 is made out of a proven blend of polyetherimide which
              has passed rigorous outgassing tests performed by both NASA and
              ESA. It is one of the few 3D printing materials cleared for use
              onboard the International Space Station.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlameRetardant;
