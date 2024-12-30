import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import CKDTips from "../components/CKDTips";

// Register Chart.js components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

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

  const predictions = parsePredictions(location.state?.predictions);

  const getResultClass = (prob) => {
    if (prob > 70) return "bg-red-100 text-red-600";
    if (prob > 40) return "bg-yellow-100 text-yellow-600";
    return "bg-green-200/30 text-green-600";
  };

  const generatePieData = (probabilities) => ({
    labels: Object.keys(probabilities).map((label) =>
      label === "ckd" ? "CKD" : "Healthy"
    ),
    datasets: [
      {
        data: Object.values(probabilities),
        backgroundColor: ["#f87171", "#34d399"],
        borderColor: ["#f87171", "#34d399"],
        borderWidth: 1,
      },
    ],
  });

  const generateOverallChartData = (overallResult) => ({
    labels: ["CKD", "Healthy"],
    datasets: [
      {
        data: [
          overallResult.averageCKDProbability,
          overallResult.healthyProbability,
        ],
        backgroundColor: ["#f87171", "#34d399"],
        borderColor: ["#f87171", "#34d399"],
        borderWidth: 1,
      },
    ],
  });

  const generateBarChartData = (predictions) => {
    if (!predictions || predictions.length === 0) return {};

    const labels = predictions.map((p) => p.algorithm);
    const ckdData = predictions.map((p) => p.probabilities.ckd);
    const healthyData = predictions.map((p) => 100 - p.probabilities.ckd);

    return {
      labels: labels,
      datasets: [
        {
          label: "CKD",
          data: ckdData,
          backgroundColor: "#f87171",
          borderRadius: 8,
        },
        {
          label: "Healthy",
          data: healthyData,
          backgroundColor: "#34d399",
          borderRadius: 8,
        },
      ],
    };
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          font: {
            size: 12, // Adjust Y-axis font size
          },
        },
      },
      x: {
        ticks: {
          font: {
            size: window.innerWidth < 640 ? 10 : 14, // Responsive font size for small devices
          },
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          font: {
            size: window.innerWidth < 640 ? 10 : 14, // Responsive font size for legend
          },
        },
      },
    },
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            // Append % sign to the tooltip label
            return " " + tooltipItem.raw + "%";
          },
        },
      },
    },
  };

  // Calculate overall result
  const calculateOverallResult = () => {
    if (!predictions || predictions.length === 0) return null;

    const totalCKDProbability = predictions.reduce((sum, prediction) => {
      return sum + (prediction.probabilities?.ckd || 0);
    }, 0);

    const averageCKDProbability = totalCKDProbability / predictions.length;
    const healthyProbability = 100 - averageCKDProbability;

    if (averageCKDProbability > 70) {
      return {
        text: "High likelihood of CKD 😔",
        color: "text-red-600",
        bgColor: "bg-red-100",
        averageCKDProbability,
        healthyProbability,
      };
    } else if (averageCKDProbability > 40) {
      return {
        text: "Moderate likelihood of CKD 😐",
        color: "text-yellow-600",
        bgColor: "bg-yellow-100",
        averageCKDProbability,
        healthyProbability,
      };
    } else {
      return {
        text: "Low likelihood of CKD 😊",
        color: "text-green-600",
        bgColor: "bg-green-200/40",
        averageCKDProbability,
        healthyProbability,
      };
    }
  };

  const overallResult = calculateOverallResult();

  return (
    <div className="min-h-screen px-4 md:px-6 py-12 bg-gray-100">
      <div className="max-w-[1280px] mx-auto space-y-12">
        {/* Page Header */}
        <header className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-800">
            Prediction Results
          </h1>
          <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
            Here's what we found based on your data. Each algorithm provides its
            own perspective, and we've summarized them for you.
          </p>
        </header>

        {/* Overall Result */}
        {overallResult && (
          <section
            className={`flex flex-col items-center md:px-8 px-4 py-6 md:py-8 rounded-[16px] shadow-lg border ${overallResult.bgColor}`}
          >
            <h2 className={`text-2xl font-bold ${overallResult.color} mb-4`}>
              {overallResult.text}
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-between w-full">
              <div className="w-full md:w-1/2 mb-4 md:mb-0 bg-white/90 rounded-lg px-4 py-8 shadow-lg flex flex-col justify-center">
                <p className="text-gray-700 mb-4 text-center">
                  This result is based on an average analysis of all algorithms.
                </p>
                <div className="flex gap-4 items-cente justify-center mb-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-600">CKD Risk</p>
                    <p className={`text-2xl font-bold ${overallResult.color}`}>
                      {overallResult.averageCKDProbability.toFixed(2)}%
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Healthy</p>
                    <p className="text-2xl font-bold text-green-600">
                      {overallResult.healthyProbability.toFixed(2)}%
                    </p>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  What does this mean?
                </h3>
                <p className="text-gray-600">
                  {overallResult.averageCKDProbability.toFixed(2) > 70
                    ? "Your results indicate a high risk of Chronic Kidney Disease. It's crucial to consult with a healthcare professional as soon as possible for a thorough evaluation and potential treatment plan."
                    : overallResult.averageCKDProbability.toFixed(2) > 40
                    ? "Your results suggest a moderate risk of Chronic Kidney Disease. It's recommended to discuss these findings with your doctor to determine if further testing or preventive measures are needed."
                    : "Your results indicate a low risk of Chronic Kidney Disease. However, it's always good to maintain a healthy lifestyle and have regular check-ups with your healthcare provider."}
                </p>
              </div>
              <div className="w-full md:w-1/2 max-w-[400px] sm:h-[400px] flex items-center justify-center">
                <Pie
                  data={generateOverallChartData(overallResult)}
                  options={options}
                />
              </div>
            </div>
          </section>
        )}

        {/* Bar Chart */}
        <section className="mt-8 flex flex-col justify-center items-center">
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">
            Algorithm Comparison
          </h2>
          <div className="w-full sm:max-w-full max-w-[400px] sm:h-[450px] flex items-center justify-center">
            <Bar
              data={generateBarChartData(predictions)}
              options={barChartOptions}
            />
          </div>
        </section>

        {/* Predictions Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Individual Algorithm Breakdown
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {predictions.length > 0 ? (
              predictions.map((result, index) => {
                const { algorithm, prediction, probabilities } = result;
                const ckdProbability = probabilities?.ckd || 0;
                const resultClass = getResultClass(ckdProbability);

                return (
                  <div
                    key={index}
                    className={`md:px-6 px-4 py-6 bg-white rounded-lg shadow-md border hover:shadow-lg transition ${resultClass}`}
                  >
                    {/* Algorithm Header */}
                    <div className="flex flex-wrap gap-1 items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {algorithm}
                      </h3>
                      <div
                        className={`text-sm px-3 py-1 rounded-full font-medium ${
                          ckdProbability > 70
                            ? "bg-red-100 text-red-600"
                            : ckdProbability > 40
                            ? "bg-yellow-200 text-yellow-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {ckdProbability > 70
                          ? "High Risk"
                          : ckdProbability > 40
                          ? "Moderate Risk"
                          : "Low Risk"}
                      </div>
                    </div>

                    {/* Prediction Result */}
                    <div className="mt-4">
                      <div className="flex items-center gap-[4px]">
                        <span className="text-3xl">
                          {probabilities?.ckd > 70
                            ? "😔"
                            : probabilities?.ckd > 40
                            ? "😐"
                            : "😊"}
                        </span>
                        <p className="text-lg font-medium">{prediction}</p>
                      </div>
                    </div>

                    {/* Probability Breakdown */}
                    <div className="mt-6">
                      <h4 className="text-sm font-bold text-gray-600 mb-2">
                        Breakdown:
                      </h4>
                      <div className="space-y-2">
                        {Object.entries(probabilities).map(([label, prob]) => (
                          <div
                            key={label}
                            className="flex items-center justify-between"
                          >
                            <span className="text-gray-700">
                              {label === "ckd"
                                ? "Chronic Kidney Disease (CKD)"
                                : "Healthy"}
                            </span>
                            <span className="text-gray-800 font-medium">
                              {prob.toFixed(2)}%
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Chart */}
                    <div className="mt-4 w-full sm:h-[300px] flex items-center justify-center">
                      <Pie
                        className="mx-auto"
                        data={generatePieData(probabilities)}
                        options={options}
                      />
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center text-gray-600">
                No predictions available.
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <footer className="text-center space-y-4">
          <CKDTips />
          <Link
            to="/prediction"
            className="bg-green-600 text-white font-medium py-3 px-8 rounded-full text-lg shadow hover:bg-green-700 transition"
          >
            Predict Again
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default PredictionResult;
