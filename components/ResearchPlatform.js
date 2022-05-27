import React from "react";

const ResearchPlatform = () => {
  return (
    <div className="bg-[url('https://cf.zortrax.com/static/img/endureal/esa_bg_v2.jpg')] bg-cover">
      <div className="container py-14">
        <h2 className="font-normal text-5xl text-center py-6 text-white">
          Cutting Edge Research Platform
        </h2>
        <p className="text-white mb-10">
          We are constantly working to further expand Zortrax Endureal's
          capabilities. This 3D printer is used in numerous joint research
          projects like the one we do with the support of the European Space
          Agency.
        </p>
        <div className="flex flex-col lg:flex-row pt-4">
          <div className="lg:w-1/3 mx-4 bg-white mb-4">
            <img
              src="https://cf.zortrax.com/wp-content/uploads/2022/05/esa1.gif"
              alt=""
              srcset=""
            />

            <h3 className="font-semibold text-xl px-4 py-2">
              Reinventing dual extrusion
            </h3>
            <p className="px-4 pb-4">
              Dual extrusion LPD Plus technology has been traditionally used to
              print support structures out of a dedicated support material
              different from the one used for the model. But we wanted to take
              it one step further and build a capability to use the Endureal's
              LPD Plus technology for printing composite components out of two
              blends of PEEK in one go. For space applications, we 3D printed
              such composite models with standard Z-PEEK and ESA-developed
              electrically conductive blend of PEEK.
            </p>
          </div>
          <div className="lg:w-1/3 mx-4 bg-white mb-4">
            <img
              src="https://cf.zortrax.com/wp-content/uploads/2022/05/esa2.png"
              alt=""
              srcset=""
            />

            <h3 className="font-semibold text-xl px-4 py-2">
              First research paper co-authorized with ESA
            </h3>
            <p className="px-4 pb-4">
              Developing a technology to apply metallic coatings and reinforcing
              structures to parts 3D printed with Z-PEEK on the Zortrax Endureal
              is the aim of the research project realized by Zortrax under ESA
              contract with Astronika, a company specializing in space
              mechanisms, and Crido R&D, who are responsible for electroplating
              solutions. Z-PEEK parts covered with various metals are expected
              to provide high-quality, lightweight alternative to pure metals
              alloys.
            </p>
          </div>
          <div className="lg:w-1/3 mx-4 bg-white mb-4">
            <img
              src="https://cf.zortrax.com/wp-content/uploads/2022/05/esa3.png"
              alt=""
              srcset=""
            />

            <h3 className="font-semibold text-xl px-4 py-2">
              Covering Z-PEEK parts with metals
            </h3>
            <p className="px-4 pb-4">
              Materials meant for space applications like Z-PEEK must pass
              rigorous outgassing tests before they are cleared for flight.
              Outgassing is a process of releasing gases accumulated in a solid
              in high vacuum. In space, such gases can condense on electronics
              or sensors and severely impair their performance. Z-PEEK passed
              all necessary tests and complies with ESA's ECSS-Q-ST-70-02C
              outgassing standard
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPlatform;
