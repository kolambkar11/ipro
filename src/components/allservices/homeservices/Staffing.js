import React from "react";
import { NavLink } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";

function Staffing() {
  return (
    <>
      <div className="..." data-aos="fade-up">
        <div className="p-2">
          <div className="services-box">
            <div className="image">
              <img
                className="service-img-home lazyloaded"
                decoding="async"
                src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://www.cybersecurityservices.com/wp-content/uploads/2022/01/safer-world-4.jpg"
                data-src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://www.cybersecurityservices.com/wp-content/uploads/2022/01/safer-world-4.jpg"
                alt="services-img"
              />
            </div>
            <div className="content">
              <div className="icon">
                <img
                  className=" lazyloaded"
                  decoding="async"
                  src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://www.cybersecurityservices.com/wp-content/uploads/2021/07/services-icon1-1.png"
                  data-src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://www.cybersecurityservices.com/wp-content/uploads/2021/07/services-icon1-1.png"
                  alt="services-icon"
                />
              </div>
              <h3>
                <b>Staffing</b>
              </h3>
              <p>
                Cyber threats are evolving faster than ever and the
                cybersecurity skills you need to have at the ready are complex
                and difficult to find.
              </p>

              <NavLink to="services/staffing" className="link-btn ">
                Read More <BsChevronRight />{" "}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Staffing;
