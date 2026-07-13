/* NIKA Panel v0.1.24
   Admin conectado a Firebase/Firestore. Incluye invitaciones beta dentro de Usuarios. */
const root = document.getElementById('panel-root');
const icons = {
  plans: '<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M4 19.5V5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1-2-1.5Z"/><path d="M8 7h6"/><path d="M8 11h8"/></svg>',
  users: '<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  chart: '<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>',
  upload: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5"/><path d="M12 3v12"/></svg>',
  flame: '<svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22c4.2 0 7-2.9 7-6.8 0-2.7-1.4-5.2-3.6-7.4-.5 2.2-1.7 3.2-3 3.8.4-3-1-5.7-3.4-8.1.1 4-2.4 5.8-3.3 8.8C4.6 16.3 7.5 22 12 22Z"/></svg>'
};

let db = null;
let auth = null;
let activeTab = 'plans';
let state = { user: null, programs: [], users: [], invitations: [], runsCount: 0, loading: false, error: '' };

function hasConfig() {
  const cfg = window.NIKA_FIREBASE_CONFIG || {};
  return Boolean(cfg.apiKey && cfg.projectId && cfg.appId);
}

function init() {
  if (!hasConfig()) return renderSetup();
  firebase.initializeApp(window.NIKA_FIREBASE_CONFIG);
  auth = firebase.auth();
  db = firebase.firestore();
  auth.onAuthStateChanged(async (user) => {
    state.user = user;
    if (!user) return renderLogin();
    if (!isAdmin(user.email)) return renderNotAllowed(user.email);
    await loadAll();
    renderPanel();
  });
}

function isAdmin(email) {
  const allowed = window.NIKA_ADMIN_EMAILS || [];
  return email && allowed.map(e => e.toLowerCase()).includes(email.toLowerCase());
}

function renderSetup() {
  root.innerHTML = `<main class="auth-screen"><section class="auth-card"><div class="brand-mark">${icons.flame}</div><h1>Conecta Firebase</h1><p>Pega tu configuración en <b>firebase-config.js</b>. Después recarga este panel.</p><pre>window.NIKA_FIREBASE_CONFIG = { apiKey, authDomain, projectId, ... }</pre></section></main>`;
}

function renderLogin(error = '') {
  root.innerHTML = `<main class="auth-screen"><form class="auth-card" id="login-form"><div class="brand-mark">${icons.flame}</div><h1>NIKA Panel</h1><p>Inicia sesión con un correo admin para controlar planes, usuarios y analytics reales.</p>${error ? `<div class="error-box">${escapeHtml(error)}</div>` : ''}<label>Email<input type="email" id="email" required autocomplete="email"></label><label>Contraseña<input type="password" id="password" required autocomplete="current-password"></label><button class="primary-btn" type="submit">Entrar</button></form></main>`;
  document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(document.getElementById('email').value, document.getElementById('password').value);
    } catch (err) {
      renderLogin(err.message);
    }
  });
}

function renderNotAllowed(email) {
  root.innerHTML = `<main class="auth-screen"><section class="auth-card"><h1>Sin acceso</h1><p>El correo <b>${escapeHtml(email || '')}</b> no está en <code>NIKA_ADMIN_EMAILS</code>.</p><button class="ghost-btn" id="logout">Cerrar sesión</button></section></main>`;
  document.getElementById('logout').onclick = () => auth.signOut();
}

async function loadAll() {
  state.loading = true;
  const programsSnap = await db.collection('programs').orderBy('createdAt', 'desc').get().catch(async () => db.collection('programs').get());
  state.programs = programsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  const usersSnap = await db.collection('users').orderBy('createdAt', 'desc').limit(100).get().catch(async () => db.collection('users').limit(100).get());
  state.users = usersSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  const invitesSnap = await db.collection('invitations').limit(100).get().catch(() => ({ docs: [] }));
  state.invitations = invitesSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  let runs = 0;
  for (const u of state.users) {
    const snap = await db.collection('users').doc(u.id).collection('runs').get().catch(() => ({ size: 0 }));
    runs += snap.size || 0;
  }
  state.runsCount = runs;
  state.loading = false;
}

