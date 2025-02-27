# 🚀 Sentinel AI Demo

### 🔍 Real-Time Concealed Weapons Detection

Sentinel AI is an AI-powered concealed weapons detection system designed for real-time security monitoring in government facilities, healthcare centers, and critical infrastructure. Using computer vision, deep learning, and edge computing, Sentinel AI provides instantaneous threat detection and alerts.

# 📌 Project Overview

### 🛠 Sentinel AI Demo (FastAPI + YOLOv8 + OpenCV)

- Runs object detection on security footage to identify concealed weapons.

- Uses FastAPI as the backend for AI inference.

- Provides a Next.js frontend for users to upload and analyze security videos.

- Optimized for AWS EC2 GPU deployment with auto-shutdown to minimize costs.

# 🚀 Full-Scale Sentinel AI System (Future Enhancements)

- Real-time WebRTC Streaming for security cameras.

- Edge Computing Deployment via AWS Panorama & NVIDIA Jetson.

- Multi-Modal AI (Thermal + LiDAR) for enhanced detection.

- GovCloud Deployment for government compliance (FedRAMP, NIST 800-53).

- Zero-Trust Security for AI-driven intrusion detection and response.

🏗️ File Structure
```plaintext
sentinel-ai-demo/
│── models/              # Pretrained YOLOv8 model weights
│── datasets/            # Public training data (if needed)
│── src/
│   ├── backend/         # FastAPI Backend
│   │   ├── main.py      # API for video processing
│   │   ├── detection.py # AI model inference logic
│   │   ├── utils.py     # Helper functions
│   ├── frontend/        # Next.js Frontend
│   │   ├── pages/       # Web pages
│   │   ├── components/  # UI components
│── scripts/             # Training & inference scripts
│   ├── train.py         # Model fine-tuning script
│   ├── infer.py         # Run detection on a video
│── public_videos/       # Public domain demo videos
│── docs/                # Documentation & Presentation Materials
│── requirements.txt     # Python dependencies
│── Dockerfile           # Docker setup for easy deployment
│── setup.sh             # Script to set up environment
│── README.md            # Project documentation
```
# 🚀 Getting Started

### 1️⃣ Install Dependencies

# Create virtual environment
```bash
python3 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
```
# Install required Python packages
```bash
pip install -r requirements.txt
```
### 2️⃣ Download YOLOv8 Pretrained Model
```bash
mkdir models
cd models
wget https://github.com/ultralytics/assets/releases/download/v8/yolov8m.pt
```
### 3️⃣ Run AI Model on a Public Demo Video
```bash
python scripts/infer.py --video public_videos/demo.mp4 --model models/yolov8m.pt
```
### 4️⃣ Start the Sentinel AI Web App

Option A: Run FastAPI Backend
```bash
uvicorn src.backend.main:app --host 0.0.0.0 --port 8000 --reload
```
(API now available at http://localhost:8000)

Option B: Start Next.js Frontend
```bash
cd src/frontend
npm install
npm run dev
```
(Frontend now available at http://localhost:3000)

# 📩 Deployment on AWS EC2 GPU (Planned)

Optimized Cost Strategy

Instance Type: g4dn.xlarge (NVIDIA T4 GPU) to keep costs low.

Auto-Start: Instance starts only when a user logs in.

Auto-Shutdown: AWS Lambda stops the instance after 30 minutes of inactivity.

Expected Monthly Cost: ~$10-15/month with auto-shutdown enabled.

🏗️ Future Enhancements


📩 Get Involved

📧 Contact: Your Name📍 Company: Unified Software Solutions🌐 Website: YourCompanyWebsite.com

🤖 Sentinel AI: Defending the Future with AI-Powered Security(Weapons Detection).