import React from "react";
import {
  FaLaptopCode,
  FaChartLine,
  FaSketch,
  FaDatabase,
  FaMobileAlt,
  FaFileInvoice,
  FaMoneyCheckAlt,
  FaNetworkWired,
  FaStethoscope,
  FaHeartbeat,
} from "react-icons/fa";

const Benefits = [
  {
    icon: FaHeartbeat,
    title: "Early Detection",
    description:
      "Detect diseases at an early stage for timely intervention and treatment.",
  },
  {
    icon: FaStethoscope,
    title: "Accurate Diagnosis",
    description:
      "Leverage advanced algorithms to provide precise and reliable diagnoses.",
  },
  {
    icon: FaDatabase,
    title: "Data Analysis",
    description:
      "Utilize vast amounts of medical data to uncover hidden patterns and insights.",
  },
  {
    icon: FaMobileAlt,
    title: "Mobile Access",
    description:
      "Access the system from anywhere using mobile devices for convenience.",
  },
  {
    icon: FaChartLine,
    title: "Predictive Analytics",
    description:
      "Predict future health risks and outcomes based on historical data.",
  },
  {
    icon: FaFileInvoice,
    title: "Comprehensive Reports",
    description:
      "Generate detailed reports for patients and healthcare providers.",
  },
  {
    icon: FaMoneyCheckAlt,
    title: "Cost Efficiency",
    description:
      "Reduce healthcare costs by preventing advanced stages of diseases.",
  },
  {
    icon: FaNetworkWired,
    title: "Integration with EHR",
    description:
      "Seamlessly integrate with Electronic Health Records for better data management.",
  },
];

const Benefit = () => {
  return (
    <div className="container mx-auto px-8  pb-14 bg-gradient-to-t from-white to-[#eafeeb]">
      <div className="flex flex-col items-center pt-20 mb-16">
        <h1 className="text-3xl font-bold text-center  relative ">
          Features & Benefits
        </h1>
        <p className="py-2 md:w-[60%] w-full text-center">
          Effortlessly predict diseases and manage health with our intuitive
          symptom checker and personalized assessments.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {Benefits.map((benefit, index) => (
          <div
            key={index}
            className="group p-6 rounded-lg text-center cursor-pointer transition-transform bg-[#89c43f]/20 hover:bg-[#0b9444] hover:scale-105"
          >
            <benefit.icon className="text-5xl text-[#0b9444] mx-auto mb-4 group-hover:text-white" />
            <h2 className="text-xl font-semibold mb-2 group-hover:text-white">
              {benefit.title}
            </h2>
            <p className="text-gray-600 group-hover:text-white">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefit;
