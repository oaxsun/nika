import MountainArt from './MountainArt'

type Props = {
  label: string
  name: string
  week: number
  totalWeeks: number
  progress: number
}

export default function PlanCard({ label, name, week, totalWeeks, progress }: Props) {
  return (
    <section className="card plan-card">
      <div className="plan-content">
        <p className="section-label">{label}</p>
        <h2>{name}</h2>
        <p className="muted">Semana {week} de {totalWeeks}</p>
      </div>
      <MountainArt />
      <div className="divider" />
      <p className="muted small-title">Progreso del plan</p>
      <p className="progress-copy"><strong>{progress}%</strong> del camino completado</p>
      <div className="progress-track" aria-label={`Progreso ${progress}%`}>
        <span style={{ width: `${progress}%` }} />
      </div>
    </section>
  )
}
