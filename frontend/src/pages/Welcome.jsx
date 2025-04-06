import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-indigo-700 flex items-center justify-center px-6">
      <div className="w-full max-w-5xl bg-indigo-50 border border-indigo-200 rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center md:items-start gap-8">
        
        {/* Left: Info & Disclaimer */}
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold mb-4">Welcome to CerviCheck</h2>
          <p className="text-lg mb-4">
            Before you begin, please read the following:
          </p>
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded mb-6">
            ⚠️ This application is in early-stage research and may not provide
            accurate results. It should <strong>not</strong> be used for final medical decisions.
            Please consult a certified healthcare professional for official diagnosis.
          </div>
        </div>
  
        {/* Right: CTA Button */}
        <div className="md:w-1/3 flex flex-col justify-center items-center">
          <button
            onClick={() => navigate("/upload")}
            className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition w-full"
          >
            Continue to Self Check
          </button>
        </div>
      </div>
    </div>
  );
  
};

export default Welcome;
