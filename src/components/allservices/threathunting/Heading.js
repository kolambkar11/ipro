import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import "./threathunting.css";
const Heading = () => {
  return (
    <>
      <div className="mb-12 bg-cover thservice_coverimg"></div>
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
