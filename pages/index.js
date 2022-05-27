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

export default function Home() {
  return (
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
  );
}
