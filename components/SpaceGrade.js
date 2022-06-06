import React from "react";
import { useTranslation } from "react-i18next";

const Specs = () => {
  const { t } = useTranslation();
  return (
    <div
      className="bg-[url('https://cf.zortrax.com/static/img/endureal/z-peek_bg.jpg')] bg-cover"
      id="applications"
    >
      <div className="container py-14">
        <h2 className="font-normal text-5xl text-center py-6 text-white">
          {t("zpeek_title")}
        </h2>
        <p className="text-white mb-10">{t("zpeek_desc")}</p>
        <div className="flex flex-col lg:flex-row pt-4">
          <div className="lg:w-1/3 mx-4 bg-white mb-4">
            <img
              src="https://cf.zortrax.com/wp-content/uploads/2022/05/z-peek_img3.png"
              alt=""
            />

            <h3 className="font-semibold text-xl px-4 py-2">
              {t("high_radiation_title")}
            </h3>
            <p className="px-4 pb-4">{t("high_radiation_desc")}</p>
          </div>
          <div className="lg:w-1/3 mx-4 bg-white mb-4">
            <img
              src="https://cf.zortrax.com/wp-content/uploads/2022/05/z-peek_img4.png"
              alt=""
            />

            <h3 className="font-semibold text-xl px-4 py-2">
              {t("strength_weight_title")}
            </h3>
            <p className="px-4 pb-4">{t("strength_weight_desc")}</p>
          </div>
          <div className="lg:w-1/3 mx-4 bg-white mb-4">
            <img
              src="https://cf.zortrax.com/wp-content/uploads/2022/05/z-peek_img5.png"
              alt=""
            />

            <h3 className="font-semibold text-xl px-4 py-2">
              {t("outgassing_title")}
            </h3>
            <p className="px-4 pb-4">{t("outgassing_desc")}</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row pt-12 justify-center">
          <div className="lg:w-1/3 mx-4 bg-white mb-4">
            <img
              src="https://cf.zortrax.com/wp-content/uploads/2022/05/z-peek_img1.png"
              alt=""
            />

            <h3 className="font-semibold text-xl px-4 py-2">
              {t("thermal_props_title")}
            </h3>
            <p className="px-4 pb-4">{t("thermal_props_desc")}</p>
          </div>
          <div className="lg:w-1/3 mx-4 bg-white mb-4">
            <img
              src="https://cf.zortrax.com/wp-content/uploads/2022/05/z-peek_img2.png"
              alt=""
            />

            <h3 className="font-semibold text-xl px-4 py-2">
              {t("wear_title")}
            </h3>
            <p className="px-4 pb-4">{t("wear_desc")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specs;
