import React from "react";
import "./soc.css";
import serviceImgSoc from "../../../assets/services/soc.png";
const Heading = () => {
  return (
    <>
      <img src={serviceImgSoc} class="w-full mb-4"></img>

      <div className="mx-auto max-w-full px-6 lg:px-8">
        <div className="mx-auto max-w-full">
          <h2
            className="text-3xl font-bold tracking-tight all_heading sm:text-4xl"
            data-aos="fade-up"
          >
            iProtect SOC
          </h2>
          <p className="mt-6 text-lg leading-8 all_heading" data-aos="fade-up">
            Cyber threats are evolving faster than ever and the cybersecurity
            skills you need to have at the ready are complex and difficult to
            find.
          </p>
          <p className="mt-6 text-lg leading-8 all_heading" data-aos="fade-up">
            iProtect SOC consists of security analysts, engineers, threat
            researchers and incident responders who work as a virtual extension
            of our customers’ in-house teams, managing and monitoring the latest
            detection technologies to hunt for and eliminate threats in their
            infancy, 24/7/365.
          </p>
          <p className="mt-6 text-lg leading-8 all_heading" data-aos="fade-up">
            With full transparency and a deep understanding of your full IT
            estate. We continuously monitor 24/7/365 across on- premises
            (physical &amp; virtual), cloud (public &amp; private) and hybrid
            infrastructures, endpoints (remote &amp; local), and software (local
            &amp; SaaS)
          </p>
        </div>
      </div>
    </>
  );
};

export default Heading;
