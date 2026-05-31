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

```aura width=800 height=480
<div style={{ position: 'relative', display: 'flex', flexDirection: 'column', width: '100%', height: '100%', background: '#08080d', borderRadius: 20, border: '1px solid rgba(255, 255, 255, 0.08)', padding: '24px 32px', boxSizing: 'border-box', fontFamily: 'Inter, sans-serif', overflow: 'hidden' }}>
  <style>{`
    @keyframes floating {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
    }
    @keyframes pulsing {
      0%, 100% { opacity: 0.8; }
      50% { opacity: 1; }
    }
    #hk-char { animation: floating 5s ease-in-out infinite; }
    #pixel-char { animation: floating 4s ease-in-out infinite 0.5s; }
  `}</style>

  {/* Header Stats bar */}
  <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 20 }}>
    <div style={{ display: 'flex', background: '#11111b', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 6, overflow: 'hidden', fontSize: 11, fontWeight: 600 }}>
      <span style={{ color: 'rgba(255,255,255,0.4)', padding: '6px 12px', background: '#161622', textTransform: 'uppercase', letterSpacing: 1 }}>Profile Views</span>
      <span style={{ color: '#a78bfa', padding: '6px 12px', background: '#11111b' }}>1,091</span>
    </div>
    <div style={{ display: 'flex', background: '#11111b', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 6, overflow: 'hidden', fontSize: 11, fontWeight: 600 }}>
      <span style={{ color: 'rgba(255,255,255,0.4)', padding: '6px 12px', background: '#161622', textTransform: 'uppercase', letterSpacing: 1 }}>★ Stars</span>
      <span style={{ color: '#a78bfa', padding: '6px 12px', background: '#11111b' }}>5</span>
    </div>
    <div style={{ display: 'flex', background: '#11111b', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 6, overflow: 'hidden', fontSize: 11, fontWeight: 600 }}>
      <span style={{ color: 'rgba(255,255,255,0.4)', padding: '6px 12px', background: '#161622', textTransform: 'uppercase', letterSpacing: 1 }}>👥 Followers</span>
      <span style={{ color: '#a78bfa', padding: '6px 12px', background: '#11111b' }}>5</span>
    </div>
  </div>

  {/* Section 1: Who am I */}
  <div style={{ display: 'flex', flexDirection: 'row', gap: 24, width: '100%', alignItems: 'center', marginBottom: 20 }}>
    <div style={{ display: 'flex', width: 120, justifyContent: 'center', flexShrink: 0 }}>
      <img id="hk-char" src="https://media.giphy.com/media/A7p8Pz2Jrwvks/giphy.gif" width={110} height={110} style={{ width: 110, height: 110, objectFit: 'contain' }} />
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <span style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', letterSpacing: 0.5, marginBottom: 8, textTransform: 'uppercase', color: '#a78bfa' }}>Who am I?</span>
      <div style={{ display: 'flex', flexWrap: 'wrap', fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>
        Hi, I'm <span style={{ fontWeight: 600, color: '#ffffff' }}>Karan Marathe</span>. I am a <span style={{ background: 'rgba(255,255,255,0.06)', padding: '1px 6px', borderRadius: 4, color: '#ffffff', border: '1px solid rgba(255,255,255,0.08)' }}>Full Stack Developer</span> and <span style={{ background: 'rgba(255,255,255,0.06)', padding: '1px 6px', borderRadius: 4, color: '#ffffff', border: '1px solid rgba(255,255,255,0.08)' }}>Applied ML Engineer</span> focused on building scalable, intelligent, and high-performance digital products. I combine modern frontend engineering with powerful backend systems and <span style={{ background: 'rgba(255,255,255,0.06)', padding: '1px 6px', borderRadius: 4, color: '#ffffff', border: '1px solid rgba(255,255,255,0.08)' }}>AI capabilities</span> to create seamless, production-ready experiences.
      </div>
    </div>
  </div>

  {/* Divider */}
  <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: 20 }}></div>

  {/* Section 2: Checklist & Bottom part */}
  <div style={{ display: 'flex', flexDirection: 'row', gap: 24, width: '100%', flex: 1 }}>
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" style={{ marginRight: 8 }}>
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
        <span style={{ fontSize: 15, fontWeight: 700, color: '#ffffff', letterSpacing: 0.5 }}>A Little More About Me</span>
      </div>

      {/* Checklist items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {[
          'I love surrounding myself with experienced developers who challenge me to grow.',
          'Currently building high-performance systems with React, TypeScript & AI.',
          'Always open to collaborating on open-source projects or mentoring.',
          'Passionate about large-scale problems that push cognitive limits.',
          'Minimalist at heart, focused on clean architecture and micro-optimizations.'
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: 14, height: 14, border: '1.5px solid #a78bfa', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 10, background: 'rgba(167, 139, 250, 0.08)', flexShrink: 0 }}>
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <path d="M1 4L3 6L7 2" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span style={{ fontSize: 12.5, color: 'rgba(255, 255, 255, 0.75)' }}>{item}</span>
          </div>
        ))}
      </div>

      {/* Mini Brand Icons */}
      <div style={{ display: 'flex', gap: 12, marginTop: 20, alignItems: 'center' }}>
        <img src="https://img.icons8.com/color/48/gmail-new.png" width={18} height={18} style={{ width: 18, height: 18 }} />
        <img src="https://img.icons8.com/color/48/linkedin.png" width={18} height={18} style={{ width: 18, height: 18 }} />
        <img src="https://img.icons8.com/color/48/spotify.png" width={18} height={18} style={{ width: 18, height: 18 }} />
        <img src="https://img.icons8.com/ios-glyphs/90/ffffff/github.png" width={18} height={18} style={{ width: 18, height: 18 }} />
      </div>
    </div>

    {/* Right animated character */}
    <div style={{ display: 'flex', width: 140, justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}>
      <img id="pixel-char" src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZW95cTRnOXM1dTc1YTFwNjRkcGNkN2RqYjdhdTB3NTc3NDFiNjFxYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/h58dtf5vTpjulO4M5o/giphy.gif" width={85} height={85} style={{ width: 85, height: 85, objectFit: 'contain' }} />
    </div>
  </div>
</div>
```

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

