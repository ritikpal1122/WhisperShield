<h3 align="center">Whisper Report </h3>

<div align="center">
  A secure platform for anonymous incident reporting
  <br />
  <a href="https://x.com/ritikpaltech">Follow me on Twitter/X</a>
</div>

## 📋 Table of Contents

1. 🎯 [Overview](#overview)
2. 💻 [Technology Stack](#tech-stack)
3. ✨ [Key Features](#features)
4. 🚀 [Getting Started](#getting-started)
5. ⚙️ [Configuration](#configuration)
6. 📦 [Deployment](#deployment)

## 🎯 Overview

A modern, secure crime reporting platform built with Next.js 14 that enables anonymous incident reporting while ensuring user privacy and data security.

## 💻 Technology Stack

- **Frontend:** Next.js 14, TypeScript, Tailwind CSS
- **Backend:** Prisma ORM, Neon Database
- **Authentication:** NextAuth.js
- **AI Integration:** Google's GeminiAI
- **Security:** BCrypt encryption
- **Forms:** React Hook Form
- **Maps:** Mapbox Integration

## ✨ Key Features

- Anonymous incident reporting
- Real-time location mapping
- AI-powered report analysis
- Secure data encryption
- Mobile-responsive design
- User authentication
- Interactive reporting dashboard

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm/yarn
- Git

### Setup Instructions
```bash
# Clone repository
git clone <repository-url>
cd crime-report-system

# Install packages
npm install

# Database setup
npx prisma generate
npx prisma db push

# Launch development server
npm run dev

NEXT_PUBLIC_MAPBOX_API_KEY=your-mapbox-key
DATABASE_URL=postgresql:your-database-url
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000/api/auth"
GEMINI_API_KEY=your-gemini-api-key
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your-mapbox-access-token

## 📦 Deployment
 Deploy on Vercel:

Push to GitHub

Import to Vercel

Set environment variables

Deploy

🤝 Contributing
Contributions are welcome! Check out our Contributing Guidelines.

📬 Contact
Twitter: @ritikpaltech

📝 License
MIT Licensed. See LICENSE for details.