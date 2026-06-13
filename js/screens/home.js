import { BottomNav } from '../components/bottomNav.js';

export function HomeScreen() {
  return `
    <div class="app-shell">
      <main class="screen home-screen">
        <div class="status-space"></div>

        <header class="home-header">
          <div>
            <h1>Hola, Eduardo 👋</h1>
            <div class="streak-line">🔥 Racha: 24 semanas</div>
          </div>
          <button class="bell" aria-label="Notificaciones">🔔</button>
        </header>

        <section class="plan-hero">
          <small>Plan actual</small>
          <h2>Primer Paso</h2>
          <p>Semana 4 de 12</p>

          <svg class="mountain" viewBox="0 0 180 120" fill="none" aria-hidden="true">
            <path d="M8 105L55 37l36 68H8z" fill="rgba(255,255,255,.14)" />
            <path d="M45 105L107 15l61 90H45z" fill="rgba(255,255,255,.18)" />
            <path d="M107 15l17 25-19-9-13 12 15-28z" fill="rgba(255,255,255,.9)" />
            <path d="M55 37l13 25-14-8-10 13 11-30z" fill="rgba(255,255,255,.55)" />
            <path d="M102 105c21-25-19-29 4-49 10-8 25-8 38-17" stroke="rgba(255,255,255,.5)" stroke-width="8" stroke-linecap="round" />
          </svg>

          <div class="progress-block">
            <div class="progress-label">Progreso del plan</div>
            <div class="progress-sub">10 de 36 sesiones completadas</div>
            <div class="progress-track"><div class="progress-fill"></div></div>
          </div>
        </section>

        <section class="card today-card">
          <div class="section-kicker">Sesión de hoy</div>
          <h3 class="today-title">Semana 4 · Día 2</h3>

          <div class="workout-row">
            <div class="workout-step"><div class="workout-icon">🔥</div><strong>Calentamiento</strong><span>5 min</span></div>
            <div class="workout-step"><div class="workout-icon">🏃</div><strong>Correr</strong><span>12 min</span></div>
            <div class="workout-step"><div class="workout-icon">🚶</div><strong>Caminar</strong><span>16 min</span></div>
            <div class="workout-step"><div class="workout-icon">↝</div><strong>Enfriamiento</strong><span>5 min</span></div>
            <div class="workout-step"><div class="workout-icon">⏱</div><strong>Total</strong><span>38 min</span></div>
          </div>

          <button class="start-button">▶ Comenzar sesión</button>
        </section>

        <section class="grid-stats">
          <article class="card mini-card">
            <div class="mini-icon">🔥</div>
            <div><strong>Racha: 24 semanas</strong><span>Has completado 24 semanas consecutivas.</span></div>
          </article>
          <article class="card mini-card">
            <div>
              <strong>Suma racha esta semana</strong>
              <div class="streak-dots"><span class="streak-dot">🔥</span><span class="streak-dot">🔥</span><span class="streak-dot">○</span></div>
              <span>2 de 3 días</span>
            </div>
          </article>
        </section>

        <section class="card list-card">
          <div class="stat-row">
            <div class="stat-icon">🚩</div>
            <div class="stat-copy"><strong>Progreso del plan</strong><span>Semana 4 de 12 · 10 de 36 sesiones completadas</span></div>
            <div class="chev">›</div>
          </div>
          <div class="stat-row">
            <div class="stat-icon">👟</div>
            <div class="stat-copy"><strong>Última actividad</strong><span>8.2 km · Hace 2 días</span></div>
            <div class="chev">›</div>
          </div>
        </section>
      </main>
      ${BottomNav('home')}
    </div>
  `;
}
