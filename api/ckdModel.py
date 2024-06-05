import pandas as pd
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.ensemble import RandomForestClassifier
from sklearn.experimental import enable_iterative_imputer
from sklearn.impute import IterativeImputer, SimpleImputer
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.metrics import accuracy_score, classification_report, roc_auc_score
from sklearn.feature_selection import SelectFromModel
from imblearn.over_sampling import RandomOverSampler
import joblib

# Step 1: Load the dataset
data = pd.read_csv('chronic_kidney_disease.csv')

# Step 2: Define feature columns and target variable
feature_columns = ['age', 'bp', 'sg', 'al', 'su', 'rbc', 'pc', 'pcc', 'ba', 'bgr', 'bu', 'sc', 'sod', 'pot', 'hemo', 'pcv', 'wc', 'rc', 'htn', 'dm', 'cad', 'appet', 'pe', 'ane']
target_column = 'classification'

# Check for any missing values
print("Missing values in each column:\n", data.isnull().sum())

# Handle missing values and clean the dataset if needed
# For example, dropping rows with excessive missing values:
data.dropna(thresh=len(data.columns) - 2, inplace=True)  # Keep rows with at least len(columns) - 2 non-NA values

# Separate features and target
X = data[feature_columns]
y = data[target_column]

# Step 3: Handle imbalanced dataset
ros = RandomOverSampler(random_state=42)
X_resampled, y_resampled = ros.fit_resample(X, y)

# Step 4: Split the data into training and test sets
X_train, X_test, y_train, y_test = train_test_split(X_resampled, y_resampled, test_size=0.2, random_state=42)

# Step 5: Preprocess the data
# Define numeric and categorical features
numeric_features = X.select_dtypes(include=['float64', 'int64']).columns
categorical_features = X.select_dtypes(include=['object']).columns

# Advanced imputation and scaling for numeric features
numeric_transformer = Pipeline(steps=[
    ('imputer', IterativeImputer(max_iter=10, random_state=42, tol=0.01)),
    ('scaler', StandardScaler())
])

# Imputation and one-hot encoding for categorical features
categorical_transformer = Pipeline(steps=[
    ('imputer', SimpleImputer(strategy='most_frequent')),
    ('onehot', OneHotEncoder(handle_unknown='ignore'))
])

# Combine preprocessing steps
preprocessor = ColumnTransformer(
    transformers=[
        ('num', numeric_transformer, numeric_features),
        ('cat', categorical_transformer, categorical_features)
    ])

# Step 6: Create and train the model pipeline
model = Pipeline(steps=[
    ('preprocessor', preprocessor),
    ('feature_selection', SelectFromModel(RandomForestClassifier(random_state=42), threshold="median")),
    ('classifier', RandomForestClassifier(random_state=42))
])

# Use cross-validation to evaluate the model
cv_scores = cross_val_score(model, X_train, y_train, cv=5, scoring='accuracy')
print("Cross-Validation Scores (Accuracy):", cv_scores)
print("Mean Cross-Validation Score (Accuracy):", cv_scores.mean())

# Fit the model on the entire training data
model.fit(X_train, y_train)

# Step 7: Evaluate the model
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print("Model Accuracy:", accuracy)
print("Classification Report:")
print(classification_report(y_test, y_pred))

# Ensure predict_proba provides probabilities for both classes
y_proba = model.predict_proba(X_test)

# Check if the model outputs probabilities for both classes
if y_proba.shape[1] == 2:
    roc_auc = roc_auc_score(y_test, y_proba[:, 1])
else:
    roc_auc = roc_auc_score(y_test, y_proba, multi_class='ovo')
print("Model ROC AUC Score:", roc_auc)

# Step 8: Save the trained model
joblib.dump(model, './Trained_Models/ckd_model.pkl')
