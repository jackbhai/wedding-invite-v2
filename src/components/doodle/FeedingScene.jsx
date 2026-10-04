import { motion, useTransform } from 'framer-motion'
import ScrubSection from './ScrubSection.jsx'
import { DoodleDefs, DoodleSun, Toran, SparkleBurst, HeartPop, INK, PAPER } from './DoodleBits.jsx'

// ── Feeding sweets: scroll down = hand moves to mouth & ladoo is eaten ──

function GroomFeed({ armRotate, ladooScale, mouthOpen }) {
  const smileO = useTransform(mouthOpen, [0, 1], [1, 0])
  return (
    <g transform="translate(112,0)" filter="url(#fdg-wobble)">
      <rect x="-16" y="382" width="13" height="52" rx="6" fill="#5a3a22" stroke={INK} strokeWidth="3" />
      <rect x="3" y="382" width="13" height="52" rx="6" fill="#5a3a22" stroke={INK} strokeWidth="3" />
      <path d="M -34 300 Q 0 288 34 300 L 40 386 Q 0 396 -40 386 Z" fill="#f7ead0" stroke={INK} strokeWidth="3.5" />
      {[318, 340, 362].map((y) => <circle key={y} cx="0" cy={y} r="4.5" fill="#d4af37" stroke={INK} strokeWidth="2" />)}
      <g transform="translate(-38,308)">
        <rect x="-8" y="0" width="16" height="58" rx="8" fill="#f7ead0" stroke={INK} strokeWidth="3" />
        <circle cx="0" cy="64" r="9" fill="#f2c49b" stroke={INK} strokeWidth="3" />
      </g>
      <motion.g transform="translate(38,308)" style={{ rotate: armRotate, transformBox: 'fill-box', transformOrigin: '50% 8%' }}>
        <rect x="-8" y="0" width="16" height="96" rx="8" fill="#f7ead0" stroke={INK} strokeWidth="3" />
        <circle cx="0" cy="102" r="9" fill="#f2c49b" stroke={INK} strokeWidth="3" />
        <motion.g transform="translate(0,102)" style={{ scale: ladooScale, transformBox: 'fill-box', transformOrigin: 'center' }}>
          <circle r="14" fill="#e8890c" stroke={INK} strokeWidth="3" />
          <circle cx="-5" cy="-4" r="2.4" fill="#a1121f" />
          <circle cx="5" cy="2" r="2.4" fill="#a1121f" />
          <circle cx="0" cy="7" r="2.4" fill="#f5c542" />
        </motion.g>
      </motion.g>
      <circle cx="0" cy="232" r="30" fill="#f2c49b" stroke={INK} strokeWidth="3.5" />
      <path d="M -30 226 Q -28 196 0 194 Q 28 196 30 226 Q 14 210 -14 210 Q -28 212 -30 226 Z" fill="#2b1a10" />
      <path d="M -31 220 Q 0 184 31 220 L 31 210 Q 0 176 -31 210 Z" fill="#a1121f" stroke={INK} strokeWidth="3" />
      <circle cx="0" cy="200" r="5.5" fill="#d4af37" stroke={INK} strokeWidth="2" />
      <circle cx="-11" cy="232" r="2.8" fill={INK} />
      <circle cx="11" cy="232" r="2.8" fill={INK} />
      <motion.path d="M -10 248 Q 0 257 10 248" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" style={{ opacity: smileO }} />
      <motion.ellipse cx="0" cy="251" rx="7" ry="9" fill="#7d2020" stroke={INK} strokeWidth="2.6" style={{ opacity: mouthOpen }} />
      <ellipse cx="-19" cy="243" rx="5" ry="3.4" fill="#f2a0a8" opacity="0.8" />
      <ellipse cx="19" cy="243" rx="5" ry="3.4" fill="#f2a0a8" opacity="0.8" />
    </g>
  )
}

