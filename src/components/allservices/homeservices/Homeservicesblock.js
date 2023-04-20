import React from 'react'
import './homeservicesblock.css'
import Soc from './Soc';
import Siem from './Siem';
import Vapt from './Vapt';
import Threathunting from './Threathunting';
import Staffing from './Staffing';



function HomeServicesBlock() {
  return (
    <>
    <div className='mx-auto max-w-7xl homeserviceblock py-16'>
    <h1>
    Information Security Services
    </h1>
    <p  className='mx-auto max-w-2xl text-center'>Our security program solutions are designed for short-term and long-term services. Whether it is an annual penetration test or an ongoing virtual CISO engagement, our team of cyber security consultants are here to assist.</p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5  gap-4">
            <Soc />
            <Siem />
            <Vapt />
            <Threathunting />
            <Staffing />

        </div>
    </div>
    </>
  )
}

export default HomeServicesBlock