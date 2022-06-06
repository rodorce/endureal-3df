import React from "react";
import Navbar from "./Navbar";
import { useTranslation } from "react-i18next";
const Hero = () => {
  const { t } = useTranslation();
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
              className="lg:hidden mx-auto w-3/4"
            />
            <h1 className="font-semibold text-4xl text-center lg:text-7xl lg:text-left text-white pb-2">
              zortrax endureal
            </h1>
            <h2 className="font-normal text-2xl text-center lg:text-left lg:text-4xl text-white pb-5">
              {t("future_production")}
            </h2>
            <p className="text-white lg:text-base text-sm">
              {t("hero_description")}
            </p>
          </div>
          <div>
            <img
              src="https://cf.zortrax.com/static/img/endureal/endureal_full-2.png"
              alt=""
              className="hidden lg:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
