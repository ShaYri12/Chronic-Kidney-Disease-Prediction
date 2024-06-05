import React, { useEffect, useState } from "react";
import axios from "axios";
import "./disease-prediction.css";
import { Link, useNavigate } from "react-router-dom";
import LoginImg from "../../public/Images/newsletter.gif";
import signupImg from "../../public/Images/hero.gif";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ProgressBar = ({ currentStep, totalSteps }) => {
  const icons = [1,2,3,4];

  return (
    <div className="progress-bar">
      {icons.map((icon, index) => (
        <div key={index} className="progress-step">
          {/* Checkpoint circle with icon */}
          <div
            className={`progress-checkpoint ${
              currentStep >= index + 1 ? "active" : ""
            }`}
          >
            {icon}
          </div>

          {/* Connector line */}
          {index < totalSteps - 1 && (
            <div
              className={`progress-connector ${
                currentStep > index + 1 ? "completed" : ""
              }`}
            >
              {/* Connector Line */}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};


const DiseasePrediction = () => {
  useEffect(() => {
    window.scrollTo(0, -1);
  }, []);

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  const navigate = useNavigate();

  const [symptoms, setSymptoms] = useState({
    age: "",
    bp: "", // Blood Pressure
    sg: "", // Specific Gravity
    al: "", // Albumin
    su: "", // Sugar
    rbc: "", // Red Blood Cells
    pc: "", // Pus Cell
    pcc: "", // Pus Cell Clumps
    ba: "", // Bacteria
    bgr: "", // Blood Glucose Random
    bu: "", // Blood Urea
    sc: "", // Serum Creatinine
    sod: "", // Sodium
    pot: "", // Potassium
    hemo: "", // Hemoglobin
    pcv: "", // Packed Cell Volume
    wc: "", // White Blood Cell Count
    rc: "", // Red Blood Cell Count
    htn: "", // Hypertension
    dm: "", // Diabetes Mellitus
    cad: "", // Coronary Artery Disease
    appet: "", // Appetite
    pe: "", // Pedal Edema
    ane: "" // Anemia
  });

  const [prediction, setPrediction] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSymptoms({ ...symptoms, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    predictDisease(e);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit(e);
    }
  };

  const handlePreviousStep = (e) => {
    e.preventDefault();
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const toggleForm = () => {
    const container = document.querySelector(".container");
    container.classList.toggle("active");
  };

  const predictDisease = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/predict", {
        symptoms,
      })
      .then((response) => {
        setPrediction(response.data.result);
        navigate("/prediction-result", {
          state: { prediction: response.data.result },
        });
      })
      .catch((error) => {
        alert("An Error Occured");
        console.error("Error predicting disease:", error);
      });
  };

  return (
    <section className="login-section">
      <div className="container shadow-lg active">
        <div className="user signinBx">
          <div className="imgBx">
            <img className="img-fluid" src={LoginImg} alt="Sign In Image" />
          </div>
          <div className="formBx items-center justify-center">
            <form onSubmit={handleSignIn}>
              <h2>Subscribe NewsLetter</h2>
              <input type="email" placeholder="Email" required />
              <button type="submit" className="btn btn-login mt-2">
                Subscribe
              </button>
              <p className="signup">
                Wanna get the prediction?{" "}
                <Link to="#" onClick={toggleForm}>
                  Predict your Disease
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
        <div className="user signupBx">
          <div className="formBx flex flex-col">
            <h1 className="text-center font-bold text-3xl">
              Chronic Kidney Disease Prediction
            </h1>
            <h2 className="text-center pt-1">Answer the following Questions</h2>
            <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
            <div className={`form-step ${currentStep === 1 ? "active" : ""}`}>
              <form onSubmit={handleNextStep} className="space-y-3">

                <label htmlFor="age"> Age </label>
                <input
                  type="number"
                  name="age"
                  placeholder="Answer"
                  value={symptoms.age}
                  onChange={handleInputChange}
                  required
                />

                <label htmlFor="bp"> Blood Pressure </label>
                <input
                  type="number"
                  name="bp"
                  placeholder="Answer"
                  value={symptoms.bp}
                  onChange={handleInputChange}
                  required
                />

                <label htmlFor="sg"> Specific gravity of urine. </label>
                <input
                  type="number"
                  name="sg"
                  placeholder="Answer"
                  value={symptoms.sg}
                  onChange={handleInputChange}
                  required
                />

                <FormControl fullWidth >
                    <InputLabel className="w-max" id="demo-simple-select-label">Albumin content in urine.</InputLabel>
                    <Select 
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="al"
                      value={symptoms.al}
                      label="Albumin content in urine."
                      onChange={handleInputChange}
                      required
                    >
                      <MenuItem value="0">0</MenuItem>
                      <MenuItem value="1">1</MenuItem>
                      <MenuItem value="2">2</MenuItem>
                      <MenuItem value="3">3</MenuItem>
                      <MenuItem value="4">4</MenuItem>
                    </Select>
                  </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Sugar content in urine.</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="su"
                      value={symptoms.su}
                      label="Sugar content in urine."
                      onChange={handleInputChange}
                      required
                    >
                      <MenuItem value="0">0</MenuItem>
                      <MenuItem value="1">1</MenuItem>
                      <MenuItem value="2">2</MenuItem>
                      <MenuItem value="3">3</MenuItem>
                      <MenuItem value="4">4</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Red Blood Cells</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="rbc"
                      value={symptoms.rbc}
                      label="Red Blood Cells"
                      onChange={handleInputChange}
                      required
                    >
                      <MenuItem value="normal">Normal</MenuItem>
                      <MenuItem value="abnormal">Abnormal</MenuItem>
                    </Select>
                  </FormControl>

                <div className="flex justify-end">
                  <button type="submit" className="btn btn-next mt-1 py-3 px-7">
                    Next
                  </button>
                </div>
                <p className="signup">
                  Wanna hear from us?{" "}
                  <Link to="#" onClick={toggleForm}>
                    Newsletter
                  </Link>
                </p>
              </form>
            </div>
            <div className={`form-step ${currentStep === 2 ? "active" : ""}`}>
              <form onSubmit={handleNextStep}>
                <div className="d-flex gap-2 space-y-3">

                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Pus Cell Count</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="pc"
                      value={symptoms.pc}
                      label="Pus Cell Count"
                      onChange={handleInputChange}
                      required
                    >
                      <MenuItem value="normal">Normal</MenuItem>
                      <MenuItem value="abnormal">Abnormal</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Pus Cell Clumps</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="pcc"
                      value={symptoms.pcc}
                      label="Pus Cell Clumps"
                      onChange={handleInputChange}
                      required
                    >
                      <MenuItem value="notpresent">Not Present</MenuItem>
                      <MenuItem value="present">Present</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl fullWidth style={{marginBottom:"7px"}}>
                    <InputLabel id="demo-simple-select-label">Bacteria present in urine.</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="ba"
                      value={symptoms.ba}
                      label="Bacteria present in urine."
                      onChange={handleInputChange}
                      required
                    >
                      <MenuItem value="notpresent">Not Present</MenuItem>
                      <MenuItem value="present">Present</MenuItem>
                    </Select>
                  </FormControl>

                  <label htmlFor="bgr"> Blood glucose random. </label>
                  <input
                    type="number"
                    name="bgr"
                    placeholder="Answer"
                    value={symptoms.bgr}
                    onChange={handleInputChange}
                    required
                  />

                  <label htmlFor="bu"> Blood urea. </label>
                  <input
                    type="number"
                    name="bu"
                    placeholder="Answer"
                    value={symptoms.bu}
                    onChange={handleInputChange}
                    required
                  />

                  <label htmlFor="sc"> Serum creatinine. </label>
                  <input
                    type="number"
                    name="sc"
                    placeholder="Answer"
                    value={symptoms.sc}
                    onChange={handleInputChange}
                    required
                  />

                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    className="btn btn-back py-3 px-7 mt-1"
                    onClick={handlePreviousStep}
                  >
                    Back
                  </button>
                  <button type="submit" className="btn btn-next py-3 px-7 mt-1">
                    Next
                  </button>
                </div>
              </form>
            </div>
            <div className={`form-step ${currentStep === 3 ? "active" : ""}`}>
              <form onSubmit={handleNextStep}>
                <div className="d-flex gap-2">

                  <label htmlFor="sod"> Sodium content in serum. </label>
                  <input
                    type="number"
                    name="sod"
                    placeholder="Answer"
                    value={symptoms.sod}
                    onChange={handleInputChange}
                    required
                  />

                  <label htmlFor="pot"> Potassium content in serum. </label>
                  <input
                    type="number"
                    name="pot"
                    placeholder="Answer"
                    value={symptoms.pot}
                    onChange={handleInputChange}
                    required
                  />

                  <label htmlFor="hemo"> Hemoglobin content. </label>
                  <input
                    type="number"
                    name="hemo"
                    placeholder="Answer"
                    value={symptoms.hemo}
                    onChange={handleInputChange}
                    required
                  />

                  <label htmlFor="pcv"> Packed cell volume. </label>
                  <input
                    type="number"
                    name="pcv"
                    placeholder="Answer"
                    value={symptoms.pcv}
                    onChange={handleInputChange}
                    required
                  />

                  <label htmlFor="wc"> White blood cell count. </label>
                  <input
                    type="number"
                    name="wc"
                    placeholder="Answer"
                    value={symptoms.wc}
                    onChange={handleInputChange}
                    required
                  />

                  <label htmlFor="rc"> Red blood cell count. </label>
                  <input
                    type="number"
                    name="rc"
                    placeholder="Answer"
                    value={symptoms.rc}
                    onChange={handleInputChange}
                    required
                  />
                  
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    className="btn btn-back py-3 px-7 mt-1"
                    onClick={handlePreviousStep}
                  >
                    Back
                  </button>
                  <button type="submit" className="btn btn-next py-3 px-7 mt-1">
                    Next
                  </button>
                </div>
              </form>
            </div>
            <div
              className={`form-step overflow-y-auto ${
                currentStep === 4 ? "active" : ""
              }`}
            >
              <form
                onSubmit={handleSubmit}
                className="h-100 d-flex flex-column overflow-y-auto items-center justify-center"
              >
                <div className="d-flex gap-2 space-y-3">

                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Hypertension (yes/no).</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="htn"
                      value={symptoms.htn}
                      label="Hypertension (yes/no)."
                      onChange={handleInputChange}
                      required
                    >
                      <MenuItem value="no">No</MenuItem>
                      <MenuItem value="yes">Yes</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Diabetes Mellitus (yes/no).</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="dm"
                      value={symptoms.dm}
                      label="Diabetes Mellitus (yes/no)."
                      onChange={handleInputChange}
                      required
                    >
                      <MenuItem value="no">No</MenuItem>
                      <MenuItem value="yes">Yes</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Coronary artery disease (yes/no).</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="cad"
                      value={symptoms.cad}
                      label="Coronary artery disease (yes/no)."
                      onChange={handleInputChange}
                      required
                    >
                      <MenuItem value="no">No</MenuItem>
                      <MenuItem value="yes">Yes</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Appetite (Good/Poor).</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="appet"
                      value={symptoms.appet}
                      label="Appetite (Good/Poor)."
                      onChange={handleInputChange}
                      required
                    >
                      <MenuItem value="good">Good</MenuItem>
                      <MenuItem value="poor">Poor</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Pedal edema (yes/no).</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="pe"
                      value={symptoms.pe}
                      label="Pedal edema (yes/no)."
                      onChange={handleInputChange}
                      required
                    >
                      <MenuItem value="no">No</MenuItem>
                      <MenuItem value="yes">Yes</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl fullWidth style={{marginBottom:"7px"}}>
                    <InputLabel id="demo-simple-select-label">Anemia (yes/no).</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="ane"
                      value={symptoms.ane}
                      label="Anemia (yes/no)."
                      onChange={handleInputChange}
                      required
                    >
                      <MenuItem value="no">No</MenuItem>
                      <MenuItem value="yes">Yes</MenuItem>
                    </Select>
                  </FormControl>
                  

                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    className="btn btn-back py-3 px-7 mt-1"
                    onClick={handlePreviousStep}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="btn btn-submit py-3 px-7 mt-1"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="imgBx d-flex align-items-center justify-content-center mx-auto">
            <img className="img-fluid" src={signupImg} alt="Sign Up Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiseasePrediction;
