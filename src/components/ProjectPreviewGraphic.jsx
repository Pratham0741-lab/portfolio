import React from 'react';

/**
 * ProjectPreviewGraphic Component
 * 
 * Renders high-contrast, elegant abstract UI wireframe placeholders matching the
 * visual structure and contrast of the reference mockup, without hardcoding
 * any proprietary/fake company details.
 * 
 * Contains comment: {/* replace with actual project screenshot/video *\/}
 */
export function ProjectPreviewGraphic({ projectId, accentColor }) {
  // Common browser header for abstract mockup windows
  const renderBrowserHeader = (urlPath, isDark = false) => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '9px 14px',
        backgroundColor: isDark ? 'rgba(255, 255, 255, 0.06)' : '#EDE7DE',
        borderBottom: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'}`,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#FF5F56' }} />
        <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
        <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#27C93F' }} />
      </div>
      <div
        style={{
          fontSize: '0.6875rem',
          fontFamily: 'monospace',
          color: isDark ? 'rgba(255, 255, 255, 0.5)' : '#7A7268',
          backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : '#FAF8F5',
          padding: '2px 16px',
          borderRadius: '12px',
          border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'}`,
        }}
      >
        {urlPath}
      </div>
      <div style={{ width: '38px', height: '6px', borderRadius: '3px', backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)' }} />
    </div>
  );

  // Watermark note at bottom
  const renderWatermark = (isDark = false) => (
    <div
      style={{
        padding: '6px 14px',
        borderTop: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '0.6875rem',
        fontFamily: 'monospace',
        color: isDark ? 'rgba(255, 255, 255, 0.4)' : '#8C8478',
        backgroundColor: isDark ? 'rgba(0, 0, 0, 0.2)' : '#F5F1EA',
      }}
    >
      <span>{/* replace with actual project screenshot/video */}</span>
      <span>Screenshot / Video Placeholder</span>
    </div>
  );

  // Preview 1: Learning Platform Dashboard Wireframe (Crisp Light Card)
  if (projectId === 1) {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#FCFAF7',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          color: '#1A1210',
        }}
      >
        {renderBrowserHeader('project-one.local/overview', false)}

        <div style={{ padding: '16px 20px', flex: 1, display: 'flex', gap: '16px' }}>
          {/* Faux Sidebar */}
          <div
            style={{
              width: '90px',
              borderRight: '1px solid rgba(0, 0, 0, 0.06)',
              paddingRight: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <div style={{ width: '100%', height: '18px', backgroundColor: accentColor, borderRadius: '4px', opacity: 0.85 }} />
            <div style={{ width: '80%', height: '10px', backgroundColor: '#E4DDD2', borderRadius: '3px' }} />
            <div style={{ width: '70%', height: '10px', backgroundColor: '#E4DDD2', borderRadius: '3px' }} />
            <div style={{ width: '85%', height: '10px', backgroundColor: '#E4DDD2', borderRadius: '3px' }} />
            <div style={{ width: '60%', height: '10px', backgroundColor: '#E4DDD2', borderRadius: '3px' }} />
          </div>

          {/* Main Area */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* Top Banner Card */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '6px',
                padding: '12px 14px',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: accentColor, opacity: 0.2 }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ width: '110px', height: '10px', backgroundColor: '#2C2220', borderRadius: '3px' }} />
                  <div style={{ width: '70px', height: '8px', backgroundColor: '#A49B8E', borderRadius: '2px' }} />
                </div>
              </div>
              <div style={{ display: 'flex', gap: '6px' }}>
                <div style={{ width: '12px', height: '24px', backgroundColor: accentColor, borderRadius: '2px' }} />
                <div style={{ width: '12px', height: '36px', backgroundColor: '#0E2E28', borderRadius: '2px' }} />
                <div style={{ width: '12px', height: '18px', backgroundColor: '#8A5A1E', borderRadius: '2px' }} />
              </div>
            </div>

            {/* Bottom 4 module cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
              {[accentColor, '#0E2E28', '#2E1A33', '#8A5A1E'].map((col, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '6px',
                    padding: '10px',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <div style={{ width: '22px', height: '22px', borderRadius: '4px', backgroundColor: col, opacity: 0.85 }} />
                  <div style={{ width: '80%', height: '7px', backgroundColor: '#332724', borderRadius: '2px' }} />
                  <div style={{ width: '50%', height: '5px', backgroundColor: '#A49B8E', borderRadius: '2px' }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {renderWatermark(false)}
      </div>
    );
  }

  // Preview 2: Analysis / Tool Report Wireframe (Crisp Light Card)
  if (projectId === 2) {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#FAF8F5',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          color: '#1A1210',
        }}
      >
        {renderBrowserHeader('project-two.local/analysis', false)}

        <div style={{ padding: '16px 20px', flex: 1, display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '16px' }}>
          {/* Left: Upload Drop Area */}
          <div
            style={{
              border: '2px dashed rgba(14, 46, 40, 0.25)',
              borderRadius: '6px',
              backgroundColor: '#FFFFFF',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
            }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: accentColor,
                opacity: 0.15,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontSize: '18px', color: accentColor }}>↑</span>
            </div>
            <div style={{ width: '120px', height: '9px', backgroundColor: '#2C2220', borderRadius: '3px' }} />
            <div style={{ width: '90px', height: '7px', backgroundColor: '#A49B8E', borderRadius: '2px' }} />
            <div
              style={{
                marginTop: '6px',
                padding: '4px 14px',
                backgroundColor: accentColor,
                borderRadius: '4px',
                width: '70px',
                height: '10px',
              }}
            />
          </div>

          {/* Right: Results List */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '6px',
              padding: '14px',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              gap: '8px',
            }}
          >
            {[
              { labelW: '75px', valW: '30px', status: '#27C93F' },
              { labelW: '90px', valW: '40px', status: '#FF5F56' },
              { labelW: '60px', valW: '25px', status: '#27C93F' },
              { labelW: '80px', valW: '35px', status: '#FFBD2E' },
            ].map((row, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '4px 0',
                  borderBottom: idx < 3 ? '1px solid #F0ECE4' : 'none',
                }}
              >
                <div style={{ width: row.labelW, height: '8px', backgroundColor: '#3D312E', borderRadius: '2px' }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: row.valW, height: '8px', backgroundColor: '#756A5D', borderRadius: '2px' }} />
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: row.status }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {renderWatermark(false)}
      </div>
    );
  }

  // Preview 3: Prediction / Chart Dashboard Wireframe (Crisp Light Card)
  if (projectId === 3) {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#FCFAF7',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          color: '#1A1210',
        }}
      >
        {renderBrowserHeader('project-three.local/prediction', false)}

        <div style={{ padding: '16px 20px', flex: 1, display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '16px' }}>
          {/* Left: Input controls */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '6px',
              padding: '14px',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <div style={{ width: '80px', height: '8px', backgroundColor: '#2E1A33', borderRadius: '2px', opacity: 0.8 }} />
            <div style={{ width: '100%', height: '16px', backgroundColor: '#EDE7DC', borderRadius: '3px' }} />
            <div style={{ width: '70px', height: '8px', backgroundColor: '#2E1A33', borderRadius: '2px', opacity: 0.8 }} />
            <div style={{ width: '100%', height: '16px', backgroundColor: '#EDE7DC', borderRadius: '3px' }} />
            <div style={{ width: '100%', height: '22px', backgroundColor: accentColor, borderRadius: '4px', marginTop: '4px' }} />
          </div>

          {/* Right: Output metric & SVG trend curve */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '6px',
              padding: '14px',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ fontSize: '0.6875rem', color: '#8A8275', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Predicted Metric Output
              </div>
              <div style={{ fontSize: '1.35rem', fontWeight: 700, color: '#1A1210', marginTop: '2px' }}>
                $ 1,420,000
              </div>
            </div>

            {/* SVG Chart Line */}
            <div style={{ width: '100%', height: '65px', position: 'relative' }}>
              <svg width="100%" height="100%" viewBox="0 0 200 65" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={accentColor} stopOpacity="0.25" />
                    <stop offset="100%" stopColor={accentColor} stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,55 Q40,48 80,32 T160,18 L200,6 L200,65 L0,65 Z"
                  fill="url(#chartGrad)"
                />
                <path
                  d="M0,55 Q40,48 80,32 T160,18 L200,6"
                  fill="none"
                  stroke={accentColor}
                  strokeWidth="2.5"
                />
                <circle cx="200" cy="6" r="3.5" fill={accentColor} />
              </svg>
            </div>
          </div>
        </div>

        {renderWatermark(false)}
      </div>
    );
  }

  // Preview 4: Interactive / Game Canvas Wireframe (Deep Space Themed)
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#0A121E',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        color: '#FFFFFF',
      }}
    >
      {renderBrowserHeader('project-four.local/interactive', true)}

      <div
        style={{
          padding: '16px 20px',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(138, 90, 30, 0.15) 0%, transparent 70%)',
          position: 'relative',
        }}
      >
        {/* HUD Top Bar */}
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', fontSize: '0.6875rem', fontFamily: 'monospace', color: 'rgba(255, 255, 255, 0.6)' }}>
          <span>SCORE: 4,820</span>
          <span>SYSTEM: READY</span>
          <span>FPS: 60</span>
        </div>

        {/* Center Space Vessel Wireframe */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '130px', height: '14px', backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '3px' }} />
          <div style={{ width: '80px', height: '8px', backgroundColor: accentColor, borderRadius: '2px' }} />
          
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ marginTop: '4px' }}>
            <polygon points="24,4 34,36 24,30 14,36" fill={accentColor} stroke="#FFFFFF" strokeWidth="1.5" />
            <circle cx="24" cy="22" r="3" fill="#FFFFFF" />
            <polygon points="21,34 24,42 27,34" fill="#FFBD2E" />
          </svg>
        </div>

        {/* Action Button */}
        <div
          style={{
            padding: '4px 18px',
            backgroundColor: accentColor,
            borderRadius: '4px',
            color: '#FFFFFF',
            fontSize: '0.6875rem',
            fontFamily: 'monospace',
            letterSpacing: '0.08em',
          }}
        >
          LAUNCH INTERACTIVE
        </div>
      </div>

      {renderWatermark(true)}
    </div>
  );
}
