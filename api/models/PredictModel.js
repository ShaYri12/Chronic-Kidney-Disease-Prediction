import { spawn } from "child_process";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const predictDisease = (symptoms) => {
  return new Promise((resolve, reject) => {
    // Convert string values to appropriate types
    const inputData = [
      parseFloat(symptoms.age), // Convert to number
      parseFloat(symptoms.bp), // Convert to number
      parseFloat(symptoms.sg), // Convert to number
      symptoms.al, // String values remain unchanged
      symptoms.su, // String values remain unchanged
      symptoms.rbc, // String values remain unchanged
      symptoms.pc, // String values remain unchanged
      symptoms.pcc, // String values remain unchanged
      symptoms.ba, // String values remain unchanged
      parseFloat(symptoms.bgr), // Convert to number
      parseFloat(symptoms.bu), // Convert to number
      parseFloat(symptoms.sc), // Convert to number
      parseFloat(symptoms.sod), // Convert to number
      parseFloat(symptoms.pot), // Convert to number
      parseFloat(symptoms.hemo), // Convert to number
      parseFloat(symptoms.pcv), // Convert to number
      parseFloat(symptoms.wc), // Convert to number
      parseFloat(symptoms.rc), // Convert to number
      symptoms.htn, // String values remain unchanged
      symptoms.dm, // String values remain unchanged
      symptoms.cad, // String values remain unchanged
      symptoms.appet, // String values remain unchanged
      symptoms.pe, // String values remain unchanged
      symptoms.ane, // String values remain unchanged
    ];

    const pythonExecutable = "python"; // Replace with the path to your Python executable if needed
    const pythonScriptPath = path.join(__dirname, "../predictCKD.py");

    const pythonProcess = spawn(pythonExecutable, [
      pythonScriptPath,
      ...inputData, // Pass each value as a command-line argument
    ]);

    let output = "";

    pythonProcess.stdout.on("data", (data) => {
      output += data.toString();
    });

    pythonProcess.stderr.on("data", (data) => {
      console.error("Error executing Python script:", data.toString());
      reject(data.toString());
    });

    pythonProcess.on("close", (code) => {
      console.log("Python script exited with code:", code);
      if (code === 0) {
        resolve(output.trim());
      } else {
        reject(`Python script exited with code ${code}`);
      }
    });
  });
};

export default predictDisease;
