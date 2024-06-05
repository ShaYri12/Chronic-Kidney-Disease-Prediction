import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Welcome from "../pages/Welcome.jsx";
import AboutUs from "../pages/About.jsx";
import Information from "../pages/Information.jsx";
import DiseasePrediction from "../pages/DiseasePrediction.jsx";
import PredictionResult from "../pages/PredictionResult.jsx";
import Support from "../pages/Support.jsx";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/welcome" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/prediction" element={<DiseasePrediction />} /> 
      <Route path="/prediction-result" element={<PredictionResult/>} /> 
      <Route path="/about" element={<AboutUs />} />
      <Route path="/support" element={<Support />} />
      <Route path="/information" element={<Information />} />
      <Route path="/support" element={<Support />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default Routers;
