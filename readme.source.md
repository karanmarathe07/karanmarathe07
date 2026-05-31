```aura width=800 height=360
<div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', background: '#08080d', borderRadius: 20, overflow: 'hidden', fontFamily: 'Inter, sans-serif' }}>
  <style>{`
    @keyframes orb-a { 0%, 100% { transform: translate(0, 0); opacity: 0.6; } 50% { transform: translate(28px, -22px); opacity: 0.9; } }
    @keyframes orb-b { 0%, 100% { transform: translate(0, 0); opacity: 0.5; } 50% { transform: translate(-22px, 18px); opacity: 0.75; } }
    @keyframes orb-c { 0%, 100% { transform: translate(0, 0); opacity: 0.35; } 50% { transform: translate(16px, -28px); opacity: 0.6; } }
    @keyframes ring-blink { 0%, 100% { opacity: 0.06; } 50% { opacity: 0.18; } }
    @keyframes ring-blink-b { 0%, 100% { opacity: 0.04; } 50% { opacity: 0.12; } }
    @keyframes dot-spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    #hero-o1 { animation: orb-a 9s ease-in-out infinite; }
    #hero-o2 { animation: orb-b 11s ease-in-out infinite 0.8s; }
    #hero-o3 { animation: orb-a 8s ease-in-out infinite 2s; }
    #hero-o4 { animation: orb-b 13s ease-in-out infinite 0.4s; }
    #hero-o5 { animation: orb-c 7s ease-in-out infinite 1.2s; }
    #hr1 { animation: ring-blink 8s ease-in-out infinite; }
    #hr2 { animation: ring-blink 8s ease-in-out infinite 1.4s; }
    #hr3 { animation: ring-blink-b 8s ease-in-out infinite 2.8s; }
    #hr4 { animation: ring-blink-b 8s ease-in-out infinite 4.2s; }
    #hr5 { animation: ring-blink-b 10s ease-in-out infinite 5.6s; }
    #hero-dot { animation: dot-spin 20s linear infinite; }
  `}</style>

  <svg width="800" height="360" style={{ position: 'absolute', top: 0, left: 0 }}>
    <defs>
      <radialGradient id="hg1" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(108,195,130,0.55)" />
        <stop offset="100%" stopColor="rgba(108,195,130,0)" />
      </radialGradient>
      <radialGradient id="hg2" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(230,100,115,0.5)" />
        <stop offset="100%" stopColor="rgba(230,100,115,0)" />
      </radialGradient>
      <radialGradient id="hg3" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(195,155,255,0.35)" />
        <stop offset="100%" stopColor="rgba(195,155,255,0)" />
      </radialGradient>
      <radialGradient id="hg4" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(255,195,110,0.28)" />
        <stop offset="100%" stopColor="rgba(255,195,110,0)" />
      </radialGradient>
      <radialGradient id="hg5" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(80,160,220,0.3)" />
        <stop offset="100%" stopColor="rgba(80,160,220,0)" />
      </radialGradient>
    </defs>
    <ellipse id="hero-o1" cx="110" cy="310" rx="260" ry="200" fill="url(#hg1)" />
    <ellipse id="hero-o2" cx="710" cy="70" rx="230" ry="190" fill="url(#hg2)" />
    <ellipse id="hero-o3" cx="620" cy="330" rx="200" ry="160" fill="url(#hg3)" />
    <ellipse id="hero-o4" cx="200" cy="55" rx="190" ry="150" fill="url(#hg4)" />
    <ellipse id="hero-o5" cx="400" cy="340" rx="170" ry="130" fill="url(#hg5)" />
    <circle id="hr1" cx="400" cy="178" r="52"  fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="0.7" />
    <circle id="hr2" cx="400" cy="178" r="92"  fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="0.7" />
    <circle id="hr3" cx="400" cy="178" r="138" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="0.7" />
    <circle id="hr4" cx="400" cy="178" r="192" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="0.7" />
    <circle id="hr5" cx="400" cy="178" r="256" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="0.7" />
    <g id="hero-dot">
      <circle cx="400" cy="126" r="2.5" fill="rgba(255,255,255,0.5)" />
    </g>
  </svg>

  <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}>
    <span style={{ fontSize: 60, fontWeight: 700, color: '#ffffff', letterSpacing: -2, lineHeight: 1 }}>Karan Marathe</span>
    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginTop: 16, letterSpacing: 5, textTransform: 'uppercase', fontWeight: 300 }}>build · scale · intelligent</span>
    <div style={{ display: 'flex', gap: 8, marginTop: 30 }}>
      <span style={{ padding: '5px 16px', background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.55)', borderRadius: 100, fontSize: 11, border: '1px solid rgba(255,255,255,0.09)', letterSpacing: 1 }}>applied ml</span>
      <span style={{ padding: '5px 16px', background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.55)', borderRadius: 100, fontSize: 11, border: '1px solid rgba(255,255,255,0.09)', letterSpacing: 1 }}>full stack</span>
      <span style={{ padding: '5px 16px', background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.55)', borderRadius: 100, fontSize: 11, border: '1px solid rgba(255,255,255,0.09)', letterSpacing: 1 }}>ai systems</span>
    </div>
  </div>
</div>
```

