import { motion, useTransform } from 'framer-motion'
import ScrubSection from './ScrubSection.jsx'
import { DoodleDefs, DoodleSun, Toran, Garland, PetalBurst, HeartPop, INK, PAPER } from './DoodleBits.jsx'

// ── Varmala: scroll down = garland descends, scroll up = garland lifts back ──

function Groom({ armRotate }) {
  return (
    <g transform="translate(105,0)" filter="url(#vrm-wobble)">
      <rect x="-16" y="382" width="13" height="52" rx="6" fill="#5a3a22" stroke={INK} strokeWidth="3" />
      <rect x="3" y="382" width="13" height="52" rx="6" fill="#5a3a22" stroke={INK} strokeWidth="3" />
      <path d="M -34 300 Q 0 288 34 300 L 40 386 Q 0 396 -40 386 Z" fill="#f7ead0" stroke={INK} strokeWidth="3.5" />
      {[318, 340, 362].map((y) => <circle key={y} cx="0" cy={y} r="4.5" fill="#d4af37" stroke={INK} strokeWidth="2" />)}
      <path d="M -14 296 L 0 308 L 14 296" fill="none" stroke={INK} strokeWidth="3" />
      {/* static left arm */}
      <g transform="translate(-38,308)">
        <rect x="-8" y="0" width="16" height="58" rx="8" fill="#f7ead0" stroke={INK} strokeWidth="3" />
        <circle cx="0" cy="64" r="9" fill="#f2c49b" stroke={INK} strokeWidth="3" />
      </g>
      {/* animated right arm */}
      <motion.g
        transform="translate(38,308)"
        style={{ rotate: armRotate, transformBox: 'fill-box', transformOrigin: '50% 8%' }}
      >
        <rect x="-8" y="0" width="16" height="72" rx="8" fill="#f7ead0" stroke={INK} strokeWidth="3" />
        <circle cx="0" cy="78" r="9" fill="#f2c49b" stroke={INK} strokeWidth="3" />
      </motion.g>
      <circle cx="0" cy="232" r="30" fill="#f2c49b" stroke={INK} strokeWidth="3.5" />
      <path d="M -30 226 Q -28 196 0 194 Q 28 196 30 226 Q 14 210 -14 210 Q -28 212 -30 226 Z" fill="#2b1a10" />
      <path d="M -31 220 Q 0 184 31 220 L 31 210 Q 0 176 -31 210 Z" fill="#a1121f" stroke={INK} strokeWidth="3" />
      <circle cx="0" cy="200" r="5.5" fill="#d4af37" stroke={INK} strokeWidth="2" />
      <circle cx="-11" cy="232" r="2.8" fill={INK} />
      <circle cx="11" cy="232" r="2.8" fill={INK} />
      <path d="M -10 248 Q 0 257 10 248" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="-19" cy="243" rx="5" ry="3.4" fill="#f2a0a8" opacity="0.8" />
      <ellipse cx="19" cy="243" rx="5" ry="3.4" fill="#f2a0a8" opacity="0.8" />
    </g>
  )
}

function Bride({ armRotate }) {
  return (
    <g transform="translate(295,0)" filter="url(#vrm-wobble)">
      <path d="M -42 302 L 42 302 L 52 392 Q 0 404 -52 392 Z" fill="#a1121f" stroke={INK} strokeWidth="3.5" />
      {[-40, -20, 0, 20, 40].map((x) => <circle key={x} cx={x} cy="348" r="4" fill="#d4af37" />)}
      <rect x="-32" y="272" width="64" height="34" rx="10" fill="#7d0d18" stroke={INK} strokeWidth="3" />
      <path d="M -36 214 Q -78 260 -64 340 Q -40 300 -30 250 Z" fill="#e05260" opacity="0.45" stroke={INK} strokeWidth="2.5" />
      <circle cx="0" cy="232" r="28" fill="#f2c49b" stroke={INK} strokeWidth="3.5" />
      <path d="M -28 224 Q -26 192 0 190 Q 26 192 28 224 Q 12 206 -12 206 Q -26 208 -28 224 Z" fill="#1f1310" />
      <circle cx="0" cy="218" r="4.5" fill="#a1121f" stroke={INK} strokeWidth="1.6" />
      <circle cx="-10" cy="232" r="2.8" fill={INK} />
      <circle cx="10" cy="232" r="2.8" fill={INK} />
      <path d="M -14 230 L -18 226 M 14 230 L 18 226" stroke={INK} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M -9 248 Q 0 254 9 248" fill="none" stroke="#a1121f" strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="-18" cy="243" rx="5" ry="3.4" fill="#f2a0a8" opacity="0.8" />
      <ellipse cx="18" cy="243" rx="5" ry="3.4" fill="#f2a0a8" opacity="0.8" />
      <circle cx="-30" cy="250" r="6" fill="#d4af37" stroke={INK} strokeWidth="2.4" />
      <circle cx="30" cy="250" r="6" fill="#d4af37" stroke={INK} strokeWidth="2.4" />
      {[ -12, 0, 12 ].map((x) => <circle key={x} cx={x} cy="292" r="3.4" fill="#d4af37" stroke={INK} strokeWidth="1.6" />)}
      {/* static right arm */}
      <g transform="translate(40,306)">
        <rect x="-8" y="0" width="16" height="56" rx="8" fill="#7d0d18" stroke={INK} strokeWidth="3" />
        <circle cx="0" cy="62" r="9" fill="#f2c49b" stroke={INK} strokeWidth="3" />
      </g>
      {/* animated left arm */}
      <motion.g
        transform="translate(-40,306)"
        style={{ rotate: armRotate, transformBox: 'fill-box', transformOrigin: '50% 8%' }}
      >
        <rect x="-8" y="0" width="16" height="72" rx="8" fill="#7d0d18" stroke={INK} strokeWidth="3" />
        <circle cx="0" cy="78" r="9" fill="#f2c49b" stroke={INK} strokeWidth="3" />
      </motion.g>
    </g>
  )
}

