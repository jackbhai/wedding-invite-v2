import { motion } from 'framer-motion'
import { CONFIG } from '../config.js'
import Reveal from './Reveal.jsx'

// Photo gallery — the couple's real photos
export default function Gallery() {
  return (
    <section className="section">
      <Reveal>
        <div className="section-kicker">Glimpses</div>
        <h2 className="section-title gold-text">The Couple</h2>
        <div className="divider"><span>✦</span></div>
      </Reveal>
      <div className="gallery">
        {CONFIG.gallery.map((g, i) => (
          <motion.div
            key={g.src}
            className="g-frame"
            initial={{ opacity: 0, y: 50, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: Math.min(i * 0.1, 0.3), ease: [0.16, 1, 0.3, 1] }}
          >
            <img src={g.src} alt={g.caption} loading="lazy" />
            <div className="g-caption">{g.caption}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
