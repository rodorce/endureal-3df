import React from "react";
import { useTranslation } from "react-i18next";

const PrinterSpecs = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="bg-[#29241f]">
        <div className="flex flex-col md:flex-row bg-[#29241f]">
          <div className="w-full md:w-1/2">
            <img
              src="https://cf.zortrax.com/wp-content/uploads/2019/09/dual.jpg"
              alt=""
              className="object-none h-full w-full"
            />
          </div>
          <div className="w-full md:w-1/2 lg:p-24  p-16">
            <h2 className="text-4xl font-semibold mb-16 text-white">
              {t("industrial_dual")}
            </h2>
            <p className="text-white pb-14">{t("industrial_dual_desc")}</p>
            <div className="flex flex-row text-white">
              <div>
                <span className="pr-12">{t("dual_extrusion")}</span>
              </div>
              <div>
                <span>{t("single_extrusion")}</span>
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
              className="h-full w-full object-none"
            />
          </div>
          <div className="md:w-1/2 px-24 pt-24">
            <h2 className="text-4xl font-semibold mb-16 text-white">
              {t("heated_aluminum")}
            </h2>
            <p className="text-white pb-14">{t("heated_aluminum_desc")}</p>
          </div>
          <div className="hidden md:block md:w-1/2">
            <img
              src="https://cf.zortrax.com/wp-content/uploads/2019/09/platform.jpg"
              alt=""
              className="h-full w-full object-none"
            />
          </div>
        </div>
      </div>
      <video className="video" loop="" autoPlay="" muted="">
        <source
          src="https://cf.zortrax.com/static/img/endureal/bar_2.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default PrinterSpecs;
