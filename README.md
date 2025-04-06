**🩺 CerviCheck – Computer vision-based VIA screening with ML models trained on demographic, behavioral, and clinical data to assess cervical cancer risk.
**
![GitHub Repo stars](https://img.shields.io/github/stars/nishat09/Risk-Factor-Analysis-For-Cervical-Cancer?style=social)
![GitHub forks](https://img.shields.io/github/forks/nishat09/Risk-Factor-Analysis-For-Cervical-Cancer?style=social)

CerviCheck is a full-stack AI-powered web application designed to help women assess their risk of cervical cancer through a combination of computer vision-based image analysis and machine learning-powered risk factor modeling.

> ⚠️ **Disclaimer**: This tool is a research prototype and should not replace professional medical advice or diagnosis.

---

## 🎯 Features

- 📷 **VIA Screening using Deep Learning** (YOLOv9-based cervix image classifier)
- 🧬 **Risk Factor Prediction** powered by an ensemble ML model trained on clinical, demographic & behavioral data
- 🔐 Secure user authentication with consent-based image handling
- 📊 Dual analysis output: Image + Risk Score
- 🧠 ML backend served with Flask API

---

## 👩‍⚕️ Research Motivation

In many developing regions, **VIA (Visual Inspection with Acetic Acid)** remains the only cervical cancer screening method due to its affordability. However:

- The process is **uncomfortable for women**.
- **Human eye-based inspection** introduces a **high error rate (~30%)**.

This project was born from the goal of **encouraging more women to get screened** and reduce the discomfort and limitations of traditional VIA screening through automation.

If our tool can even help one woman **seek screening at a clinic**, it will be considered a success.

> 💡 Our long-term vision is to enable fully computer-vision based screening to enhance accuracy, accessibility, and early detection.

This application was independently developed as an extension of a research project conducted under:

**Md. Ashraful Alam, PhD**  
Associate Professor, Computer Science and Engineering  
BRAC University

---

## 📖 Research Summary (Abstract)

> "Visual Inspection of cervix with Acetic Acid (VIA) is an inexpensive and effective screening test conducted in underdeveloped and developing regions. In this research, we established a systematic VIA screening process using computer vision and machine learning. We evaluated VGG16 (96% accuracy), ResNet-50 (95%), YOLOv9 (93%), and YOLO-NAS Medium (91%) on cervix images. An ensemble model based on key features extracted using Random Forest achieved 94% accuracy in predicting risk based on clinical and behavioral data. Our system can help identify high-risk individuals, even those with VIA-negative, and aims to surpass traditional VIA accuracy."

🔍 Cervical images used for this project were obtained through **official permission from Google** strictly for research purposes.

---

## 🛠 Tech Stack

**Frontend:**
- React.js (with Vite)
- Tailwind CSS
- Framer Motion
- Axios

**Backend:**
- Node.js + Express
- MongoDB Atlas
- Multer (image upload)
- JWT (auth)

**ML & Image Processing:**
- Flask API
- YOLOv9 for image classification
- Random Forest + Ensemble for risk factor analysis

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repo:
```bash
git clone https://github.com/nishat09/Risk-Factor-Analysis-For-Cervical-Cancer.git
cd Risk-Factor-Analysis-For-Cervical-Cancer
```

### 2️⃣ Backend Setup
```bash
cd backend
npm install
node index.js
```
> Add your MongoDB URI in a `.env` file:
> `MONGO_URI=your_mongo_connection_string`

### 3️⃣ ML Model API Setup (Flask)
```bash
cd ml-model-api
pip install -r requirements.txt
python app.py
```
> Ensure `best_cervical_cancer_model.pkl` and `scaler_cervical_cancer.pkl` are in the folder

### 4️⃣ Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Then visit: [http://localhost:5173](http://localhost:5173)

---

## 📸 Screenshots
*Coming soon – preview of image upload, result cards, dashboard view, and animated forms.*

---

## 👤 Author

Built with 💜 by [@nishat09](https://github.com/nishat09)

> Development of this web application was an independent effort based on my undergraduate research.

For research queries, feedback, or collaboration:
📧 Email: nishataziz09@gmail.com

---

## 📜 License

This project uses the **MIT License** — which means you can use, copy, modify, and distribute the software freely with attribution. It’s developer-friendly and open.

Read more: [MIT License explained](https://opensource.org/licenses/MIT)

---

## 🤝 Contributions

PRs are welcome! If you’d like to help with new models, design improvements, or testing, feel free to fork and contribute.

⭐ If this project inspires you — give it a star!
