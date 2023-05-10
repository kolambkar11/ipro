import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";

import siemImg from "../../../assets/siem.jpg";

function Siem() {
  const navigate = useNavigate();
  function navigateTo() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(process.env.REACT_APP_DOMAIN_DIR + "/services/siem");
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
                Cyber threats are evolving faster than ever and the
                cybersecurity skills you need to have at the ready are complex
                and difficult to find.
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
