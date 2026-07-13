import BottomNav from '../components/BottomNav'
import HomeHeader from '../components/HomeHeader'
import PlanCard from '../components/PlanCard'
import SummaryCard from '../components/SummaryCard'
import TodaySessionCard from '../components/TodaySessionCard'
import { homeData } from '../data/mockHome'

export default function HomeScreen() {
  const { user, currentPlan, todaySession, weeklyStreak, lastActivity } = homeData

  return (
    <main className="mobile-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="content-shell">
        <HomeHeader name={user.name} streakWeeks={user.streakWeeks} />
        <PlanCard {...currentPlan} />
        <TodaySessionCard {...todaySession} />
        <SummaryCard
          streakWeeks={user.streakWeeks}
          completedDays={weeklyStreak.completedDays}
          targetDays={weeklyStreak.targetDays}
          week={currentPlan.week}
          totalWeeks={currentPlan.totalWeeks}
          completedSessions={currentPlan.completedSessions}
          totalSessions={currentPlan.totalSessions}
          lastDistanceKm={lastActivity.distanceKm}
          lastActivityDate={lastActivity.dateLabel}
        />
      </div>
      <BottomNav />
    </main>
  )
}
