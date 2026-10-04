import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { CONFIG } from '../config.js'
import { saveRSVP } from '../firebase.js'
import Reveal from './Reveal.jsx'

// Real RSVP form — writes to Firestore
export default function RSVP() {
  const { rsvp } = CONFIG
  const [form, setForm] = useState({ name: '', attending: 'yes', guests: '2', message: '' })
  const [state, setState] = useState('idle') // idle | sending | done | error

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    if (!form.name.trim() || state === 'sending') return
    setState('sending')
    try {
      await saveRSVP({ ...form, name: form.name.trim() })
      setState('done')
      confetti({
        particleCount: 120, spread: 90, origin: { y: 0.7 },
        colors: ['#d4af37', '#f3d67c', '#faf3e3', '#e05260'],
        disableForReducedMotion: true,
      })
    } catch {
      setState('error')
    }
  }

  return (
    <section className="section">
      <Reveal>
        <div className="section-kicker">RSVP</div>
        <h2 className="section-title gold-text">Join Us</h2>
        <div className="divider"><span>✦</span></div>
        <div className="rsvp-card">
          <AnimatePresence mode="wait">
            {state === 'done' ? (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <p className="section-body">{rsvp.heading}</p>
                <p className="rsvp-msg">Thank you! Your response has been received with love.</p>
                <div className="rsvp-signature gold-text">{rsvp.signature}</div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={submit}
                exit={{ opacity: 0 }}
              >
                <p className="section-body" style={{ marginBottom: 22 }}>{rsvp.heading}</p>
                <div className="rsvp-field">
                  <label>Your Name</label>
                  <input value={form.name} onChange={set('name')} placeholder="Full name" required />
                </div>
                <div className="rsvp-field">
                  <label>Will you attend?</label>
                  <select value={form.attending} onChange={set('attending')}>
                    <option value="yes">Joyfully Accepts</option>
                    <option value="no">Regretfully Declines</option>
                  </select>
                </div>
                <div className="rsvp-field">
                  <label>Number of Guests</label>
                  <select value={form.guests} onChange={set('guests')}>
                    {['1', '2', '3', '4', '5+'].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>
                <div className="rsvp-field">
                  <label>Blessings / Message</label>
                  <textarea value={form.message} onChange={set('message')} rows={3} placeholder="Your wishes for the couple…" />
                </div>
                <button className="btn-gold" type="submit" disabled={state === 'sending'} style={{ width: '100%', marginTop: 6 }}>
                  {state === 'sending' ? 'Sending…' : 'Send RSVP ♥'}
                </button>
                {state === 'error' && (
                  <p className="rsvp-msg" style={{ color: '#e05260' }}>
                    Couldn't send right now — please try again in a bit.
                  </p>
                )}
                <p className="rsvp-msg" style={{ fontSize: 15 }}>{rsvp.sub}</p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </Reveal>
    </section>
  )
}
