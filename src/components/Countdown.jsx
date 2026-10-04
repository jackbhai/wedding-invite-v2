import { useEffect, useState } from 'react'
import { CONFIG } from '../config.js'
import Reveal from './Reveal.jsx'

function parts(target) {
  const diff = Math.max(0, target - Date.now())
  return {
    d: Math.floor(diff / 864e5),
    h: Math.floor(diff / 36e5) % 24,
    m: Math.floor(diff / 6e4) % 60,
    s: Math.floor(diff / 1e3) % 60,
  }
}

export default function Countdown() {
  const target = new Date(CONFIG.couple.dateISO).getTime()
  const [t, setT] = useState(() => parts(target))

  useEffect(() => {
    const id = setInterval(() => setT(parts(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  const cells = [
    [t.d, 'Days'],
    [t.h, 'Hours'],
    [t.m, 'Mins'],
    [t.s, 'Secs'],
  ]
  return (
    <section className="section" style={{ paddingTop: 10 }}>
      <Reveal>
        <div className="section-kicker">Counting down to forever</div>
        <div className="countdown">
          {cells.map(([n, label]) => (
            <div className="cd-cell" key={label}>
              <div className="cd-num">{String(n).padStart(2, '0')}</div>
              <div className="cd-label">{label}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
