import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import socImg from "../../../assets/soc-1.png";

function Soc() {
  const navigate = useNavigate();
  function navigateTo() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/services/soc");
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
                Our security program solutions are designed for short-term and
                long-term services. Whether it is an annual penetration test or
                an ongoing virtual CISO engagement, our team of cyber security
                consultants are here to assist.
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
