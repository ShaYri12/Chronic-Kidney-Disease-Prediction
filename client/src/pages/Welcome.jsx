import React from "react";
import img1 from "../../public/Images/disease.jpg";
import img2 from "../../public/Images/predict.avif";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen sm:h-auto">
        <Link to="/home">
          <motion.div
            className="relative group "
            initial={{ y: 1500 }}
            animate={{ y: 0 }}
            transition={{
              type: "tween",
              duration: 2,
            }}
          >
            <div className="h-[50vh] sm:h-screen w-full">
              <img src={img1} alt="" className="object-cover w-full h-full" />
            </div>

            <div className="absolute font-light text-center inset-0 cursor-pointer bg-black bg-opacity-50 text-white click:opacity-0 group-hover:opacity-0 flex flex-col justify-center items-center transition-opacity duration-300">
              <p className="text-xl p-2">Let's Go to the</p>
              <h1 className="text-5xl font-semibold px-2">Home Page</h1>
            </div>
          </motion.div>
        </Link>
        <Link to="/prediction">
          <motion.div
            className="relative group "
            initial={{ y: -1500 }}
            animate={{ y: 0 }}
            transition={{
              type: "tween",
              duration: 2,
            }}
          >
            <div className="h-[50vh] sm:h-screen w-full">
              <img
                src={img2}
                alt=""
                className="image object-cover w-full h-full"
              />
            </div>
            <div className="absolute font-light text-center inset-0 cursor-pointer bg-black click:opacity-0 bg-opacity-50 text-white group-hover:opacity-0 flex flex-col justify-center items-center transition-opacity duration-300">
              <p className="text-xl p-2">Try out the</p>
              <h1 className="text-5xl font-semibold px-2">Prediction System</h1>
            </div>
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
