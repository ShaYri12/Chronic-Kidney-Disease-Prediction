// src/components/PredictionResult.js
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './PredictionResult.css';

const PredictionResult = () => {
  useEffect(() => {
    window.scrollTo(0, -1);
  }, []);

  const location = useLocation();
  const { prediction } = location.state;

  let message, styleClass, emoji;

  if (prediction.includes("not")) {
    emoji = "😊";
    message = `Great news! ${prediction}`;
    styleClass = "no-disease";
  } else {
    emoji = "😔";
    message = `Unfortunately, ${prediction}`;
    styleClass = "has-disease";
  }

  const CKDTips = () => (
    <div className="ckd-tips mt-8 text-black text-left leading-8">
      <h3 className="text-3xl font-bold mb-4 text-center">Tips for Managing Chronic Kidney Disease</h3>
      <ul className="list-disc list-inside ">
        <li className='text-lg'><strong>Eat Right:</strong></li>
        <ul className="list-disc list-inside mb-5 ml-5">
          <li><strong>Cut Down on Salt:</strong> Use less salt in your food. Try herbs and spices instead.</li>
          <li><strong>Watch Your Protein:</strong> Don't eat too much meat or dairy. Balance is key.</li>
          <li><strong>Limit Potassium and Phosphorus:</strong> Avoid bananas, tomatoes, and dark sodas.</li>
        </ul>
        <li className='text-lg'><strong>Stay Healthy:</strong></li>
        <ul className="list-disc list-inside mb-5 ml-5">
          <li><strong>Exercise Regularly:</strong> Walk, swim, or do light exercises most days.</li>
          <li><strong>Don't Smoke:</strong> If you smoke, try to quit. It’s better for your kidneys.</li>
          <li><strong>Limit Alcohol:</strong> Avoid alcohol.</li>
        </ul>
        <li className='text-lg'><strong>Monitor Your Health:</strong></li>
        <ul className="list-disc list-inside mb-5 ml-5">
          <li><strong>Check Your Blood Pressure:</strong> Keep an eye on it and aim for a healthy range.</li>
          <li><strong>Regular Doctor Visits:</strong> See your doctor regularly to check on your kidneys.</li>
        </ul>
        <li className='text-lg'><strong>Reduce Stress:</strong></li>
        <ul className="list-disc list-inside mb-5 ml-5">
          <li><strong>Relax:</strong> Try meditation, deep breathing, or yoga to stay calm.</li>
        </ul>
        <li className='text-lg'><strong>Stay Informed:</strong></li>
        <ul className="list-disc list-inside ml-5 mb-5">
          <li><strong>Know the Signs:</strong> Watch for swelling, tiredness, or changes in urine. Tell your doctor if you notice anything new.</li>
        </ul>
        <p><strong>Always Ask Your Doctor:</strong> Before changing your diet, exercise, or taking new meds, talk to your doctor.</p>
      </ul>
    </div>
  );

  return (
    <div className={`prediction-container ${styleClass} py-16`}>
      <h1 className='text-black font-extrabold text-5xl pb-16'>Chronic Kidney Disease Prediction Result</h1>
      <h2 className='text-8xl pb-6'>{emoji}</h2>
      <h2 className='font-bold text-4xl pb-16'>{message}</h2>
      {styleClass === "has-disease" && <CKDTips />}
      <Link to="/prediction" className="back-link back-btn">Predict Again</Link>
    </div>
  );
};

export default PredictionResult;
