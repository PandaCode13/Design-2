import { useState } from 'react'

export default function PlaceholderImage({ src, alt, className, style }) {
  const [failed, setFailed] = useState(false)

  if (src && !failed) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          ...style,
        }}
        onError={() => setFailed(true)}
      />
    )
  }

  return (
    <div
      className={className}
      style={{
        background:
          'linear-gradient(135deg, #3a3a3a 0%, #2a2a2a 50%, #1a1a1a 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#C4905F',
        fontFamily: 'var(--font-display)',
        fontSize: '14px',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 30% 40%, rgba(196,144,95,0.08) 0%, transparent 60%)',
        }}
      />
      <span
        style={{
          position: 'relative',
          zIndex: 1,
          opacity: 0.6,
          textAlign: 'center',
          padding: '16px',
        }}
      >
        {alt}
      </span>
    </div>
  )
}