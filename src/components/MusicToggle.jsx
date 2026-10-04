import { useEffect, useRef, useState } from 'react'
import { CONFIG } from '../config.js'

// Floating music toggle — starts on envelope open
export default function MusicToggle({ started }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (started && audioRef.current && !playing) {
      audioRef.current.volume = 0.55
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {})
    }
  }, [started]) // eslint-disable-line react-hooks/exhaustive-deps

  const toggle = () => {
    const a = audioRef.current
    if (!a) return
    if (playing) { a.pause(); setPlaying(false) }
    else { a.play().then(() => setPlaying(true)).catch(() => {}) }
  }

  return (
    <>
      <audio ref={audioRef} src={CONFIG.music.url} loop preload="auto" />
      <button
        className={`music-fab${playing ? ' playing' : ''}`}
        onClick={toggle}
        aria-label={playing ? 'Mute music' : 'Play music'}
      >
        {playing ? '♪' : '♫'}
      </button>
    </>
  )
}