function VarmalaArt({ progress: p }) {
  // Garland A: groom → bride (progress 0 → 0.45)
  const gAx = useTransform(p, [0, 0.4, 0.48], [295, 295, 295])
  const gAy = useTransform(p, [0, 0.4, 0.48], [148, 292, 280])
  const armR = useTransform(p, [0, 0.45], [-158, -8])
  // Garland B: bride → groom (progress 0.55 → 1)
  const gBo = useTransform(p, [0.5, 0.57], [0, 1])
  const gBx = useTransform(p, [0.55, 0.92, 1], [105, 105, 105])
  const gBy = useTransform(p, [0.55, 0.92, 1], [148, 292, 280])
  const armL = useTransform(p, [0.55, 1], [158, 8])
  // label crossfade
  const labelA = useTransform(p, [0.42, 0.52], [1, 0])
  const labelB = useTransform(p, [0.48, 0.58], [0, 1])

  return (
    <svg viewBox="0 0 400 470" className="doodle-svg">
      <DoodleDefs id="vrm" />
      <rect x="4" y="4" width="392" height="462" rx="20" fill={PAPER} />
      <DoodleSun x={56} y={60} />
      <g stroke={INK} strokeWidth="2.6" fill="none" opacity="0.7">
        <ellipse cx="330" cy="66" rx="26" ry="10" fill="#fff" opacity="0.6" />
        <ellipse cx="352" cy="60" rx="18" ry="8" fill="#fff" opacity="0.6" />
      </g>
      <Toran x={120} y={4} n={4} />
      <Toran x={280} y={4} n={4} />
      {/* mandap pillars */}
      <rect x="34" y="150" width="22" height="270" rx="10" fill="#a1121f" stroke={INK} strokeWidth="3.5" />
      <rect x="344" y="150" width="22" height="270" rx="10" fill="#a1121f" stroke={INK} strokeWidth="3.5" />
      <rect x="34" y="180" width="22" height="12" fill="#d4af37" stroke={INK} strokeWidth="2.5" />
      <rect x="344" y="180" width="22" height="12" fill="#d4af37" stroke={INK} strokeWidth="2.5" />
      <path d="M 40 150 Q 200 196 360 150 L 360 132 Q 200 178 40 132 Z" fill="#e05260" stroke={INK} strokeWidth="3.5" />
      {/* floor */}
      <line x1="20" y1="436" x2="380" y2="436" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
      <ellipse cx="105" cy="440" rx="52" ry="9" fill={INK} opacity="0.12" />
      <ellipse cx="295" cy="440" rx="52" ry="9" fill={INK} opacity="0.12" />

      <Groom armRotate={armR} />
      <Bride armRotate={armL} />

      {/* garland A */}
      <motion.g style={{ x: gAx, y: gAy }}>
        <Garland />
      </motion.g>
      {/* garland B */}
      <motion.g style={{ x: gBx, y: gBy, opacity: gBo }}>
        <Garland />
      </motion.g>

      <PetalBurst progress={p} at={0.42} cx={295} cy={280} />
      <PetalBurst progress={p} at={0.94} cx={105} cy={280} />
      <HeartPop progress={p} at={0.93} />

      <motion.text x="200" y="452" textAnchor="middle" fontFamily="Marcellus, serif" fontSize="17" letterSpacing="2" fill={INK} style={{ opacity: labelA }}>
        Gaurav → Uma
      </motion.text>
      <motion.text x="200" y="452" textAnchor="middle" fontFamily="Marcellus, serif" fontSize="17" letterSpacing="2" fill={INK} style={{ opacity: labelB }}>
        Uma → Gaurav
      </motion.text>
    </svg>
  )
}

export default function VarmalaScene() {
  return (
    <ScrubSection
      kicker="Rasam 1"
      title="Varmala"
      hint="👇 Neeche scroll karo to varmala pehnayenge · upar lao to wapas utar jayegi"
    >
      {(p) => <VarmalaArt progress={p} />}
    </ScrubSection>
  )
}
