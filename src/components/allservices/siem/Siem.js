import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import Heading from "./Heading";
import Siemdeployment from "./Siemdeployment";
import Siemadministrationmaintainence from "./Siemadministrationmaintainence";
import Siemkeybenefits from "./Siemkeybenefits";
import Siemtraining from "./Siemtraining";

const siemtraining = [
  "iProtect SIEM consultants are ready to share their knowledge with the customer’s security team in SIEM system management with a series of practice- oriented training sessions. Understanding the importance of the face-to-face contact between trainers and trainees, iProtect offers in-house training sessions on the customer’s SIEM deployment. Depending on the level of the customer’s security staff’s experience in SIEM system management, iProtect certified consultants organize and conduct two tailored SIEM training sessions: Fundamentals and Advanced.",
];

function Siem() {
  return (
    <>
      <div className="bg-white py-16 sm:py-32">
        <Heading />
        <div className="bg-white pt-10">
          <div className="mx-auto max-w-full px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What we offer
            </h2>
          </div>
          <Siemdeployment />
          <Siemadministrationmaintainence />
          <Siemtraining />
          <Siemkeybenefits />
        </div>
      </div>
    </>
  );
}

export default Siem;
