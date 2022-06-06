import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-white">
      <div className="container container-m-p">
        <div className="lg:grid lg:grid-cols-4">
          <h2 className="hidden lg:grid tracking-wide lg:text-xl uppercase font-semibold px-4 py-2 text-lg">
            Páginas
          </h2>
          <h2 className="hidden lg:grid tracking-wide text-xl uppercase font-semibold lg:col-span-3 lg:col-start-3 px-4 py-2">
            Suscribete a nuestro newsletter
          </h2>
          <div className="px-4 py-2">
            <h2 className="lg:hidden tracking-wide lg:text-xl uppercase font-semibold px-4 py-2 text-lg">
              Páginas
            </h2>
            <ul>
              <li className="p-3">
                <Link href="/">{t("home")}</Link>
              </li>
              <li className="p-3">
                <Link href="#safety_systems">
                  {t("industrial_safety_system")}
                </Link>
              </li>
              <li className="p-3">
                <Link href="#performance">{t("performance")}</Link>
              </li>
              <li className="p-3">
                <Link href="#applications">{t("applications")}</Link>
              </li>
              <li className="p-3">
                <Link href="#prototyping">{t("integrated_prototyping")}</Link>
              </li>
            </ul>
          </div>
          <div className="px-4 py-2">
            <ul>
              <li className="p-3">
                <a href="https://3dfactory.mx/pages/soporte" rel="external">
                  {t("technical_service")}
                </a>
              </li>
              <li className="p-3">
                <a
                  href="https://3dfactory.mx/pages/servicios-de-impresion-3d"
                  rel="external"
                >
                  {t("3d_printing_services")}
                </a>
              </li>
              <li className="p-3">
                <a href="https://3dfactory.mx/pages/visitanos" rel="external">
                  {t("visit_us")}
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 py-2 col-span-2">
            <h2 className="lg:hidden tracking-wide text-lg uppercase font-semibold px-4">
              {t("newsletter")}
            </h2>
            <p className="px-4 py-3">{t("newsletter_desc")}</p>
            <div className="grid grid-cols-4 shadow-lg">
              <input
                placeholder="Tu correo electrónico"
                className="p-4 col-span-3 bg-white text-gray-400"
              />
              <button className="rounded-tr-lg rounded-br-lg bg-blue-600 text-white hover:bg-blue-700">
                {t("suscribe")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
