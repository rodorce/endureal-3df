import FlameRetardant from "../components/FlameRetardant";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import IntegratedPrototyping from "../components/IntegratedPrototyping";
import Performance from "../components/Performance";
import PrinterSpecs from "../components/PrinterSpecs";
import ResearchPlatform from "../components/ResearchPlatform";
import SpaceGrade from "../components/SpaceGrade";
import SpecsDetails from "../components/SpecsDetails";
import SpecsGrid from "../components/SpecsGrid";
import ThermalStable from "./ThermalStable";
import Head from "next/head";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["EN", "ES"],
    fallbackLng: "EN",
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
    react: { useSuspense: false },
    returnObjects: true,
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default function Home() {
  return (
    <>
      <Head>
        <title>Zortrax Endureal - 3D Factory MX</title>
        <meta name="description" content="Zortrax Endural 3D Factory MX" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero />
        <SpecsGrid />
        <Performance />
        <SpaceGrade />
        <ThermalStable />
        <FlameRetardant />
        <ResearchPlatform />
        <PrinterSpecs />
        <IntegratedPrototyping />
        <SpecsDetails />
        <Footer />
      </div>
    </>
  );
}
