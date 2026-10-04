import { motion } from 'framer-motion'
import { CONFIG } from '../config.js'
import Reveal from './Reveal.jsx'

// Welcome message — the Zareqia "honored to welcome you" page, elevated
export default function Welcome() {
  const { welcome } = CONFIG
  return (
    <section className="section">
      <Reveal>
        <div className="section-kicker">Welcome</div>
        <div className="welcome-heart">{welcome.heart}</div>
        <p className="section-body" style={{ fontSize: 21 }}>
          {welcome.kicker} {welcome.body}
        </p>
        <div className="divider"><span>✦</span></div>
      </Reveal>
    </section>
  )
}
