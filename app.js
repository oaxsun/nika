// NIKA Web Mobile v0.1.8
// Pantalla móvil estática, ligera y sin dependencias externas.

const appRoot = document.getElementById('app-root');

appRoot.innerHTML = `<main class="desktop-lock" aria-label="NIKA solo móvil">
    <section class="lock-card">
      <div class="phone"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg></div>
      <p class="eyebrow">NIKA WEB</p>
      <h1>NIKA vive en tu celular.</h1>
      <p>Esta versión está diseñada exclusivamente para móvil. Abre esta página desde tu teléfono para comenzar a correr con NIKA.</p>
    </section>
  </main>

  <main class="app">
    <header class="fixed-head">
      <h1>Hola, Eduardo</h1>
      <p class="streak"><svg viewBox="0 0 24 24"><path d="M12 22c4.2 0 7-2.9 7-6.8 0-2.7-1.4-5.2-3.6-7.4-.5 2.2-1.7 3.2-3 3.8.4-3-1-5.7-3.4-8.1.1 4-2.4 5.8-3.3 8.8C4.6 16.3 7.5 22 12 22Z"/></svg> Racha: <b>0 semanas</b></p>
    </header>

    <section class="shell">
      <section class="card plan">
        <p class="label">PLAN ACTUAL</p>
        <h2>Primer Paso</h2>
        <p class="muted">Semana 1 de 12</p>
        <svg class="mountain" viewBox="0 0 360 210" aria-hidden="true"><defs><linearGradient id="peak" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#2b3741"/><stop offset="1" stop-color="#111b22"/></linearGradient><linearGradient id="road" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#d7ff00"/><stop offset="1" stop-color="#8eea00"/></linearGradient></defs><g opacity=".72"><path d="M40 168 L132 54 L222 168 Z" fill="url(#peak)"/><path d="M100 168 L188 36 L310 168 Z" fill="#202a33"/><path d="M188 36 L224 92 L206 84 L194 110 L170 75 Z" fill="#3b4650"/><path d="M258 168 L312 88 L354 168 Z" fill="#26313a"/><path d="M312 88 L332 126 L318 118 L303 137 L293 116 Z" fill="#4b5660"/><path d="M132 54 L159 96 L144 89 L127 118 L114 85 Z" fill="#55606a"/></g><path d="M211 18 L211 50" stroke="#bfff00" stroke-width="6" stroke-linecap="round"/><path d="M215 19 C236 12 244 30 265 22 L265 51 C244 59 236 41 215 49 Z" fill="#bfff00"/><path d="M211 55 C180 87 258 112 211 143 C180 163 170 188 167 208 L215 208 C210 180 268 154 241 124 C219 99 178 88 211 55 Z" fill="url(#road)"/><g opacity=".42" fill="#aab4bd"><ellipse cx="74" cy="42" rx="24" ry="14"/><ellipse cx="105" cy="38" rx="26" ry="21"/><ellipse cx="136" cy="40" rx="23" ry="19"/><rect x="60" y="42" width="95" height="12" rx="6"/></g></svg>
        <div class="divider"></div>
        <p class="small">Progreso del plan</p>
        <p class="progress-copy"><b>0%</b> del camino completado</p>
        <div class="bar"><span></span></div>
      </section>

      <section class="card session">
        <p class="label">SESIÓN DE HOY</p>
        <h2>Semana 1 • Día 1</h2>
        <div class="grid">
          <div class="metric"><div class="circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v8"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m16 6-4 4-4-4"/><path d="M16 18a4 4 0 0 0-8 0"/></svg></div><p>Calentamiento</p><strong>5 min</strong></div>
          <div class="metric"><div class="circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13" cy="4" r="2"/><path d="M4 17l4-4 2-6 5 4 4 1"/><path d="M12 12l-2 5 4 4"/><path d="M9 9l-4 1"/></svg></div><p>Correr</p><strong>1 min</strong></div>
          <div class="metric"><div class="circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 4v4l-3 5"/><path d="M12 8l4 4 4 1"/><path d="M9 13l-3 3"/><path d="M10 13l3 5v3"/><circle cx="13" cy="4" r="1"/></svg></div><p>Caminar</p><strong>20 min</strong></div>
          <div class="metric"><div class="circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h11a4 4 0 1 0-4-4"/><path d="M3 18h9a3 3 0 1 0-3-3"/></svg></div><p>Enfriamiento</p><strong>5 min</strong></div>
          <div class="metric"><div class="circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="13" r="8"/><path d="M12 9v5l3 2"/><path d="M9 2h6"/></svg></div><p>Total</p><strong>31 min</strong></div>
        </div>
        <button class="cta"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>Comenzar sesión</button>
      </section>

      <section class="card summary">
        <div class="row">
          <div class="row-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 22c4.2 0 7-2.9 7-6.8 0-2.7-1.4-5.2-3.6-7.4-.5 2.2-1.7 3.2-3 3.8.4-3-1-5.7-3.4-8.1.1 4-2.4 5.8-3.3 8.8C4.6 16.3 7.5 22 12 22Z"/></svg></div>
          <div class="copy"><h3>Racha: 0 semanas</h3><p>Completa tu primera sesión para iniciar tu racha.</p></div>
          <div class="week"><p>Suma racha esta semana</p><div class="days"><span class="day"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 22c4.2 0 7-2.9 7-6.8 0-2.7-1.4-5.2-3.6-7.4-.5 2.2-1.7 3.2-3 3.8.4-3-1-5.7-3.4-8.1.1 4-2.4 5.8-3.3 8.8C4.6 16.3 7.5 22 12 22Z"/></svg></span><span class="day"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 22c4.2 0 7-2.9 7-6.8 0-2.7-1.4-5.2-3.6-7.4-.5 2.2-1.7 3.2-3 3.8.4-3-1-5.7-3.4-8.1.1 4-2.4 5.8-3.3 8.8C4.6 16.3 7.5 22 12 22Z"/></svg></span><span class="day"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 22c4.2 0 7-2.9 7-6.8 0-2.7-1.4-5.2-3.6-7.4-.5 2.2-1.7 3.2-3 3.8.4-3-1-5.7-3.4-8.1.1 4-2.4 5.8-3.3 8.8C4.6 16.3 7.5 22 12 22Z"/></svg></span></div><strong>0 de 3 días</strong></div>
        </div>
        <button class="row"><div class="row-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 21V4c4-2 7 2 11 0 1.2-.6 2.2-.8 3-.7v10.4c-3.5-.7-6.5 2.6-10 .5-1.5-.9-2.8-.9-4-.3Z"/></svg></div><div class="copy"><h3>Progreso del plan</h3><p class="accent">Semana 1 de 12</p><p>0 de 36 sesiones completadas</p></div><svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M9 18l6-6-6-6"/></svg></button>
        <button class="row"><div class="row-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.5 4.5 12 2 9.5 4.5"/><path d="M12 2v8"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="M16 18a4 4 0 0 0-8 0"/></svg></div><div class="copy"><h3>Última actividad</h3><p class="distance">0 km</p><p>Aún no hay carreras registradas</p></div><svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M9 18l6-6-6-6"/></svg></button>
      </section>
    </section>
    <nav class="bottom" aria-label="Navegación principal">
      <button class="nav-btn active" aria-label="Inicio"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2z"/></svg></button>
      <button class="nav-btn" aria-label="Calendario"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M8 2v4"/><path d="M16 2v4"/><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/></svg></button>
      <button class="nav-btn" aria-label="Run"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="13" cy="4" r="2"/><path d="M4 17l4-4 2-6 5 4 4 1"/><path d="M12 12l-2 5 4 4"/><path d="M9 9l-4 1"/></svg></button>
      <button class="nav-btn" aria-label="Ranking"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M5 6H3v3a3 3 0 0 0 4 2.8"/><path d="M19 6h2v3a3 3 0 0 1-4 2.8"/></svg></button>
      <button class="nav-btn" aria-label="Perfil"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M19 21a7 7 0 0 0-14 0"/><circle cx="12" cy="7" r="4"/></svg></button>
    </nav>
  </main>`;

