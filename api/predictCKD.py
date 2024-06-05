import sys
import numpy as np
import joblib
import warnings
import pandas as pd

# Suppress UserWarning from scikit-learn
warnings.filterwarnings("ignore", category=UserWarning)

# Load the trained model
model = joblib.load('./Trained_Models/ckd_model.pkl')

# Define the feature columns used in the training script
feature_columns = ['age', 'bp', 'sg', 'al', 'su', 'rbc', 'pc', 'pcc', 'ba', 'bgr', 'bu', 'sc', 'sod', 'pot', 'hemo', 'pcv', 'wc', 'rc', 'htn', 'dm', 'cad', 'appet', 'pe', 'ane']

def predict_ckd(input_data):
    # Convert the input data to a pandas DataFrame
    input_df = pd.DataFrame([input_data], columns=feature_columns)
    
    # Ensure the data types match the training data
    numeric_features = model.named_steps['preprocessor'].transformers_[0][2]
    categorical_features = model.named_steps['preprocessor'].transformers_[1][2]

    for col in numeric_features:
        input_df[col] = input_df[col].astype(float)
    for col in categorical_features:
        input_df[col] = input_df[col].astype(object)
    
    # Make predictions for the input data
    prediction = model.predict(input_df)
    probability = model.predict_proba(input_df)
    
    # Get the probability of CKD (assuming 'ckd' is the positive class)
    index_of_ckd_class = list(model.classes_).index('ckd')
    probability_ckd = probability[0][index_of_ckd_class] * 100
    
    # Return the prediction and probability
    return prediction[0], probability_ckd

if __name__ == "__main__":
    # Check if the input data is provided as a command-line argument
    if len(sys.argv) != 2:
        print("Usage: python model.py '[80.0,1.02,1.0,0.0,1.0,36.0,1.2,137.53,4.63,15.4,7800.0,5.2,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0]'")
        sys.exit(1)
    
    # Parse the input data from the command-line argument
    try:
        input_data = eval(sys.argv[1])
    except:
        print("Error: Invalid input data. Please provide the input data as a list.")
        sys.exit(1)
    
    # Verify that the input data has the correct number of features
    if len(input_data) != len(feature_columns):
        print(f"Error: Expected {len(feature_columns)} features, but got {len(input_data)}.")
        sys.exit(1)
    
    # Call the function to predict CKD
    prediction, probability_ckd = predict_ckd(input_data)
    
    # Print the prediction result
    if prediction == 'ckd':
        print("Prediction: The patient is predicted to have chronic kidney disease.")
    else:
        print("Prediction: The patient is predicted not to have chronic kidney disease.")
    
    # Print the probability result
    print(f"Probability of Chronic Kidney Disease: {probability_ckd:.2f}%")
