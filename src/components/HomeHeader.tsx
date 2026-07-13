import { Bell } from 'lucide-react'

type Props = {
  name: string
  streakWeeks: number
}

export default function HomeHeader({ name, streakWeeks }: Props) {
  return (
    <header className="home-header">
      <div>
        <h1>Hola, {name} <span aria-hidden="true">👋</span></h1>
        <p className="streak-line"><span aria-hidden="true">🔥</span> Racha: <strong>{streakWeeks} semanas</strong></p>
      </div>
      <button className="notification-button" aria-label="Notificaciones">
        <Bell size={26} />
        <span />
      </button>
    </header>
  )
}