<br/>

<p align="center">
  <img src="https://komarev.com/ghpvc/?username=kmarathe&style=flat-square&color=black&labelColor=333333&label=PROFILE+VIEWS" />
  <img src="https://img.shields.io/badge/★_STARS-5-black?style=flat-square&labelColor=333333" />
  <img src="https://img.shields.io/github/followers/kmarathe?style=flat-square&color=black&labelColor=333333&label=👥_FOLLOWERS" />
</p>

---

<img align="left" width="130" src="https://media.giphy.com/media/A7p8Pz2Jrwvks/giphy.gif" style="margin-right: 25px; margin-bottom: 15px;" />

### Quem Sou Eu? / Who am I?

Hi, I'm **Karan Marathe** — a passionate **Full Stack Developer** and **Applied ML Engineer** focused on building scalable, intelligent, and high-performance digital products.

I enjoy combining modern frontend engineering with powerful backend systems and **AI capabilities** to create production-ready applications with meaningful user experiences.

<br clear="left" />

---

<img align="right" width="105" src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZW95cTRnOXM1dTc1YTFwNjRkcGNkN2RqYjdhdTB3NTc3NDFiNjFxYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/h58dtf5vTpjulO4M5o/giphy.gif" style="margin-left: 25px; margin-bottom: 15px;" />

### 👤 Um Pouco Mais Sobre Mim / A Little More About Me

* ☑️ I love surrounding myself with experienced developers who challenge me to grow.
* ☑️ Currently building high-performance systems with React, TypeScript & AI.
* ☑️ Always open to collaborating on open-source projects or mentoring.
* ☑️ Passionate about large-scale problems that push cognitive limits.
* ☑️ Minimalist at heart, focused on clean architecture and micro-optimizations.

<br/>

<p align="left">
  <a href="mailto:karanmarathe32@gmail.com"><img src="https://img.icons8.com/color/48/gmail-new.png" width="30" height="30" style="margin-right: 12px;" /></a>
  <a href="https://www.linkedin.com/in/karanmarathe07/"><img src="https://img.icons8.com/color/48/linkedin.png" width="30" height="30" style="margin-right: 12px;" /></a>
  <a href="https://github.com/karanmarathe07"><img src="https://img.icons8.com/ios-glyphs/90/ffffff/github.png" width="30" height="30" style="margin-right: 12px;" /></a>
  <a href="https://open.spotify.com"><img src="https://img.icons8.com/color/48/spotify.png" width="30" height="30" style="margin-right: 12px;" /></a>
</p>

<br clear="right" />

---