function BrideFeed({ armRotate, ladooScale, ladooShow, mouthOpen }) {
  const smileO = useTransform(mouthOpen, [0, 1], [1, 0])
  return (
    <g transform="translate(288,0)" filter="url(#fdg-wobble)">
      <path d="M -42 302 L 42 302 L 52 392 Q 0 404 -52 392 Z" fill="#a1121f" stroke={INK} strokeWidth="3.5" />
      {[-40, -20, 0, 20, 40].map((x) => <circle key={x} cx={x} cy="348" r="4" fill="#d4af37" />)}
      <rect x="-32" y="272" width="64" height="34" rx="10" fill="#7d0d18" stroke={INK} strokeWidth="3" />
      <path d="M 36 214 Q 78 260 64 340 Q 40 300 30 250 Z" fill="#e05260" opacity="0.45" stroke={INK} strokeWidth="2.5" />
      <circle cx="0" cy="232" r="28" fill="#f2c49b" stroke={INK} strokeWidth="3.5" />
      <path d="M -28 224 Q -26 192 0 190 Q 26 192 28 224 Q 12 206 -12 206 Q -26 208 -28 224 Z" fill="#1f1310" />
      <circle cx="0" cy="218" r="4.5" fill="#a1121f" stroke={INK} strokeWidth="1.6" />
      <circle cx="-10" cy="232" r="2.8" fill={INK} />
      <circle cx="10" cy="232" r="2.8" fill={INK} />
      <motion.path d="M -9 248 Q 0 254 9 248" fill="none" stroke="#a1121f" strokeWidth="4" strokeLinecap="round" style={{ opacity: smileO }} />
      <motion.ellipse cx="0" cy="251" rx="7" ry="9" fill="#7d2020" stroke={INK} strokeWidth="2.6" style={{ opacity: mouthOpen }} />
      <ellipse cx="-18" cy="243" rx="5" ry="3.4" fill="#f2a0a8" opacity="0.8" />
      <ellipse cx="18" cy="243" rx="5" ry="3.4" fill="#f2a0a8" opacity="0.8" />
      <circle cx="30" cy="250" r="6" fill="#d4af37" stroke={INK} strokeWidth="2.4" />
      <g transform="translate(40,306)">
        <rect x="-8" y="0" width="16" height="56" rx="8" fill="#7d0d18" stroke={INK} strokeWidth="3" />
        <circle cx="0" cy="62" r="9" fill="#f2c49b" stroke={INK} strokeWidth="3" />
      </g>
      <motion.g transform="translate(-40,306)" style={{ rotate: armRotate, transformBox: 'fill-box', transformOrigin: '50% 8%' }}>
        <rect x="-8" y="0" width="16" height="96" rx="8" fill="#7d0d18" stroke={INK} strokeWidth="3" />
        <circle cx="0" cy="102" r="9" fill="#f2c49b" stroke={INK} strokeWidth="3" />
        <motion.g transform="translate(0,102)" style={{ scale: ladooScale, opacity: ladooShow, transformBox: 'fill-box', transformOrigin: 'center' }}>
          <circle r="14" fill="#e8890c" stroke={INK} strokeWidth="3" />
          <circle cx="-5" cy="-4" r="2.4" fill="#a1121f" />
          <circle cx="5" cy="2" r="2.4" fill="#a1121f" />
          <circle cx="0" cy="7" r="2.4" fill="#f5c542" />
        </motion.g>
      </motion.g>
    </g>
  )
}

function FeedingArt({ progress: p }) {
  // Phase 1: groom feeds bride (0 → 0.5)
  const armR = useTransform(p, [0.02, 0.38], [-14, -118])
  const ladoo1 = useTransform(p, [0.34, 0.5], [1, 0.22])
  const brideMouth = useTransform(p, [0.36, 0.44], [0, 1])
  // Phase 2: bride feeds groom (0.55 → 1)
  const armL = useTransform(p, [0.57, 0.9], [14, 118])
  const ladoo2show = useTransform(p, [0.52, 0.6], [0, 1])
  const ladoo2 = useTransform(p, [0.86, 0.99], [1, 0.22])
  const groomMouth = useTransform(p, [0.88, 0.95], [0, 1])

  return (
    <svg viewBox="0 0 400 470" className="doodle-svg">
      <DoodleDefs id="fdg" />
      <rect x="4" y="4" width="392" height="462" rx="20" fill={PAPER} />
      <DoodleSun x={52} y={60} />
      <Toran x={120} y={4} n={4} />
      <Toran x={280} y={4} n={4} />
      {/* string lights */}
      <path d="M 30 96 Q 200 140 370 96" fill="none" stroke={INK} strokeWidth="2.6" />
      {[70, 130, 200, 270, 330].map((x, i) => (
        <g key={i}>
          <line x1={x} y1={104 + Math.sin(i) * 8} x2={x} y2={118 + Math.sin(i) * 8} stroke={INK} strokeWidth="2.2" />
          <circle cx={x} cy={124 + Math.sin(i) * 8} r="6" fill={['#f5c542', '#e05260', '#6a9a3f'][i % 3]} stroke={INK} strokeWidth="2.2" />
        </g>
      ))}
      <line x1="20" y1="436" x2="380" y2="436" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
      <ellipse cx="112" cy="440" rx="50" ry="9" fill={INK} opacity="0.12" />
      <ellipse cx="288" cy="440" rx="50" ry="9" fill={INK} opacity="0.12" />

      {/* thali of sweets */}
      <g>
        <ellipse cx="200" cy="428" rx="66" ry="16" fill="#d4af37" stroke={INK} strokeWidth="3.5" />
        <ellipse cx="200" cy="422" rx="56" ry="12" fill="#f7e7b0" stroke={INK} strokeWidth="2.5" />
        {[[-28, 418], [0, 414], [28, 418]].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="11" fill="#e8890c" stroke={INK} strokeWidth="2.6" />
            <circle cx={x - 3} cy={y - 3} r="2" fill="#a1121f" />
          </g>
        ))}
      </g>

      <GroomFeed armRotate={armR} ladooScale={ladoo1} mouthOpen={groomMouth} />
      <BrideFeed armRotate={armL} ladooScale={ladoo2} ladooShow={ladoo2show} mouthOpen={brideMouth} />

      <SparkleBurst progress={p} at={0.4} spots={[[252, 215], [282, 240], [228, 245]]} />
      <SparkleBurst progress={p} at={0.88} spots={[[148, 215], [118, 240], [172, 245]]} />
      <HeartPop progress={p} at={0.94} spots={[[200, 150, 1.3], [160, 175, 1], [240, 175, 1]]} />

      <text x="200" y="70" textAnchor="middle" fontFamily="Great Vibes, cursive" fontSize="30" fill={INK}>
        Shubh Bhoj
      </text>
    </svg>
  )
}

export default function FeedingScene() {
  return (
    <ScrubSection
      kicker="Rasam 3"
      title="Mithaas"
      hint="👇 Neeche scroll karo to ladoo khilayenge · upar lao to wapas"
    >
      {(p) => <FeedingArt progress={p} />}
    </ScrubSection>
  )
}
