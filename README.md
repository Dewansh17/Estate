# 🏠 Real Estate Website with Admin Panel (MERN Stack)

## 📌 Project Overview

This project is a **full-stack real estate website** built using the **MERN stack**.
It replicates a modern real-estate landing page and includes a **secure admin panel** that allows dynamic editing of website content such as:

* Hero section details
* Project overview (About section)
* Amenities information
* FAQ questions
* Other textual content across the site

All content is stored in **MongoDB** and updated in real time through the admin dashboard.

---

## 🚀 Tech Stack

### Frontend

* React.js (Vite)
* Tailwind CSS
* Axios
* React Router

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

### Deployment

* Frontend: Vercel / Netlify
* Backend: Render
* Database: MongoDB Atlas

---

## 🔐 Admin Login Credentials

```
Email: admin@gmail.com  
Password: 1234
```

The admin panel allows editing of **text-based content only**.
Images remain static as per assignment requirements.

---

## ✨ Features

* Responsive real-estate landing page UI
* Dynamic content fetching from MongoDB
* Admin authentication system
* Edit & update website sections in real time
* REST API integration between frontend and backend
* Production-ready MERN architecture

---

## 📂 Project Structure

```
Estate/
│
├── frontend/        # React + Tailwind UI
├── backend/         # Express API + MongoDB
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/estate.git
cd estate
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Run backend:

```bash
npm start
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🌐 API Endpoints

### Sections

* `GET /api/sections` → Fetch all website sections
* `PUT /api/sections/:name` → Update section content

### Auth

* `POST /api/auth/login` → Admin login

---

## 📸 Screens Implemented

* Hero Section
* About Project
* Amenities
* Floor Plans
* Developer / FAQ
* Admin Dashboard

---

## 🎯 Assignment Objective Completed

✔ Pixel-accurate UI replication
✔ Dynamic CMS-style admin editing
✔ MERN full-stack architecture
✔ Cloud database integration
✔ Production deployment ready

---

## 👨‍💻 Author

**Dewansh**
B.Tech Student | Full-Stack & AI Enthusiast

---

## 📄 License

This project is created for **educational and assignment purposes only**.
