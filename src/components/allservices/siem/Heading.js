import React from "react";
import "./siem.css";
import serviceImgSiem from "../../../assets/services/siem-service.png";
const Heading = () => {
  return (
    <>
      <img src={serviceImgSiem} class="w-full mb-4"></img>
      <div className="mx-auto max-w-full px-6 lg:px-8">
        <div className="mx-auto max-w-full ">
          <h2
            className="text-3xl font-bold tracking-tight all_heading sm:text-4xl"
            data-aos="fade-up"
          >
            Security information and event management (SIEM)
          </h2>
          <p className="mt-6 text-lg leading-8 all_heading" data-aos="fade-up">
            Security Information and Event Management is a set of integrated log
            management and monitoring tools that help organizations detect
            targeted attacks and data breaches. SIEM systems aggregate and
            analyses log event information from devices, infrastructure, systems
            and applications to detect suspicious activity inside networks. When
            anomalous behavior is identified, an alert is generated for
            investigation.
          </p>
          <p className="mt-6 text-lg leading-8 all_heading" data-aos="fade-up">
            iProtect SIEM services provides the people and intelligence your
            organization needs to get the most out of SIEM. Certified
            professionals to deploy and manage a range of SIEM solutions, our
            Security Operations Centre (SOC) professionals work as an extension
            of your in-house team to enhance threat detection and response
            capabilities and alleviate the burden of analyzing and investigating
            security alerts 24/7.
          </p>
        </div>
      </div>
    </>
  );
};

export default Heading;
