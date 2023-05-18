import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import threathuntinimg from "../../../assets/threat-hunting.png";

function Threathunting() {
  const navigate = useNavigate();
  function navigateTo() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(process.env.REACT_APP_DOMAIN_DIR + "/services/threathunting");
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
                src={threathuntinimg}
                data-src={threathuntinimg}
                alt="services-img"
              />
            </div>
            <div className="content">
              <h3>
                <b>Threat Hunting</b>
              </h3>
              <p className="homeserviceblock_p text-xl">
                Our Threat Hunting-as-a-Service delivers proactive and targeted
                threat detection capabilities to bolster your organization's
                cybersecurity defenses. Our skilled team of threat hunters
                leverages advanced techniques and cutting-edge technologies to
                proactively search for potential threats that may have evaded
                traditional security measures. With our service, you can gain
                deep visibility into your network, identify hidden threats, and
                swiftly respond to incidents before they escalate. Our scalable
                and flexible solution eliminates the need for dedicated in-house
                resources, providing you with access to expert threat hunting
                capabilities on-demand. Stay one step ahead of cyber adversaries
                with our comprehensive and hassle-free Threat Hunting service.
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

export default Threathunting;
