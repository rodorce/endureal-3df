import { t } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";

const ThermalStable = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[url('https://cf.zortrax.com/static/img/endureal/pei1010_bg.jpg')] bg-cover">
      <div className="container py-14">
        <h2 className="font-normal text-5xl text-center py-6 text-white">
          {t("zpei1010_title")}
        </h2>
        <p className="text-white mb-10">{t("zpei1010_desc")}</p>
        <div className="flex  mb-4 flex-col lg:flex-row pt-4">
          <div className="lg:w-1/3 mx-4 bg-white">
            <img
              src="https://zortrax.com/static/img/endureal/pei1010_1.jpg"
              alt=""
            />

            <h3 className="font-semibold text-xl px-4 py-2">
              {t("rigidity_title")}
            </h3>
            <p className="px-4 pb-4">{t("rigidity_desc")}</p>
          </div>
          <div className="lg:w-1/3 mx-4 bg-white mb-4">
            <img
              src="https://zortrax.com/static/img/endureal/pei1010_2.jpg"
              alt=""
            />

            <h3 className="font-semibold text-xl px-4 py-2">
              {t("high_temps_title")}
            </h3>
            <p className="px-4 pb-4">{t("high_temps_desc")}</p>
          </div>
          <div className="lg:w-1/3 mx-4 bg-white mb-4">
            <img
              src="https://zortrax.com/static/img/endureal/pei1010_3.jpg"
              alt=""
            />

            <h3 className="font-semibold text-xl px-4 py-2">
              {t("chemical_res_title")}
            </h3>
            <p className="px-4 pb-4">{t("chemical_res_desc")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThermalStable;
