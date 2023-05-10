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
      <div className="bg-white">
        <Heading />
        <div className="bg-white pt-10 px-6 lg:px-8" data-aos="fade-up">
          <div className="mx-auto max-w-full  pb-8">
            <div className="grid gap-4 md:grid-cols-2 pb-8 sm:grid-col-1 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  What we offer
                </h2>
                <Incidentresponse />
                <Expertinvestigationservice />

                <Documentation />
                <Socmonitoring />
              </div>
              <div>
                <Sockeybenefits />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Soc;
