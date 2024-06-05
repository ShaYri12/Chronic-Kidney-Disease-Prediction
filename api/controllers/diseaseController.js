import predictDisease from '../models/PredictModel.js'

// Create a new endpoint for prediction
export const prediction = async (req, res) => {
    const { symptoms } = req.body;
    console.log("Symptoms received:", symptoms);
    
    try {
        // Call the predictDisease function with the symptoms data
        const prediction = await predictDisease(symptoms);
        console.log("Prediction:", prediction);
        
        // Send the prediction result back to the frontend
        res.json({ 
            "success": true,
            "result": prediction
        });
    } catch (error) {
        // Handle any errors that occur during prediction
        res.status(500).json({ error: error.message });
    }
}
