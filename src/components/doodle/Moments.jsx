import Reveal from '../Reveal.jsx'
import VideoScrub from './VideoScrub.jsx'

// ── "Rasmein" — AI videos, scrubbed by scroll ──
const SCENES = [
  {
    folder: 'varmala',
    kicker: 'Rasam 1',
    title: 'Varmala',
    hint: '👇 Neeche scroll karo to varmala pehnayenge · upar lao to wapas utar jayegi',
  },
  {
    folder: 'phere',
    kicker: 'Rasam 2',
    title: 'Saat Phere',
    hint: '👇 Neeche scroll karo to phere aage badhenge · upar lao to peeche',
    track: '220vh',
  },
  {
    folder: 'feeding',
    kicker: 'Rasam 3',
    title: 'Mithaas',
    hint: '👇 Neeche scroll karo to ladoo khilayenge · upar lao to wapas',
  },
]

export default function Moments() {
  return (
    <section className="moments-wrap">
      <div className="section" style={{ paddingBottom: 10 }}>
        <Reveal>
          <div className="section-kicker">Interactive</div>
          <h2 className="section-title gold-text">Rasmein</h2>
          <p className="section-body">
            Ye teen rasmein tumhare scroll se chalengi — <b>neeche scroll</b> karo to video aage badhegi,
            <b> upar scroll</b> karo to wapas peeche. Control tumhare haath me.
          </p>
          <div className="divider"><span>✦</span></div>
        </Reveal>
      </div>
      {SCENES.map((s) => (
        <VideoScrub key={s.folder} {...s} />
      ))}
    </section>
  )
}
