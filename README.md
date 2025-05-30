# Portable AI Gym Assistant 🏋️‍♀️🤖

This project was built during the MOH Hackathon and showcases a **portable gym solution** integrated with a **real-time AI fitness assistant**. It blends hardware sensing with conversational AI to guide users through their workouts anytime, anywhere.

## 💡 Overview

Our product is a **compact, portable gym kit** equipped with:

- 💬 **Personal AI Assistant** that interacts with users in real-time
- 🎥 **Motion Sensors** to track posture and form (e.g., squat position)
- 🧠 **AI-powered guidance** tailored to your progress and needs
- 🌐 A dynamic website explaining the product, its features, and functionality

## 🧰 Tech Stack

- **Next.js** – Web framework
- **Tailwind CSS** – Styling
- **TypeScript** – Type safety
- **Web APIs / Sensors** – Simulated motion tracking
- **AI Voice** – Real-time audio interaction (e.g., ElevenLabs or similar APIs)

## 🚀 How It Works

1. Visit the web interface
2. Talk to your **AI Fitness Assistant**
3. Perform exercises — the **motion sensor logic** checks your position
4. Get real-time feedback, motivation, and form corrections

> Ideal for people on the move, beginners who want form validation, or anyone seeking a smart fitness companion at home.

## 📁 Project Structure

- `app/` – Main application routes
- `components/` – Reusable UI components
- `hooks/` – Custom React hooks
- `lib/` – Utility functions
- `public/` – Assets and static files
- `styles/` – Global styles with Tailwind

## 📦 Setup

```bash
# Install dependencies
pnpm install

# Run the development server
pnpm dev
