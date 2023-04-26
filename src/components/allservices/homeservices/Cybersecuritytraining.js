import React from "react";
import { useNavigate } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import cybertraininig from "../../../assets/cybersecurity-training.png";

const Cybersecuritytraining = () => {
  const navigate = useNavigate();
  function navigateTo() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/services/staffing");
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
                src={cybertraininig}
                data-src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://www.cybersecurityservices.com/wp-content/uploads/2022/01/safer-world-4.jpg"
                alt="services-img"
              />
            </div>
            <div className="content">
              <h3>
                <b>CyberSecurity Training</b>
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
};

export default Cybersecuritytraining;
