import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { CONFIG } from '../config.js'
import Reveal from './Reveal.jsx'

// Zareqia-style "Scratch to Reveal" Save-the-Date card — canvas based
export default function ScratchCard() {
  const coverRef = useRef(null)
  const wrapRef = useRef(null)
  const [revealed, setRevealed] = useState(false)
  const { scratch } = CONFIG

  useEffect(() => {
    const canvas = coverRef.current
    const wrap = wrapRef.current
    if (!canvas || !wrap) return
    const ctx = canvas.getContext('2d')

    const draw = () => {
      const w = (canvas.width = wrap.clientWidth)
      const h = (canvas.height = wrap.clientHeight)
      const g = ctx.createLinearGradient(0, 0, w, h)
      g.addColorStop(0, '#8a6a1f')
      g.addColorStop(0.5, '#d4af37')
      g.addColorStop(1, '#a17c22')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, w, h)
      ctx.fillStyle = 'rgba(42,21,3,0.85)'
      ctx.font = `600 ${Math.min(20, w / 15)}px Marcellus, serif`
      ctx.textAlign = 'center'
      ctx.fillText('✦  SCRATCH HERE  ✦', w / 2, h / 2 - 6)
      ctx.font = '16px Cormorant Garamond, serif'
      ctx.fillText('to reveal the date', w / 2, h / 2 + 22)
      // subtle diagonal sheen lines
      ctx.strokeStyle = 'rgba(255,255,255,0.18)'
      ctx.lineWidth = 2
      for (let x = -h; x < w; x += 26) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x + h, h); ctx.stroke()
      }
    }
    draw()
    window.addEventListener('resize', draw)

    let scratching = false
    let cleared = 0
    const BRUSH = 34

    const pos = (e) => {
      const r = canvas.getBoundingClientRect()
      const t = e.touches ? e.touches[0] : e
      return { x: t.clientX - r.left, y: t.clientY - r.top }
    }
    const scratchAt = (x, y) => {
      ctx.globalCompositeOperation = 'destination-out'
      ctx.beginPath()
      ctx.arc(x, y, BRUSH, 0, Math.PI * 2)
      ctx.fill()
      cleared += 1
      // check coverage every ~40 strokes
      if (cleared % 40 === 0) {
        const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data
        let transparent = 0
        for (let i = 3; i < data.length; i += 32) if (data[i] === 0) transparent++
        if (transparent / (data.length / 32) > 0.45) finish()
      }
    }
    const finish = () => {
      if (revealed) return
      setRevealed(true)
      confetti({
        particleCount: 90, spread: 80, origin: { y: 0.6 },
        colors: ['#d4af37', '#f3d67c', '#faf3e3', '#e05260'],
        disableForReducedMotion: true,
      })
    }

    const down = (e) => { scratching = true; const p = pos(e); scratchAt(p.x, p.y); e.preventDefault() }
    const move = (e) => { if (!scratching) return; const p = pos(e); scratchAt(p.x, p.y); e.preventDefault() }
    const up = () => { scratching = false }

    canvas.addEventListener('pointerdown', down)
    canvas.addEventListener('pointermove', move)
    window.addEventListener('pointerup', up)
    return () => {
      window.removeEventListener('resize', draw)
      window.removeEventListener('pointerup', up)
    }
  }, [revealed])

  return (
    <div className="scratch-stage">
      <Reveal>
        <div className="section-kicker">Save the Date</div>
        <div className="divider"><span>✦</span></div>
        <div ref={wrapRef} className="scratch-card-wrap">
          <div className="scratch-reveal">
            <h3 className="gold-text">{scratch.heading}</h3>
            <div className="scratch-date gold-text">{scratch.date}</div>
            <div className="scratch-day">{scratch.day}</div>
            <div className="divider"><span>♥</span></div>
            <div className="btn-gold" style={{ marginTop: 6 }}>{scratch.cta}</div>
          </div>
          {!revealed && <canvas ref={coverRef} className="scratch-cover" />}
        </div>
        {!revealed && <div className="scratch-instr">Rub the card gently with your finger</div>}
      </Reveal>
    </div>
  )
}
