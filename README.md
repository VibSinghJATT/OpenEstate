# OpenEstate

A clean MVP for **fractional real estate investing** built with **Next.js + Firebase** and **simulated payments**.  
Inspired by Apple / parallel.ai aesthetics.

## ✨ Features
- Firebase authentication (Google, Email/Phone OTP – simulated)
- KYC onboarding (PAN/Aadhaar placeholders)
- Property listings with **sample government-style documents**
- Simulated payments (Razorpay, PayPal, Cashfree)
- Portfolio dashboard with **rent distribution simulation**
- Secondary market for token resale (demo only)
- Optional blockchain stubs (Infura/Wallet)

## 📸 Screenshots
![Home](public/screenshots/home.png)  
![Login](public/screenshots/login.png)  
![Dashboard](public/screenshots/dashboard.png)  
![Property](public/screenshots/property.png)  

## 🚀 Quickstart
```bash
npm install
cp .env.local.example .env.local
# fill .env.local with Firebase + Google OAuth keys
npm run dev
