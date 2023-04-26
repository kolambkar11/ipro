import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import threathuntinimg from "../../../assets/threat-hunting.png";

function Threathunting() {
  const navigate = useNavigate();
  function navigateTo() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/services/threathunting");
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

export default Threathunting;
