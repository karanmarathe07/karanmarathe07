```aura width=1000 height=320
<div style={{ position: 'relative', display: 'flex', flexDirection: 'row', width: '100%', height: '100%', background: '#f5f4f0', border: '1px solid #dcdad4', padding: 0, boxSizing: 'border-box', fontFamily: 'Inter, sans-serif', overflow: 'hidden' }}>
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Caveat:wght@700&family=Fira+Code:wght@400&family=Inter:wght@400;600;700&display=swap');
  `}</style>

  {/* Binder ring hole strip on left edge */}
  <div style={{ display: 'flex', flexDirection: 'column', width: 30, height: '100%', borderRight: '1px dashed #d0cfcb', alignItems: 'center', justifyContent: 'space-around', padding: '12px 0', background: '#eae7e1', flexShrink: 0 }}>
    {[...Array(7)].map((_, i) => (
      <div key={i} style={{ width: 8, height: 8, borderRadius: 4, background: '#1c1c1c', opacity: 0.85 }} />
    ))}
  </div>

  {/* Main content area */}
  <div style={{ display: 'flex', flexDirection: 'row', flex: 1, height: '100%', padding: '16px 20px', boxSizing: 'border-box', justifyContent: 'space-between', position: 'relative' }}>
    
    {/* Left column */}
    <div style={{ display: 'flex', flexDirection: 'column', width: 230, flexShrink: 0 }}>
      {/* Taped paper note */}
      <div style={{ display: 'flex', flexDirection: 'column', background: '#ffffff', padding: '12px 14px', borderRadius: 4, border: '1px solid #e1e0db', boxShadow: '2px 4px 8px rgba(0,0,0,0.04)', transform: 'rotate(-2deg)', marginBottom: 16, position: 'relative' }}>
        {/* Tape top-left */}
        <div style={{ position: 'absolute', top: -6, left: 12, width: 45, height: 12, background: 'rgba(218,215,205,0.4)', transform: 'rotate(-12deg)', border: '1px dashed rgba(0,0,0,0.08)' }} />
        {/* Tape bottom-right */}
        <div style={{ position: 'absolute', bottom: -6, right: 12, width: 45, height: 12, background: 'rgba(218,215,205,0.4)', transform: 'rotate(-12deg)', border: '1px dashed rgba(0,0,0,0.08)' }} />
        <span style={{ fontFamily: 'Architects Daughter, cursive', fontSize: 11, color: '#333333', lineHeight: 1.35 }}>
          Passionate about building AI powered products that solve real world problems and create impact.
        </span>
      </div>

      {/* Feature list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="https://img.icons8.com/color/48/brain.png" width={18} height={18} style={{ marginRight: 8, flexShrink: 0 }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 9, fontWeight: 700, color: '#1a1a1a', letterSpacing: 0.5 }}>AI & ML SOLUTIONS</span>
            <span style={{ fontSize: 8, color: '#666666' }}>Intelligent models that solve real problems.</span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="https://img.icons8.com/color/48/code.png" width={18} height={18} style={{ marginRight: 8, flexShrink: 0 }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 9, fontWeight: 700, color: '#1a1a1a', letterSpacing: 0.5 }}>FULL STACK DEVELOPMENT</span>
            <span style={{ fontSize: 8, color: '#666666' }}>Scalable web apps with modern technologies.</span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="https://img.icons8.com/color/48/cloud.png" width={18} height={18} style={{ marginRight: 8, flexShrink: 0 }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 9, fontWeight: 700, color: '#1a1a1a', letterSpacing: 0.5 }}>CLOUD & DEVOPS</span>
            <span style={{ fontSize: 8, color: '#666666' }}>Reliable, secure and production ready systems.</span>
          </div>
        </div>
      </div>
    </div>

    {/* Center column */}
    <div style={{ display: 'flex', flexDirection: 'column', width: 440, paddingLeft: 10, boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontFamily: 'Caveat, cursive', fontSize: 44, color: '#1a1a1a', fontWeight: 'bold', lineHeight: 1, letterSpacing: -1 }}>Karan</span>
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 25, marginTop: -4 }}>
          <span style={{ fontFamily: 'Caveat, cursive', fontSize: 48, color: '#487f54', fontWeight: 'bold', lineHeight: 0.9 }}>Marathe</span>
          <div style={{ width: 145, height: 3, background: '#487f54', borderRadius: 2, marginTop: -2 }} />
        </div>
      </div>

      {/* Role tag */}
      <div style={{ display: 'flex', alignSelf: 'flex-start', background: '#ede8dc', padding: '3px 10px', border: '1px dashed rgba(0,0,0,0.15)', borderRadius: 2, marginTop: 8, marginBottom: 8 }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: '#1a1a1a', letterSpacing: 1.2 }}>AI & FULL-STACK DEVELOPER</span>
      </div>

      {/* Description */}
      <span style={{ fontSize: 11.5, color: '#444444', lineHeight: 1.4, marginBottom: 12 }}>
        Building intelligent, scalable and human-centric digital experiences using <span style={{ color: '#487f54', fontWeight: 600 }}>AI</span>, <span style={{ color: '#487f54', fontWeight: 600 }}>modern web technologies</span> and <span style={{ color: '#487f54', fontWeight: 600 }}>cloud</span>.
      </span>

      {/* Tech Stack ribbon */}
      <div style={{ display: 'flex', background: '#ffffff', borderRadius: 6, padding: '5px 8px', border: '1px solid #e1e0db', gap: 8, alignItems: 'center', alignSelf: 'flex-start' }}>
        <img src="https://img.icons8.com/color/48/react-native.png" width={14} height={14} />
        <img src="https://img.icons8.com/color/48/nextjs.png" width={14} height={14} />
        <img src="https://img.icons8.com/color/48/javascript.png" width={14} height={14} />
        <img src="https://img.icons8.com/color/48/typescript.png" width={14} height={14} />
        <img src="https://img.icons8.com/color/48/nodejs.png" width={14} height={14} />
        <img src="https://img.icons8.com/color/48/python.png" width={14} height={14} />
        <img src="https://img.icons8.com/color/48/postgreesql.png" width={14} height={14} />
        <img src="https://img.icons8.com/color/48/amazon-web-services.png" width={14} height={14} />
        <img src="https://img.icons8.com/color/48/docker.png" width={14} height={14} />
        <img src="https://img.icons8.com/color/48/kubernetes.png" width={14} height={14} />
        <img src="https://img.icons8.com/color/48/git.png" width={14} height={14} />
      </div>
    </div>

    {/* Separator line */}
    <div style={{ width: 1, height: '80%', background: '#d0cfcb', margin: '4% 10px 0 10px' }} />

    {/* Right column */}
    <div style={{ display: 'flex', flexDirection: 'column', width: 230, position: 'relative' }}>
      
      {/* Contact info list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="https://img.icons8.com/color/48/phone.png" width={11} height={11} style={{ marginRight: 6 }} />
          <span style={{ fontSize: 9, color: '#333333' }}>+91 9373921866</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="https://img.icons8.com/color/48/gmail-new.png" width={11} height={11} style={{ marginRight: 6 }} />
          <span style={{ fontSize: 9, color: '#333333' }}>karanmarathe32@gmail.com</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="https://img.icons8.com/color/48/linkedin.png" width={11} height={11} style={{ marginRight: 6 }} />
          <span style={{ fontSize: 9, color: '#333333' }}>linkedin.com/in/karanmarathe32</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="https://img.icons8.com/ios-glyphs/90/000000/github.png" width={11} height={11} style={{ marginRight: 6 }} />
          <span style={{ fontSize: 9, color: '#333333' }}>github.com/karanmarathe32</span>
        </div>
      </div>

      {/* Code snippet paper scrap */}
      <div style={{ display: 'flex', flexDirection: 'column', background: '#1c1c1c', borderRadius: 4, padding: '10px 12px', border: '1px solid #333333', boxShadow: '2px 4px 10px rgba(0,0,0,0.15)', transform: 'rotate(1.5deg)', width: '100%', boxSizing: 'border-box' }}>
        {/* Silver paperclip at top */}
        <div style={{ position: 'absolute', top: -5, left: '40%', width: 20, height: 8, border: '2px solid #b5b5b5', borderBottom: 'none', borderRadius: '4px 4px 0 0' }} />
        
        <span style={{ fontFamily: 'Fira Code, monospace', fontSize: 8, color: '#a78bfa', marginBottom: 4 }}>// BUILD · IMPACT</span>
        <div style={{ display: 'flex', flexDirection: 'column', fontFamily: 'Fira Code, monospace', fontSize: 7, color: '#eaeaea', gap: 2 }}>
          <span>const dev = {'{'}</span>
          <span style={{ paddingLeft: 8 }}>name: "Karan",</span>
          <span style={{ paddingLeft: 8 }}>role: "Fullstack",</span>
          <span style={{ paddingLeft: 8 }}>focus: ["AI", "Cloud"]</span>
          <span>{'}'};</span>
        </div>
      </div>

      {/* Pinned checklist at bottom right */}
      <div style={{ display: 'flex', flexDirection: 'column', background: '#ffffff', border: '1px solid #e1e0db', padding: '6px 8px', borderRadius: 2, boxShadow: '2px 2px 5px rgba(0,0,0,0.05)', transform: 'rotate(-3deg)', position: 'absolute', bottom: -5, right: -5 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: 8, height: 8, border: '1px solid #487f54', borderRadius: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 4, background: 'rgba(72,127,84,0.08)' }}>
              <svg width="5" height="5" viewBox="0 0 8 8" fill="none"><path d="M1 4L3 6L7 2" stroke="#487f54" strokeWidth="2" /></svg>
            </div>
            <span style={{ fontFamily: 'Architects Daughter, cursive', fontSize: 7.5, fontWeight: 700, color: '#1a1a1a' }}>AI · FULL STACK</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: 8, height: 8, border: '1px solid #487f54', borderRadius: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 4, background: 'rgba(72,127,84,0.08)' }}>
              <svg width="5" height="5" viewBox="0 0 8 8" fill="none"><path d="M1 4L3 6L7 2" stroke="#487f54" strokeWidth="2" /></svg>
            </div>
            <span style={{ fontFamily: 'Architects Daughter, cursive', fontSize: 7.5, fontWeight: 700, color: '#1a1a1a' }}>CLOUD · DEVOPS</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: 8, height: 8, border: '1px solid #487f54', borderRadius: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 4, background: 'rgba(72,127,84,0.08)' }}>
              <svg width="5" height="5" viewBox="0 0 8 8" fill="none"><path d="M1 4L3 6L7 2" stroke="#487f54" strokeWidth="2" /></svg>
            </div>
            <span style={{ fontFamily: 'Architects Daughter, cursive', fontSize: 7.5, fontWeight: 700, color: '#1a1a1a' }}>MODERN WEB</span>
          </div>
        </div>
      </div>

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
