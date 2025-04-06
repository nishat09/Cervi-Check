import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [history, setHistory] = useState([]);
  const [message, setMessage] = useState("");
  const userEmail = localStorage.getItem("userEmail");

  const fetchHistory = async () => {
    try {
      const res = await axios.get("http://localhost:5000/history", {
        headers: { email: userEmail },
      });
      setHistory(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!userEmail) {
      navigate("/login");
    } else {
      fetchHistory();
    }
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center text-white p-6">
      <div className="max-w-3xl w-full bg-white text-indigo-900 rounded-xl shadow-xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Welcome, {userEmail}</h2>

        <div className="bg-indigo-100 p-6 rounded-xl mb-6 shadow-md">
          <h3 className="text-xl font-bold mb-3">What is VIA Screening?</h3>
          <p className="mb-3 text-sm">
            VIA (Visual Inspection with Acetic Acid) is a simple, low-cost cervical cancer screening method where the cervix is visually inspected after applying 5% acetic acid solution. This method helps detect early signs of cervical cancer, especially in resource-limited settings.
          </p>

          <h3 className="text-xl font-bold mb-3">Why We Built This App</h3>
          <p className="mb-3 text-sm">
            Manual visual inspection can often be uncomfortable for women and prone to human error. Our application aims to make this process more comfortable, private, and efficient using AI. By combining image analysis with a comprehensive risk factor questionnaire, we help women receive a more accurate risk assessment — all from the comfort of their own space.
          </p>

          <h3 className="text-xl font-bold mb-3">Risk Factor Analysis</h3>
          <p className="text-sm">
            Alongside image screening, users also answer 12 personalized questions that analyze key health and lifestyle factors linked to cervical cancer. Our AI model uses this combined data to predict potential risk and guide users accordingly.
          </p>
        </div>

        <div className="text-center">
          <button
            onClick={() => window.location.href = "/upload-image"}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md"
          >
            Start Your Test
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
