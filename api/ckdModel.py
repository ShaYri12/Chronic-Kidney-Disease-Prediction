import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.pipeline import Pipeline
from sklearn.impute import KNNImputer, SimpleImputer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.svm import SVC
from sklearn.metrics import classification_report, confusion_matrix
import joblib

# Load and preprocess the dataset
data = pd.read_csv('chronic_kidney_disease.csv')
data['classification'] = data['classification'].replace('ckd\t', 'ckd')
data.replace(to_replace=['\t?', '?'], value=np.nan, inplace=True)

# Convert columns to appropriate data types
numeric_features = ['age', 'bp', 'sg', 'al', 'su', 'bgr', 'bu', 'sc', 'sod', 'pot', 'hemo', 'pcv', 'wc', 'rc']
categorical_features = ['rbc', 'pc', 'pcc', 'ba', 'htn', 'dm', 'cad', 'appet', 'pe', 'ane']

for col in numeric_features:
    data[col] = pd.to_numeric(data[col], errors='coerce')

for col in categorical_features:
    data[col] = data[col].astype('category')

feature_columns = numeric_features + categorical_features
X = data[feature_columns]
y = data['classification']

# Define preprocessing steps
numeric_transformer = Pipeline(steps=[
    ('imputer', KNNImputer(n_neighbors=5)),
    ('scaler', StandardScaler())
])

categorical_transformer = Pipeline(steps=[
    ('imputer', SimpleImputer(strategy='most_frequent')),
    ('onehot', OneHotEncoder(handle_unknown='ignore'))
])

preprocessor = ColumnTransformer(
    transformers=[
        ('num', numeric_transformer, numeric_features),
        ('cat', categorical_transformer, categorical_features)
    ]
)

# Split the data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)

# Define the models
models = {
    "Random Forest": RandomForestClassifier(random_state=42),
    "Gradient Boosting": GradientBoostingClassifier(random_state=42),
    "Support Vector Machine": SVC(probability=True, random_state=42)  # Set probability=True for probability estimates
}

# Train, evaluate, and save each model
for model_name, clf in models.items():
    print(f"\nTraining {model_name}...")

    # Create a pipeline
    pipeline = Pipeline(steps=[
        ('preprocessor', preprocessor),
        ('classifier', clf)
    ])

    # Train the model
    pipeline.fit(X_train, y_train)

    # Save the model
    model_path = f'./Trained_Models/{model_name.replace(" ", "_").lower()}_model.pkl'
    joblib.dump(pipeline, model_path)
    print(f"{model_name} saved at {model_path}.")

    # Evaluate the model
    y_pred = pipeline.predict(X_test)
    y_proba = pipeline.predict_proba(X_test) if hasattr(pipeline, "predict_proba") else None

    print(f"\nClassification Report for {model_name}:")
    print(classification_report(y_test, y_pred))

    # Confusion matrix
    conf_matrix = confusion_matrix(y_test, y_pred)
    conf_matrix_df = pd.DataFrame(conf_matrix, index=['Actual notckd', 'Actual ckd'], columns=['Predicted notckd', 'Predicted ckd'])
    print("\nConfusion Matrix:")
    print(conf_matrix_df)

    # Cross-validation
    cv_scores = cross_val_score(pipeline, X, y, cv=5, scoring='accuracy')
    print(f"\nCross-Validation Accuracy Scores for {model_name}: {cv_scores}")
    print(f"Mean Cross-Validation Accuracy Score: {cv_scores.mean()}")

    # Output probabilities
    if y_proba is not None:
        print(f"\nSample Probabilities for {model_name} (First 5 Predictions):")
        proba_df = pd.DataFrame(y_proba, columns=pipeline.classes_)
        print(proba_df.head())
