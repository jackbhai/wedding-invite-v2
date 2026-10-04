import { useState } from 'react'
import { motion, useTransform, useMotionValueEvent } from 'framer-motion'
import ScrubSection from './ScrubSection.jsx'
import { DoodleDefs, DoodleSun, Toran, Diya, INK, PAPER } from './DoodleBits.jsx'

// ── Phere: the couple walks 7 rounds around the sacred fire, scrubbed by scroll ──

const CX = 200, CY = 348, RX = 118, RY = 56
const TAU = Math.PI * 2
const ang = (v) => Math.PI / 2 + v * 7 * TAU // start at front-bottom

function MiniCouple() {
  return (
    <g filter="url(#phr-wobble)">
      {/* groom mini */}
      <g transform="translate(-20,0)">
        <rect x="-9" y="28" width="8" height="30" rx="4" fill="#5a3a22" stroke={INK} strokeWidth="2.6" />
        <rect x="2" y="28" width="8" height="30" rx="4" fill="#5a3a22" stroke={INK} strokeWidth="2.6" />
        <path d="M -20 -8 Q 0 -16 20 -8 L 24 32 Q 0 38 -24 32 Z" fill="#f7ead0" stroke={INK} strokeWidth="3" />
        <circle cx="0" cy="-30" r="17" fill="#f2c49b" stroke={INK} strokeWidth="3" />
        <path d="M -17 -34 Q 0 -52 17 -34 L 17 -40 Q 0 -56 -17 -40 Z" fill="#a1121f" stroke={INK} strokeWidth="2.6" />
        <circle cx="-6" cy="-30" r="2" fill={INK} />
        <circle cx="6" cy="-30" r="2" fill={INK} />
        <path d="M -6 -20 Q 0 -16 6 -20" fill="none" stroke={INK} strokeWidth="2.4" strokeLinecap="round" />
      </g>
      {/* bride mini */}
      <g transform="translate(22,0)">
        <path d="M -24 -6 L 24 -6 L 30 34 Q 0 42 -30 34 Z" fill="#a1121f" stroke={INK} strokeWidth="3" />
        <circle cx="0" cy="-28" r="16" fill="#f2c49b" stroke={INK} strokeWidth="3" />
        <path d="M -16 -32 Q -14 -50 0 -51 Q 14 -50 16 -32 Q 6 -42 -6 -42 Q -14 -42 -16 -32 Z" fill="#1f1310" />
        <circle cx="0" cy="-36" r="3.4" fill="#a1121f" />
        <circle cx="-5.5" cy="-28" r="2" fill={INK} />
        <circle cx="5.5" cy="-28" r="2" fill={INK} />
        <path d="M -5 -19 Q 0 -15 5 -19" fill="none" stroke="#a1121f" strokeWidth="3" strokeLinecap="round" />
        <path d="M -18 -26 Q -30 -10 -24 12" fill="none" stroke={INK} strokeWidth="2.4" opacity="0.6" />
      </g>
      {/* joined hands */}
      <line x1="-4" y1="8" x2="6" y2="8" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <circle cx="1" cy="8" r="4.5" fill="#f2c49b" stroke={INK} strokeWidth="2.4" />
    </g>
  )
}

