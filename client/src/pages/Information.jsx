import React, { useState } from "react";
import asthma from "../../public/Images/asthma.png";
import heart from "../../public/Images/heart.png";
import diabetes from "../../public/Images/diabetes.png";
import Blood from "../../public/Images/blood-cancer1.png";
import brain from "../../public/Images/Brain_Cancer2.png";

const Information = () => {
  const [active, setActive] = useState("heart");

  const handleActive = (item) => {
    setActive(item);
  };
  return (
    <div className="bg-[#0b9444] min-h-screen">
      <div className="flex flex-col items-center justify-center py-4">
        <div className="flex justify-between border-[1px]  bg-white/50 shadow-md border-[#19492d] rounded-lg backdrop-blur-md  backdrop-filter">
          <button
            onClick={() => handleActive("heart")}
            className={
              active === "heart"
                ? "bg-gradient-to-r font-semibold from-[#89c43f] to-[#bbc43f] py-3 px-10 text-white rounded-lg shadow-md"
                : "py-3 px-10  rounded-lg "
            }
          >
            Heart Disease
          </button>
          <button
            onClick={() => handleActive("diabetes")}
            className={
              active === "diabetes"
                ? "bg-gradient-to-r font-semibold from-[#89c43f] to-[#bbc43f] py-3 px-10 text-white rounded-lg shadow-md"
                : "py-3 px-10  rounded-lg "
            }
          >
            Diabetes
          </button>
          <button
            onClick={() => handleActive("brain")}
            className={
              active === "brain"
                ? "bg-gradient-to-r font-semibold from-[#89c43f] to-[#bbc43f] py-3 px-10 text-white rounded-lg shadow-md"
                : "py-3 px-10  rounded-lg "
            }
          >
            Brain Tumor
          </button>
          <button
            onClick={() => handleActive("blood")}
            className={
              active === "blood"
                ? "bg-gradient-to-r font-semibold from-[#89c43f] to-[#bbc43f] py-3 px-10 text-white rounded-lg shadow-md"
                : "py-3 px-10  rounded-lg "
            }
          >
            Blood Cancer
          </button>

          <button
            onClick={() => handleActive("asthma")}
            className={
              active === "asthma"
                ? "bg-gradient-to-r font-semibold from-[#89c43f] to-[#bbc43f] py-3 px-10 text-white rounded-lg shadow-md"
                : "py-3 px-10  rounded-lg "
            }
          >
            Asthma
          </button>
        </div>
        {active === "asthma" && (
          <div className="py-20 px-[8%] relative">
            <div
              className="absolute h-[100%] inset-0 bg-cover w-[50%] bg-center"
              style={{
                backgroundImage: `url(${asthma})`,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            ></div>
            <div className="grid grid-cols-2 gap-20">
              <div>
                <div className="border-[1px] max-w-[90%] py-5 px-8 bg-white/50 opacity-50  hover:opacity-100 duration-150 shadow-md   border-[#19492d] rounded-lg backdrop-blur-md  backdrop-filter">
                  <h2 className="font-semibold text-lg py-3">
                    Common Symptoms
                  </h2>
                  <ul>
                    <li>* Shortness of breath.</li>
                    <li>* Chest tightness or pain.</li>
                    <li>
                      * Wheezing when exhaling (especially common in children).
                    </li>
                    <li>
                      * Trouble sleeping caused by shortness of breath,
                      coughing, or wheezing.
                    </li>
                    <li>
                      * Coughing or wheezing attacks that are worsened by a
                      respiratory virus, such as a cold or the flu.
                    </li>
                  </ul>
                </div>
                <div className="border-[1px] max-w-[90%] my-4 py-5 px-8 bg-white/50 opacity-50 hover:opacity-100 duration-150 shadow-md   border-[#19492d] rounded-lg backdrop-blur-md  backdrop-filter">
                  <h2 className="font-semibold text-lg py-3">
                    Specific Triggers
                  </h2>
                  <ul>
                    <li>* Physical activity (exercise-induced asthma).</li>
                    <li>
                      * Occupational triggers (e.g., workplace irritants).
                    </li>
                    <li>
                      * Allergy-induced asthma (e.g., pollen, mold, dust mites,
                      pet dander).
                    </li>
                  </ul>
                </div>
              </div>
              <div className="">
                <div className="border-[1px] ml-[10%]  max-w-[90%] py-5 px-8 bg-white/50 opacity-50 hover:opacity-100 duration-150 shadow-md   border-[#19492d] rounded-lg backdrop-blur-md  backdrop-filter">
                  <h2 className="font-semibold text-lg py-3">
                    Disease Information
                  </h2>
                  <p>
                    Asthma is a chronic respiratory condition characterized by
                    airway inflammation and narrowing, leading to difficulty
                    breathing, coughing, wheezing, and shortness of breath. It
                    can be triggered by allergens, exercise, cold air, and
                    respiratory infections.
                  </p>
                </div>
                <div className="border-[1px] ml-[10%] max-w-[90%] my-4 py-5 px-8 bg-white/50 opacity-50 hover:opacity-100 duration-150 shadow-md   border-[#19492d] rounded-lg backdrop-blur-md  backdrop-filter">
                  <h2 className="font-semibold text-lg py-3">
                    Medical Resources
                  </h2>
                  <ul>
                    <li>
                      * Asthma and Allergy Foundation of America:
                      <a
                        href="https://www.aafa.org"
                        className="text-blue-900 font-semibold"
                        target="_blank"
                      >
                        {" "}
                        aafa.org
                      </a>
                    </li>
                    <li>
                      * Centers for Disease Control and Prevention (CDC) -
                      Asthma:
                      <a
                        href="https://www.cdc.gov/asthma"
                        className="text-blue-900 font-semibold"
                        target="_blank"
                      >
                        {" "}
                        cdc.gov/asthma
                      </a>
                    </li>
                    <li>
                      * American Lung Association:
                      <a
                        href="https://www.lung.org"
                        className="text-blue-900 font-semibold"
                        target="_blank"
                      >
                        {" "}
                        lung.org
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        {active === "heart" && (
          <div className="py-20 px-[8%] relative">
            <div
              className="absolute md:w-[100%] h-[70%] inset-0 bg-cover md:w-[55%] w-[80%] bg-center"
              style={{
                backgroundImage: `url(${heart})`,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            ></div>
            <div className="grid grid-cols-2 gap-20">
              <div>
                <div className="border-[1px] max-w-[90%] py-5 px-8 bg-white/50 opacity-50  hover:opacity-100 duration-150 shadow-md   border-[#19492d] rounded-lg backdrop-blur-md  backdrop-filter">
                  <h2 className="font-semibold text-lg py-3">
                    Common Symptoms
                  </h2>
                  <ul>
                    <li>* Chest pain or discomfort (angina).</li>
                    <li>* Shortness of breath.</li>
                    <li>* Racing heartbeat (tachycardia).</li>
                    <li>* Slow heartbeat (bradycardia).</li>
                    <li>* Lightheadedness, dizziness, or fainting.</li>
                    <li>* Swelling in the legs, ankles, and feet (edema).</li>
                    <li>
                      * Pain in the neck, jaw, throat, upper abdomen, or back.
                    </li>
                    <li>* Fluttering in your chest.</li>
                  </ul>
                </div>
                <div className="border-[1px] max-w-[90%] my-4 py-5 px-8 bg-white/50 opacity-50 hover:opacity-100 duration-150 shadow-md   border-[#19492d] rounded-lg backdrop-blur-md  backdrop-filter">
                  <h2 className="font-semibold text-lg py-3">
                    Specific Triggers
                  </h2>
                  <ul>
                    <li>
                      * Coronary artery disease: Chest pain (angina), shortness
                      of breath.
                    </li>
                    <li>
                      * Heart attack: Chest pain, pain in other areas of the
                      upper body, shortness of breath, cold sweat, nausea,
                      lightheadedness.
                    </li>
                    <li>
                      * Heart failure: Shortness of breath (especially when
                      lying down), fatigue, weakness, swelling in legs, ankles,
                      and feet, rapid or irregular heartbeat, reduced ability to
                      exercise, persistent cough or wheezing.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="">
                <div className="border-[1px] ml-[10%]  max-w-[90%] py-5 px-8 bg-white/50 opacity-50 hover:opacity-100 duration-150 shadow-md   border-[#19492d] rounded-lg backdrop-blur-md  backdrop-filter">
                  <h2 className="font-semibold text-lg py-3">
                    Disease Information
                  </h2>
                  <p>
                    Heart disease encompasses a range of conditions affecting
                    the heart, including coronary artery disease, heart rhythm
                    problems (arrhythmias), congenital heart defects, heart
                    infections, and more. It is the leading cause of death
                    worldwide.
                  </p>
                </div>
                <div className="border-[1px] ml-[10%] max-w-[90%] my-4 py-5 px-8 bg-white/50 opacity-50 hover:opacity-100 duration-150 shadow-md   border-[#19492d] rounded-lg backdrop-blur-md  backdrop-filter">
                  <h2 className="font-semibold text-lg py-3">
                    Medical Resources
                  </h2>
                  <ul>
                    <li>
                      * American Heart Association:
                      <a
                        href="https://www.heart.org"
                        className="text-blue-900 font-semibold"
                        target="_blank"
                      >
                        {" "}
                        heart.org
                      </a>
                    </li>
                    <li>
                      * Centers for Disease Control and Prevention (CDC) - Heart
                      Disease:
                      <a
                        href="https://www.cdc.gov/heartdisease"
                        className="text-blue-900 font-semibold"
                        target="_blank"
                      >
                        {" "}
                        cdc.gov/heartdisease
                      </a>
                    </li>
                    <li>
                      * Mayo Clinic - Heart Disease:
                      <a
                        href="https://www.mayoclinic.org"
                        className="text-blue-900 font-semibold"
                        target="_blank"
                      >
                        {" "}
                        mayoclinic.org
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        {active === "diabetes" && (
          <div className="py-20 px-[8%] relative">
            <div
              className="absolute h-[100%] inset-0 bg-cover w-[100%] bg-center"
              style={{
                backgroundImage: `url(${diabetes})`,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            ></div>
            <div className="grid grid-cols-2 gap-20">
              <div>
                <div className="border-[1px] max-w-[90%] py-5 px-8 bg-white/50 opacity-50  hover:opacity-100 duration-150 shadow-md   border-[#19492d] rounded-lg backdrop-blur-md  backdrop-filter">
                  <h2 className="font-semibold text-lg py-3">
                    Common Symptoms
                  </h2>
                  <ul>
                    <li>* Increased thirst.</li>
                    <li>* Frequent urination.</li>
                    <li>* Extreme hunger.</li>
                    <li>* Unexplained weight loss.</li>
                    <li>* Irritability.</li>
                    <li>* Blurred vision.</li>
                    <li>* Slow-healing sores.</li>
                    <li>* Fatigue.</li>
                    <li>
                      * Frequent infections (such as gums, skin, and vaginal
                      infections).
                    </li>
                    <li>
                      * Presence of ketones in the urine (a result of muscle and
                      fat breakdown).
                    </li>
                  </ul>
                </div>
                <div className="border-[1px] max-w-[90%] my-4 py-5 px-8 bg-white/50 opacity-50 hover:opacity-100 duration-150 shadow-md   border-[#19492d] rounded-lg backdrop-blur-md  backdrop-filter">
                  <h2 className="font-semibold text-lg py-3">
                    Specific Triggers
                  </h2>
                  <ul>
                    <li>
                      * Type 1 Diabetes: Sudden onset of severe symptoms like
                      weight loss, fatigue, frequent urination, extreme hunger,
                      and increased thirst.
                    </li>
                    <li>
                      * Type 2 Diabetes: Gradual onset of symptoms like
                      increased thirst, frequent urination, hunger, fatigue, and
                      blurred vision.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="">
                <div className="border-[1px] ml-[10%]  max-w-[90%] py-5 px-8 bg-white/50 opacity-50 hover:opacity-100 duration-150 shadow-md   border-[#19492d] rounded-lg backdrop-blur-md  backdrop-filter">
                  <h2 className="font-semibold text-lg py-3">
                    Disease Information
                  </h2>
                  <p>
                    Diabetes is a chronic disease that occurs when the body
                    cannot effectively use the insulin it produces or does not
                    produce enough insulin. This leads to elevated blood glucose
                    levels. The main types are Type 1, Type 2, and gestational
                    diabetes.
                  </p>
                </div>
                <div className="border-[1px] ml-[10%] max-w-[90%] my-4 py-5 px-8 bg-white/50 opacity-50 hover:opacity-100 duration-150 shadow-md   border-[#19492d] rounded-lg backdrop-blur-md  backdrop-filter">
                  <h2 className="font-semibold text-lg py-3">
                    Medical Resources
                  </h2>
                  <ul>
                    <li>
                      * American Diabetes Association:
                      <a
                        href="https://www.diabetes.org"
                        className="text-blue-900 font-semibold"
                        target="_blank"
                      >
                        {" "}
                        diabetes.org
                      </a>
                    </li>
                    <li>
                      * Centers for Disease Control and Prevention (CDC) -
                      Diabetes:
                      <a
                        href="https://www.cdc.gov/diabetes"
                        className="text-blue-900 font-semibold"
                        target="_blank"
                      >
                        {" "}
                        cdc.gov/diabetes
                      </a>
                    </li>
                    <li>
                      * International Diabetes Federation:
                      <a
                        href="https://www.idf.org"
                        className="text-blue-900 font-semibold"
                        target="_blank"
                      >
                        {" "}
                        idf.org
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        {active === "blood" && (
          <div className="py-20 px-[8%] relative">
            <div
              className="absolute h-[100%] inset-0 bg-cover w-[50%] bg-center"
              style={{
                backgroundImage: `url(${Blood})`,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            ></div>
            <div className="grid grid-cols-2 gap-20">
              <div>
                <div className="border-[1px] max-w-[90%] py-5 px-8 bg-white/50 opacity-50  hover:opacity-100 duration-150 shadow-md   border-[#19492d] rounded-lg backdrop-blur-md  backdrop-filter">
                  <h2 className="font-semibold text-lg py-3">
                    Common Symptoms
                  </h2>
                  <ul>
                    <li>* Fever or chills.</li>
                    <li>* Persistent fatigue and weakness.</li>
                    <li>* Frequent or severe infections.</li>
                    <li>* Swollen lymph nodes, enlarged liver or spleen.</li>
                    <li>* Easy bleeding or bruising.</li>
                    <li>* Recurrent nosebleeds.</li>
                    <li>* Tiny red spots in your skin (petechiae).</li>
                    <li>* Excessive sweating, especially at night.</li>
                    <li>* Bone pain or tenderness.</li>
                  </ul>
                </div>
                {/* <div className="border-[1px] max-w-[90%] my-4 py-5 px-8 bg-white/50 opacity-50 hover:opacity-100 duration-150 shadow-md   border-[#19492d] rounded-lg backdrop-blur-md  backdrop-filter">
                  <h2 className="font-semibold text-lg py-3">
                    Specific Triggers
                  </h2>
                  <ul>
                    <li>* Physical activity (exercise-induced asthma).</li>
                    <li>
                      * Occupational triggers (e.g., workplace irritants).
                    </li>
                    <li>
                      * Allergy-induced asthma (e.g., pollen, mold, dust mites,
                      pet dander).
                    </li>
                  </ul>
                </div> */}
              </div>
              <div className="">
                <div className="border-[1px] ml-[10%]  max-w-[90%] py-5 px-8 bg-white/50 opacity-50 hover:opacity-100 duration-150 shadow-md   border-[#19492d] rounded-lg backdrop-blur-md  backdrop-filter">
                  <h2 className="font-semibold text-lg py-3">
                    Disease Information
                  </h2>
                  <p>
                    Blood cancers affect the production and function of blood
                    cells. The main types are leukemia, lymphoma, and myeloma.
                    These cancers typically start in the bone marrow, lymph
                    nodes, or plasma cells.
                  </p>
                </div>
                <div className="border-[1px] ml-[10%] max-w-[90%] my-4 py-5 px-8 bg-white/50 opacity-50 hover:opacity-100 duration-150 shadow-md   border-[#19492d] rounded-lg backdrop-blur-md  backdrop-filter">
                  <h2 className="font-semibold text-lg py-3">
                    Medical Resources
                  </h2>
                  <ul>
                    <li>
                      * Leukemia & Lymphoma Society:
                      <a
                        href="https://www.lls.org"
                        className="text-blue-900 font-semibold"
                        target="_blank"
                      >
                        {" "}
                        lls.org
                      </a>
                    </li>
                    <li>
                      * American Cancer Society - Leukemia:
                      <a
                        href="https://www.cancer.org/leukemia"
                        className="text-blue-900 font-semibold"
                        target="_blank"
                      >
                        {" "}
                        cancer.org/leukemia
                      </a>
                    </li>
                    <li>
                      * Mayo Clinic - Multiple Myeloma:
                      <a
                        href="https://www.mayoclinic.org"
                        className="text-blue-900 font-semibold"
                        target="_blank"
                      >
                        {" "}
                        mayoclinic.org
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        {active === "brain" && (
          <div className="py-20 px-[8%] relative">
          <div
          className="absolute lg:h-[70%] md:h-[60%] inset-0 bg-cover lg:w-[70%] w-[90%] bg-center"
          style={{
              backgroundImage: `url(${brain})`,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
          }}
      ></div>
      
            <div className="grid grid-cols-2 gap-20">
              <div>
                <div className="border-[1px] max-w-[90%] py-5 px-8 bg-white/50 opacity-50  hover:opacity-100 duration-150 shadow-md   border-[#19492d] rounded-lg backdrop-blur-md  backdrop-filter">
                  <h2 className="font-semibold text-lg py-3">
                    Common Symptoms
                  </h2>
                  <ul>
                    <li>
                      * New or changing headaches (often worse in the morning or
                      when lying down).
                    </li>
                    <li>* Seizures.</li>
                    <li>
                      * Gradual loss of sensation or movement in an arm or a
                      leg.
                    </li>
                    <li>* Difficulty with balance.</li>
                    <li>* Speech difficulties.</li>
                    <li>* Confusion in everyday matters.</li>
                    <li>* Personality or behavior changes.</li>
                    <li>* Hearing problems.</li>
                    <li>
                      * Vision problems (blurred vision, double vision, or loss
                      of peripheral vision).
                    </li>
                    <li>* Nausea or vomiting.</li>
                    <li>* Drowsiness or fatigue.</li>
                    <li>* Memory problems.</li>
                  </ul>
                </div>
                <div className="border-[1px] max-w-[90%] my-4 py-5 px-8 bg-white/50 opacity-50 hover:opacity-100 duration-150 shadow-md   border-[#19492d] rounded-lg backdrop-blur-md  backdrop-filter">
                  <h2 className="font-semibold text-lg py-3">
                    Specific Triggers
                  </h2>
                  <ul>
                    <li>* Physical activity (exercise-induced asthma).</li>
                    <li>
                      * Occupational triggers (e.g., workplace irritants).
                    </li>
                    <li>
                      * Allergy-induced asthma (e.g., pollen, mold, dust mites,
                      pet dander).
                    </li>
                  </ul>
                </div>
              </div>
              <div className="">
                <div className="border-[1px] ml-[10%]  max-w-[90%] py-5 px-8 bg-white/50 opacity-50 hover:opacity-100 duration-150 shadow-md   border-[#19492d] rounded-lg backdrop-blur-md  backdrop-filter">
                  <h2 className="font-semibold text-lg py-3">
                    Disease Information
                  </h2>
                  <p>
                    A brain tumor is an abnormal growth of cells within the
                    brain or central spinal cord. Tumors can be benign
                    (non-cancerous) or malignant (cancerous). They can cause
                    various neurological symptoms depending on their size and
                    location.
                  </p>
                </div>
                <div className="border-[1px] ml-[10%] max-w-[90%] my-4 py-5 px-8 bg-white/50 opacity-50 hover:opacity-100 duration-150 shadow-md   border-[#19492d] rounded-lg backdrop-blur-md  backdrop-filter">
                  <h2 className="font-semibold text-lg py-3">
                    Medical Resources
                  </h2>
                  <ul>
                    <li>
                      * American Brain Tumor Association:
                      <a
                        href="https://www.abta.org"
                        className="text-blue-900 font-semibold"
                        target="_blank"
                      >
                        {" "}
                        abta.org
                      </a>
                    </li>
                    <li>
                      * National Brain Tumor Society:
                      <a
                        href="https://www.braintumor.org/"
                        className="text-blue-900 font-semibold"
                        target="_blank"
                      >
                        {" "}
                        braintumor.org/
                      </a>
                    </li>
                    <li>
                      * Mayo Clinic - Brain Tumor:
                      <a
                        href="https://www.mayoclinic.org"
                        className="text-blue-900 font-semibold"
                        target="_blank"
                      >
                        {" "}
                        mayoclinic.org
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Information;