```aura width=800 height=200
<div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', background: '#08080d', borderRadius: 20, overflow: 'hidden', fontFamily: 'Inter, sans-serif' }}>
  <style>{`
    @keyframes stack-orb { 0%, 100% { transform: translate(0,0); opacity: 0.45; } 50% { transform: translate(18px,-14px); opacity: 0.7; } }
    @keyframes stack-orb-b { 0%, 100% { transform: translate(0,0); opacity: 0.4; } 50% { transform: translate(-14px,10px); opacity: 0.65; } }
    @keyframes chip-appear { 0% { opacity: 0; transform: translateY(8px); } 100% { opacity: 1; transform: translateY(0); } }
    #st-o1 { animation: stack-orb 10s ease-in-out infinite; }
    #st-o2 { animation: stack-orb-b 12s ease-in-out infinite 1s; }
    #st-o3 { animation: stack-orb 9s ease-in-out infinite 2.5s; }
    #st-o4 { animation: stack-orb-b 11s ease-in-out infinite 0.5s; }
  `}</style>
  <svg width="800" height="200" style={{ position: 'absolute', top: 0, left: 0 }}>
    <defs>
      <radialGradient id="sg1" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(108,195,130,0.4)" />
        <stop offset="100%" stopColor="rgba(108,195,130,0)" />
      </radialGradient>
      <radialGradient id="sg2" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(230,100,115,0.35)" />
        <stop offset="100%" stopColor="rgba(230,100,115,0)" />
      </radialGradient>
      <radialGradient id="sg3" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(80,160,220,0.3)" />
        <stop offset="100%" stopColor="rgba(80,160,220,0)" />
      </radialGradient>
      <radialGradient id="sg4" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(195,155,255,0.3)" />
        <stop offset="100%" stopColor="rgba(195,155,255,0)" />
      </radialGradient>
    </defs>
    <ellipse id="st-o1" cx="80"  cy="160" rx="160" ry="120" fill="url(#sg1)" />
    <ellipse id="st-o2" cx="730" cy="50"  rx="150" ry="120" fill="url(#sg2)" />
    <ellipse id="st-o3" cx="640" cy="170" rx="140" ry="110" fill="url(#sg3)" />
    <ellipse id="st-o4" cx="180" cy="40"  rx="130" ry="100" fill="url(#sg4)" />
  </svg>
  <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 20, zIndex: 10 }}>stack</span>
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', zIndex: 10, maxWidth: 680 }}>
    {['React', 'Next.js', 'Node.js', 'Express', 'TypeScript', 'Python', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'Tailwind'].map((tech, i) => (
      <span key={i} style={{ padding: '7px 18px', background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.65)', borderRadius: 100, fontSize: 12, border: '1px solid rgba(255,255,255,0.08)', letterSpacing: 0.5 }}>{tech}</span>
    ))}
  </div>
</div>
```

---

# 🚀 Featured Projects

## 🎙️ Edith — AI Voice Assistant

> Multimodal AI assistant powered by Google Gemini Live API with real-time voice, vision, gesture, and autonomous system interaction.

### ✨ Features

- 🎤 Real-time Voice Interaction
- 👁️ Vision + Gesture Recognition
- 🧠 Persistent AI Memory
- 🔐 Face ID Authentication
- ⚡ Workflow Automation
- 🚀 Sub-200ms Voice Response Latency

### 🛠️ Tech Used

`React` `TypeScript` `Gemini API` `AI Systems`

---

## 🏡 Real Estate Price Prediction System

> AI-powered machine learning system designed for scalable predictive analytics.

### ✨ Highlights

- 📈 Achieved **91% R² Accuracy**
- ⚙️ Optimized ML Pipelines
- 📊 Reduced RMSE significantly
- 🧠 Feature Engineering
- 🔄 Large-scale Synthetic Data Generation

### 🛠️ Tech Used

`Python` `Scikit-learn` `Pandas` `NumPy`

---

## 🌌 Naxshtra AI

> Modern high-performance AI website built with scalable frontend architecture and premium UI design.

### ✨ Features

- ⚡ 98/100 Lighthouse Score
- 🎨 Modern UI/UX
- 🚀 Optimized Performance
- 📱 Responsive Design
- 💎 Premium Interface

### 🛠️ Tech Used

`React` `TypeScript` `Tailwind CSS` `Vite`

🔗 https://naxshtraai.vercel.app/

---

# 💼 Experience

## 🚀 Applied ML Intern — Uplyx Solutions

- Built AI-powered predictive systems using Python
- Engineered ML pipelines with scalable architecture
- Improved model accuracy using feature engineering
- Optimized preprocessing workflows and evaluation systems

---

## 💻 Software Development Intern — NPIT

- Build responsive frontend interfaces
- Worked with Git/GitHub workflows
- Implemented CI/CD concepts
- Improved development collaboration and deployment efficiency

---

# 📊 GitHub Analytics

<div align="center">

<img width="49%" src="https://github-readme-stats.vercel.app/api?username=kmarathe&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0D1117"/>

<img width="49%" src="https://streak-stats.demolab.com?user=kmarathe&theme=tokyonight&hide_border=true&background=0D1117"/>

<br/><br/>

<img width="98%" src="https://github-readme-activity-graph.vercel.app/graph?username=kmarathe&theme=tokyo-night&hide_border=true&area=true"/>

</div>

---

<div align="center">

# 💭 Developer Philosophy

> *"Technology creates real impact when intelligence, scalability, and user experience come together."*

</div>

---

<div align="center">

<img width="100%" src="https://raw.githubusercontent.com/karanmarathe07/karanmarathe07/main/assets/Footer.png"/>

</div>
