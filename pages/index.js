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
