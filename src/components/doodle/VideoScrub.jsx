import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

// Scroll-scrubbed AI video player.
// The video is pre-sliced into WebP frames; scroll progress (0→1) picks the
// frame, so scrolling down plays forward and scrolling up reverses —
// butter-smooth in both directions, unlike video.currentTime seeking.
const W = 400
const H = 712 // 9:16

export default function VideoScrub({ kicker, title, hint, folder, count = 54, track = '200vh' }) {
  const trackRef = useRef(null)
  const canvasRef = useRef(null)
  const imgs = useRef([])
  const [loadedCount, setLoadedCount] = useState(0)
  const [started, setStarted] = useState(false)
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start start', 'end end'] })

  // Start preloading only when the scene is approaching the viewport
  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true)
          io.disconnect()
        }
      },
      { rootMargin: '1400px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const drawFrame = (idx) => {
    const canvas = canvasRef.current
    const img = imgs.current[idx]
    if (!canvas || !img) return
    canvas.getContext('2d').drawImage(img, 0, 0, W, H)
  }

  useEffect(() => {
    if (!started) return
    let alive = true
    for (let i = 0; i < count; i++) {
      const img = new Image()
      img.decoding = 'async'
      img.src = `frames/${folder}/f-${String(i + 1).padStart(3, '0')}.webp`
      img.onload = () => {
        if (!alive) return
        imgs.current[i] = img
        if (i === 0) drawFrame(0)
        setLoadedCount((c) => c + 1)
      }
    }
    return () => {
      alive = false
    }
  }, [started, count, folder])

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.max(0, Math.min(count - 1, Math.round(v * (count - 1))))
    drawFrame(idx)
  })

  const pct = Math.round((loadedCount / count) * 100)

  return (
    <div ref={trackRef} className="scrub-track" style={{ height: track }}>
      <div className="scrub-sticky">
        <div className="video-card">
          <div className="doodle-head">
            <div className="section-kicker" style={{ marginBottom: 6 }}>{kicker}</div>
            <h3 className="doodle-title gold-text">{title}</h3>
          </div>
          <div className="video-stage">
            <canvas
              ref={canvasRef}
              width={W}
              height={H}
              className="video-canvas"
              style={{ backgroundImage: `url(frames/${folder}/poster.webp)` }}
            />
            {loadedCount < count && <div className="video-loading">✦ loading {pct}%</div>}
          </div>
          <div className="doodle-progress">
            <motion.div className="doodle-progress-fill" style={{ scaleX: scrollYProgress }} />
          </div>
          <div className="scrub-hint scrub-hint-dark">{hint}</div>
        </div>
      </div>
    </div>
  )
}
