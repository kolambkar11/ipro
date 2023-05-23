import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import "./featuresection.css";
const features = [
  {
    name: "SOC as a Service (Security Operations Center):",
    description:
      "Provide 24/7 monitoring, detection, and response to security incidents, utilizing advanced security technologies and skilled analysts.",
    icon: ServerIcon,
  },
  {
    name: "Managed Security Services:",
    description:
      "Offer ongoing management and monitoring of security solutions such as firewalls, intrusion detection systems, antivirus, and vulnerability management tools.",
    icon: ServerIcon,
  },
  {
    name: "Security Solution Design and Implementation:",
    description:
      "Assess the security needs of clients, design tailored security architectures, and deploy and configure the necessary security solutions to protect their networks, systems, and data.",
    icon: ServerIcon,
  },
  {
    name: "Security Audits and Assessments:",
    description:
      "Conduct comprehensive security assessments to identify vulnerabilities, evaluate existing security controls, and provide recommendations for improvement.",
    icon: ServerIcon,
  },
  {
    name: "Incident Response and Forensics:",
    description:
      "Offer incident response services to help clients effectively handle and recover from security breaches. Conduct digital forensics investigations to identify the root cause and extent of security incidents.",
    icon: ServerIcon,
  },
  {
    name: "Security Awareness Training:",
    description:
      "Develop and deliver training programs to educate employees on cybersecurity best practices, promoting a security-conscious culture within organizations.",
    icon: ServerIcon,
  },
  {
    name: "Penetration Testing:",
    description:
      "Perform authorized simulated attacks on clients' systems to identify weaknesses in their infrastructure and applications, allowing them to proactively address potential vulnerabilities.",
    icon: ServerIcon,
  },
  {
    name: "Security Policy and Procedure Development:",
    description:
      "Assist clients in developing comprehensive security policies, procedures, and guidelines that align with industry standards and regulatory requirements.",
    icon: ServerIcon,
  },
  {
    name: "Data Privacy and Compliance:",
    description:
      "Provide guidance and assistance in achieving compliance with data protection regulations, such as GDPR or CCPA, and implementing privacy-enhancing measures.",
    icon: ServerIcon,
  },
  {
    name: "Threat Intelligence Services:",
    description:
      "Offer proactive monitoring and analysis of emerging threats, delivering timely threat intelligence reports and actionable recommendations to enhance clients' security posture.",
    icon: ServerIcon,
  },
];

export default function featuresection() {
  return (
    <div className="overflow-hidden bg-white py-16 sm:py-16">
      <div className="mx-auto max-w-full px-6 lg:px-8">
        <div className="mx-auto grid max-w-1xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-1">
          <div className="lg:pr-8 lg:pt-4" data-aos="fade-right">
            <div className="">
              <h2 className="text-base font-semibold leading-7 all_heading welcome_heading">
                Welcome to
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight all_heading sm:text-4xl">
                iProtect Cybersecurity Services
              </p>
              <p className="mt-6 text-xl leading-7 all_heading">
                In today&#39;s digital world, cyber threats are evolving at an
                unprecedented rate. It has become crucial for businesses and
                individuals alike to protect their assets and sensitive
                information from the ever- evolving threats. At iProtect
                Cybersecurity Services, we provide a comprehensive range of
                cybersecurity services that cater to your specific needs,
                helping you to stay secure in the digital landscape.
              </p>
              <p className="mt-6 text-xl leading-7 all_heading">
                Our team of experienced cybersecurity professionals provides
                top-notch cybersecurity services, ensuring that our clients are
                protected from cyber threats. We understand that every business
                and individual have unique security challenges, and we work
                closely with our clients to develop customized solutions that
                cater to their specific requirements.
              </p>
              <p className="mt-6 text-xl leading-7 all_heading">
                Our services include, but are not limited to:
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold all_heading text-xl">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 "
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline  text-xl">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-xl leading-7 all_heading">
                In addition to our comprehensive cybersecurity services, we also
                offer Threat Hunting as a Service, and Resource Staffing
                Services. Our Threat Hunting as a Service leverages advanced
                threat intelligence and analytics to detect and mitigate
                advanced persistent threats (APTs), and our Resource Staffing
                Services provide you with access to a pool of highly skilled and
                experienced cybersecurity professionals.
              </p>
              <p className="mt-6 text-xl leading-7 all_heading">
                At iProtect Cybersecurity Services, we believe in providing
                excellent customer service and support to our clients. Our team
                is always available to answer your questions, provide guidance,
                and address your concerns. We pride ourselves on our ability to
                build long-term relationships with our clients, and we are
                committed to helping you stay secure in an ever-changing digital
                landscape.
              </p>
              <p className="mt-6 text-xl leading-7 all_heading">
                Thank you for considering iProtect Cybersecurity Services as
                your trusted partner in cybersecurity. Contact us today to learn
                more about our services and how we can help you stay secure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
