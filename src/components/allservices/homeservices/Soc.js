import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import socImg from "../../../assets/soc-1.png";

function Soc() {
  const navigate = useNavigate();
  function navigateTo() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(process.env.REACT_APP_DOMAIN_DIR + "/services/soc");
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
                src={socImg}
                data-src={socImg}
                alt="services-img"
              />
            </div>
            <div className="content">
              <h3>
                <b>Security Operations Center</b>
              </h3>
              <p className="homeserviceblock_p text-xl">
                Our SOC-as-a-Service provides a robust and proactive security
                operations center tailored to safeguard your organization's
                digital assets. With our comprehensive platform, you can rely on
                our expert security analysts to monitor, detect, and respond to
                threats in real-time. Our scalable and cloud-based solution
                eliminates the need for extensive infrastructure investment,
                while offering 24/7 threat intelligence, incident management,
                and compliance support. By leveraging our SOC-as-a-Service, you
                can enhance your cybersecurity posture, mitigate risks, and
                ensure a resilient defense against evolving cyber threats.
                Experience peace of mind with our reliable and hassle-free SOC
                service.
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

export default Soc;
