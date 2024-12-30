"use client";

import React, { useState } from "react";

const stages = [
  {
    name: "Stage 1",
    description: "Kidney damage with normal or high GFR (≥90 mL/min/1.73 m²)",
    symptoms: [
      "Usually no symptoms",
      "High blood pressure",
      "Protein in urine (proteinuria)",
      "Normal or increased GFR",
      "Microalbuminuria (in diabetics)",
    ],
    precautions: [
      "Regular exercise",
      "Healthy diet low in salt and protein",
      "Blood pressure control",
      "Regular monitoring of kidney function",
      "Manage underlying conditions (e.g., diabetes)",
      "Avoid nephrotoxic medications",
    ],
    treatment: [
      "Lifestyle changes",
      "Blood pressure medication if needed",
      "Regular check-ups",
      "Manage underlying conditions",
      "ACE inhibitors or ARBs to protect kidneys",
    ],
    recommendations: [
      "Quit smoking",
      "Maintain healthy weight",
      "Regular exercise",
      "Limited alcohol intake",
      "Stay hydrated",
      "Control blood sugar (for diabetics)",
    ],
  },
  {
    name: "Stage 2",
    description: "Mild CKD (GFR = 60-89 mL/min/1.73 m²)",
    symptoms: [
      "Usually no symptoms",
      "Fatigue",
      "Changes in urination",
      "Mild weakness",
      "Loss of appetite",
    ],
    precautions: [
      "Monitor blood pressure",
      "Control blood sugar",
      "Regular kidney function tests",
      "Healthy diet low in salt and protein",
      "Limit phosphorus and potassium intake",
      "Avoid nephrotoxic substances",
    ],
    treatment: [
      "Medications for underlying conditions",
      "Diet modifications",
      "Regular monitoring of kidney function",
      "Exercise program",
      "Blood pressure control",
      "Manage cardiovascular risk factors",
    ],
    recommendations: [
      "Reduce salt intake",
      "Stay hydrated",
      "Regular exercise",
      "Stress management",
      "Maintain healthy weight",
      "Annual flu vaccination",
    ],
  },
  {
    name: "Stage 3",
    description: "Moderate CKD (GFR = 30-59 mL/min/1.73 m²)",
    symptoms: [
      "Fatigue",
      "Fluid retention",
      "Changes in urination",
      "Sleep problems",
      "Decreased appetite",
      "Mild anemia",
    ],
    precautions: [
      "Strict diet control",
      "Regular medication",
      "Monitor fluid intake",
      "Blood pressure control",
      "Avoid NSAIDs and other nephrotoxic drugs",
      "Regular monitoring of electrolytes",
    ],
    treatment: [
      "Dietary restrictions (low salt, low protein)",
      "Multiple medications",
      "Regular monitoring of kidney function",
      "Anemia management",
      "Treatment of metabolic acidosis",
      "Management of mineral and bone disorders",
    ],
    recommendations: [
      "Low sodium diet",
      "Limited protein intake",
      "Regular exercise as tolerated",
      "Avoid nephrotoxic substances",
      "Pneumococcal vaccination",
      "Bone density screening",
    ],
  },
  {
    name: "Stage 4",
    description: "Severe CKD (GFR = 15-29 mL/min/1.73 m²)",
    symptoms: [
      "Severe fatigue",
      "Nausea",
      "Vomiting",
      "Bone pain",
      "Difficulty concentrating",
      "Numbness or tingling in toes or fingers",
    ],
    precautions: [
      "Strict diet",
      "Fluid restrictions",
      "Regular monitoring of kidney function",
      "Medication adherence",
      "Careful management of blood pressure",
      "Avoid high-potassium foods",
    ],
    treatment: [
      "Specialized renal diet",
      "Multiple medications",
      "Prepare for renal replacement therapy",
      "Regular nephrology visits",
      "Erythropoiesis-stimulating agents for anemia",
      "Management of secondary hyperparathyroidism",
    ],
    recommendations: [
      "Very low sodium diet",
      "Limited fluid intake",
      "Careful medication management",
      "Dialysis preparation and education",
      "Consider transplant evaluation",
      "Advance care planning",
    ],
  },
  {
    name: "Stage 5",
    description: "Kidney Failure (GFR < 15 mL/min/1.73 m²)",
    symptoms: [
      "Extreme fatigue",
      "Difficulty breathing",
      "Heart problems",
      "Mental confusion",
      "Severe nausea and vomiting",
      "Metallic taste in mouth",
    ],
    precautions: [
      "Very strict diet",
      "Careful fluid management",
      "Infection prevention",
      "Emergency preparedness",
      "Close monitoring of electrolytes",
      "Avoid high-potassium and high-phosphorus foods",
    ],
    treatment: [
      "Dialysis (hemodialysis or peritoneal dialysis)",
      "Kidney transplant evaluation",
      "Complex medication regimen",
      "Regular hospital visits",
      "Management of complications (anemia, bone disease, cardiovascular disease)",
      "Nutritional support",
    ],
    recommendations: [
      "Follow dialysis schedule strictly",
      "Strict diet compliance",
      "Infection prevention measures",
      "Emergency contact plan",
      "Regular exercise as tolerated",
      "Psychological support",
    ],
  },
];

