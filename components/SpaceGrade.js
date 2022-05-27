import React from "react";

const Specs = () => {
  return (
    <div className="bg-[url('https://cf.zortrax.com/static/img/endureal/z-peek_bg.jpg')] bg-cover">
      <div className="container py-14">
        <h2 className="font-normal text-5xl text-center py-6 text-white">
          Z-PEEK space-grade outgassing-compliant filament
        </h2>
        <p className="text-white mb-10">
          Z-PEEK is one of the strongest polymers on the planet. It has
          strength-to-weight ratio comparable to stainless steel and thermal
          properties suitable for exposure to low Earth orbit environment.
          Z-PEEK meets ESAs outgassing requirements specified in the
          ECSS-Q-ST-70-02C standard.
        </p>
        <div className="flex flex-col lg:flex-row pt-4">
          <div className="lg:w-1/3 mx-4 bg-white mb-4">
            <img
              src="https://cf.zortrax.com/wp-content/uploads/2022/05/z-peek_img3.png"
              alt=""
            />

            <h3 className="font-semibold text-xl px-4 py-2">
              High radiation resistance
            </h3>
            <p className="px-4 pb-4">
              In the MPAC & SEED experiment on the International Space Station,
              PEEK samples withstood 46 months of exposure to Low Earth Orbit
              environment. Prior to launch, samples passed multiple irradiation
              ground tests including atomic oxygen bombardment and UV exposure.
              PEEK is also resistant to gamma rays.
            </p>
          </div>
          <div className="lg:w-1/3 mx-4 bg-white mb-4">
            <img
              src="https://cf.zortrax.com/wp-content/uploads/2022/05/z-peek_img4.png"
              alt=""
            />

            <h3 className="font-semibold text-xl px-4 py-2">
              Great strength-to-weight ratio
            </h3>
            <p className="px-4 pb-4">
              Z-PEEK parts 3D printed on the Zortrax Endureal 3D printer were
              tested at ESAs ESTEC facilities in Netherlands and found to be
              among the strongest ever reported in scientific literature.
              Flexural strength at yield measured at 146 MPa and flexural
              modulus standing at 3500 MPa are values previously achievable only
              with injection molding.
            </p>
          </div>
          <div className="lg:w-1/3 mx-4 bg-white mb-4">
            <img
              src="https://cf.zortrax.com/wp-content/uploads/2022/05/z-peek_img5.png"
              alt=""
            />

            <h3 className="font-semibold text-xl px-4 py-2">
              Outgassing compliant
            </h3>
            <p className="px-4 pb-4">
              Materials meant for space applications like Z-PEEK must pass
              rigorous outgassing tests before they are cleared for flight.
              Outgassing is a process of releasing gases accumulated in a solid
              in high vacuum. In space, such gases can condense on electronics
              or sensors and severely impair their performance. Z-PEEK passed
              all necessary tests and complies with ESAs ECSS-Q-ST-70-02C
              outgassing standard
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row pt-12 justify-center">
          <div className="lg:w-1/3 mx-4 bg-white mb-4">
            <img
              src="https://cf.zortrax.com/wp-content/uploads/2022/05/z-peek_img1.png"
              alt=""
            />

            <h3 className="font-semibold text-xl px-4 py-2">
              Excellent thermal properties
            </h3>
            <p className="px-4 pb-4">
              PEEK can withstand thermal-cycling in vacuum chambers used for
              space-qualification tests. PEEK samples have been exposed to 500
              cycles of heating up to 130 °C and cooling down to - 70 °C with no
              adverse effects on their mechanical or chemical properties. PEEK
              parts are also confirmed to consistently withstand over 10 cycles
              of cooling down to cryogenic temperatures as low as - 196 °C.
            </p>
          </div>
          <div className="lg:w-1/3 mx-4 bg-white mb-4">
            <img
              src="https://cf.zortrax.com/wp-content/uploads/2022/05/z-peek_img2.png"
              alt=""
            />

            <h3 className="font-semibold text-xl px-4 py-2">
              High wear resistance
            </h3>
            <p className="px-4 pb-4">
              PEEKs wear resistance has been confirmed to be sufficient for
              PEEK/stainless steel gear pairs working at 1600 rpm for over 22
              million cycles under 1 Nm load. PEEK is also strong enough for
              PEEK/metal sliding systems operating in both atmospheric and
              vacuum conditions. High wear resistance leads to limited debris
              accumulation in PEEK medical devices like joint replacement
              implants.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specs;
