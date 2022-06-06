import React from "react";
import { useTranslation } from "react-i18next";

const ResearchPlatform = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[url('https://cf.zortrax.com/static/img/endureal/esa_bg_v2.jpg')] bg-cover">
      <div className="container py-14">
        <h2 className="font-normal text-5xl text-center py-6 text-white">
          {t("cutting_edge")}
        </h2>
        <p className="text-white mb-10">{t("cutting_edge_desc")}</p>
        <div className="flex flex-col lg:flex-row pt-4">
          <div className="lg:w-1/3 mx-4 bg-white mb-4">
            <img
              src="https://cf.zortrax.com/wp-content/uploads/2022/05/esa1.gif"
              alt=""
            />

            <h3 className="font-semibold text-xl px-4 py-2">
              {t("reinventing_dual")}
            </h3>
            <p className="px-4 pb-4">{t("reinventing_dual_desc")}</p>
          </div>
          <div className="lg:w-1/3 mx-4 bg-white mb-4">
            <img
              src="https://cf.zortrax.com/wp-content/uploads/2022/05/esa2.png"
              alt=""
            />

            <h3 className="font-semibold text-xl px-4 py-2">
              {t("first_research")}
            </h3>
            <p className="px-4 pb-4">{t("first_research_desc")}</p>
          </div>
          <div className="lg:w-1/3 mx-4 bg-white mb-4">
            <img
              src="https://cf.zortrax.com/wp-content/uploads/2022/05/esa3.png"
              alt=""
            />

            <h3 className="font-semibold text-xl px-4 py-2">
              {t("covering_zpeek")}
            </h3>
            <p className="px-4 pb-4">{t("covering_zpeek_desc")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPlatform;
