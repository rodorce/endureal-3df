import React from "react";

const SpecsGrid = () => {
  return (
    <div className="bg-[#ECEFF0] w-full h-full">
      <div className="container py-14">
        <h2 className="font-semibold text-5xl text-center py-12">
          Industrial Safety Systems
        </h2>
        <p className="text-center pb-14">
          Zortrax Endureal has over 30 built-in sensors working in real-time to
          guarantee seamless operation in high-tech manufacturing and product
          development projects.
        </p>
        <div className="flex lg:flex-row flex-col">
          <div className="lg:w-1/4 mx-1 bg-white">
            <img
              src="https://cf.zortrax.com/wp-content/uploads/2019/09/title1.png"
              alt=""
            />
            <h3 className="font-semibold text-xl px-4 py-2">
              Blackout Response System
            </h3>
            <p className="px-4 pb-4">
              When a power outage is detected, Endureal uses the energy stored
              in built-in capacitors to save the exact position of the printing
              head. This way printing can be resumed from the same spot when the
              power is back on.
            </p>
          </div>
          <div className="lg:w-1/4 mx-1 bg-white">
            <img
              src="https://cf.zortrax.com/wp-content/uploads/2019/09/title2.png"
              alt=""
            />
            <h3 className="font-semibold text-xl px-4 py-2">
              Monitored printing process
            </h3>
            <p className="px-4 pb-4">
              Printing progress can be monitored remotely with a heat-resistant
              camera installed in the Endureals printing chamber. The camera is
              capable of live video streaming and designed to work in demanding
              conditions.
            </p>
          </div>
          <div className="lg:w-1/4 mx-1 bg-white">
            <img
              src="https://cf.zortrax.com/wp-content/uploads/2019/09/title3.png"
              alt=""
            />

            <h3 className="font-semibold text-xl px-4 py-2">
              Advanced filament sensors
            </h3>
            <p className="px-4 pb-4">
              Separate sensors work at all times to detect events when filament
              is jammed or depleted. The printer also monitors the weight of the
              filament spools to determine if there is enough material to
              complete the printing process.
            </p>
          </div>
          <div className="lg:w-1/4 mx-1 bg-white">
            <img
              src="https://cf.zortrax.com/wp-content/uploads/2019/09/title4.png"
              alt=""
            />
            <h3 className="font-semibold text-xl px-4 py-2">
              Controlled filament`&#34;`s compartment
            </h3>
            <p className="px-4 pb-4">
              Filaments compartment creates an optimal environment for storing
              material spools. It is equipped with a moisture absorber which is
              responsible for reducing humidity to levels appropriate for highly
              hygroscopic materials.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecsGrid;