// Navegación visual inicial. Las pantallas se conectarán en próximas versiones.
document.querySelectorAll('.nav-btn').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.nav-btn').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
  });
});

// v0.1.9: pantalla preview de entrenamiento
let homeAppMarkup = document.querySelector('.app')?.innerHTML || '';

const mountainSvg = `<svg class="preview-mountain" viewBox="0 0 360 210" aria-hidden="true"><defs><linearGradient id="previewPeak" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#2b3741"/><stop offset="1" stop-color="#111b22"/></linearGradient><linearGradient id="previewRoad" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#d7ff00"/><stop offset="1" stop-color="#8eea00"/></linearGradient></defs><g opacity=".74"><path d="M40 168 L132 54 L222 168 Z" fill="url(#previewPeak)"/><path d="M100 168 L188 36 L310 168 Z" fill="#202a33"/><path d="M188 36 L224 92 L206 84 L194 110 L170 75 Z" fill="#3b4650"/><path d="M258 168 L312 88 L354 168 Z" fill="#26313a"/><path d="M312 88 L332 126 L318 118 L303 137 L293 116 Z" fill="#4b5660"/><path d="M132 54 L159 96 L144 89 L127 118 L114 85 Z" fill="#55606a"/></g><path d="M211 18 L211 50" stroke="#bfff00" stroke-width="6" stroke-linecap="round"/><path d="M215 19 C236 12 244 30 265 22 L265 51 C244 59 236 41 215 49 Z" fill="#bfff00"/><path d="M211 55 C180 87 258 112 211 143 C180 163 170 188 167 208 L215 208 C210 180 268 154 241 124 C219 99 178 88 211 55 Z" fill="url(#previewRoad)"/><g opacity=".42" fill="#aab4bd"><ellipse cx="74" cy="42" rx="24" ry="14"/><ellipse cx="105" cy="38" rx="26" ry="21"/><ellipse cx="136" cy="40" rx="23" ry="19"/><rect x="60" y="42" width="95" height="12" rx="6"/></g></svg>`;

