import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import "./featuresection.css";
const features = [
  {
    name: "Network Security:",
    description:
      " Our end-to-end network security solutions help safeguard your infrastructure against internal and external threats, identifying vulnerabilities in your network and providing recommendations to mitigate them.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Endpoint Security:",
    description:
      "Our comprehensive endpoint security solutions protect your devices and data from cyber threats, including antivirus and anti-malware solutions, device management, and encryption.",
    icon: LockClosedIcon,
  },
  {
    name: "Cloud Security:",
    description:
      "Our cloud security solutions ensure that your data is secure and compliant with industry regulations, providing cloud migration, configuration, and ongoing monitoring and management.",
    icon: ServerIcon,
  },
  {
    name: "Risk and Compliance:",
    description:
      "Our risk and compliance services help manage your security risks and achieve compliance with industry regulations such as HIPAA, PCI-DSS, and GDPR.",
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
              <h2 className="text-base font-semibold leading-7 all_heading">
                Welcome to
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight all_heading sm:text-4xl">
                iProtect Cybersecurity Services
              </p>
              <p className="mt-6 text-2xl leading-7 text-gray-900">
                In today&#39;s digital world, cyber threats are evolving at an
                unprecedented rate. It has become crucial for businesses and
                individuals alike to protect their assets and sensitive
                information from the ever- evolving threats. At iProtect
                Cybersecurity Services, we provide a comprehensive range of
                cybersecurity services that cater to your specific needs,
                helping you to stay secure in the digital landscape.
              </p>
              <p className="mt-6 text-2xl leading-7 text-gray-900">
                Our team of experienced cybersecurity professionals provides
                top-notch cybersecurity services, ensuring that our clients are
                protected from cyber threats. We understand that every business
                and individual have unique security challenges, and we work
                closely with our clients to develop customized solutions that
                cater to their specific requirements.
              </p>
              <p className="mt-6 text-2xl leading-7 text-gray-900">
                Our services include, but are not limited to:
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold all_heading text-2xl">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 "
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline  text-2xl">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-2xl leading-7 text-gray-900">
                In addition to our comprehensive cybersecurity services, we also
                offer SOC as a Service, SIEM as a Service, Threat Hunting as a
                Service, and Resource Staffing Services. Our SOC as a Service
                provides 24/7 monitoring, detection, and response to
                cybersecurity threats, while our SIEM as a Service enables you
                to aggregate and correlate security data from various sources in
                real-time. Our Threat Hunting as a Service leverages advanced
                threat intelligence and analytics to detect and mitigate
                advanced persistent threats (APTs), and our Resource Staffing
                Services provide you with access to a pool of highly skilled and
                experienced cybersecurity professionals.
              </p>
              <p className="mt-6 text-2xl leading-7 text-gray-900">
                At iProtect Cybersecurity Services, we believe in providing
                excellent customer service and support to our clients. Our team
                is always available to answer your questions, provide guidance,
                and address your concerns. We pride ourselves on our ability to
                build long-term relationships with our clients, and we are
                committed to helping you stay secure in an ever-changing digital
                landscape.
              </p>
              <p className="mt-6 text-2xl leading-7 text-gray-900">
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