```aura width=120 height=44 link="https://github.com/karanmarathe07" inline align=center
<SocialMediaButton
  icon="https://cdn.simpleicons.org/github/ffffff"
  text="GitHub"
  backgroundColor="#141414"
  width={120}
  height={44}
  gradientStops={[
    { offset: '0%', color: '#ffffff' },
    { offset: '10%', color: '#111111' },
    { offset: '50%', color: '#eeeeee' },
    { offset: '60%', color: '#ffffff' },
    { offset: '80%', color: '#111111' },
    { offset: '100%', color: '#555555' },
  ]}
/>
```

```aura width=138 height=44 link="https://www.linkedin.com/in/karanmarathe07/" inline align=center
<SocialMediaButton
  icon="https://img.icons8.com/ios-glyphs/90/ffffff/linkedin.png"
  text="LinkedIn"
  backgroundColor="#0a2540"
  width={138}
  height={44}
  gradientStops={[
    { offset: '0%', color: '#ffffff' },
    { offset: '10%', color: '#111111' },
    { offset: '50%', color: '#eeeeee' },
    { offset: '60%', color: '#0A66C2' },
    { offset: '80%', color: '#111111' },
    { offset: '100%', color: '#002f6c' },
  ]}
/>
```

```aura width=120 height=44 link="mailto:karanmarathe32@gmail.com" inline align=center
<SocialMediaButton
  icon="https://cdn.simpleicons.org/gmail/ffffff"
  text="Email"
  backgroundColor="#2b0a0a"
  width={120}
  height={44}
  gradientStops={[
    { offset: '0%', color: '#ffffff' },
    { offset: '10%', color: '#111111' },
    { offset: '50%', color: '#eeeeee' },
    { offset: '60%', color: '#EA4335' },
    { offset: '80%', color: '#111111' },
    { offset: '100%', color: '#555555' },
  ]}
/>
```

<br/>

<div align="center">

<img src="https://img.shields.io/github/followers/kmarathe?style=for-the-badge&logo=github&color=A78BFA&labelColor=0D1117"/>

<img src="https://komarev.com/ghpvc/?username=kmarathe&style=for-the-badge&color=A78BFA&label=Profile+Views"/>

<img src="https://img.shields.io/badge/Open%20To-Collaboration-A78BFA?style=for-the-badge&labelColor=0D1117"/>

<img src="https://img.shields.io/badge/Focused%20On-AI%20%26%20FullStack-A78BFA?style=for-the-badge&labelColor=0D1117"/>

</div>

---

# 👨‍💻 About Me

Hi, I'm **Karan Marathe** — a passionate **Full Stack Developer** and **Applied ML Engineer** focused on building scalable, intelligent, and high-performance digital products.

I enjoy combining modern frontend engineering with powerful backend systems and AI capabilities to create production-ready applications with meaningful user experiences.

Currently exploring:

- ☁️ Cloud Computing & AWS
- ⚙️ DevOps & CI/CD
- 🔐 Cloud Security (CloudSec)
- 🤖 AI-Powered Systems
- 🧠 Scalable Backend Architecture
- 🚀 Real-Time Intelligent Applications

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
