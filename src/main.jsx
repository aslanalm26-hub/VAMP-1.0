import React from 'react'
import { createRoot } from 'react-dom/client'
import { Plane, ShieldCheck, RadioTower, Map, Users, BarChart3, Send, Crown, Star, Database, Flag } from 'lucide-react'
import './styles.css'
import logo from './assets/pegasus-logo.jpg'
import hero from './assets/pegasus-hero.jpg'
import tail from './assets/pegasus-tail.jpg'

const airlines = [
  { name: 'Pegasus Virtual', status: 'Official demo airline', aircraft: 'A320neo / A321neo', pilots: 128, color: 'active' },
  { name: 'Turkish Virtual', status: 'Coming soon', aircraft: 'A320 / B737 / B777', pilots: 0 },
  { name: 'SunExpress Virtual', status: 'Coming soon', aircraft: 'B737', pilots: 0 },
  { name: 'AJet Virtual', status: 'Coming soon', aircraft: 'B737 MAX', pilots: 0 },
]

const flights = [
  ['PC2211', 'PGT2211', 'LTFM', 'LTAI', 'A321neo', 'FL350', 'Demo'],
  ['PC2004', 'PGT2004', 'LTFM', 'LTAC', 'A320neo', 'FL330', 'Demo'],
  ['PC1173', 'PGT1173', 'LTFJ', 'EDDF', 'A320neo', 'FL360', 'Demo'],
  ['PC7151', 'PGT7151', 'LTFM', 'EGKK', 'A321neo', 'FL380', 'Demo'],
]

const ranks = [
  ['Cadet Pilot', '0–25h', 1],
  ['Second Officer', '25–75h', 2],
  ['First Officer', '75–200h', 3],
  ['Captain', '200h+', 4],
  ['Training Captain', '500h+', 4],
]

function Epaulette({ stripes = 4 }) {
  return <div className="epaulette" aria-label={`${stripes} stripe epaulette`}>
    {Array.from({ length: stripes }).map((_, i) => <span key={i} />)}
  </div>
}

function App() {
  return <main>
    <nav className="nav">
      <div className="brand"><div className="mark">V</div><div><b>VAMP</b><small>Virtual Aviation Management Platform</small></div></div>
      <div className="navlinks"><a href="#airlines">Airlines</a><a href="#dispatch">Dispatch</a><a href="#founder">Founder</a><a href="#admin">Admin</a></div>
    </nav>

    <section className="hero">
      <div className="heroText">
        <div className="pill"><RadioTower size={16}/> VATSIM-ready virtual airline operations</div>
        <h1>Build, manage and fly virtual airlines from one platform.</h1>
        <p>VAMP is a modern virtual aviation management platform for airline applications, pilot dashboards, dispatch, PIREPs, ranks, live maps and future ACARS tracking.</p>
        <div className="cta"><button>Open Demo Airline</button><button className="ghost">Apply as Pilot</button></div>
        <div className="stats"><div><b>1</b><span>Demo airline</span></div><div><b>4</b><span>Sample flights</span></div><div><b>5</b><span>Rank levels</span></div></div>
      </div>
      <div className="heroCard">
        <img src={hero} alt="Pegasus Virtual demo aircraft" />
        <div className="overlay"><img src={logo} alt="Pegasus Airlines logo"/><div><b>Pegasus Virtual</b><span>Official demo airline inside VAMP</span></div></div>
      </div>
    </section>

    <section className="grid" id="airlines">
      {airlines.map(a => <div className={`card airline ${a.color || ''}`} key={a.name}><Plane/><h3>{a.name}</h3><p>{a.status}</p><small>{a.aircraft}</small><b>{a.pilots} pilots</b></div>)}
    </section>

    <section className="split" id="founder">
      <div className="founder card">
        <div className="flag"><span></span></div>
        <div className="avatar"><Crown size={36}/></div>
        <p className="muted">Founder Member</p>
        <h2>Captain Aslan Canoğlu</h2>
        <div className="rankline"><Epaulette stripes={4}/><strong>Captain — 4 stripes</strong></div>
        <p>Pilot ID: <b>PV0001</b></p>
        <p>Founder of VAMP and Pegasus Virtual demo operations.</p>
      </div>
      <div className="card imageCard"><img src={tail} alt="Pegasus tail"/><div><h2>Turkish Virtual Aviation, built professionally.</h2><p>Designed for pilots, staff and virtual airline founders in Türkiye and worldwide.</p></div></div>
    </section>

    <section className="panel" id="dispatch">
      <div className="sectionTitle"><Send/><div><h2>Dispatch Center</h2><p>Book a demo flight and generate SimBrief-ready data.</p></div></div>
      <div className="table">
        <div className="row head"><span>Flight</span><span>Callsign</span><span>From</span><span>To</span><span>Aircraft</span><span>Level</span><span>Source</span></div>
        {flights.map((f,i)=><div className="row" key={i}>{f.map(x=><span key={x}>{x}</span>)}</div>)}
      </div>
    </section>

    <section className="grid three">
      <div className="card"><ShieldCheck/><h3>Pilot Applications</h3><p>Real name, VATSIM CID, SimBrief username and staff approval workflow.</p></div>
      <div className="card"><Map/><h3>Future ACARS Map</h3><p>Live positions, phase tracking, block time and automatic PIREP pipeline.</p></div>
      <div className="card"><Database/><h3>Live Data Providers</h3><p>AviationStack, AeroDataBox, FlightAware, Cirium, ADS-B Exchange and OpenSky ready.</p></div>
    </section>

    <section className="panel">
      <div className="sectionTitle"><Star/><div><h2>Rank System</h2><p>Professional pilot progression with epaulette visuals.</p></div></div>
      <div className="rankgrid">{ranks.map(r=><div className="rank" key={r[0]}><Epaulette stripes={r[2]}/><b>{r[0]}</b><span>{r[1]}</span></div>)}</div>
    </section>

    <section className="panel" id="admin">
      <div className="sectionTitle"><Users/><div><h2>Admin Operations</h2><p>Approve pilots, manage airlines, fleets, schedules, ranks and PIREPs.</p></div></div>
      <div className="adminGrid"><div><BarChart3/><b>Applications</b><span>12 pending</span></div><div><Plane/><b>Fleet</b><span>28 aircraft</span></div><div><Flag/><b>Türkiye Hub</b><span>LTFM / LTFJ</span></div></div>
    </section>

    <footer>VAMP — Virtual Aviation Management Platform. Pegasus Virtual is a demo airline environment. Assets provided by project owner.</footer>
  </main>
}

createRoot(document.getElementById('root')).render(<App />)
