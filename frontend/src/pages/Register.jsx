import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
  
    try {
      const res = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
  
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
  
      setMessage("✅ Registration successful! Redirecting to login...");
      setForm({ name: "", email: "", password: "" });
  
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      setMessage(`❌ ${err.message}`);
    }
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center px-4">
      <div className="backdrop-blur-md bg-white/30 border border-white/40 rounded-2xl shadow-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full px-4 py-2 rounded-lg bg-white/80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full px-4 py-2 rounded-lg bg-white/80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full px-4 py-2 rounded-lg bg-white/80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            type="submit"
            className="w-full bg-white text-indigo-700 font-semibold py-2 rounded-lg hover:bg-indigo-100 transition"
          >
            Register
          </button>
        </form>
        {message && (
          <p className="text-center mt-4 text-white font-medium">{message}</p>
        )}
      </div>
    </div>
  );
};

export default Register;
