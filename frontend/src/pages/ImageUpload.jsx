import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const ImageUpload = () => {
  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [consent, setConsent] = useState(false);
  const [savePermission, setSavePermission] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!consent || !image) {
      setMessage("Please provide consent and select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("save", savePermission);

    try {
      const res = await axios.post("http://localhost:5000/upload", formData);
      localStorage.setItem("viaResult", res.data.prediction);
      navigate("/risk-form");

      
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to upload image.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 flex flex-col items-center justify-center text-white p-6">
      <div className="max-w-xl w-full bg-white text-indigo-800 rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold mb-4 text-center">VIA Image Upload</h2>

        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 mb-4 rounded">
          <p className="text-sm">
            ⚠️ This app is in its early research stage and may not provide accurate medical results. Please consult a medical professional for official diagnosis
          </p>
        </div>

        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 mb-6 rounded">
          <p className="text-sm">
            📸 Apply 5% acetic acid solution (vinegar) directly to the cervix using a cotton swab. The acetic acid solution is used because abnormal tissue tends to turn white when exposed to acetic acid.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="bg-indigo-100 text-indigo-800 rounded p-2"
          />

          <label className="flex items-center text-sm">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mr-2"
            />
            I consent to using this image for screening purposes.
          </label>

          <label className="flex items-center text-sm">
            <input
              type="checkbox"
              checked={savePermission}
              onChange={(e) => setSavePermission(e.target.checked)}
              className="mr-2"
            />
            I allow the image to be saved in the database for future improvement.
          </label>

          <button
            type="submit"
            disabled={!consent}
            className={`font-semibold py-2 px-4 rounded transition ${consent ? "bg-indigo-600 hover:bg-indigo-700 text-white" : "bg-gray-400 text-white cursor-not-allowed"}`}
          >
            Upload and Get Prediction
          </button>
        </form>

        {message && (
          <div className="mt-4 p-4 text-center bg-gray-100 text-indigo-800 rounded shadow">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
