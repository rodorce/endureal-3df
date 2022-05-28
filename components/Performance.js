import React from "react";

const Performance = () => {
  return (
    <div className="bg-[#ECEFF0] w-full h-full" id="performance">
      <div className="container py-14">
        <div className="box text-left bg-[#C27B4D] py-12 px-4 text-white flex flex-col mx-auto lg:flex-row">
          <div className="lg:w-1/3 w-1/2 lg:mr-12 ">
            <img
              src="https://zortrax.com/static/img/endureal/zortrax_endureal_front_1.png"
              alt=""
            />
          </div>
          <div className="flex justify-center flex-col lg:w-1/2">
            <h2 className="font-semibold text-5xl text-left py-6">
              Performance under control
            </h2>
            <p>
              A wide array of sensors ensure that the Zortrax Endureal always
              delivers best possible performance.
            </p>
            <ul className="pt-6 list-disc">
              <li className="pb-4">
                Temperature sensors constantly measure temperature of crucial
                components to prevent overheating.
              </li>
              <li className="pb-4">
                Capacitive sensors measure build platform and nozzles relative
                position to ensure calibration is on point.
              </li>
              <li className="pb-4">
                Optical sensors working with no mechanical parts ensure precise
                extruders positioning in all axes.
              </li>
              <li className="pb-4">
                Fan stop sensors immediately detect when fans are disconnected
                or malfunctioning to ensure adequate cooling.
              </li>
              <li className="pb-4">
                Extruder sensors detect a disconnection or failure in the
                extruder to ensure seamless operation.
              </li>
            </ul>

            <button className="bg-transparent hover:bg-black text-white-700 font-semibold hover:text-white py-2 px-4 border border-white hover:border-black rounded">
              Ver producto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
