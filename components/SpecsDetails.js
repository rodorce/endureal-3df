import React from "react";

const SpecsDetails = () => {
  return (
    <div className="bg-white">
      <div className="container p-14">
        <h2 className="font-semibold text-4xl text-center">
          Specifications for Zortrax Endureal
        </h2>
        <div className="flex flex-row">
          <div className="flex flex-col mt-14 w-1/2 px-6">
            <div className="">
              <h4 className="font-semibold text-center text-xl py-2 bg-[#f1f1f1] border-2">
                Device
              </h4>
              <table class="table-fixed pt-2 border-2 text-xs">
                <tbody>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      Build volume
                    </td>
                    <td className="w-1/2 p-2">
                      400 x 300 x 300 mm (15.7 x 11.8 x 11.8 in)*
                    </td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      Nozzle diameter
                    </td>
                    <td className="w-1/2 p-2">0.4 mm (0.016 in)</td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 text-right border-r-2">
                      Extruder
                    </td>
                    <td className="w-1/2 p-2">Dual material</td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      Extruder cooling system
                    </td>
                    <td className="w-1/2 p-2">
                      Two fans cooling the extruder, radial fan cooling the
                      print
                    </td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      Hotend
                    </td>
                    <td className="w-1/2 p-2">
                      High-temperature dual hotend**
                    </td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      Platform
                    </td>
                    <td className="w-1/2 p-2">
                      Heated; aluminum plate coated with PEI
                    </td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      Material sensors
                    </td>
                    <td className="w-1/2 p-2">
                      2 x mechanical endstop, 2 x material weight sensor
                    </td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      Connectivity
                    </td>
                    <td className="w-1/2 p-2">Wi-Fi, Ethernet, USB</td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      Operating System
                    </td>
                    <td className="w-1/2 p-2">Android</td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      Processor
                    </td>
                    <td className="w-1/2 p-2">Quad Core</td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      Touchscreen
                    </td>
                    <td className="w-1/2 p-2">7" IPS 1024 x 600</td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      Camera
                    </td>
                    <td className="w-1/2 p-2">Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="pt-14">
              <h4 className="font-semibold text-center text-xl py-2 bg-[#f1f1f1] border-2">
                Electrical
              </h4>
              <table class="table-fixed pt-2 border-2 text-xs w-full">
                <tbody>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      AC Input
                    </td>
                    <td className="w-1/2 p-2">
                      120 V ~ 13 A 50/60 Hz <br />
                      200 - 240 V ~ 9.5 A 50/60 Hz
                    </td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      Maximum Power Consumption
                    </td>
                    <td className="w-1/2 p-2">
                      120 V - 1600 W<br />
                      200-240 V - 2300 W
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="pt-14">
              <h4 className="font-semibold text-center text-xl py-2 bg-[#f1f1f1] border-2">
                Software
              </h4>
              <table class="table-fixed pt-2 border-2 text-xs w-full">
                <tbody>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      Software bundle
                    </td>
                    <td className="w-1/2 p-2">Z-SUITE</td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      Supported input file types
                    </td>
                    <td className="w-1/2 p-2">.stl, .obj, .dxf, .3mf, .ply</td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      Supported operating system
                    </td>
                    <td className="w-1/2 p-2">
                      Mac OS Mojave and newer versions / Windows 7 and newer
                      versions
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="pt-14">
              <h4 className="font-semibold text-center text-xl py-2 bg-[#f1f1f1] border-2">
                In the box
              </h4>
              <table class="table-fixed pt-2 border-2 text-xs w-full">
                <tbody>
                  <tr className="border-2">
                    <td className="font-medium w-full p-2 border-r-2">
                      3D printer, Z-SUITE, Starter Kit, Maintenance Kit, spool
                      of model material, spool of support material, spool of
                      high-temperature model material, spool of high-temperature
                      support material, USB memory stick. <br />
                      Maintenance Kit contents: material endstop (2 pcs.),
                      extruder filament gear (2 pcs.), extruder, filters set
                      (carbon & HEPA) (2 pcs.), PEI plate (2 pcs.),
                      high-temperature hotend module (2 pcs.), extruder cable.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex flex-col mt-14 w-1/2 px-6">
            <div className="">
              <h4 className="font-semibold text-center text-xl py-2 bg-[#f1f1f1] border-2">
                Printing
              </h4>
              <table class="table-fixed pt-2 border-2 text-xs w-full">
                <tbody>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      Technology
                    </td>
                    <td className="w-1/2 p-2">
                      <p>
                        LPD Plus (Layer Plastic Deposition Plus) advanced
                        technology depositing melted thermoplastics with
                        break-away and dissolvable support structures
                      </p>
                    </td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      Layer Resolution
                    </td>
                    <td className="w-1/2 p-2">
                      200-250 microns (for 0.4 mm nozzle)
                    </td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      Minimal wall thickness
                    </td>
                    <td className="w-1/2 p-2">
                      450 microns (for 0.4 mm nozzle)
                    </td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      Platform leveling
                    </td>
                    <td className="w-1/2 p-2">
                      Automatic measurement of platform points' height
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="pt-14">
              <h4 className="font-semibold text-center text-xl py-2 bg-[#f1f1f1] border-2">
                Temperature
              </h4>
              <table class="table-fixed pt-2 border-2 text-xs w-full">
                <tbody>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      Maximum printing temperature (extruder)
                    </td>
                    <td className="w-1/2 p-2">480 °C (896 °F)</td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      Maximum platform temperature
                    </td>
                    <td className="w-1/2 p-2">220 °C (428 °F)</td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      Maximum build chamber temperature
                    </td>
                    <td className="w-1/2 p-2">200 °C (392 °F)</td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      Ambient operation temperature
                    </td>
                    <td className="w-1/2 p-2">17-30 °C (63 - 86 °F)</td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      Storage temperature
                    </td>
                    <td className="w-1/2 p-2">0-35 °C (32 - 95 °F)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="pt-14">
              <h4 className="font-semibold text-center text-xl py-2 bg-[#f1f1f1] border-2">
                Filaments
              </h4>
              <table class="table-fixed pt-2 border-2 text-xs w-full">
                <tbody>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      Dedicated for single extrusion
                    </td>
                    <td className="w-1/2 p-2">Z-PEI 9085, Z-ULTRAT Plus</td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      Dedicated for dual extrusion
                    </td>
                    <td className="w-1/2 p-2">
                      Z-PEEK, Z-PEI 1010, Z-PEI 9085, Z-ULTRAT Plus, Z-SUPPORT
                      High-Temp (breakaway), Z-SUPPORT ATP (soluble with
                      Z-SUPPORT ATP Activator), Z-SUPPORT ATP 130 (soluble with
                      Z-SUPPORT ATP Activator)
                    </td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      External materials
                    </td>
                    <td className="w-1/2 p-2">
                      Printing profiles available for filaments based on PEEK,
                      PEI 9085, PEI 1010 and ABS
                    </td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      Support
                    </td>
                    <td className="w-1/2 p-2">
                      Mechanically removed - printed with the same material as
                      the model;
                      <br /> Breakaway - printed with a different material than
                      the model;
                      <br /> Soluble - printed with a different material than
                      the model
                    </td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      Filament container
                    </td>
                    <td className="w-1/2 p-2">Spool</td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      Filament diameter
                    </td>
                    <td className="w-1/2 p-2">1.75 mm (0.069 in)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecsDetails;
