import React from "react";

const ThermalStable = () => {
  return (
    <div className="bg-[url('https://cf.zortrax.com/static/img/endureal/pei1010_bg.jpg')] bg-cover">
      <div className="container py-14">
        <h2 className="font-normal text-5xl text-center py-6 text-white">
          Z-PEI 1010 robust thermally stable industrial material
        </h2>
        <p className="text-white mb-10">
          Z-PEI 1010 belongs to the same family of polyetherimides as Z-PEI
          9085, but with higher rigidity, higher Heat Deflection Temperature,
          and broader chemical resistance. This filament is aimed at chemical
          industry, automotive, and mass manufacturing scenarios.
        </p>
        <div className="flex  mb-4 flex-col lg:flex-row pt-4">
          <div className="lg:w-1/3 mx-4 bg-white">
            <img
              src="https://zortrax.com/static/img/endureal/pei1010_1.jpg"
              alt=""
              srcset=""
            />

            <h3 className="font-semibold text-xl px-4 py-2">High-rigidity</h3>
            <p className="px-4 pb-4">
              Z-PEI 1010 has higher rigidity than Z-PEI 9085 which means it
              would break rather than give in under critical loads. This makes
              it a good match for casings, covers, housings and industrial
              positioning jigs.
            </p>
          </div>
          <div className="lg:w-1/3 mx-4 bg-white mb-4">
            <img
              src="https://zortrax.com/static/img/endureal/pei1010_2.jpg"
              alt=""
              srcset=""
            />

            <h3 className="font-semibold text-xl px-4 py-2">
              High temperatures
            </h3>
            <p className="px-4 pb-4">
              The HDT (Heat Deflection Temperature) of Z-PEI 1010 stands at 208°
              C which is one of the highest values among all high-performance
              polymers. Components 3D printed with Z-PEI 1010 retain their
              properties and dimensional stability in a wide range of
              temperatures.
            </p>
          </div>
          <div className="lg:w-1/3 mx-4 bg-white mb-4">
            <img
              src="https://zortrax.com/static/img/endureal/pei1010_3.jpg"
              alt=""
              srcset=""
            />

            <h3 className="font-semibold text-xl px-4 py-2">
              Chemical resistance
            </h3>
            <p className="px-4 pb-4">
              Z-PEI 1010 offers broad chemical resistance. The material does not
              react with automotive fluids, aqueous solutions, or halogenated
              hydrocarbons. It is therefore suitable for piping in chemical
              industry, heating and cooling systems, or metal-cleaning
              equipment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThermalStable;
