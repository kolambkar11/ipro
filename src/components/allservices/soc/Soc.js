import React from "react";
import Heading from "./Heading";
import Socmonitoring from "./Socmonitoring";
import Expertinvestigationservice from "./Expertinvestigationservice";
import Incidentresponse from "./Incidentresponse";
import Documentation from "./Documentation";
import Sockeybenefits from "./Sockeybenefits";
const Soc = () => {
  return (
    <>
      <div className="bg-white py-16 sm:py-20">
        <Heading />
        <div className="bg-white pt-10 px-6 lg:px-8" data-aos="fade-up">
          <div className="mx-auto max-w-full">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What we offer
            </h2>
          </div>
          <Socmonitoring />
          <Expertinvestigationservice />
          <Incidentresponse />
          <Documentation />
          <Sockeybenefits />
        </div>
      </div>
    </>
  );
};

export default Soc;
