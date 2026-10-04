import { useMemo } from 'react'
import { motion, useTransform } from 'framer-motion'

// ── Shared doodle bits: hand-drawn wobble filter + particles ──

export const INK = '#4a2c1a'
export const PAPER = '#f8ecd4'

export function DoodleDefs({ id = 'dw' }) {
  return (
    <defs>
      <filter id={`${id}-wobble`} x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="2" seed="7" result="n" />
        <feDisplacementMap in="SourceGraphic" in2="n" scale="4" />
      </filter>
      <filter id={`${id}-soft`} x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="3" result="n" />
        <feDisplacementMap in="SourceGraphic" in2="n" scale="2.2" />
      </filter>
    </defs>
  )
}

// One marigold flower
export function Marigold({ x = 0, y = 0, r = 9, c1 = '#f5a623', c2 = '#e8890c' }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <circle r={r} fill={c1} stroke={INK} strokeWidth="2.4" />
      {[0, 60, 120, 180, 240, 300].map((a) => (
        <circle key={a} cx={Math.cos((a * Math.PI) / 180) * r * 0.55} cy={Math.sin((a * Math.PI) / 180) * r * 0.55} r={r * 0.28} fill={c2} />
      ))}
      <circle r={r * 0.3} fill="#a1121f" />
    </g>
  )
}

// Hanging marigold string
export function Toran({ x, y = 0, n = 5, gap = 26 }) {
  return (
    <g>
      <line x1={x} y1={y} x2={x} y2={y + n * gap} stroke={INK} strokeWidth="2.5" />
      {Array.from({ length: n }, (_, i) => (
        <g key={i}>
          <Marigold x={x} y={y + 14 + i * gap} r={10} />
          <ellipse cx={x - 12} cy={y + 20 + i * gap} rx="7" ry="4" fill="#6a9a3f" stroke={INK} strokeWidth="2" transform={`rotate(-30 ${x - 12} ${y + 20 + i * gap})`} />
        </g>
      ))}
    </g>
  )
}

// Doodle sun
export function DoodleSun({ x = 52, y = 58, r = 24 }) {
  return (
    <g stroke={INK} strokeWidth="3" strokeLinecap="round">
      <circle cx={x} cy={y} r={r} fill="#f5c542" />
      {Array.from({ length: 8 }, (_, i) => {
        const a = (i / 8) * Math.PI * 2
        return <line key={i} x1={x + Math.cos(a) * (r + 5)} y1={y + Math.sin(a) * (r + 5)} x2={x + Math.cos(a) * (r + 14)} y2={y + Math.sin(a) * (r + 14)} />
      })}
      <circle cx={x - 8} cy={y - 3} r="2.4" fill={INK} stroke="none" />
      <circle cx={x + 8} cy={y - 3} r="2.4" fill={INK} stroke="none" />
      <path d={`M ${x - 8} ${y + 8} Q ${x} ${y + 14} ${x + 8} ${y + 8}`} fill="none" />
    </g>
  )
}

// Single petal particle driven by scroll progress
function PetalOne({ progress, at, cx, cy, dx, dy, r, rot, color }) {
  const opacity = useTransform(progress, [at, at + 0.06, at + 0.22, at + 0.3], [0, 1, 1, 0])
  const x = useTransform(progress, [at, at + 0.3], [cx, cx + dx])
  const y = useTransform(progress, [at, at + 0.3], [cy, cy + dy])
  const rotate = useTransform(progress, [at, at + 0.3], [rot, rot + 120])
  return (
    <motion.ellipse
      cx={0} cy={0} rx={r} ry={r * 0.62}
      fill={color} stroke={INK} strokeWidth="1.6"
      style={{ x, y, opacity, rotate, transformBox: 'fill-box', transformOrigin: 'center' }}
    />
  )
}

// Burst of petals when a ritual completes (scroll-driven)
export function PetalBurst({ progress, at = 0.45, cx = 200, cy = 280, count = 14 }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const angle = (i / count) * Math.PI * 2 + i * 0.63
        const dist = 46 + ((i * 53) % 78)
        return {
          dx: Math.cos(angle) * dist,
          dy: Math.sin(angle) * dist * 0.7 - 34,
          r: 4.5 + ((i * 29) % 5),
          rot: (i * 47) % 180,
          color: ['#e8890c', '#f5b942', '#e05260', '#f2a0a8'][i % 4],
        }
      }),
    [count]
  )
  return (
    <g>
      {petals.map((pt, i) => (
        <PetalOne key={i} progress={progress} at={at} cx={cx} cy={cy} {...pt} />
      ))}
    </g>
  )
}