export default function CKDStages() {
  const [activeTab, setActiveTab] = useState("Stage 1");

  return (
    <div className="min-h-screen bg-green-50 py-8 px-4 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="mb-8 text-center">
          <p className="md:text-lg text-green-800 mb-4">
            Chronic Kidney Disease (CKD) is a progressive condition
            characterized by the gradual loss of kidney function over time. It
            affects the kidneys' ability to filter waste and excess fluids from
            the blood, potentially leading to complications affecting overall
            health. CKD is often associated with other conditions such as
            diabetes and hypertension.
          </p>
        </div>

        <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-center text-green-800 md:mb-8 mb-5">
          Stages of Chronic Kidney Disease
        </h1>

        <div className="w-full bg-green-100 p-1 rounded-lg flex flex-wrap">
          {stages.map((stage) => (
            <button
              key={stage.name}
              onClick={() => setActiveTab(stage.name)}
              className={`flex-1 py-2 px-4 rounded-md transition-colors min-w-[85px] ${
                activeTab === stage.name
                  ? "bg-[#0b9444] text-white"
                  : "text-green-700 hover:bg-green-200"
              }`}
            >
              {stage.name}
            </button>
          ))}
        </div>

        {stages.map(
          (stage) =>
            activeTab === stage.name && (
              <div key={stage.name} className="mt-8 md:pb-[100px] pb-[60px]">
                <h2 className="text-2xl font-semibold text-green-800 mb-10">
                  {stage.name}: {stage.description}
                </h2>
                <div className="relative">
                  {/* Background Kidney Image */}
                  <div
                    className="absolute inset-0 opacity-80 pointer-events-none"
                    style={{
                      backgroundImage: `url('../../public/images/kidney.png')`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "contain",
                    }}
                    aria-hidden="true"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-[180px] lg:gap-[120px] md:gap-[80px] gap-8 mt-6">
                    {/* Symptoms Card */}
                    <div className="bg-white/60 backdrop-blur rounded-lg shadow-md">
                      <div className="p-6">
                        <h3 className="md:text-2xl text-lg font-semibold text-green-700 mb-4">
                          Common Symptoms
                        </h3>
                        <ul className="space-y-2">
                          {stage.symptoms.map((symptom, index) => (
                            <li
                              key={index}
                              className="xl:text-[20px] md:text-[18px] text-gray-900 flex items-start"
                            >
                              <span className="mr-2">•</span>
                              {symptom}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Precautions Card */}
                    <div className="bg-white/60 backdrop-blur rounded-lg shadow-md">
                      <div className="p-6">
                        <h3 className="md:text-2xl text-lg font-semibold text-green-700 mb-4">
                          Precautions
                        </h3>
                        <ul className="space-y-2">
                          {stage.precautions.map((precaution, index) => (
                            <li
                              key={index}
                              className="xl:text-[20px] md:text-[18px] text-gray-900 flex items-start"
                            >
                              <span className="mr-2">•</span>
                              {precaution}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Treatment Card */}
                    <div className="bg-white/60 backdrop-blur rounded-lg shadow-md">
                      <div className="p-6">
                        <h3 className="md:text-2xl text-lg font-semibold text-green-700 mb-4">
                          Treatment
                        </h3>
                        <ul className="space-y-2">
                          {stage.treatment.map((treatment, index) => (
                            <li
                              key={index}
                              className="xl:text-[20px] md:text-[18px] text-gray-900 flex items-start"
                            >
                              <span className="mr-2">•</span>
                              {treatment}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Recommendations Card */}
                    <div className="bg-white/60 backdrop-blur rounded-lg shadow-md">
                      <div className="p-6">
                        <h3 className="md:text-2xl text-lg font-semibold text-green-700 mb-4">
                          Recommendations
                        </h3>
                        <ul className="space-y-2">
                          {stage.recommendations.map(
                            (recommendation, index) => (
                              <li
                                key={index}
                                className="xl:text-[20px] md:text-[18px] text-gray-900 flex items-start"
                              >
                                <span className="mr-2">•</span>
                                {recommendation}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}
