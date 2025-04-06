const express = require("express");
const cors = require("cors");
const authRoutes = require("./authRoutes");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;



// Middleware


app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);

// Basic test route
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

mongoose.connect("mongodb+srv://aziz09:809140Nishat@cervicalcancer.iz8rfx1.mongodb.net/?retryWrites=true&w=majority&appName=CervicalCancer")
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch((err) => console.error("MongoDB connection error:", err));


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



const multer = require("multer");
const path = require("path");

// Set up storage destination and filename
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// Make sure the uploads folder exists
const fs = require("fs");
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Image upload route
app.post("/upload", upload.single("image"), (req, res) => {
  console.log("Received file:", req.file);
  // Mock prediction logic
  const mockPrediction = Math.random() > 0.5 ? "Low Risk" : "High Risk";
  res.json({ filename: req.file.filename, prediction: mockPrediction });
});

