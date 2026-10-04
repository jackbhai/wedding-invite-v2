import { motion } from 'framer-motion'
import { CONFIG } from '../config.js'
import Reveal from './Reveal.jsx'

// Couple hero — arch-framed photo, names, date badge
export default function Hero() {
  const { couple } = CONFIG
  return (
    <section className="hero">
      <Reveal>
        <motion.div
          className="hero-frame"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src="images/couple-main.png" alt={`${couple.groom} & ${couple.bride}`} />
        </motion.div>
      </Reveal>
      <Reveal delay={0.15}>
        <div className="section-kicker">Together with their families</div>
        <h1 className="couple-names gold-text">{couple.groomShort}</h1>
        <div className="couple-amp">&</div>
        <h1 className="couple-names gold-text">{couple.brideShort}</h1>
        <p className="hero-tagline">{couple.tagline}</p>
        <div className="hero-date">{couple.dateDisplay}</div>
      </Reveal>
    </section>
  )
}
