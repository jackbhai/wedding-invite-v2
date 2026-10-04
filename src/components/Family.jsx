import { CONFIG } from '../config.js'
import Reveal from './Reveal.jsx'

// Family blessings section
export default function Family() {
  const { family } = CONFIG
  return (
    <section className="section">
      <Reveal>
        <div className="section-kicker">Family</div>
        <h2 className="section-title gold-text">Blessings</h2>
        <div className="divider"><span>✦</span></div>
        <p className="family-verse">
          {family.verse.map((line, i) => (
            <span key={i}>{line}<br /></span>
          ))}
        </p>
        <div className="family-row">
          <div className="family-role">{family.blessing}</div>
          <div className="family-names">{family.grandparents}</div>
        </div>
        <div className="family-row">
          <div className="family-role">Groom's Parents</div>
          <div className="family-names">{family.groomParents}</div>
        </div>
        <div className="family-row">
          <div className="family-role">Bride's Parents</div>
          <div className="family-names">{family.brideParents}</div>
        </div>
      </Reveal>
    </section>
  )
}
