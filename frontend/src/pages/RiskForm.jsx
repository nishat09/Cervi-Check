import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const questions = [
  { id: "age", label: "What is your age?", type: "number" },
  { id: "num_sex_partners", label: "Number of sexual partners?", type: "number" },
  { id: "first_sex_age", label: "At what age did you have your first sexual intercourse?", type: "number", dependsOn: "num_sex_partners" },
  { id: "num_pregnancies", label: "How many pregnancies have you had?", type: "number", dependsOn: "num_sex_partners" },
  { id: "smokes", label: "Do you smoke?", type: "boolean" },
  { id: "smokes_years", label: "How many years have you smoked?", type: "number", dependsOn: "smokes" },
  { id: "smokes_pack_years", label: "How many packs per year do you smoke?", type: "number", dependsOn: "smokes" },
  { id: "hormonal_contraceptives", label: "Have you used hormonal contraceptives?", type: "boolean" },
  { id: "hormonal_contraceptives_years", label: "For how many years?", type: "number", dependsOn: "hormonal_contraceptives" },
  { id: "iud", label: "Have you used an IUD?", type: "boolean" },
  { id: "iud_years", label: "For how many years?", type: "number", dependsOn: "iud" },
  { id: "stds_number", label: "How many STDs have you had?", type: "number" },
];

const RiskForm = () => {
  const [formData, setFormData] = useState({});
  const [step, setStep] = useState(0);
  const [result, setResult] = useState(null);
  const viaResult = localStorage.getItem("viaResult");
  const viaDisplay = viaResult === "Low Risk" ? "✅ VIA Negative" : "⚠️ VIA Positive";

  const handleChange = (e, id, type) => {
    const value = type === "boolean" ? e : Number(e.target.value);
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async () => {
    const updatedForm = { ...formData };
    questions.forEach(q => {
      if (q.dependsOn && (!formData[q.dependsOn] || formData[q.dependsOn] === false)) {
        updatedForm[q.id] = 0;
      }
    });

    try {
      const res = await axios.post("http://localhost:8000/predict", updatedForm);
      setResult(res.data.prediction);
    } catch (err) {
      console.error("Prediction error:", err);
    }
  };

  const nextVisibleStep = (fromStep) => {
    for (let i = fromStep + 1; i < questions.length; i++) {
      const q = questions[i];
      if (!q.dependsOn || formData[q.dependsOn] > 0 || formData[q.dependsOn] === true) {
        return i;
      }
    }
    return questions.length;
  };

  const prevVisibleStep = (fromStep) => {
    for (let i = fromStep - 1; i >= 0; i--) {
      const q = questions[i];
      if (!q.dependsOn || formData[q.dependsOn] > 0 || formData[q.dependsOn] === true) {
        return i;
      }
    }
    return 0;
  };

  const current = questions[step];
  const shouldShow = !current.dependsOn || formData[current.dependsOn] > 0 || formData[current.dependsOn] === true;
  const resultColor = result === "High Risk" ? "bg-red-600" : "bg-green-600";

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-6">
      {!result ? (
        shouldShow && (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-md bg-white text-indigo-800 p-6 rounded-2xl shadow-lg text-center"
          >
            <h2 className="text-xl font-semibold mb-4">{current.label}</h2>
            {current.type === "boolean" ? (
              <div className="space-x-4">
                <button
                  onClick={() => handleChange(true, current.id, current.type)}
                  className={`px-4 py-2 rounded ${formData[current.id] === true ? "bg-indigo-600 text-white" : "bg-gray-300 text-indigo-800"}`}
                >
                  Yes
                </button>
                <button
                  onClick={() => handleChange(false, current.id, current.type)}
                  className={`px-4 py-2 rounded ${formData[current.id] === false ? "bg-indigo-600 text-white" : "bg-gray-300 text-indigo-800"}`}
                >
                  No
                </button>
              </div>
            ) : (
              <input
                type="number"
                min="0"
                value={formData[current.id] ?? ""}
                onChange={(e) => handleChange(e, current.id, current.type)}
                className="w-full p-2 border border-indigo-300 rounded mt-2"
              />
            )}

            <div className="mt-6 flex justify-between">
              {step > 0 && (
                <button onClick={() => setStep(prevVisibleStep(step))} className="text-sm text-white underline">
                  ⬅ Back
                </button>
              )}
              {nextVisibleStep(step) < questions.length ? (
                <button
                  onClick={() => setStep(nextVisibleStep(step))}
                  className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                >
                  Next ➡
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Submit
                </button>
              )}
            </div>
          </motion.div>
        )
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-indigo-100 p-6 rounded-2xl shadow-xl text-center text-indigo-800"
          >
            <h3 className="text-2xl font-bold mb-2">📷 VIA Result</h3>
            <p className="text-lg font-semibold">{viaDisplay}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className={`p-6 rounded-2xl shadow-xl text-center text-white ${resultColor}`}
          >
            <h3 className="text-2xl font-bold mb-2">🧬 Risk Prediction</h3>
            <p className="text-lg font-semibold">{result}</p>
            <p className="text-sm mt-2">This prediction is based on your answers. Please consult a doctor for a proper diagnosis.</p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default RiskForm;
