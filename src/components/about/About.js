import React from 'react'

function about() {
  return (
  <>
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8"> 
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ef453a] to-[#f9af3d] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Us</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Home / About Us
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <img className=" max-w-full h-auto" src='https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_768/https://www.cybersecurityservices.com/wp-content/uploads/2021/07/blog1-768x578.jpg' className=''></img>
          <div className="bg-gray-400 contact-block">
            <h1>Cyber Security Services is a leading distribution and partner-focused security consulting firm based in Columbus, Ohio.</h1>
            <p>As a small business founded in 2013, the firm was established with the primary goal of bringing affordable executive leadership and security engineering expertise to organizations of all sizes. Through distribution and partner channels CSS delivers on cybersecurity, risk, and compliance programs from Tech Startups to Fortune 100 companies. Cyber Security Services is a NIST Cybersecurity Framework (CSF) original contributor and American National Standards Institute (ANSI) ISO/IEC 27001 contributor. </p>
          </div>
      </div>
    </div>
  </>
  )
}

export default about