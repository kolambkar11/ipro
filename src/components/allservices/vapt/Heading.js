import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import "./vapt.css";
const Heading = () => {
  return (
    <>
      <div className="mb-12 bg-cover vaptservice_coverimg"></div>
      <div className="mx-auto max-w-full px-6 lg:px-8">
        <div className="mx-auto max-w-full ">
          <h2
            className="text-3xl font-bold tracking-tight all_heading sm:text-4xl"
            data-aos="fade-up"
          >
            iProtect Vapt
          </h2>
          <p className="mt-6 text-lg leading-8 all_heading" data-aos="fade-up">
            Vulnerability Assessment and Penetration Testing services ensuring
            that your IT infrastructure is fully secured against potential
            cyberattack is an ongoing challenge for any organization, but even
            more so for large enterprises with perhaps thousands of employees,
            hundreds of information systems, and multiple locations worldwide.
          </p>
          <p className="mt-6 text-lg leading-8 all_heading" data-aos="fade-up">
            Penetration testing is a practical demonstration of possible. attack
            scenarios where a malicious actor may attempt to bypass security
            controls in your corporate network to obtain high privileges in
            important systems.
          </p>
          <p>
            iProtect’s Penetration Testing gives you a greater understanding of
            security flaws in your infrastructure, revealing vulnerabilities,
            analyzing the possible consequences of different forms of attack,
            evaluating the effectiveness of your current security measures and
            suggesting remedial actions and improvements.
          </p>
          <p className="mt-6 text-lg leading-8 all_heading" data-aos="fade-up">
            Penetration Testing from iProtect helps you and your organization
            to:
            <li>
              Identify the weakest points in your network, so you can make fully
              informed decisions about where best to focus your attention and
              budget to mitigate future risk.
            </li>
            <li>
              Avoid financial, operational, and reputational losses caused by
              cyber-attacks by preventing these attacks from ever happening
              through proactively detecting and fixing vulnerabilities.
            </li>
          </p>
        </div>
      </div>
    </>
  );
};

export default Heading;
