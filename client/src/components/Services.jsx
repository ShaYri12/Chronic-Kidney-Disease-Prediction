import React from "react";
import { MdOutlinePersonSearch } from "react-icons/md";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { TbRibbonHealth } from "react-icons/tb";
import { MdOnlinePrediction } from "react-icons/md";

const Services = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#eafeeb] min-h-screen px-10 text-center">
      <h1 className="text-3xl font-bold py-3">Our Services</h1>
      <p>
        Empowering Health through Proactive Prediction: Your Partner in Disease
        Prevention.
      </p>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 py-10">
        <div className="relative border cursor-default border-[#89c43f] flex flex-col group items-center p-3 rounded-lg overflow-hidden">
          <MdOutlinePersonSearch size={80} className="text-[#89c43f]" />
          <h3 className="text-xl font-semibold ">Predictive Analytics</h3>
          <p className="text-sm pt-3 text-gray-700 ">
            Our Disease Prediction System harnesses cutting-edge predictive
            analytics technology, utilizing advanced algorithms and data
            analysis methods to forecast potential health risks with remarkable
            accuracy.{" "}
          </p>
          <div className="absolute top-[-300px] w-full h-full opacity-20 bg-[#89c43f] duration-500 group-hover:top-0"></div>
        </div>
        <div className="relative border cursor-default border-[#89c43f] flex flex-col group items-center p-3 rounded-lg overflow-hidden">
          <MdOutlineHealthAndSafety size={80} className="text-[#89c43f]" />
          <h3 className="text-xl font-semibold">Health Assessment</h3>
          <p className="text-sm pt-3 text-gray-700">
            Experience a comprehensive health assessment like never before. Our
            system covers a wide spectrum of diseases and health conditions,
            ensuring thorough scrutiny of your well-being.
          </p>
          <div className="absolute top-[-300px] w-full h-full opacity-20 bg-[#89c43f] duration-500 group-hover:top-0"></div>
        </div>
        <div className="relative border cursor-default border-[#89c43f] flex flex-col group items-center p-3 rounded-lg overflow-hidden">
          <TbRibbonHealth size={80} className="text-[#89c43f]" />
          <h3 className="text-xl font-semibold">
            Personalized Recommendations
          </h3>
          <p className="text-sm pt-3 text-gray-700">
            Receive personalized health recommendations tailored precisely to
            your unique health profile. Our system utilizes sophisticated
            algorithms to analyze your data
          </p>
          <div className="absolute top-[-300px] w-full h-full opacity-20 bg-[#89c43f] duration-500 group-hover:top-0"></div>
        </div>
        <div className="relative border cursor-default border-[#89c43f] flex flex-col group items-center p-3 rounded-lg overflow-hidden">
          <MdOnlinePrediction size={80} className="text-[#89c43f]" />
          <h3 className="text-xl font-semibold">Predictive Analytics</h3>
          <p className="text-sm pt-3 text-gray-700">
            Our Disease Prediction System harnesses cutting-edge predictive
            analytics technology, utilizing advanced algorithms and data
            analysis methods to forecast potential health risks with remarkable
            accuracy.
          </p>
          <div className="absolute top-[-300px] w-full h-full opacity-20 bg-[#89c43f] duration-500 group-hover:top-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
