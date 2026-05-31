```aura width=1000 height=320
<div style={{ position: 'relative', display: 'flex', flexDirection: 'row', width: '100%', height: '100%', background: '#f5f4f0', border: '1px solid #dcdad4', padding: 0, boxSizing: 'border-box', fontFamily: 'Inter, sans-serif', overflow: 'hidden' }}>

  {/* Binder ring holes */}
  <div style={{ display: 'flex', flexDirection: 'column', width: 30, height: '100%', borderRight: '1px dashed #d0cfcb', alignItems: 'center', justifyContent: 'space-around', padding: '12px 0', background: '#eae7e1', flexShrink: 0 }}>
    {[...Array(7)].map((_, i) => (
      <div key={i} style={{ width: 8, height: 8, borderRadius: 4, background: '#1c1c1c', opacity: 0.85 }} />
    ))}
  </div>

  {/* Main content */}
  <div style={{ display: 'flex', flexDirection: 'row', flex: 1, height: '100%', padding: '16px 20px', boxSizing: 'border-box', justifyContent: 'space-between', position: 'relative' }}>
    
    {/* Left — taped note + feature list */}
    <div style={{ display: 'flex', flexDirection: 'column', width: 230, flexShrink: 0 }}>
      <div style={{ display: 'flex', flexDirection: 'column', background: '#ffffff', padding: '12px 14px', borderRadius: 4, border: '1px solid #e1e0db', boxShadow: '2px 4px 8px rgba(0,0,0,0.04)', transform: 'rotate(-2deg)', marginBottom: 16, position: 'relative' }}>
        <div style={{ position: 'absolute', top: -6, left: 12, width: 45, height: 12, background: 'rgba(218,215,205,0.4)', transform: 'rotate(-12deg)', border: '1px dashed rgba(0,0,0,0.08)' }} />
        <span style={{ fontFamily: 'Inter, sans-serif', fontStyle: 'italic', fontSize: 11, color: '#333333', lineHeight: 1.35 }}>Passionate about building AI powered products that solve real world problems and create impact.</span>
      </div>

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

    {/* Center — name + role + description + tech icons */}
    <div style={{ display: 'flex', flexDirection: 'column', width: 440, paddingLeft: 10, boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: 44, color: '#1a1a1a', fontWeight: 'bold', lineHeight: 1, letterSpacing: -1 }}>Karan</span>
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 25, marginTop: -4 }}>
          <span style={{ fontSize: 48, color: '#487f54', fontWeight: 'bold', lineHeight: 0.9 }}>Marathe</span>
          <div style={{ width: 145, height: 3, background: '#487f54', borderRadius: 2, marginTop: -2 }} />
        </div>
      </div>

      <div style={{ display: 'flex', alignSelf: 'flex-start', background: '#ede8dc', padding: '3px 10px', border: '1px dashed rgba(0,0,0,0.15)', borderRadius: 2, marginTop: 8, marginBottom: 8 }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: '#1a1a1a', letterSpacing: 1.2 }}>AI & FULL-STACK DEVELOPER</span>
      </div>

      <span style={{ fontSize: 11.5, color: '#444444', lineHeight: 1.4, marginBottom: 12 }}>Building intelligent, scalable and human-centric digital experiences using <span style={{ color: '#487f54', fontWeight: 600 }}>AI</span>, <span style={{ color: '#487f54', fontWeight: 600 }}>modern web technologies</span> and <span style={{ color: '#487f54', fontWeight: 600 }}>cloud</span>.</span>

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

    {/* Separator */}
    <div style={{ width: 1, height: '80%', background: '#d0cfcb', margin: '4% 10px 0 10px' }} />

    {/* Right — contact + code snippet + checklist */}
    <div style={{ display: 'flex', flexDirection: 'column', width: 230, position: 'relative' }}>
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
          <span style={{ fontSize: 9, color: '#333333' }}>github.com/karanmarathe07</span>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', background: '#1c1c1c', borderRadius: 4, padding: '10px 12px', border: '1px solid #333333', boxShadow: '2px 4px 10px rgba(0,0,0,0.15)', transform: 'rotate(1.5deg)', width: '100%', boxSizing: 'border-box' }}>
        <span style={{ fontFamily: 'monospace', fontSize: 8, color: '#a78bfa', marginBottom: 4 }}>// BUILD · IMPACT</span>
        <div style={{ display: 'flex', flexDirection: 'column', fontFamily: 'monospace', fontSize: 7, color: '#eaeaea', gap: 2 }}>
          <span>const dev = {'{'}</span>
          <span style={{ paddingLeft: 8 }}>name: "Karan",</span>
          <span style={{ paddingLeft: 8 }}>role: "Fullstack",</span>
          <span style={{ paddingLeft: 8 }}>focus: ["AI", "Cloud"]</span>
          <span>{'}'};</span>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', background: '#ffffff', border: '1px solid #e1e0db', padding: '6px 8px', borderRadius: 2, boxShadow: '2px 2px 5px rgba(0,0,0,0.05)', transform: 'rotate(-3deg)', position: 'absolute', bottom: -5, right: -5 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {['AI · FULL STACK', 'CLOUD · DEVOPS', 'MODERN WEB'].map((t, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ width: 8, height: 8, border: '1px solid #487f54', borderRadius: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 4, background: 'rgba(72,127,84,0.08)' }}>
                <svg width="5" height="5" viewBox="0 0 8 8" fill="none"><path d="M1 4L3 6L7 2" stroke="#487f54" strokeWidth="2" /></svg>
              </div>
              <span style={{ fontSize: 7.5, fontWeight: 700, color: '#1a1a1a' }}>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

  </div>
</div>
```
