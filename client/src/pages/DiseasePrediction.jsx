import React, { useEffect, useState } from "react";
import "./disease-prediction.css";
import { Link, useNavigate } from "react-router-dom";
import LoginImg from "../../public/Images/newsletter.gif";
import signupImg from "../../public/Images/hero.gif";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import api from "../utils/api";

const ProgressBar = ({ currentStep, totalSteps }) => {
  const icons = [1, 2, 3, 4];

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
    ane: "", // Anemia
  });

  const [predictions, setPredictions] = useState(null);

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
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };

  const predictDisease = (e) => {
    e.preventDefault();

    api
      .post("/predict", config, {
        // Use the API instance
        symptoms,
      })
      .then((response) => {
        setPredictions(response.data.result); // Update state with predictions
        navigate("/prediction-result", {
          state: { predictions: response.data.result }, // Pass data to the next page
        });
        console.log(response.data.result); // Log predictions
      })
      .catch((error) => {
        alert("An Error Occurred"); // Show an error message to the user
        console.error("Error predicting disease:", error); // Log the error
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
              <form onSubmit={handleNextStep} className="space-y-4">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Age"
                  variant="outlined"
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={symptoms.age}
                  onChange={handleInputChange}
                  required
                />

                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Blood Pressure"
                  variant="outlined"
                  type="number"
                  name="bp"
                  placeholder="Blood Pressure"
                  value={symptoms.bp}
                  onChange={handleInputChange}
                  required
                />

                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Specific gravity of urine."
                  variant="outlined"
                  type="number"
                  name="sg"
                  placeholder="Specific gravity of urine."
                  value={symptoms.sg}
                  onChange={handleInputChange}
                  required
                />

                <FormControl fullWidth>
                  <InputLabel className="w-max" id="demo-simple-select-label">
                    Albumin content in urine.
                  </InputLabel>
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
                  <InputLabel id="demo-simple-select-label">
                    Sugar content in urine.
                  </InputLabel>
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
                  <InputLabel id="demo-simple-select-label">
                    Red Blood Cells
                  </InputLabel>
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
                <div className="d-flex gap-2 space-y-4 pb-3">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Pus Cell Count
                    </InputLabel>
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
                    <InputLabel id="demo-simple-select-label">
                      Pus Cell Clumps
                    </InputLabel>
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

                  <FormControl fullWidth style={{ marginBottom: "7px" }}>
                    <InputLabel id="demo-simple-select-label">
                      Bacteria present in urine.
                    </InputLabel>
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

                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Blood glucose random."
                    variant="outlined"
                    type="number"
                    name="bgr"
                    placeholder="Blood glucose random."
                    value={symptoms.bgr}
                    onChange={handleInputChange}
                    required
                  />

                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Blood urea."
                    variant="outlined"
                    type="number"
                    name="bu"
                    placeholder="Blood urea."
                    value={symptoms.bu}
                    onChange={handleInputChange}
                    required
                  />

                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Serum creatinine."
                    variant="outlined"
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
                <div className="d-flex gap-2 space-y-4 pb-3">
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Sodium content in serum."
                    variant="outlined"
                    type="number"
                    name="sod"
                    placeholder="Sodium content in serum."
                    value={symptoms.sod}
                    onChange={handleInputChange}
                    required
                  />

                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Potassium content in serum."
                    variant="outlined"
                    type="number"
                    name="pot"
                    placeholder="Potassium content in serum."
                    value={symptoms.pot}
                    onChange={handleInputChange}
                    required
                  />

                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Hemoglobin content."
                    variant="outlined"
                    type="number"
                    name="hemo"
                    placeholder="Hemoglobin content."
                    value={symptoms.hemo}
                    onChange={handleInputChange}
                    required
                  />

                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Packed cell volume."
                    variant="outlined"
                    type="number"
                    name="pcv"
                    placeholder="Packed cell volume."
                    value={symptoms.pcv}
                    onChange={handleInputChange}
                    required
                  />

                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="White blood cell count."
                    variant="outlined"
                    type="number"
                    name="wc"
                    placeholder="White blood cell count."
                    value={symptoms.wc}
                    onChange={handleInputChange}
                    required
                  />

                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Red blood cell count."
                    variant="outlined"
                    type="number"
                    name="rc"
                    placeholder="Red blood cell count."
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
            <div className={`form-step ${currentStep === 4 ? "active" : ""}`}>
              <form onSubmit={handleSubmit}>
                <div className="d-flex gap-2 space-y-4 pb-3">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Hypertension (yes/no).
                    </InputLabel>
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
                    <InputLabel id="demo-simple-select-label">
                      Diabetes Mellitus (yes/no).
                    </InputLabel>
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
                    <InputLabel id="demo-simple-select-label">
                      Coronary artery disease (yes/no).
                    </InputLabel>
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
                    <InputLabel id="demo-simple-select-label">
                      Appetite (Good/Poor).
                    </InputLabel>
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
                    <InputLabel id="demo-simple-select-label">
                      Pedal edema (yes/no).
                    </InputLabel>
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

                  <FormControl fullWidth style={{ marginBottom: "7px" }}>
                    <InputLabel id="demo-simple-select-label">
                      Anemia (yes/no).
                    </InputLabel>
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
                  <button type="submit" className="btn btn-next py-3 px-7 mt-1">
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
