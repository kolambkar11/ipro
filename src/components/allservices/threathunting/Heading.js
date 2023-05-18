import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import serviceImgTh from "../../../assets/services/threat-hunting.png";
import "./threathunting.css";
const Heading = () => {
  return (
    <>
      <img src={serviceImgTh} class="w-full mb-4"></img>
      <div className="mx-auto max-w-full px-6 lg:px-8">
        <div className="mx-auto max-w-full ">
          <h2
            className="text-3xl font-bold tracking-tight all_heading sm:text-4xl "
            data-aos="fade-up"
          >
            iProtect Threat Hunting Services
          </h2>
          <p className="mt-6 text-lg leading-8 all_heading" data-aos="fade-up">
            Security teams across all industries are working hard building
            systems to provide comprehensive protection against rapidly evolving
            cyber threats. But most of these take an «alert» driven approach to
            cybersecurity incidents, reacting only after an incident has already
            taken place.
          </p>
        </div>
      </div>
    </>
  );
};

export default Heading;
