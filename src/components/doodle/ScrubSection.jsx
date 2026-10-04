import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'

// Sticky full-screen track: the scene pins while you scroll through it,
// and scrollYProgress (0 → 1) scrubs the animation forward / backward.
export default function ScrubSection({ kicker, title, hint, track = '320vh', children }) {
  const trackRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  })

  return (
    <div ref={trackRef} className="scrub-track" style={{ height: track }}>
      <div className="scrub-sticky">
        <div className="doodle-card">
          <div className="doodle-head">
            <div className="section-kicker" style={{ marginBottom: 6 }}>{kicker}</div>
            <h3 className="doodle-title gold-text">{title}</h3>
          </div>
          <div className="doodle-stage">{children(scrollYProgress)}</div>
          <div className="doodle-progress">
            <motion.div className="doodle-progress-fill" style={{ scaleX: scrollYProgress }} />
          </div>
          <div className="scrub-hint">{hint}</div>
        </div>
      </div>
    </div>
  )
}