function PhereArt({ progress: p, setPhera }) {
  const x = useTransform(p, (v) => CX + RX * Math.cos(ang(v)))
  const y = useTransform(p, (v) => CY + RY * Math.sin(ang(v)))
  const depth = useTransform(p, (v) => {
    const s = (Math.sin(ang(v)) + 1) / 2 // 1 at front
    return 0.78 + 0.3 * s
  })
  const face = useTransform(p, (v) => (-Math.sin(ang(v)) >= 0 ? 1 : -1))

  useMotionValueEvent(p, 'change', (v) => {
    setPhera(Math.min(7, Math.floor(v * 7) + 1))
  })

  return (
    <svg viewBox="0 0 400 470" className="doodle-svg">
      <DoodleDefs id="phr" />
      <rect x="4" y="4" width="392" height="462" rx="20" fill={PAPER} />
      <DoodleSun x={52} y={58} />
      <Toran x={336} y={4} n={4} />

      {/* rangoli */}
      <g fill="none" stroke={INK} strokeWidth="2.6" opacity="0.85">
        <circle cx={CX} cy={CY} r="132" strokeDasharray="10 8" />
        <circle cx={CX} cy={CY} r="118" />
      </g>
      {Array.from({ length: 12 }, (_, i) => {
        const a = (i / 12) * TAU
        return <circle key={i} cx={CX + Math.cos(a) * 125} cy={CY + Math.sin(a) * 125} r="4.5" fill={i % 2 ? '#e8890c' : '#e05260'} stroke={INK} strokeWidth="1.8" />
      })}

      {/* sacred fire */}
      <g>
        <rect x={CX - 34} y={CY + 8} width="68" height="13" rx="6.5" fill="#6b3d1e" stroke={INK} strokeWidth="3" transform={`rotate(14 ${CX} ${CY + 14})`} />
        <rect x={CX - 34} y={CY + 8} width="68" height="13" rx="6.5" fill="#7d4a24" stroke={INK} strokeWidth="3" transform={`rotate(-12 ${CX} ${CY + 14})`} />
        <motion.g
          style={{ transformBox: 'fill-box', transformOrigin: '50% 100%' }}
          animate={{ scaleY: [1, 1.18, 0.92, 1.12, 1], scaleX: [1, 0.94, 1.05, 0.96, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path d={`M ${CX} ${CY - 66} C ${CX + 26} ${CY - 40} ${CX + 20} ${CY - 14} ${CX} ${CY - 2} C ${CX - 20} ${CY - 14} ${CX - 26} ${CY - 40} ${CX} ${CY - 66} Z`} fill="#e8890c" stroke={INK} strokeWidth="3.5" />
          <path d={`M ${CX} ${CY - 44} C ${CX + 14} ${CY - 28} ${CX + 11} ${CY - 12} ${CX} ${CY - 4} C ${CX - 11} ${CY - 12} ${CX - 14} ${CY - 28} ${CX} ${CY - 44} Z`} fill="#f5c542" />
          <path d={`M ${CX} ${CY - 26} C ${CX + 8} ${CY - 16} ${CX + 6} ${CY - 8} ${CX} ${CY - 4} C ${CX - 6} ${CY - 8} ${CX - 8} ${CY - 16} ${CX} ${CY - 26} Z`} fill="#f7e7b0" />
        </motion.g>
        {/* rising sparks */}
        {[0, 1, 2, 3].map((i) => (
          <motion.circle
            key={i}
            cx={CX - 14 + i * 9} cy={CY - 60} r="3.2" fill="#f5c542" stroke={INK} strokeWidth="1.4"
            animate={{ y: [0, -34 - i * 8], opacity: [1, 0] }}
            transition={{ duration: 1.6 + i * 0.3, repeat: Infinity, delay: i * 0.4, ease: 'easeOut' }}
          />
        ))}
      </g>

      {/* diyas */}
      <Diya x={70} y={416} s={0.9} />
      <Diya x={330} y={416} s={0.9} />
      <Diya x={88} y={250} s={0.75} />
      <Diya x={312} y={250} s={0.75} />

      {/* walking couple */}
      <motion.g style={{ x, y, scale: depth, scaleX: face }}>
        <MiniCouple />
      </motion.g>

      {/* path hint dots */}
      <g fill={INK} opacity="0.25">
        {Array.from({ length: 24 }, (_, i) => {
          const a = Math.PI / 2 + (i / 24) * TAU
          return <circle key={i} cx={CX + RX * Math.cos(a)} cy={CY + RY * Math.sin(a)} r="2.2" />
        })}
      </g>
    </svg>
  )
}

export default function PhereScene() {
  const [phera, setPhera] = useState(1)
  return (
    <ScrubSection
      kicker="Rasam 2"
      title="Saat Phere"
      hint="👇 Neeche scroll karo to phere aage · upar lao to peeche"
      track="380vh"
    >
      {(p) => (
        <div style={{ position: 'relative' }}>
          <PhereArt progress={p} setPhera={setPhera} />
          <div className="phera-badge">फेरा {phera} / 7</div>
        </div>
      )}
    </ScrubSection>
  )
}
