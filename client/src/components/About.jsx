import React from "react";
import hero from "../../public/Images/about.gif";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="bg-gradient-to-tr from-white  flex items-center to-white min-h-screen px-5 py-5">
      <div className="grid md:grid-cols-2 gap-4 items-center">
        <div className="flex items-center justify-center">
          <img src={hero} alt="" />
        </div>

        <div className="flex px-[4%] flex-col md:items-start items-center justify-center">
          <h1 className="text-3xl font-bold py-3">About Us</h1>
          <p className="text-md text-gray-700 ">
            Welcome to Disease Prediction System! We're committed to
            revolutionizing healthcare by leveraging cutting-edge technology to
            predict potential health risks accurately. With years of expertise
            in predictive analytics and data analysis, our dedicated team is
            passionate about improving lives through early disease detection. At
            Disease Prediction System, we believe in the power of data-driven
            insights to empower individuals to take control of their health. Our
            mission is to provide accessible and reliable predictive analytics
            solutions, enabling proactive healthcare decisions and ultimately
            improving health outcomes. Join us on our journey to transform
            healthcare with innovation and compassion. Together, we can make a
            difference in the fight against diseases.
          </p>

          <Link
            to="/about"
            className="bg-[#0b9444] flex gap-2 items-center my-6 mr-4 py-3 px-5 text-white font-semibold rounded-lg"
          >
            Read More
            <FiArrowUpRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
