import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import serviceImgCS from "../../../assets/services/soc.png";
const Heading = () => {
  return (
    <>
      <img src={serviceImgCS} class="w-full mb-4"></img>
      <div className="mx-auto max-w-full px-6 lg:px-8">
        <div className="mx-auto max-w-full ">
          <h2
            className="text-3xl font-bold tracking-tight all_heading sm:text-4xl"
            data-aos="fade-up"
          >
            iProtect Cyber Security Training
          </h2>
          <p className="mt-6 text-lg leading-8 all_heading" data-aos="fade-up">
            Services At iProtect Cybersecurity Services, we offer customized
            Cybersecurity Training programs that cater to your Key benefits 18
            specific needs. Our training programs are designed to help you and
            your team stay up-to-date on the latest cybersecurity threats and
            best practices, providing you with the knowledge and skills needed
            to mitigate risks and protect your organization&#39;s data.
          </p>
        </div>
      </div>
    </>
  );
};

export default Heading;
