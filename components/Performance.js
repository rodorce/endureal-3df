import { useTranslation } from "react-i18next";
import React from "react";

const Performance = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#ECEFF0] w-full h-full" id="performance">
      <div className="container py-14">
        <div className="box text-left bg-[#C27B4D] py-12 px-4 text-white flex flex-col mx-auto lg:flex-row">
          <div className="lg:w-1/3 w-1/2 lg:mr-12 ">
            <img
              src="https://zortrax.com/static/img/endureal/zortrax_endureal_front_1.png"
              alt=""
            />
          </div>
          <div className="flex justify-center flex-col lg:w-1/2">
            <h2 className="font-semibold text-5xl text-left py-6">
              {t("performance_title")}
            </h2>
            <p>{t("performance_desc")}</p>
            <ul className="pt-6 list-disc">
              {/* {console.log(t("performance_features", { returnObjects: true }))} */}
              {Object.values(
                t("performance_features", { returnObjects: true })
              ).map((feature, index) => (
                <li className="pb-4" key={index}>
                  {feature}
                </li>
              ))}
            </ul>

            <button className="bg-transparent hover:bg-black text-white-700 font-semibold hover:text-white py-2 px-4 border border-white hover:border-black rounded">
              {t("product_btn")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