// Single sparkle
function SparkleOne({ progress, at, x, y, s, delay }) {
  const t0 = at + delay
  const opacity = useTransform(progress, [t0, t0 + 0.05, t0 + 0.14], [0, 1, 0])
  const scale = useTransform(progress, [t0, t0 + 0.14], [0.3, s])
  const yy = useTransform(progress, [t0, t0 + 0.14], [y, y - 26])
  return (
    <motion.path
      d="M 0 -10 Q 2 -2 10 0 Q 2 2 0 10 Q -2 2 -10 0 Q -2 -2 0 -10 Z"
      fill="#f7e7b0" stroke={INK} strokeWidth="1.6"
      style={{ x, y: yy, opacity, scale, transformBox: 'fill-box', transformOrigin: 'center' }}
    />
  )
}

export function SparkleBurst({ progress, at = 0.45, spots = [[270, 220], [300, 250], [245, 250]] }) {
  return (
    <g>
      {spots.map(([x, y], i) => (
        <SparkleOne key={i} progress={progress} at={at} x={x} y={y} s={0.9 + (i % 3) * 0.3} delay={i * 0.02} />
      ))}
    </g>
  )
}

// Popping hearts at the end of a ritual
function HeartOne({ progress, at, x, y, s, delay }) {
  const t0 = at + delay
  const opacity = useTransform(progress, [t0, t0 + 0.05], [0, 1])
  const scale = useTransform(progress, [t0, t0 + 0.09], [0, s])
  const yy = useTransform(progress, [t0, t0 + 0.16], [y, y - 44])
  return (
    <motion.path
      d="M 0 6 C -14 -6 -8 -18 0 -10 C 8 -18 14 -6 0 6 Z"
      fill="#e05260" stroke={INK} strokeWidth="2.4"
      style={{ x, y: yy, opacity, scale, transformBox: 'fill-box', transformOrigin: 'center' }}
    />
  )
}

export function HeartPop({ progress, at = 0.9, spots = [[150, 180, 1.4], [250, 165, 1.1], [200, 140, 0.9]] }) {
  return (
    <g>
      {spots.map(([x, y, s], i) => (
        <HeartOne key={i} progress={progress} at={at} x={x} y={y} s={s} delay={i * 0.025} />
      ))}
    </g>
  )
}

// Garland of marigolds (ellipse ring)
export function Garland({ rx = 30, ry = 25, n = 10 }) {
  const flowers = []
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2
    flowers.push(
      <g key={i} transform={`translate(${Math.cos(a) * rx},${Math.sin(a) * ry})`}>
        <circle r="9.5" fill={i % 2 ? '#f5a623' : '#e8890c'} stroke={INK} strokeWidth="2.6" />
        <circle r="3.4" fill="#a1121f" />
      </g>
    )
  }
  return (
    <g>
      <ellipse rx={rx} ry={ry} fill="none" stroke="#2f7a3d" strokeWidth="5" />
      {flowers}
    </g>
  )
}

// Diya (oil lamp) with flickering flame (time-based, always alive)
export function Diya({ x, y, s = 1 }) {
  return (
    <g transform={`translate(${x},${y}) scale(${s})`}>
      <ellipse cx="0" cy="0" rx="20" ry="9" fill="#8a4b22" stroke={INK} strokeWidth="3" />
      <ellipse cx="0" cy="-3" rx="13" ry="5" fill="#a8622e" />
      <motion.g
        style={{ transformBox: 'fill-box', transformOrigin: '50% 100%' }}
        animate={{ scaleY: [1, 1.25, 0.9, 1.15, 1], scaleX: [1, 0.92, 1.06, 0.95, 1] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path d="M 0 -34 C 9 -22 7 -12 0 -6 C -7 -12 -9 -22 0 -34 Z" fill="#f5a623" stroke={INK} strokeWidth="2.4" />
        <path d="M 0 -24 C 4 -18 3 -12 0 -9 C -3 -12 -4 -18 0 -24 Z" fill="#f7e7b0" />
      </motion.g>
    </g>
  )
}
