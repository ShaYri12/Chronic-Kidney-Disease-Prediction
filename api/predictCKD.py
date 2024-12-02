import joblib
import pandas as pd
import os
import sys

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

def main():
    # Check if enough arguments are provided
    if len(sys.argv) != len(feature_columns) + 1:
        print(f"Usage: {sys.argv[0]} {' '.join(feature_columns)}")
        sys.exit(1)

    # Convert the command-line arguments to input data
    input_data = sys.argv[1:]

    # Map categorical values to their appropriate types
    input_data[5:9] = [str(x).lower() for x in input_data[5:9]]  # `rbc`, `pc`, `pcc`, `ba` are categorical
    input_data[17:23] = [str(x).lower() for x in input_data[17:23]]  # `htn`, `dm`, `cad`, `appet`, `pe`, `ane` are categorical
    
    # Convert numeric inputs to appropriate data types
    input_data = [float(x) if x.replace('.', '', 1).isdigit() else x for x in input_data]

    # Call the function to predict CKD using all models
    results = predict_ckd(input_data)

    # Output results
    for result in results:
        print(f"\nAlgorithm: {result['algorithm']}")
        print(f"Prediction: {'Unfortunately, Chronic Kidney Disease' if result['prediction'] == 'ckd' else 'Great news! No Chronic Kidney Disease'}")
        print("Probabilities:")
        for label, prob in result['probabilities'].items():
            print(f"  {label}: {prob * 100:.2f}%")

if __name__ == "__main__":
    main()
