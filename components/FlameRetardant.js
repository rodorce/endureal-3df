import { t } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";

const FlameRetardant = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[url('https://cf.zortrax.com/static/img/endureal/pei_bg.jpg')] bg-cover">
      <div className="container py-14">
        <h2 className="font-normal text-5xl text-center py-6 text-white">
          {t("zpei9085_title")}
        </h2>
        <p className="text-white mb-10">{t("zpei9085_desc")}</p>
        <div className="flex flex-col lg:flex-row pt-4">
          <div className="lg:w-1/4 mx-4 bg-white mb-4">
            <img
              src="https://zortrax.com/static/img/endureal/pei1.jpg"
              alt=""
            />

            <h3 className="font-semibold text-xl px-4 py-2">
              {t("high_flame_retardancy")}
            </h3>
            <p className="px-4 pb-4">{t("high_flame_desc")}</p>
          </div>
          <div className="lg:w-1/4 mx-4 bg-white mb-4">
            <img
              src="https://zortrax.com/static/img/endureal/pei2.jpg"
              alt=""
            />

            <h3 className="font-semibold text-xl px-4 py-2">
              {t("flight_readiness")}
            </h3>
            <p className="px-4 pb-4">{t("flight_readiness_desc")}</p>
          </div>
          <div className="lg:w-1/4 mx-4 bg-white mb-4">
            <img
              src="https://zortrax.com/static/img/endureal/pei3.jpg"
              alt=""
            />

            <h3 className="font-semibold text-xl px-4 py-2">
              {t("excellent_thermals")}
            </h3>
            <p className="px-4 pb-4">{t("excellent_thermals_desc")}</p>
          </div>
          <div className="lg:w-1/4 mx-4 bg-white mb-4">
            <img
              src="https://zortrax.com/static/img/endureal/pei4.jpg"
              alt=""
            />

            <h3 className="font-semibold text-xl px-4 py-2">
              {t("proven_outgassing")}
            </h3>
            <p className="px-4 pb-4">{t("proven_outgassing_desc")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlameRetardant;
