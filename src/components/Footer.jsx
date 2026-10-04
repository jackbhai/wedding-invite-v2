import { CONFIG } from '../config.js'
import Reveal from './Reveal.jsx'

export default function Footer() {
  const { footer, couple } = CONFIG
  return (
    <footer className="footer">
      <Reveal>
        <div className="divider"><span>✦</span></div>
        <div className="footer-names gold-text">
          {couple.groomShort} ♥ {couple.brideShort}
        </div>
        <p className="footer-line">{footer.familyText}</p>
        <p className="footer-line">{footer.inviteLine}</p>
        <div className="divider" style={{ marginTop: 34 }}><span>॥ शुभ विवाह ॥</span></div>
      </Reveal>
    </footer>
  )
}
