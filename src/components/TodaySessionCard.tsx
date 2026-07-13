import { Flame, Footprints, Play, Timer, Waves, Wind } from 'lucide-react'

type Props = {
  label: string
  week: number
  day: number
  warmup: number
  run: number
  walk: number
  cooldown: number
  total: number
}

const items = [
  { key: 'warmup', label: 'Calentamiento', icon: Flame },
  { key: 'run', label: 'Correr', icon: Footprints },
  { key: 'walk', label: 'Caminar', icon: Waves },
  { key: 'cooldown', label: 'Enfriamiento', icon: Wind },
  { key: 'total', label: 'Total', icon: Timer }
] as const

export default function TodaySessionCard(props: Props) {
  const values = {
    warmup: props.warmup,
    run: props.run,
    walk: props.walk,
    cooldown: props.cooldown,
    total: props.total
  }

  return (
    <section className="card session-card">
      <p className="section-label">{props.label}</p>
      <h2>Semana {props.week} • Día {props.day}</h2>
      <div className="session-grid">
        {items.map(({ key, label, icon: Icon }) => (
          <div className="session-item" key={key}>
            <div className="session-icon"><Icon size={24} /></div>
            <p>{label}</p>
            <strong>{values[key]} min</strong>
          </div>
        ))}
      </div>
      <button className="primary-cta">
        <Play size={24} fill="currentColor" />
        Comenzar sesión
      </button>
    </section>
  )
}
