import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { CONFIG } from '../config.js'

// Cinematic envelope cover — tap the wax seal to open
export default function Envelope({ guest, onOpen }) {
  const [opening, setOpening] = useState(false)
  const { envelope, couple } = CONFIG

  const handleOpen = () => {
    if (opening) return
    setOpening(true)
    confetti({
      particleCount: 130,
      spread: 100,
      origin: { y: 0.45 },
      colors: ['#d4af37', '#f3d67c', '#faf3e3', '#e8b4b8', '#a1121f'],
      disableForReducedMotion: true,
    })
    setTimeout(onOpen, 1400)
  }

  return (
    <motion.div
      className="envelope-screen"
      exit={{ opacity: 0, scale: 1.06, filter: 'blur(6px)' }}
      transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
    >
      <motion.div
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="env-ganesha">{envelope.headline}</div>
        <div className="env-bless">{envelope.subtext}</div>
      </motion.div>

      <motion.div
        className="envelope-wrap"
        initial={{ opacity: 0, y: 40, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="envelope-body">
          <div className="env-monogram gold-text">{couple.monogram}</div>
        </div>
        <motion.div
          className="env-flap"
          animate={opening ? { rotateX: -165, opacity: 0.15 } : { rotateX: 0 }}
          transition={{ duration: 1.1, ease: [0.5, 0, 0.2, 1] }}
        />
        <AnimatePresence>
          {!opening && (
            <motion.button
              className="wax-seal"
              onClick={handleOpen}
              aria-label="Open invitation"
              exit={{ scale: 1.6, opacity: 0 }}
              transition={{ duration: 0.5 }}
              whileTap={{ scale: 0.9 }}
            >
              <span>{couple.groomShort[0]}{couple.brideShort[0]}</span>
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
      >
        <div className="env-hint">{opening ? 'Opening…' : envelope.hintText}</div>
        {guest && <div className="env-guest">Dear {guest},</div>}
      </motion.div>
    </motion.div>
  )
}
