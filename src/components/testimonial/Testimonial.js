import React from "react";

function testimonial() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="mx-auto max-w-2xl lg:max-w-7xl">
              <img
                className="mx-auto h-12"
                src="https://www.trigent.com/assets/images/main-logo.webp"
                alt=""
              />
              <figure className="mt-10">
                <blockquote className="text-center text-l font-semibold leading-8 text-gray-900 sm:text-l sm:leading-9">
                  <p>
                    “iProtect Cybersecurity Services has been our trusted
                    partner in cybersecurity for over two years now, and we are
                    extremely satisfied with their services. They have helped us
                    develop a robust security framework that addresses our
                    unique security challenges, providing network security,
                    endpoint security, and cloud security solutions. Their team
                    is highly skilled, knowledgeable, and responsive, and they
                    have provided us with excellent customer service and
                    support. We highly recommend iProtect Cybersecurity Services
                    to anyone looking for top-notch cybersecurity services."
                  </p>
                </blockquote>
                <figcaption className="mt-10">
                  <img
                    className="mx-auto h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-gray-900">
                      Judith Black
                    </div>
                    <svg
                      viewBox="0 0 2 2"
                      width={3}
                      height={3}
                      aria-hidden="true"
                      className="fill-gray-900"
                    >
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="text-gray-600">
                      Trigent Software Pvt Ltd:
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>

          <div>
            <div className="mx-auto max-w-2xl lg:max-w-7xl">
              <img
                className="mx-auto h-12"
                src="https://www.trigent.com/assets/images/main-logo.webp"
                alt=""
              />
              <figure className="mt-10">
                <blockquote className="text-center text-l font-semibold leading-8 text-gray-900 sm:text-l sm:leading-9">
                  <p>
                    We have been working with iProtect Cybersecurity Services
                    for several months now, and we have been thoroughly
                    impressed with their services. Their SOC as a Service has
                    been invaluable in detecting and mitigating cyber threats,
                    and their SIEM as a Service has helped us aggregate and
                    correlate security data from various sources. We appreciate
                    their attention to detail and their commitment to providing
                    excellent customer service. We highly recommend iProtect
                    Cybersecurity Services to anyone looking for reliable and
                    effective cybersecurity services.
                  </p>
                </blockquote>
                <figcaption className="mt-10">
                  <img
                    className="mx-auto h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-gray-900">
                      Judith Black
                    </div>
                    <svg
                      viewBox="0 0 2 2"
                      width={3}
                      height={3}
                      aria-hidden="true"
                      className="fill-gray-900"
                    >
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="text-gray-600">
                      eIDEA soft solutions LLP:
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default testimonial;
