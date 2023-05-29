import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";

import siemImg from "../../../assets/services/siem-service.png";

function Siem() {
  const navigate = useNavigate();
  function navigateTo() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("services/siem");
  }
  return (
    <>
      <div className="..." data-aos="fade-up">
        <div className="p-2">
          <div className="services-box">
            <div className="image">
              <img
                className="service-img-home lazyloaded"
                decoding="async"
                src={siemImg}
                data-src={siemImg}
                alt="services-img"
              />
            </div>
            <div className="content">
              <h3>
                <b>Security information and event management</b>
              </h3>
              <p className="homeserviceblock_p text-xl">
                Our SIEM-as-a-Service offers comprehensive and efficient
                security information and event management tailored to meet your
                organization's needs. With our advanced platform, you gain
                real-time visibility into your network, enabling proactive
                threat detection, rapid incident response, and compliance
                management. Our scalable and cloud-based solution eliminates the
                need for infrastructure investments, while ensuring continuous
                monitoring, log analysis, and security intelligence. Stay
                protected against evolving cyber threats with our reliable and
                hassle-free SIEM service.
              </p>
              <span onClick={navigateTo} className="link-btn ">
                Read More <BsChevronRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Siem;
