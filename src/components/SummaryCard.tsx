import { ChevronRight, Flame, Flag, Footprints } from 'lucide-react'

type Props = {
  streakWeeks: number
  completedDays: number
  targetDays: number
  week: number
  totalWeeks: number
  completedSessions: number
  totalSessions: number
  lastDistanceKm: number
  lastActivityDate: string
}

export default function SummaryCard(props: Props) {
  return (
    <section className="card summary-card">
      <div className="summary-row top-row">
        <div className="summary-icon"><Flame size={30} fill="currentColor" /></div>
        <div className="summary-copy">
          <h3>Racha: {props.streakWeeks} semanas</h3>
          <p>Has completado<br />{props.streakWeeks} semanas consecutivas.</p>
        </div>
        <div className="week-streak">
          <p>Suma racha esta semana</p>
          <div className="mini-days">
            {Array.from({ length: props.targetDays }).map((_, index) => (
              <span className={index < props.completedDays ? 'active' : ''} key={index}>
                <Flame size={20} fill="currentColor" />
              </span>
            ))}
          </div>
          <strong>{props.completedDays} de {props.targetDays} días</strong>
        </div>
      </div>

      <button className="summary-row action-row">
        <div className="summary-icon"><Flag size={28} fill="currentColor" /></div>
        <div className="summary-copy">
          <h3>Progreso del plan</h3>
          <p className="accent">Semana {props.week} de {props.totalWeeks}</p>
          <p>{props.completedSessions} de {props.totalSessions} sesiones completadas</p>
        </div>
        <ChevronRight size={30} />
      </button>

      <button className="summary-row action-row">
        <div className="summary-icon"><Footprints size={28} /></div>
        <div className="summary-copy">
          <h3>Última actividad</h3>
          <p className="distance">{props.lastDistanceKm} km</p>
          <p>{props.lastActivityDate}</p>
        </div>
        <ChevronRight size={30} />
      </button>
    </section>
  )
}
