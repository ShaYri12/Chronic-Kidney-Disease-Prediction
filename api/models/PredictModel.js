import { spawn } from 'child_process';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const predictDisease = (symptoms) => {
  // Convert the symptoms object to a JSON string
  const symptomsJSON = JSON.stringify(symptoms);

  return new Promise((resolve, reject) => {
    const pythonExecutable = 'python'; // Replace with the path to your Python executable if needed
    const pythonScriptPath = path.join(__dirname, '../predictCKD.py');

    const pythonProcess = spawn(pythonExecutable, [
      pythonScriptPath,
      symptomsJSON, // Pass the symptoms JSON string directly
    ]);

    let output = '';

    pythonProcess.stdout.on('data', (data) => {
      output += data.toString();
    });

    pythonProcess.stderr.on('data', (data) => {
      console.error('Error executing Python script:', data.toString());
      reject(data.toString());
    });

    pythonProcess.on('close', (code) => {
      console.log('Python script exited with code:', code);
      if (code === 0) {
        resolve(output.trim());
      } else {
        reject(`Python script exited with code ${code}`);
      }
    });
  });
};

export default predictDisease;
