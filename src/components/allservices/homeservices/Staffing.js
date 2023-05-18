import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import staffimg from "../../../assets/staffing.png";
function Staffing() {
  const navigate = useNavigate();
  function navigateTo() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("services/staffing");
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
                src={staffimg}
                data-src={staffimg}
                alt="services-img"
              />
            </div>
            <div className="content">
              <h3>
                <b>Resource Staffing</b>
              </h3>
              <p className="homeserviceblock_p text-xl">
                Our Resource Staffing service offers a reliable and efficient
                solution to meet your organization's staffing needs in the field
                of cybersecurity. We understand the critical importance of
                having skilled professionals on board to protect your digital
                assets. Our extensive network of qualified cybersecurity experts
                enables us to provide you with the right talent tailored to your
                specific requirements. Whether you need temporary support for a
                specific project or long-term staffing solutions, we can
                seamlessly match you with experienced professionals who possess
                the necessary expertise to address your unique challenges. With
                our Resource Staffing service, you can ensure a competent and
                capable cybersecurity workforce without the hassle of extensive
                recruitment processes. Focus on your core business objectives
                while we take care of your staffing needs.
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

export default Staffing;
