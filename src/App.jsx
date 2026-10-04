import { useMemo, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Envelope from './components/Envelope.jsx'
import ScratchCard from './components/ScratchCard.jsx'
import Hero from './components/Hero.jsx'
import Welcome from './components/Welcome.jsx'
import Moments from './components/doodle/Moments.jsx'
import Countdown from './components/Countdown.jsx'
import Events from './components/Events.jsx'
import Venue from './components/Venue.jsx'
import Gallery from './components/Gallery.jsx'
import Family from './components/Family.jsx'
import RSVP from './components/RSVP.jsx'
import Footer from './components/Footer.jsx'
import MusicToggle from './components/MusicToggle.jsx'
import GoldDust from './components/GoldDust.jsx'

export default function App() {
  const [opened, setOpened] = useState(false)

  // Guest name from ?g= link (e.g. ?g=Rahul%20Sharma)
  const guest = useMemo(() => {
    try {
      const g = new URLSearchParams(window.location.search).get('g')
      return g ? decodeURIComponent(g).trim() : ''
    } catch {
      return ''
    }
  }, [])

  return (
    <div className="app-shell">
      <GoldDust />
      <div className="content-col">
        <AnimatePresence mode="wait">
          {!opened ? (
            <Envelope key="envelope" guest={guest} onOpen={() => setOpened(true)} />
          ) : (
            <main key="main">
              <Hero />
              <Countdown />
              <ScratchCard />
              <Welcome />
              <Moments />
              <Events />
              <Gallery />
              <Venue />
              <Family />
              <RSVP />
              <Footer />
            </main>
          )}
        </AnimatePresence>
      </div>
      {opened && <MusicToggle started={opened} />}
    </div>
  )
}
