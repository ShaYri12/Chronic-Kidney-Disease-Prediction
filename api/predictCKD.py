import joblib
import pandas as pd
import numpy as np
import os

# Directory with models
models_dir = './Trained_Models'

# Feature columns used during training
feature_columns = ['age', 'bp', 'sg', 'al', 'su', 'rbc', 'pc', 'pcc', 'ba', 'bgr', 'bu', 'sc', 'sod', 'pot',
                   'hemo', 'pcv', 'wc', 'rc', 'htn', 'dm', 'cad', 'appet', 'pe', 'ane']

def predict_ckd(input_data):
    # Convert input data to DataFrame
    input_df = pd.DataFrame([input_data], columns=feature_columns)

    predictions = []
    for model_file in os.listdir(models_dir):
        if model_file.endswith('.pkl'):
            # Load the model
            model = joblib.load(os.path.join(models_dir, model_file))
            algorithm_name = model_file.replace('_model.pkl', '').replace('_', ' ').title()

            # Ensure data types
            numeric_features = model.named_steps['preprocessor'].transformers_[0][2]
            categorical_features = model.named_steps['preprocessor'].transformers_[1][2]
            input_df[numeric_features] = input_df[numeric_features].astype(float)
            input_df[categorical_features] = input_df[categorical_features].astype(object)

            # Predict
            prediction = model.predict(input_df)[0]
            probabilities = model.predict_proba(input_df)[0]  # Probabilities for each class

            # Append the result to the array
            predictions.append({
                "algorithm": algorithm_name,
                "prediction": prediction,
                "probabilities": dict(zip(model.classes_, probabilities))
            })

    return predictions

# Example usage
input_sample = [48, 80, 1.02, 1.0, 0.0, 'normal', 'normal', 'notpresent', 'notpresent', 121.0, 36.0, 1.2, 137.53,
                4.63, 15.4, 44, 7800, 5.2, 'yes', 'no', 'no', 'good', 'no', 'no']
results = predict_ckd(input_sample)

# Output results
for result in results:
    print(f"\nAlgorithm: {result['algorithm']}")
    print(f"Prediction: {'Unfortunately, Chronic Kidney Disease' if result['prediction'] == 'ckd' else 'Great news! No Chronic Kidney Disease'}")
    print("Probabilities:")
    for label, prob in result['probabilities'].items():
        print(f"  {label}: {prob * 100:.2f}%")
