import { CalendarDays, Home, Trophy, UserRound, Waypoints } from 'lucide-react'

const nav = [
  { label: 'Inicio', icon: Home, active: true },
  { label: 'Calendario', icon: CalendarDays },
  { label: 'Run', icon: Waypoints },
  { label: 'Ranking', icon: Trophy },
  { label: 'Perfil', icon: UserRound }
]

export default function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Navegación principal">
      {nav.map(({ label, icon: Icon, active }) => (
        <button className={active ? 'active' : ''} key={label} aria-label={label}>
          <Icon size={27} strokeWidth={active ? 2.8 : 2.2} fill={active ? 'currentColor' : 'none'} />
          {active && <span />}
        </button>
      ))}
    </nav>
  )
}
