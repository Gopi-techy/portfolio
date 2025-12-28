# Gopinath's Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and professional experience as a Full-Stack Developer and Cloud Engineer.

## ✨ Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Progressive Web App (PWA)**: Installable on mobile devices with custom logo
- **Smooth Animations**: Powered by Framer Motion for elegant transitions
- **Interactive Components**: 
  - Hero section with professional introduction
  - Dynamic project showcase with detailed modals
  - Career roadmap with visual timeline
  - Interactive tech stack display
  - Contact form with minimal design
- **Dark Theme**: Navy blue (#0a192f) with cyan accents (#64ffda)
- **SEO Optimized**: Proper meta tags and descriptions

## 🛠️ Technologies Used

### Frontend
- **React 19** - UI framework
- **Styled Components** - CSS-in-JS styling
- **Framer Motion** - Animation library
- **Lottie** - Animation rendering
- **React Icons** - Icon library
- **React Intersection Observer** - Scroll animations

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **Deployed on Render** - Backend hosting

### Deployment
- **Vercel** - Frontend hosting with custom domain
- **PWA** - Manifest.json for mobile installation

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   ├── manifest.json       # PWA configuration
│   ├── logo192.png         # App icon (192x192)
│   ├── logo512.png         # App icon (512x512)
│   └── favicon.ico         # Browser favicon
├── src/
│   ├── components/
│   │   ├── Hero.js         # Landing section
│   │   ├── About.js        # About/Introduction
│   │   ├── Experience.js   # Work experience timeline
│   │   ├── Projects.js     # Project showcase with modals
│   │   ├── Journey.js      # Career roadmap
│   │   ├── Contact.js      # Contact form
│   │   ├── Navbar.js       # Navigation
│   │   └── Footer.js       # Footer section
│   ├── styles/
│   │   └── theme.js        # Theme configuration
│   ├── assets/             # Images and animations
│   ├── App.js
│   └── index.js
├── backend/
│   ├── server.js           # Express server
│   ├── package.json
│   └── render.yaml         # Render deployment config
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Gopi-techy/portfolio.git
cd portfolio
```

2. **Install frontend dependencies**
```bash
npm install
```

3. **Install backend dependencies**
```bash
cd backend
npm install
```

### Development

1. **Run frontend development server**
```bash
npm start
```
Frontend will run on `http://localhost:3000`

2. **Run backend server** (in separate terminal)
```bash
cd backend
node server.js
```
Backend will run on `http://localhost:5000`

### Build for Production

```bash
npm run build
```
Creates optimized production build in `build/` folder

## 🎨 Customization

### Theme Colors
Edit `src/styles/theme.js` to customize colors:
- Primary: `#0a192f` (Navy)
- Accent: `#64ffda` (Cyan)
- Text: `#8892b0` (Light slate)

### PWA Configuration
Edit `public/manifest.json` to customize:
- App name
- Theme colors
- Display mode
- Icons

## 📱 PWA Features

- **Installable**: Add to home screen on mobile devices
- **Custom Logo**: Circular "G" logo with theme colors
- **Offline Support**: Service worker for offline functionality
- **App-like Experience**: Standalone display mode

## 📧 Contact

**Gopinath**
- Email: [gopinath2k31@gmail.com]
- GitHub: [@Gopi-techy](https://github.com/Gopi-techy)

## 📄 License

This project is open source and available under the MIT License.

---

**Designed and Developed by Gopinath** 💚
