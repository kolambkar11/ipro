import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import "./staffing.css";
const Heading = () => {
  return (
    <>
      <div className="mb-12 bg-cover staffing_service_coverimg"></div>
      <div className="mx-auto max-w-full px-6 lg:px-8">
        <div className="mx-auto max-w-full ">
          <h2
            className="text-3xl font-bold tracking-tight all_heading sm:text-4xl"
            data-aos="fade-up"
          >
            iProtect Staffing Services
          </h2>
          <p className="mt-6 text-lg leading-8 all_heading" data-aos="fade-up">
            <b>THE RIGHT CANDIDATE THE FIRST TIME.</b> we apply extensive
            expertise to help our clients successfully solve the personnel
            challenges they face, while giving our Candidates the rewarding
            opportunities they’re looking for. Our goal is helping clients
            achieve business objectives and bottom-line success by providing
            experienced IT and NON - IT professionals at the right time, and at
            the right place to meet their mission critical operation needs. Our
            competency is to serve/provide solutions in 48 hour’s turnaround
            time &amp; our capabilities allow us to support technology
            challenges, timeframes and budgets of any organization.
          </p>
        </div>
      </div>
    </>
  );
};

export default Heading;
