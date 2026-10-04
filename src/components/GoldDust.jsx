import { useEffect, useRef } from 'react'

// Floating gold-dust particles over the whole page
export default function GoldDust({ count = 55 }) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let raf, w, h

    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const parts = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: 0.8 + Math.random() * 2.4,
      vy: 0.15 + Math.random() * 0.5,
      vx: (Math.random() - 0.5) * 0.25,
      a: 0.25 + Math.random() * 0.55,
      tw: Math.random() * Math.PI * 2,
      hue: 38 + Math.random() * 12,
    }))

    const tick = () => {
      ctx.clearRect(0, 0, w, h)
      for (const p of parts) {
        p.tw += 0.03
        p.y -= p.vy
        p.x += p.vx + Math.sin(p.tw) * 0.2
        if (p.y < -8) { p.y = h + 8; p.x = Math.random() * w }
        if (p.x < -8) p.x = w + 8
        if (p.x > w + 8) p.x = -8
        const alpha = p.a * (0.55 + 0.45 * Math.sin(p.tw))
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.hue}, 70%, 65%, ${alpha})`
        ctx.shadowColor = `hsla(${p.hue}, 80%, 60%, .8)`
        ctx.shadowBlur = 8
        ctx.fill()
        ctx.shadowBlur = 0
      }
      raf = requestAnimationFrame(tick)
    }
    tick()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [count])

  return <canvas ref={ref} className="gold-dust-canvas" aria-hidden />
}
