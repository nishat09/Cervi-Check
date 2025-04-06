from flask import Flask, request, jsonify
import joblib
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load model and scaler
model = joblib.load('best_cervical_cancer_model.pkl')
scaler = joblib.load('scaler_cervical_cancer.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json

        # Extract and order features for prediction
        features = [
            data["age"],
            data["num_sex_partners"],
            data["first_sex_age"],
            data["num_pregnancies"],
            int(data["smokes"]),
            data["smokes_years"],
            data["smokes_pack_years"],
            int(data["hormonal_contraceptives"]),
            data["hormonal_contraceptives_years"],
            int(data["iud"]),
            data["iud_years"],
            data["stds_number"]
        ]

        # Scale and predict
        scaled = scaler.transform([features])
        prediction = model.predict(scaled)[0]
        result = "High Risk" if prediction == 1 else "Low Risk"

        return jsonify({ "prediction": result })

    except Exception as e:
        return jsonify({ "error": str(e) }), 500

if __name__ == '__main__':
    app.run(debug=True, port=8000)
