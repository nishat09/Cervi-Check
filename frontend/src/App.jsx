import { Routes, Route, Link } from 'react-router-dom';
import Landing from './pages/Landing';
import About from './pages/About';
import Register from './pages/Register';
import Login from './pages/Login';
import Upload from "./pages/Upload";
import Welcome from './pages/Welcome';
import RiskForm from "./pages/RiskForm";
import ImageUpload from './pages/ImageUpload';
import Dashboard from "./pages/Dashboard";



function App() {
  return (
    <>
      <nav className="bg-white border-b shadow px-4 py-2 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600">CerviCheck</h1>
        <div className="space-x-4">
          <Link to="/" className="text-indigo-600 hover:underline">Home</Link>
          <Link to="/about" className="text-indigo-600 hover:underline">About</Link>
          <Link to="/login" className="text-indigo-600 hover:underline">Login</Link>
          <Link to="/register" className="text-indigo-600 hover:underline">Register</Link>
        </div>
      </nav>
  
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/upload" element={<RiskForm />} />
        <Route path="/upload-image" element={<ImageUpload />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/risk-form" element={<RiskForm />} />


      </Routes>
    </>
  );
}

export default App;
