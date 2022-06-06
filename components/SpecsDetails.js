import React from "react";
import { useTranslation } from "react-i18next";

const SpecsDetails = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white">
      <div className="container p-14">
        <h2 className="font-semibold text-4xl text-center">
          Specifications for Zortrax Endureal
        </h2>
        <div className="flex lg:flex-row flex-col">
          <div className="flex flex-col mt-14 lg:w-1/2 w-full px-6">
            <div className="">
              <h4 className="font-semibold text-center text-xl py-2 bg-[#f1f1f1] border-2">
                {t("device")}
              </h4>
              <table className="table-fixed pt-2 border-2 text-xs">
                <tbody>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      {t("build_volume_title")}
                    </td>
                    <td className="w-1/2 p-2">{t("build_volume")}</td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      {t("nozzle_diameter_title")}
                    </td>
                    <td className="w-1/2 p-2">{t("nozzle_diameter")}</td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 text-right border-r-2">
                      {t("extruder_title")}
                    </td>
                    <td className="w-1/2 p-2">{t("extruder")}</td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      {t("extruder_cooling_system_title")}
                    </td>
                    <td className="w-1/2 p-2">
                      {t("extruder_cooling_system")}
                    </td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      {t("hotend_title")}
                    </td>
                    <td className="w-1/2 p-2">{t("hotend")}</td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      {t("platform_title")}
                    </td>
                    <td className="w-1/2 p-2">{t("platform")}</td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      {t("material_sensors_title")}
                    </td>
                    <td className="w-1/2 p-2">{t("material_sensors")}</td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      {t("connectivity_title")}
                    </td>
                    <td className="w-1/2 p-2">{t("connectivity")}</td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      {t("operating_system_title")}
                    </td>
                    <td className="w-1/2 p-2">{t("operating_system")}</td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      {t("processor_title")}
                    </td>
                    <td className="w-1/2 p-2">{t("processor")}</td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      {t("touchscreen_title")}
                    </td>
                    <td className="w-1/2 p-2">{t("touchscreen_7in")}</td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      {t("camera_title")}
                    </td>
                    <td className="w-1/2 p-2">{t("camera")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="pt-14">
              <h4 className="font-semibold text-center text-xl py-2 bg-[#f1f1f1] border-2">
                {t("electrical")}
              </h4>
              <table className="table-fixed pt-2 border-2 text-xs w-full">
                <tbody>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      {t("ac_input_title")}
                    </td>
                    <td className="w-1/2 p-2">{t("ac_input")}</td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      {t("maximum_power_title")}
                    </td>
                    <td className="w-1/2 p-2">{t("maximum_power")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="pt-14">
              <h4 className="font-semibold text-center text-xl py-2 bg-[#f1f1f1] border-2">
                Software
              </h4>
              <table className="table-fixed pt-2 border-2 text-xs w-full">
                <tbody>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      {t("software_bundle_title")}
                    </td>
                    <td className="w-1/2 p-2">Z-SUITE</td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      {t("supported_input_title")}
                    </td>
                    <td className="w-1/2 p-2">.stl, .obj, .dxf, .3mf, .ply</td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      {t("supported_os_title")}
                    </td>
                    <td className="w-1/2 p-2">{t("supported_os")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="pt-14">
              <h4 className="font-semibold text-center text-xl py-2 bg-[#f1f1f1] border-2">
                {t("in_the_box_title")}
              </h4>
              <table className="table-fixed pt-2 border-2 text-xs w-full">
                <tbody>
                  <tr className="border-2">
                    <td className="font-medium w-full p-2 border-r-2">
                      {t("in_the_box")}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex flex-col mt-14 lg:w-1/2 px-6">
            <div className="">
              <h4 className="font-semibold text-center text-xl py-2 bg-[#f1f1f1] border-2">
                {t("printing")}
              </h4>
              <table className="table-fixed pt-2 border-2 text-xs w-full">
                <tbody>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      {t("technology_title")}
                    </td>
                    <td className="w-1/2 p-2">
                      <p>{t("technology")}</p>
                    </td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      {t("layer_resolution_title")}
                    </td>
                    <td className="w-1/2 p-2">{t("layer_resolution")}</td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      {t("minimal_wall_thickness_title")}
                    </td>
                    <td className="w-1/2 p-2">{t("minimal_wall_thickness")}</td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      {t("platform_leveling_title")}
                    </td>
                    <td className="w-1/2 p-2">{t("platform_leveling")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="pt-14">
              <h4 className="font-semibold text-center text-xl py-2 bg-[#f1f1f1] border-2">
                {t("temperature")}
              </h4>
              <table className="table-fixed pt-2 border-2 text-xs w-full">
                <tbody>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      {t("max_printing_temp_title")}
                    </td>
                    <td className="w-1/2 p-2">480 °C (896 °F)</td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      {t("max_platform_title")}
                    </td>
                    <td className="w-1/2 p-2">220 °C (428 °F)</td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      {t("chamber_temp_title")}
                    </td>
                    <td className="w-1/2 p-2">200 °C (392 °F)</td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      {t("ambient_operation_temp_title")}
                    </td>
                    <td className="w-1/2 p-2">17-30 °C (63 - 86 °F)</td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      {t("storage_temperature_title")}
                    </td>
                    <td className="w-1/2 p-2">0-35 °C (32 - 95 °F)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="pt-14">
              <h4 className="font-semibold text-center text-xl py-2 bg-[#f1f1f1] border-2">
                {t("filaments")}
              </h4>
              <table className="table-fixed pt-2 border-2 text-xs w-full">
                <tbody>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      {t("dedicated_for_single_extrusion_title")}
                    </td>
                    <td className="w-1/2 p-2">Z-PEI 9085, Z-ULTRAT Plus</td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      {t("dedicated_for_dual_extrusion_title")}
                    </td>
                    <td className="w-1/2 p-2">
                      {t("dedicated_for_dual_extrusion")}
                    </td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      {t("external_materials_title")}
                    </td>
                    <td className="w-1/2 p-2">{t("external_materials")}</td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      {t("support_title")}
                    </td>
                    <td className="w-1/2 p-2">{t("support")}</td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      {t("filament_container_title")}
                    </td>
                    <td className="w-1/2 p-2">{t("filament_container")}</td>
                  </tr>
                  <tr className="border-2">
                    <td className="font-bold w-1/2 p-2 border-r-2 text-right">
                      {t("filament_diameter_title")}
                    </td>
                    <td className="w-1/2 p-2">{t("filament_diameter")}</td>
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
