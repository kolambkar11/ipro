import React from "react";
import Twofourprotection from "./Twofourprotection";
import Highqualityteam from "./Highqualityteam";
import Lowertotalcostownership from "./Lowertotalcostownership";
const Sockeybenefits = () => {
  return (
    <>
      <div className="bg-white pt-10" data-aos="fade-up">
        <div className="mx-auto max-w-6xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Key benefits
          </h2>
        </div>
        <Twofourprotection />
        <Highqualityteam />
        <Lowertotalcostownership />
      </div>
    </>
  );
};

export default Sockeybenefits;