function renderPanel() {
  root.innerHTML = `<div class="panel-shell"><aside class="sidebar"><div class="brand"><div class="brand-mark">${icons.flame}</div><div><div class="brand-title">NIKA</div><div class="brand-subtitle">Admin Panel</div></div></div><nav class="nav-tabs">${nav('plans', icons.plans, 'Planes')}${nav('users', icons.users, 'Usuarios')}${nav('analytics', icons.chart, 'Analytics')}</nav><div class="sidebar-footer"><button class="ghost-btn" id="logout">Cerrar sesión</button></div></aside><main class="main">${renderTab()}</main></div><input type="file" id="json-input" accept="application/json" hidden>`;
  bind();
}

function nav(id, icon, label) {
  return `<button class="nav-tab ${activeTab === id ? 'active' : ''}" data-tab="${id}">${icon}<span>${label}</span></button>`;
}

function top(title, eyebrow, actions = '') {
  return `<div class="topbar"><div><div class="eyebrow">${eyebrow}</div><h1>${title}</h1></div><div class="top-actions">${actions}</div></div>${state.error ? `<div class="error-box">${escapeHtml(state.error)}</div>` : ''}`;
}

function renderTab() {
  if (activeTab === 'plans') return renderPlans();
  if (activeTab === 'users') return renderUsers();
  return renderAnalytics();
}

function renderPlans() {
  return `${top('Planes', 'Control de programas reales', `<button class="primary-btn" id="import-json">${icons.upload} Importar JSON</button>`)}<section class="content-card">${state.programs.length ? state.programs.map(p => `<article class="program-card"><div><p class="eyebrow">${escapeHtml(p.id)}</p><h2>${escapeHtml(p.name)}</h2><p>${escapeHtml(p.description || '')}</p></div><div class="pill">${p.totalSessions || 0} sesiones</div><div class="pill">${p.durationWeeks || 0} semanas</div><div class="pill ${p.isActive ? 'active' : ''}">${p.isActive ? 'Activo' : 'Inactivo'}</div><button class="ghost-btn" data-open-program="${p.id}">Ver sesiones</button></article>`).join('') : empty('Aún no hay planes en Firestore.', 'Importa el JSON real de Primer Paso para crear el programa, semanas y sesiones.')}</section><section id="sessions-output"></section>`;
}

function renderUsers() {
  return `${top('Usuarios', 'Progreso real desde Firestore', `<button class="primary-btn" id="create-invite">Crear invitación</button>`)}<section class="content-card invite-admin"><div class="section-head"><div><h2>Invitaciones beta</h2><p>Códigos requeridos para registrar usuarios nuevos.</p></div></div>${state.invitations.length ? `<table><thead><tr><th>Código</th><th>Estado</th><th>Usos</th><th>Máximo</th></tr></thead><tbody>${state.invitations.map(i => `<tr><td><b>${escapeHtml(i.id)}</b></td><td>${escapeHtml(i.status || 'active')}</td><td>${i.uses || 0}</td><td>${i.maxUses || 1}</td></tr>`).join('')}</tbody></table>` : empty('Aún no hay invitaciones.', 'Crea un código para permitir registros durante la beta privada.')}</section><section class="content-card">${state.users.length ? `<table><thead><tr><th>Usuario</th><th>Programa</th><th>Sesión actual</th><th>Completadas</th><th>Racha</th><th>XP</th></tr></thead><tbody>${state.users.map(u => `<tr><td><b>${escapeHtml(u.displayName || 'Runner')}</b><small>${escapeHtml(u.email || u.id)}</small></td><td>${escapeHtml(u.currentProgramId || '--')}</td><td>${escapeHtml(u.currentSessionId || '--')}</td><td>${u.completedSessionsCount || 0} / ${u.totalSessions || 0}</td><td>${u.streakWeeks || 0}</td><td>${u.totalXp || 0}</td></tr>`).join('')}</tbody></table>` : empty('Aún no hay usuarios.', 'Cuando alguien se registre en la app móvil se creará su documento de progreso.')}</section>`;
}

