import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import vaptimg from "../../../assets/services/vapt.png";
function Vapt() {
  const navigate = useNavigate();
  function navigateTo() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("services/vapt");
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
                src={vaptimg}
                data-src={vaptimg}
                alt="services-img"
              />
            </div>
            <div className="content">
              <h3>
                <b>Vulnerability Assessment and Penetration Testing</b>
              </h3>
              <p className="homeserviceblock_p text-xl">
                iProtect’s Penetration Testing gives you a greater understanding
                of security flaws in your infrastructure, revealing
                vulnerabilities, analyzing the possible consequences of
                different forms of attack, evaluating the effectiveness of your
                current security measures and suggesting remedial actions and
                improvements.
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

export default Vapt;
