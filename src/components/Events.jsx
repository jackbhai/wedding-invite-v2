import { motion } from 'framer-motion'
import { CONFIG } from '../config.js'
import Reveal from './Reveal.jsx'

// Events timeline — Haldi / Mehndi / Sangeet / Anand Karaj / Reception
export default function Events() {
  const { events } = CONFIG
  return (
    <section className="section">
      <Reveal>
        <div className="section-kicker">Celebrations</div>
        <h2 className="section-title gold-text">Functions</h2>
        <div className="divider"><span>✦</span></div>
      </Reveal>
      <div className="timeline">
        {events.map((e, i) => (
          <motion.div
            key={e.id}
            className="event-card"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: Math.min(i * 0.08, 0.4), ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="event-dot" />
            <div className="event-title gold-text">{e.title}</div>
            <div className="event-meta">{e.date} · {e.time}</div>
            <div className="event-venue">{e.venue}</div>
            <div className="event-note">{e.note}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
