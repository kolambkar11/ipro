import React from "react";
import "./homeservicesblock.css";
import Soc from "./Soc";
import Siem from "./Siem";
import Vapt from "./Vapt";
import Threathunting from "./Threathunting";
import Staffing from "./Staffing";
import Cybersecuritytraining from "./Cybersecuritytraining";

function HomeServicesBlock() {
  return (
    <>
      <div className="mx-auto max-w-fit homeserviceblock py-16">
        <h1 className="text-amber-700 mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Information Security Services
        </h1>
        <p className="mx-auto max-w-7xl text-center my-4 mt-6 text-2xl leading-7 text-gray-600">
          iProtect Cybersecurity services provide comprehensive solution to
          safeguard your organization against cyber threats. Our services are
          designed to provide you with round-the-clock monitoring capabilities,
          utilizing three tiers of monitoring, along with additional services
          such as Threat Hunting, SIEM Administration, Incident Response, and
          Threat Intelligence.
        </p>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
          <Soc />
          <Siem />
          <Vapt />
          <Threathunting />
          <Staffing />
          <Cybersecuritytraining />
        </div>
      </div>
    </>
  );
}

export default HomeServicesBlock;
