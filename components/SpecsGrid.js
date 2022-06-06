import React from "react";
import { useTranslation } from "react-i18next";
const SpecsGrid = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#ECEFF0] w-full h-full" id="safety_systems">
      <div className="container py-14">
        <h2 className="font-semibold text-5xl text-center py-12">{t("iss")}</h2>
        <p className="text-center pb-14">{t("iss_desc")}</p>
        <div className="flex lg:flex-row flex-col">
          <div className="lg:w-1/4 mx-1 bg-white">
            <img
              src="https://cf.zortrax.com/wp-content/uploads/2019/09/title1.png"
              alt=""
            />
            <h3 className="font-semibold text-xl px-4 py-2">
              {t("blackout_title")}
            </h3>
            <p className="px-4 pb-4">{t("blackout_desc")}</p>
          </div>
          <div className="lg:w-1/4 mx-1 bg-white">
            <img
              src="https://cf.zortrax.com/wp-content/uploads/2019/09/title2.png"
              alt=""
            />
            <h3 className="font-semibold text-xl px-4 py-2">
              {t("monitored_printing")}
            </h3>
            <p className="px-4 pb-4">{t("monitored_printing_desc")}</p>
          </div>
          <div className="lg:w-1/4 mx-1 bg-white">
            <img
              src="https://cf.zortrax.com/wp-content/uploads/2019/09/title3.png"
              alt=""
            />

            <h3 className="font-semibold text-xl px-4 py-2">
              {t("advanced_filament_title")}
            </h3>
            <p className="px-4 pb-4">{t("advanced_filament_desc")}</p>
          </div>
          <div className="lg:w-1/4 mx-1 bg-white">
            <img
              src="https://cf.zortrax.com/wp-content/uploads/2019/09/title4.png"
              alt=""
            />
            <h3 className="font-semibold text-xl px-4 py-2">
              {t("controlled_filament_title")}
            </h3>
            <p className="px-4 pb-4">{t("controlled_filament_desc")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecsGrid;
