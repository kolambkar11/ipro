import React from "react";
import { useNavigate } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import cybertraininig from "../../../assets/cybersecurity-training.png";

const Cybersecuritytraining = () => {
  const navigate = useNavigate();
  function navigateTo() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    alert(process.env.REACT_APP_DOMAIN_DIR);
    navigate(process.env.REACT_APP_DOMAIN_DIR + "/services/staffing");
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
                Our Cybersecurity Training service offers comprehensive and
                up-to-date training programs to empower your workforce with the
                knowledge and skills necessary to navigate today's complex cyber
                threat landscape. Our training modules are designed by industry
                experts and cover a wide range of topics, including threat
                awareness, secure coding practices, incident response, and
                compliance guidelines. We provide flexible training options to
                suit your organization's needs, including in-person workshops,
                virtual classrooms, and self-paced online courses. Our training
                materials are interactive and engaging, incorporating real-world
                scenarios and practical exercises to enhance learning
                effectiveness. By investing in our Cybersecurity Training
                service, you can equip your employees with the expertise to
                identify and mitigate potential threats, promote a culture of
                security awareness, and minimize the risk of cyber incidents.
                Stay ahead of evolving threats with our comprehensive and
                tailored training solutions.
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