function renderAnalytics() {
  const totalUsers = state.users.length;
  const completed = state.users.reduce((sum, u) => sum + (u.completedSessionsCount || 0), 0);
  const xp = state.users.reduce((sum, u) => sum + (u.totalXp || 0), 0);
  return `${top('Analytics', 'Métricas reales iniciales')}<section class="grid-kpis"><div class="kpi-card"><div class="kpi-icon">${icons.users}</div><div><div class="kpi-value">${totalUsers}</div><div class="kpi-label">Usuarios</div></div></div><div class="kpi-card"><div class="kpi-icon">${icons.plans}</div><div><div class="kpi-value">${state.programs.length}</div><div class="kpi-label">Planes</div></div></div><div class="kpi-card"><div class="kpi-icon">${icons.chart}</div><div><div class="kpi-value">${completed}</div><div class="kpi-label">Sesiones completadas</div></div></div><div class="kpi-card"><div class="kpi-icon">${icons.flame}</div><div><div class="kpi-value">${state.runsCount}</div><div class="kpi-label">Runs guardados</div></div></div></section><section class="content-card"><h2>XP acumulado</h2><p class="big-number">${xp}</p><p class="muted">Sin datos inventados: estas métricas salen de los documentos reales de Firestore.</p></section>`;
}

function empty(title, body) {
  return `<div class="empty-state"><h2>${title}</h2><p>${body}</p></div>`;
}

function bind() {
  document.querySelectorAll('.nav-tab').forEach(btn => btn.onclick = () => { activeTab = btn.dataset.tab; renderPanel(); });
  document.getElementById('logout')?.addEventListener('click', () => auth.signOut());
  document.getElementById('import-json')?.addEventListener('click', () => document.getElementById('json-input').click());
  document.getElementById('json-input')?.addEventListener('change', handleJsonImport);
  document.querySelectorAll('[data-open-program]').forEach(btn => btn.onclick = () => renderProgramSessions(btn.dataset.openProgram));
  document.getElementById('create-invite')?.addEventListener('click', createInviteCode);
}


async function createInviteCode() {
  const raw = prompt('Código de invitación. Ejemplo: NIKA-BETA-001');
  const code = String(raw || '').trim().toUpperCase().replace(/\s+/g, '');
  if (!code) return;
  const maxRaw = prompt('¿Cuántas veces se puede usar?', '1');
  const maxUses = Math.max(1, Number(maxRaw || 1));
  try {
    await db.collection('invitations').doc(code).set({
      code,
      status: 'active',
      uses: 0,
      maxUses,
      createdBy: auth.currentUser.email,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
    await loadAll();
    renderPanel();
  } catch (err) {
    state.error = err.message;
    renderPanel();
  }
}

async function handleJsonImport(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const text = await file.text();
    const json = JSON.parse(text);
    await importProgram(json);
    state.error = '';
    await loadAll();
    renderPanel();
  } catch (err) {
    state.error = err.message;
    renderPanel();
  }
}

async function importProgram(json) {
  if (!json.id || !Array.isArray(json.weeks)) throw new Error('JSON inválido: falta id o weeks.');
  const programRef = db.collection('programs').doc(json.id);
  const { weeks, ...programData } = json;
  const batch = db.batch();
  batch.set(programRef, {
    ...programData,
    isActive: true,
    importedAt: firebase.firestore.FieldValue.serverTimestamp(),
    updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  }, { merge: true });
  weeks.forEach(week => {
    const { sessions = [], ...weekData } = week;
    batch.set(programRef.collection('weeks').doc(`week-${String(week.week).padStart(2, '0')}`), weekData, { merge: true });
    sessions.forEach(session => {
      batch.set(programRef.collection('sessions').doc(session.id), session, { merge: true });
    });
  });
  await batch.commit();
}

async function renderProgramSessions(programId) {
  const output = document.getElementById('sessions-output');
  output.innerHTML = '<section class="content-card"><p>Cargando sesiones...</p></section>';
  const snap = await db.collection('programs').doc(programId).collection('sessions').orderBy('sequence', 'asc').get();
  const sessions = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  output.innerHTML = `<section class="content-card"><h2>Sesiones de ${escapeHtml(programId)}</h2>${sessions.length ? `<table><thead><tr><th>#</th><th>Sesión</th><th>Nombre</th><th>Min</th><th>Segmentos</th><th>XP</th></tr></thead><tbody>${sessions.map(s => `<tr><td>${s.sequence}</td><td>${escapeHtml(s.title)}</td><td>${escapeHtml(s.name || '')}</td><td>${s.estimatedMinutes}</td><td>${s.segments?.length || 0}</td><td>${s.completion?.xp || 0}</td></tr>`).join('')}</tbody></table>` : empty('Sin sesiones', 'Este programa todavía no tiene sesiones.')}</section>`;
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>'"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c]));
}

init();
