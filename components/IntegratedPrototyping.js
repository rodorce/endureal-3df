import React from "react";

const IntegratedPrototyping = () => {
  return (
    <div className="bg-[#CFD0D4]">
      <div className="container p-14">
        <h2 className="font-semibold text-4xl text-center pb-8">
          Integrated Prototyping
        </h2>
        <p className="text-center">
          Wide range of materials supported by Zortrax Endureal makes it
          possible to go from early low-cost prototypes to the final
          high-performing part using one manufacturing device.
        </p>

        <div className="flex flex-col lg:flex-row pt-14">
          <div className="block lg:hidden">
            <img
              src="https://zortrax.com/static/img/endureal/industral1.jpg"
              alt=""
              className="w-1/2 mx-auto lg:w-full lg:mx-0"
            />
          </div>
          <div className="lg:w-1/2 px-4 lg:px-14 lg:pt-14 pt-6">
            <h2 className="font-normal text-2xl lg:text-4xl lg:pb-8 pb-4 text-center">
              Modular manufacturing architecture
            </h2>
            <p>
              Zortrax products, the Endureal included, can work together in
              highly scalable, modular systems. While the Endureals main purpose
              is printing critical components out of very advanced materials,
              the early prototyping tasks can be easily ceded to clusters of
              low-maintenance desktop 3D printers like the M Series Plus or M300
              Dual.
            </p>
          </div>
          <div className="hidden lg:block lg:w-1/2">
            <img
              src="https://zortrax.com/static/img/endureal/industral1.jpg"
              alt=""
              className="w-1/2 mx-auto lg:w-full lg:mx-0"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <img
              src="https://zortrax.com/static/img/endureal/industral1.jpg"
              alt=""
              className="w-1/2 mx-auto lg:w-full lg:mx-0"
            />
          </div>
          <div className="lg:w-1/2 px-4 lg:px-14 lg:pt-14 pt-6">
            <h2 className="font-normal text-2xl lg:text-4xl lg:pb-8 pb-4 text-center">
              Cloud based management
            </h2>
            <p>
              All network-enabled Zortrax 3D printers along with the staff
              responsible for running them can be remotely managed with Zortrax
              inCloud 3D printing management service. Professional and
              Enterprise inCloud subscription plans enable organizing people
              into teams with assigned 3D printers. Data on how human and 3D
              printing resources have been employed is aggregated in neatly
              spaced panels.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 px-4 lg:px-14 lg:pt-14 pt-6">
            <div className="lg:hidden lg:w-1/2 mx-auto">
              <img
                src="https://zortrax.com/static/img/endureal/industral3b.jpg"
                alt=""
                className="w-1/2 mx-auto lg:w-full lg:mx-0"
              />
            </div>
            <h2 className="font-normal text-2xl lg:text-4xl pb-8 pt-6 text-center">
              Unlimited scalability
            </h2>
            <p>
              Zortrax industrial systems are designed in such a way that new
              devices can be added at all times without incurring additional
              integration costs. It is possible to quickly install more clusters
              of cost-efficient M Series machines when an organization needs to
              increase production volume, more Endureal 3D printers for
              high-tech applications, or more Apoller devices to expand
              post-processing capabilities.
            </p>
          </div>
          <div className="hidden lg:w-1/2 lg:block">
            <img
              src="https://zortrax.com/static/img/endureal/industral3b.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row pb-14">
          <div className="lg:w-1/2">
            <img
              src="https://zortrax.com/static/img/endureal/industral1.jpg"
              alt=""
              className="w-1/2 mx-auto lg:w-full lg:mx-0"
            />
          </div>
          <div className="lg:w-1/2 px-4 lg:px-14 lg:pt-14 pt-6">
            <h2 className="font-normal lg:text-4xl pb-8 text-center text-2xl">
              Cost-free flexibility
            </h2>
            <p>
              A Zortrax industrial system comprising of the Endureal 3D printer
              supported by a cluster of M Series machines and the Apoller
              post-processing devices leaves plenty of room for cost-free,
              on-the-fly adjustments. Even projects that have reached the stage
              where final parts are printed out of target materials on Endureal
              3D printers can be quickly reversed to initial prototyping on M
              Series machines with a few clicks in Zortrax inCloud.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegratedPrototyping;
