import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 text-white flex flex-col items-center justify-center p-6">
      {/* Banner */}
      <img
        src="https://source.unsplash.com/featured/?healthcare"
        alt="Healthcare banner"
        className="w-full max-w-4xl h-64 object-cover rounded-xl shadow-lg mb-8"
      />

      {/* Vision */}
      <h1 className="text-4xl font-bold mb-4 text-center">Empowering Early Detection of Cervical Cancer</h1>
      <p className="text-center max-w-2xl text-lg mb-8">
        CerviCheck is a research-driven tool designed to help women in underdeveloped regions access early screening through AI-powered visual analysis.
      </p>

      {/* CTA */}
      <button
        onClick={() => navigate("/login")}
        className="bg-white text-indigo-600 font-bold px-6 py-3 rounded-lg hover:bg-indigo-100 transition"
      >
        Begin Self Check
      </button>
    </div>
  );
};

export default Landing;