function bindHomeInteractions() {
  document.querySelectorAll('.nav-btn').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.nav-btn').forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
    });
  });
  document.querySelector('.cta')?.addEventListener('click', renderTrainingPreview);
}

function renderHome() {
  const app = document.querySelector('.app');
  if (!app) return;
  app.innerHTML = homeAppMarkup;
  bindHomeInteractions();
}

function renderTrainingPreview() {
  const app = document.querySelector('.app');
  if (!app) return;
  app.innerHTML = `<section class="training-view">
    <header class="training-top">
      <button class="round-btn back-home" aria-label="Volver"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8"><path d="m15 18-6-6 6-6"/></svg></button>
      <h1 class="training-title">Entrenamiento</h1>
      <button class="round-btn" aria-label="Configuración"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.52a2 2 0 0 1-1 1.72l-.15.1a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.52a2 2 0 0 1 1-1.72l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2Z"/><circle cx="12" cy="12" r="3"/></svg></button>
    </header>

    <section class="training-hero">
      <p class="session-kicker">Semana 1 • Día 1</p>
      <h1>Primer Run</h1>
      <p class="session-desc">Tu primera sesión para empezar a correr sin presión y crear el hábito.</p>
      ${mountainSvg}
      <section class="card stats-card" aria-label="Resumen del entrenamiento">
        <div class="stat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="13" r="8"/><path d="M12 9v5l3 2"/><path d="M9 2h6"/></svg><p>Duración</p><strong>31 <small>min</small></strong></div>
        <div class="stat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M6 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M8.6 13.8 15.4 7.2"/><path d="M9 16h6"/></svg><p>Distancia</p><strong>— <small>km</small></strong></div>
        <div class="stat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M4 20V10"/><path d="M10 20V4"/><path d="M16 20v-7"/><path d="M22 20V8"/></svg><p>Intensidad</p><strong>Baja</strong></div>
        <div class="stat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 22c4.2 0 7-2.9 7-6.8 0-2.7-1.4-5.2-3.6-7.4-.5 2.2-1.7 3.2-3 3.8.4-3-1-5.7-3.4-8.1.1 4-2.4 5.8-3.3 8.8C4.6 16.3 7.5 22 12 22Z"/></svg><p>Calorías</p><strong>— <small>kcal</small></strong></div>
      </section>
    </section>

    <section class="card detail-card">
      <h2>Detalle del entrenamiento</h2>
      <div class="steps">
        <div class="step"><div class="step-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 22c4.2 0 7-2.9 7-6.8 0-2.7-1.4-5.2-3.6-7.4-.5 2.2-1.7 3.2-3 3.8.4-3-1-5.7-3.4-8.1.1 4-2.4 5.8-3.3 8.8C4.6 16.3 7.5 22 12 22Z"/></svg></div><div class="step-copy"><h3>Calentamiento</h3><p>Caminata cómoda</p></div><strong class="step-time">5 min</strong></div>
        <div class="step"><div class="step-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="13" cy="4" r="2"/><path d="M4 17l4-4 2-6 5 4 4 1"/><path d="M12 12l-2 5 4 4"/><path d="M9 9l-4 1"/></svg></div><div class="step-copy"><h3>Correr</h3><p>Intervalos suaves de 1 min</p></div><strong class="step-time">1 min</strong></div>
        <div class="step"><div class="step-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M13 4v4l-3 5"/><path d="M12 8l4 4 4 1"/><path d="M9 13l-3 3"/><path d="M10 13l3 5v3"/><circle cx="13" cy="4" r="1"/></svg></div><div class="step-copy"><h3>Caminar</h3><p>Recuperación y ritmo cómodo</p></div><strong class="step-time">20 min</strong></div>
        <div class="step"><div class="step-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M3 12h11a4 4 0 1 0-4-4"/><path d="M3 18h9a3 3 0 1 0-3-3"/></svg></div><div class="step-copy"><h3>Enfriamiento</h3><p>Caminata suave</p></div><strong class="step-time">5 min</strong></div>
      </div>
    </section>

    <button class="card config-row"><div class="row-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.52a2 2 0 0 1-1 1.72l-.15.1a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.52a2 2 0 0 1 1-1.72l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2Z"/><circle cx="12" cy="12" r="3"/></svg></div><div><h3>Configuración</h3><p>Personaliza tu experiencia</p></div><svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M9 18l6-6-6-6"/></svg></button>
    <button class="cta start-training"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>Comenzar entrenamiento</button>
  </section>`;
  document.querySelector('.back-home')?.addEventListener('click', renderHome);
}

bindHomeInteractions();
