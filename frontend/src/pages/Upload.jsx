import { useState } from "react";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState("");

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
    setResult("");
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setResult(`Prediction: ${data.prediction}`);
    } catch (err) {
      console.error("Upload failed:", err);
      setResult("Upload failed");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Upload Cervical Image</h2>
      <form onSubmit={handleUpload} className="flex flex-col gap-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="file-input file-input-bordered"
        />

        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="h-64 object-contain border rounded-md"
          />
        )}

        <button
          type="submit"
          className="bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
        >
          Upload & Analyze
        </button>

        {result && (
          <div className="mt-4 text-center font-semibold text-lg">{result}</div>
        )}
      </form>
    </div>
  );
};

export default Upload;
