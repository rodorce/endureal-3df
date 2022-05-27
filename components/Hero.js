import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section className="relative">
      <div className="absolute bg-black w-full h-full -z-10">Hero</div>
      <Navbar />
      <div className="container py-4">
        <div className="flex lg:flex-row">
          <div className="lg:w-2/3 justify-center align-middle flex flex-col">
            <img
              src="https://cf.zortrax.com/static/img/endureal/endureal_full-2.png"
              alt=""
              srcset=""
              className="lg:hidden mx-auto w-3/4"
            />
            <h1 className="font-semibold text-4xl text-center lg:text-7xl lg:text-left text-white pb-2">
              zortrax endureal
            </h1>
            <h2 className="font-normal text-2xl text-center lg:text-left lg:text-4xl text-white pb-5">
              El futuro de las líneas de producción
            </h2>
            <p className="text-white lg:text-base text-sm">
              Advanced thermal management enabling efficient work with
              high-performance polymers is what third generation 3D printers are
              all about, according to the industry’s thought leaders.
              Temperature of filaments in Zortrax Endureal LPD Plus 3D printer
              is tightly controlled at each stage of processing to achieve
              utmost precision and best possible mechanical properties of 3D
              printed parts.
            </p>
          </div>
          <div>
            <img
              src="https://cf.zortrax.com/static/img/endureal/endureal_full-2.png"
              alt=""
              srcset=""
              className="hidden lg:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
