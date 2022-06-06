import React from "react";
import { useTranslation } from "react-i18next";

const IntegratedPrototyping = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#CFD0D4]" id="prototyping">
      <div className="container p-14">
        <h2 className="font-semibold text-4xl text-center pb-8">
          {t("integrated_prototyping")}
        </h2>
        <p className="text-center">{t("integrated_prototyping_desc")}</p>

        <div className="flex flex-col lg:flex-row pt-14">
          <div className="block lg:hidden">
            <img
              src="https://zortrax.com/static/img/endureal/industral1.jpg"
              alt=""
              className="w-1/2 mx-auto lg:w-full lg:mx-0"
            />
          </div>
          <div className="lg:w-1/2 px-4 lg:px-14 lg:pt-14 pt-6">
            <h2 className="font-normal text-2xl lg:text-4xl lg:pb-8 pb-4 text-center">
              {t("modular_manufacturing")}
            </h2>
            <p>{t("modular_manufacturing_desc")}</p>
          </div>
          <div className="hidden lg:block lg:w-1/2">
            <img
              src="https://zortrax.com/static/img/endureal/industral1.jpg"
              alt=""
              className="w-1/2 mx-auto lg:w-full lg:mx-0"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <img
              src="https://zortrax.com/static/img/endureal/industral1.jpg"
              alt=""
              className="w-1/2 mx-auto lg:w-full lg:mx-0"
            />
          </div>
          <div className="lg:w-1/2 px-4 lg:px-14 lg:pt-14 pt-6">
            <h2 className="font-normal text-2xl lg:text-4xl lg:pb-8 pb-4 text-center">
              {t("cloud_based")}
            </h2>
            <p>{t("cloud_based_desc")}</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 px-4 lg:px-14 lg:pt-14 pt-6">
            <div className="lg:hidden lg:w-1/2 mx-auto">
              <img
                src="https://zortrax.com/static/img/endureal/industral3b.jpg"
                alt=""
                className="w-1/2 mx-auto lg:w-full lg:mx-0"
              />
            </div>
            <h2 className="font-normal text-2xl lg:text-4xl pb-8 pt-6 text-center">
              {t("unlimited_scalability")}
            </h2>
            <p>{t("unlimited_scalability_desc")}</p>
          </div>
          <div className="hidden lg:w-1/2 lg:block">
            <img
              src="https://zortrax.com/static/img/endureal/industral3b.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row pb-14">
          <div className="lg:w-1/2">
            <img
              src="https://zortrax.com/static/img/endureal/industral1.jpg"
              alt=""
              className="w-1/2 mx-auto lg:w-full lg:mx-0"
            />
          </div>
          <div className="lg:w-1/2 px-4 lg:px-14 lg:pt-14 pt-6">
            <h2 className="font-normal lg:text-4xl pb-8 text-center text-2xl">
              {t("cost_free_flex")}
            </h2>
            <p>{t("cost_free_flex_desc")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegratedPrototyping;
