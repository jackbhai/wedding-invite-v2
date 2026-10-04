import { CONFIG } from '../config.js'
import Reveal from './Reveal.jsx'

// Venue card — map directions + add-to-calendar
export default function Venue() {
  const { venue, couple } = CONFIG
  const gcal = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    `${couple.groomShort} ♥ ${couple.brideShort} — Wedding`
  )}&dates=20261120T133000Z/20261120T180000Z&details=${encodeURIComponent(
    'Wedding celebration of ' + couple.groom + ' & ' + couple.bride
  )}&location=${encodeURIComponent(venue.address)}`

  return (
    <section className="section">
      <Reveal>
        <div className="section-kicker">{venue.title}</div>
        <h2 className="section-title gold-text">Where</h2>
        <div className="divider"><span>✦</span></div>
        <div className="venue-card">
          <div className="venue-name">{venue.name}</div>
          <div className="venue-addr">{venue.address}</div>
          <div className="venue-actions">
            <a className="btn-gold" href={venue.mapUrl} target="_blank" rel="noreferrer">
              📍 Get Directions
            </a>
            <a className="btn-ghost" href={gcal} target="_blank" rel="noreferrer">
              🗓 Add to Calendar
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
