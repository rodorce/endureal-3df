import React from "react";

const PrinterSpecs = () => {
  return (
    <div>
      <div className="bg-[#29241f]">
        <div className="flex flex-col md:flex-row bg-[#29241f]">
          <div className="w-full md:w-1/2">
            <img
              src="https://cf.zortrax.com/wp-content/uploads/2019/09/dual.jpg"
              alt=""
              srcset=""
              className="object-none h-full w-full"
            />
          </div>
          <div className="w-full md:w-1/2 lg:p-24  p-16">
            <h2 className="text-4xl font-semibold mb-16 text-white">
              Industrial dual-extrusion
            </h2>
            <p className="text-white pb-14">
              The Endureal has an advanced dual-extrusion system capable of
              printing high-temperature filaments with a specially dedicated
              support material. The extruder components and cables are thermally
              shielded from the main chamber with an elastic, nanoporous
              insulator to achieve the lowest possible thermal conductivity.
              Designed for processing challenging materials, the Endureal can
              also work with a wide range of cost-effective filaments like
              Z-ULTRAT Plus. The printer supports both single- and
              dual-extrusion modes.
            </p>
            <div className="flex flex-row text-white">
              <div>
                <span className="pr-12">Dual extrusion</span>
              </div>
              <div>
                <span>Single extrusion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#29241f]">
        <div className="flex flex-col md:flex-row bg-[#413f4b]">
          <div className="md:hidden w-full">
            <img
              src="https://cf.zortrax.com/wp-content/uploads/2019/09/platform.jpg"
              alt=""
              srcset=""
              className="h-full w-full object-none"
            />
          </div>
          <div className="md:w-1/2 px-24 pt-24">
            <h2 className="text-4xl font-semibold mb-16 text-white">
              Heated aluminum build-platform
            </h2>
            <p className="text-white pb-14">
              The Endureal is equipped with an aluminum build platform covered
              with a PEI plate to ensure proper adhesion of high-performance
              polymers. The platform can be heated up to 220° C.
            </p>
          </div>
          <div className="hidden md:block md:w-1/2">
            <img
              src="https://cf.zortrax.com/wp-content/uploads/2019/09/platform.jpg"
              alt=""
              srcset=""
              className="h-full w-full object-none"
            />
          </div>
        </div>
      </div>
      <video class="video" loop="" autoplay="" muted="">
        <source
          src="https://cf.zortrax.com/static/img/endureal/bar_2.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default PrinterSpecs;
