import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const PredictionResult = () => {
  useEffect(() => {
    window.scrollTo(0, -1);
  }, []);

  const location = useLocation();

  const parsePredictions = (rawData) => {
    if (!rawData) return [];
    const predictionLines = rawData.split("\n").filter(Boolean);
    const predictions = [];
    let currentPrediction = {};

    predictionLines.forEach((line, index) => {
      if (line.startsWith("Algorithm:")) {
        if (Object.keys(currentPrediction).length > 0) {
          predictions.push(currentPrediction);
        }
        currentPrediction = { algorithm: line.split(":")[1].trim() };
      } else if (line.startsWith("Prediction:")) {
        currentPrediction.prediction = line.split(":")[1].trim();
      } else if (line.startsWith("Probabilities:")) {
        const probabilities = {};
        let probIndex = index + 1;
        while (
          probIndex < predictionLines.length &&
          predictionLines[probIndex].includes(":")
        ) {
          const [key, value] = predictionLines[probIndex]
            .split(":")
            .map((item) => item.trim());
          if (key && value) {
            probabilities[key] = parseFloat(value);
          }
          probIndex++;
        }
        currentPrediction.probabilities = probabilities;
      }
    });

    if (Object.keys(currentPrediction).length > 0) {
      predictions.push(currentPrediction);
    }

    return predictions;
  };

  const formatAlgorithmName = (name) => {
    const nameMap = {
      "Algorithm 1": "Neural Network (NN)",
      "Algorithm 2": "Support Vector Machine (SVM)",
      "Algorithm 3": "Decision Tree (DT)",
      "Algorithm 4": "Random Forest (RF)",
      // Add more mappings as necessary
    };

    return nameMap[name] || name;
  };

  const predictions = parsePredictions(location.state?.predictions);

  const CKDTips = () => (
    <div className="ckd-tips pt-8 pb-14 text-black text-left leading-8">
      <h3 className="text-3xl font-bold mb-4 text-center">
        Tips for Managing Chronic Kidney Disease
      </h3>
      <ul className="list-disc list-inside">
        <li className="text-[20px]">
          <strong>Eat Right:</strong>
        </li>
        <ul className="list-disc list-inside mb-5 ml-5 text-[16px]">
          <li>
            <strong>Cut Down on Salt:</strong> Use less salt in your food. Try
            herbs and spices instead.
          </li>
          <li>
            <strong>Watch Your Protein:</strong> Don't eat too much meat or
            dairy. Balance is key.
          </li>
          <li>
            <strong>Limit Potassium and Phosphorus:</strong> Avoid bananas,
            tomatoes, and dark sodas.
          </li>
        </ul>
        <li className="text-lg">
          <strong>Stay Healthy:</strong>
        </li>
        <ul className="list-disc list-inside mb-5 ml-5">
          <li>
            <strong>Exercise Regularly:</strong> Walk, swim, or do light
            exercises most days.
          </li>
          <li>
            <strong>Don't Smoke:</strong> If you smoke, try to quit. It’s better
            for your kidneys.
          </li>
          <li>
            <strong>Limit Alcohol:</strong> Avoid alcohol.
          </li>
        </ul>
        <li className="text-lg">
          <strong>Monitor Your Health:</strong>
        </li>
        <ul className="list-disc list-inside mb-5 ml-5">
          <li>
            <strong>Check Your Blood Pressure:</strong> Keep an eye on it and
            aim for a healthy range.
          </li>
          <li>
            <strong>Regular Doctor Visits:</strong> See your doctor regularly to
            check on your kidneys.
          </li>
        </ul>
        <li className="text-lg">
          <strong>Reduce Stress:</strong>
        </li>
        <ul className="list-disc list-inside mb-5 ml-5">
          <li>
            <strong>Relax:</strong> Try meditation, deep breathing, or yoga to
            stay calm.
          </li>
        </ul>
        <li className="text-lg">
          <strong>Stay Informed:</strong>
        </li>
        <ul className="list-disc list-inside ml-5 mb-5">
          <li>
            <strong>Know the Signs:</strong> Watch for swelling, tiredness, or
            changes in urine. Tell your doctor if you notice anything new.
          </li>
        </ul>
        <p>
          <strong>Always Ask Your Doctor:</strong> Before changing your diet,
          exercise, or taking new meds, talk to your doctor.
        </p>
      </ul>
    </div>
  );

  const getResultClass = (prob) => {
    if (prob > 70) return "bg-red-100 text-red-600";
    if (prob > 40) return "bg-yellow-100 text-yellow-600";
    return "bg-green-100 text-green-600";
  };

  return (
    <div className="min-h-screen px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-center text-4xl font-extrabold mb-6">
          Prediction Results
        </h1>
        <p className="text-center text-lg text-gray-600 mb-12">
          Below are the predictions generated by different algorithms to assess
          the likelihood of Chronic Kidney Disease.
        </p>

        {predictions.length > 0 ? (
          <div className="space-y-8">
            {predictions.map((result, index) => {
              const { algorithm, prediction, probabilities } = result;
              const resultClass = getResultClass(probabilities?.ckd || 0);
              const formattedAlgorithm = formatAlgorithmName(algorithm);

              return (
                <div
                  key={index}
                  className={`p-6 bg-white rounded-lg shadow-md border ${resultClass}`}
                >
                  <h2 className="text-2xl font-bold mb-4">
                    {formattedAlgorithm}
                  </h2>
                  <div className="flex items-center gap-1">
                    <span className="text-3xl">
                      {probabilities?.ckd > 70
                        ? "😔"
                        : probabilities?.ckd > 40
                        ? "😐"
                        : "😊"}
                    </span>
                    <p className="text-xl font-medium">{prediction}</p>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-bold text-lg mb-2">Probabilities:</h3>
                    {Object.entries(probabilities).map(([label, prob]) => (
                      <p key={label} className="text-gray-700 font-[500]">
                        {label === "ckd"
                          ? "Chronic Kidney Disease (CKD)"
                          : "No Chronic Kidney Disease (Healthy)"}
                        : {prob}%
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center text-lg text-gray-600">
            No predictions available
          </div>
        )}

        <CKDTips />

        <div className="text-center">
          <Link
            to="/prediction"
            className="bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-green-700 transition"
          >
            Predict Again
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PredictionResult;
