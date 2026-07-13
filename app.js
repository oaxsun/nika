/* NIKA Web Mobile v0.1.25
   Firebase-first con auth email/password e invitaciones beta. */

const root = document.getElementById('app-root');
const GREEN = '#bfff00';

const icons = {
  play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="m8 5 11 7-11 7V5Z"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  chevronLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m15 18-6-6 6-6"/></svg>',
  chevronRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg>',
  settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.52a2 2 0 0 1-1 1.72l-.15.1a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.52a2 2 0 0 1 1-1.72l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2Z"/><circle cx="12" cy="12" r="3"/></svg>',
  flame: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 22c4.2 0 7-2.9 7-6.8 0-2.7-1.4-5.2-3.6-7.4-.5 2.2-1.7 3.2-3 3.8.4-3-1-5.7-3.4-8.1.1 4-2.4 5.8-3.3 8.8C4.6 16.3 7.5 22 12 22Z"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  run: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="13" cy="4" r="2"/><path d="M4 17l4-4 2-6 5 4 4 1"/><path d="M12 12l-2 5 4 4"/><path d="M9 9l-4 1"/></svg>',
  walk: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M13 4v4l-3 5"/><path d="M12 8l4 4 4 1"/><path d="M9 13l-3 3"/><path d="M10 13l3 5v3"/><circle cx="13" cy="4" r="1"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
  pause: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5h3v14H8zM13 5h3v14h-3z"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2z"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M8 2v4"/><path d="M16 2v4"/><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 10h18"/></svg>',
  trophy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M5 6H3v3a3 3 0 0 0 4 2.8"/><path d="M19 6h2v3a3 3 0 0 1-4 2.8"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M19 21a7 7 0 0 0-14 0"/><circle cx="12" cy="7" r="4"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  eyeOff: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M10.7 5.1A10.9 10.9 0 0 1 12 5c7 0 10 7 10 7a18 18 0 0 1-3.2 4.5"/><path d="M6.6 6.6C3.4 8.7 2 12 2 12s3 7 10 7c2 0 3.7-.6 5.1-1.4"/><path d="m2 2 20 20"/><path d="M9.9 9.9A3 3 0 0 0 14.1 14.1"/></svg>',
  arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  ticket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M2 9a3 3 0 0 0 0 6v3a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3a3 3 0 0 0 0-6V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 9l-2 6"/><path d="m9 9 4 6"/></svg>',
  logo: '<svg viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 39L45 9l22 23L99 8" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M55 35 44 50" stroke="currentColor" stroke-width="10" stroke-linecap="round"/></svg>'
};

const mountainSvg = `<svg class="mountain preview-mountain" viewBox="0 0 360 210" aria-hidden="true"><defs><linearGradient id="peak" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#2b3741"/><stop offset="1" stop-color="#111b22"/></linearGradient><linearGradient id="road" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#d7ff00"/><stop offset="1" stop-color="#8eea00"/></linearGradient></defs><g opacity=".72"><path d="M40 168 L132 54 L222 168 Z" fill="url(#peak)"/><path d="M100 168 L188 36 L310 168 Z" fill="#202a33"/><path d="M188 36 L224 92 L206 84 L194 110 L170 75 Z" fill="#3b4650"/><path d="M258 168 L312 88 L354 168 Z" fill="#26313a"/><path d="M312 88 L332 126 L318 118 L303 137 L293 116 Z" fill="#4b5660"/><path d="M132 54 L159 96 L144 89 L127 118 L114 85 Z" fill="#55606a"/></g><path d="M211 18 L211 50" stroke="#bfff00" stroke-width="6" stroke-linecap="round"/><path d="M215 19 C236 12 244 30 265 22 L265 51 C244 59 236 41 215 49 Z" fill="#bfff00"/><path d="M211 55 C180 87 258 112 211 143 C180 163 170 188 167 208 L215 208 C210 180 268 154 241 124 C219 99 178 88 211 55 Z" fill="url(#road)"/></svg>`;

let appState = {
  db: null,
  auth: null,
  user: null,
  program: null,
  currentSession: null,
  progress: null,
  screen: 'loading',
  currentSegmentIndex: 0,
  segmentStartedAt: 0,
  segmentElapsedBeforePause: 0,
  workoutStartedAt: 0,
  workoutElapsedBeforePause: 0,
  timer: null,
  paused: false,
  locked: false,
  countdownTimer: null,
  countdownStartedAt: 0,
  validInviteCode: null
};

function hasFirebaseConfig() {
  const cfg = window.NIKA_FIREBASE_CONFIG || {};
  return Boolean(cfg.apiKey && cfg.projectId && cfg.appId);
}

function renderDesktopLock() {
  return `<main class="desktop-lock" aria-label="NIKA solo móvil"><section class="lock-card"><div class="phone">${icons.phone}</div><p class="eyebrow">NIKA WEB</p><h1>NIKA vive en tu celular.</h1><p>Esta versión está diseñada exclusivamente para móvil. Abre esta página desde tu teléfono para comenzar a correr con NIKA.</p></section></main>`;
}

function renderSetup(message = '') {
  root.innerHTML = `${renderDesktopLock()}<main class="app"><section class="shell setup-shell"><section class="card summary"><p class="label">FIREBASE</p><h2>Conecta NIKA con Firebase</h2><p class="muted">Borré la data no real. Para cargar la app necesitas pegar tu configuración en <b>firebase-config.js</b> e importar el plan desde <b>/panel</b>.</p>${message ? `<p class="error-text">${escapeHtml(message)}</p>` : ''}<div class="setup-steps"><p>1. Crea una Web App en Firebase.</p><p>2. Pega la config en <code>firebase-config.js</code>.</p><p>3. Activa Authentication: Anonymous para la app y Email/Password para el panel.</p><p>4. Entra a <code>/panel</code> e importa <code>data/primer-paso-v1.json</code>.</p></div></section></section></main>`;
}

async function init() {
  root.innerHTML = `${renderDesktopLock()}<main class="app"><section class="auth-page"><section class="auth-card-min"><p class="label">NIKA</p><h2>Cargando...</h2><p class="muted">Conectando con Firebase.</p></section></section></main>`;
  if (!hasFirebaseConfig()) return renderSetup();
  try {
    firebase.initializeApp(window.NIKA_FIREBASE_CONFIG);
    appState.auth = firebase.auth();
    appState.db = firebase.firestore();
    appState.auth.onAuthStateChanged(async (user) => {
      appState.user = user;
      stopTimers();
      if (!user || user.isAnonymous) {
        renderLogin();
        return;
      }
      try {
        await loadProgramAndProgress();
        renderHome();
      } catch (error) {
        renderSetup(error.message || 'No se pudo cargar NIKA.');
      }
    });
  } catch (error) {
    renderSetup(error.message || 'No se pudo conectar con Firebase.');
  }
}

function authLogo() {
  return `<div class="auth-logo"><img src="assets/logo.png" alt="NIKA" loading="eager" decoding="async"></div>`;
}

function authDivider() {
  return `<div class="auth-divider"><span></span><b>o</b><span></span></div>`;
}

function authShell(kind, content) {
  return `${renderDesktopLock()}<main class="app auth-app ${kind}"><section class="auth-visual"></section><section class="auth-content">${content}</section></main>`;
}

function renderLogin(error = '') {
  root.innerHTML = authShell('login-auth', `${authLogo()}<form class="auth-form" id="login-form"><h1>Bienvenido<br>a <span>Nika</span></h1><p class="auth-subtitle">Tu compañero para correr mejor cada día.</p>${error ? `<div class="auth-error">${escapeHtml(error)}</div>` : ''}<label>Correo electrónico<div class="auth-input">${icons.mail}<input id="login-email" type="email" placeholder="tu@email.com" required autocomplete="email"></div></label><label>Contraseña<div class="auth-input">${icons.lock}<input id="login-password" type="password" placeholder="••••••••" required autocomplete="current-password"><button type="button" class="input-icon" data-toggle-password="login-password">${icons.eyeOff}</button></div></label><button class="auth-cta" type="submit"><span>Ingresar</span>${icons.arrowRight}</button><button class="auth-link muted-link" type="button" id="forgot-password">¿Olvidaste tu contraseña?</button>${authDivider()}<p class="auth-question">¿No tienes cuenta?</p><button class="auth-link auth-green" type="button" id="go-invite">Regístrate en Nika ${icons.arrowRight}</button></form>`);
  bindPasswordToggles();
  document.getElementById('login-form')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    try {
      await appState.auth.signInWithEmailAndPassword(value('login-email'), value('login-password'));
    } catch (err) {
      renderLogin(cleanAuthError(err));
    }
  });
  document.getElementById('go-invite')?.addEventListener('click', () => renderInvite());
  document.getElementById('forgot-password')?.addEventListener('click', async () => {
    const email = value('login-email');
    if (!email) return renderLogin('Escribe tu correo para enviarte el enlace de recuperación.');
    try {
      await appState.auth.sendPasswordResetEmail(email);
      renderLogin('Te enviamos un correo para recuperar tu contraseña.');
    } catch (err) {
      renderLogin(cleanAuthError(err));
    }
  });
}

function renderInvite(error = '') {
  root.innerHTML = authShell('invite-auth', `${authLogo()}<form class="auth-form invite-form" id="invite-form"><h1>Acceso por<br><span>invitación</span></h1><p class="auth-subtitle">Nika está en beta privada. Ingresa tu código de invitación para continuar.</p>${error ? `<div class="auth-error">${escapeHtml(error)}</div>` : ''}<label class="upper-label">Código de invitación<div class="auth-input invite-input">${icons.ticket}<input id="invite-code" type="text" placeholder="Ingresa tu código" required autocomplete="one-time-code"></div></label><button class="auth-cta" type="submit"><span>Validar invitación</span>${icons.arrowRight}</button>${authDivider()}<button class="invite-help" type="button"><span class="help-icon">?</span><span>¿No tienes un código?<br><b>Pide una invitación</b> a un amigo.</span>${icons.chevronRight}</button><p class="auth-question">¿Ya tienes cuenta?</p><button class="auth-link auth-green" type="button" id="go-login">Iniciar sesión ${icons.arrowRight}</button></form>`);
  document.getElementById('go-login')?.addEventListener('click', () => renderLogin());
  document.getElementById('invite-form')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const code = normalizeInvite(value('invite-code'));
    if (!code) return renderInvite('Ingresa un código de invitación.');
    try {
      const doc = await appState.db.collection('invitations').doc(code).get();
      if (!doc.exists) throw new Error('Código inválido.');
      const invite = doc.data() || {};
      const maxUses = Number(invite.maxUses || 1);
      const uses = Number(invite.uses || 0);
      if (invite.status && invite.status !== 'active') throw new Error('Este código ya no está activo.');
      if (uses >= maxUses) throw new Error('Este código ya fue utilizado.');
      appState.validInviteCode = code;
      renderRegister();
    } catch (err) {
      renderInvite(err.message || 'No se pudo validar el código.');
    }
  });
}

function renderRegister(error = '') {
  if (!appState.validInviteCode) return renderInvite('Primero valida tu código de invitación.');
  root.innerHTML = authShell('register-auth', `${authLogo()}<form class="auth-form register-form" id="register-form"><h1>Crea tu cuenta<br>en <span>Nika</span></h1><p class="auth-subtitle">Únete a la comunidad y empieza tu camino hoy.</p>${error ? `<div class="auth-error">${escapeHtml(error)}</div>` : ''}<label>Nombre completo<div class="auth-input">${icons.user}<input id="register-name" type="text" placeholder="Tu nombre completo" required autocomplete="name"></div></label><label>Correo electrónico<div class="auth-input">${icons.mail}<input id="register-email" type="email" placeholder="tu@correo.com" required autocomplete="email"></div></label><label>Contraseña<div class="auth-input">${icons.lock}<input id="register-password" type="password" placeholder="Mínimo 8 caracteres" required minlength="8" autocomplete="new-password"><button type="button" class="input-icon" data-toggle-password="register-password">${icons.eyeOff}</button></div></label><label>Confirmar contraseña<div class="auth-input">${icons.lock}<input id="register-confirm" type="password" placeholder="Repite tu contraseña" required minlength="8" autocomplete="new-password"><button type="button" class="input-icon" data-toggle-password="register-confirm">${icons.eyeOff}</button></div></label><button class="auth-cta" type="submit"><span>Crear cuenta</span>${icons.arrowRight}</button>${authDivider()}<p class="auth-question">¿Ya tienes cuenta?</p><button class="auth-link auth-green" type="button" id="go-login">Inicia sesión ${icons.arrowRight}</button><p class="terms">Al crear tu cuenta, aceptas nuestros<br><b>Términos de uso</b> y <b>Política de privacidad.</b></p></form>`);
  bindPasswordToggles();
  document.getElementById('go-login')?.addEventListener('click', () => renderLogin());
  document.getElementById('register-form')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = value('register-name');
    const email = value('register-email');
    const password = value('register-password');
    const confirm = value('register-confirm');
    if (password !== confirm) return renderRegister('Las contraseñas no coinciden.');
    if (password.length < 8) return renderRegister('La contraseña debe tener mínimo 8 caracteres.');
    try {
      const code = appState.validInviteCode;
      const credential = await appState.auth.createUserWithEmailAndPassword(email, password);
      await credential.user.updateProfile({ displayName: name });
      appState.user = credential.user;
      await loadProgramAndProgress();
      await appState.db.runTransaction(async (tx) => {
        const inviteRef = appState.db.collection('invitations').doc(code);
        const inviteDoc = await tx.get(inviteRef);
        if (!inviteDoc.exists) throw new Error('El código ya no existe.');
        const invite = inviteDoc.data() || {};
        const maxUses = Number(invite.maxUses || 1);
        const uses = Number(invite.uses || 0);
        if (invite.status && invite.status !== 'active') throw new Error('Este código ya no está activo.');
        if (uses >= maxUses) throw new Error('Este código ya fue utilizado.');
        tx.set(inviteRef, {
          uses: uses + 1,
          status: uses + 1 >= maxUses ? 'used' : 'active',
          lastUsedAt: firebase.firestore.FieldValue.serverTimestamp(),
          usedBy: firebase.firestore.FieldValue.arrayUnion(credential.user.uid)
        }, { merge: true });
        tx.set(appState.db.collection('users').doc(credential.user.uid), {
          displayName: name,
          email,
          inviteCode: code,
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
      });
      appState.validInviteCode = null;
      await loadProgramAndProgress();
      renderHome();
    } catch (err) {
      renderRegister(cleanAuthError(err));
    }
  });
}

function value(id) {
  return (document.getElementById(id)?.value || '').trim();
}
function normalizeInvite(code) {
  return String(code || '').trim().toUpperCase().replace(/\s+/g, '');
}
function bindPasswordToggles() {
  document.querySelectorAll('[data-toggle-password]').forEach(btn => {
    btn.onclick = () => {
      const input = document.getElementById(btn.dataset.togglePassword);
      if (!input) return;
      input.type = input.type === 'password' ? 'text' : 'password';
    };
  });
}
function cleanAuthError(error) {
  const msg = error?.message || String(error || 'Error de autenticación.');
  if (msg.includes('auth/invalid-credential') || msg.includes('auth/wrong-password')) return 'Correo o contraseña incorrectos.';
  if (msg.includes('auth/email-already-in-use')) return 'Ese correo ya está registrado. Inicia sesión.';
  if (msg.includes('auth/weak-password')) return 'La contraseña debe tener mínimo 8 caracteres.';
  if (msg.includes('auth/invalid-email')) return 'El correo no es válido.';
  return msg;
}

async function loadProgramAndProgress() {
  const programSnap = await appState.db.collection('programs').where('isActive', '==', true).limit(1).get();
  if (programSnap.empty) {
    appState.program = null;
    appState.currentSession = null;
    appState.progress = null;
    return;
  }
  const programDoc = programSnap.docs[0];
  appState.program = { id: programDoc.id, ...programDoc.data() };

  const userRef = appState.db.collection('users').doc(appState.user.uid);
  let userDoc = await userRef.get();
  if (!userDoc.exists) {
    const firstSession = await getSessionBySequence(appState.program.id, 1);
    const newUser = {
      authUid: appState.user.uid,
      displayName: appState.user.displayName || 'Runner',
      email: appState.user.email || null,
      currentProgramId: appState.program.id,
      currentSessionId: firstSession?.id || null,
      currentSequence: firstSession?.sequence || 1,
      completedSessionsCount: 0,
      totalSessions: appState.program.totalSessions || 0,
      streakWeeks: 0,
      totalXp: 0,
      lastActivityAt: null,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    };
    await userRef.set(newUser);
    userDoc = await userRef.get();
  }
  appState.progress = userDoc.data();
  if (appState.progress.currentSessionId) {
    const sessionDoc = await appState.db.collection('programs').doc(appState.progress.currentProgramId).collection('sessions').doc(appState.progress.currentSessionId).get();
    appState.currentSession = sessionDoc.exists ? { id: sessionDoc.id, ...sessionDoc.data() } : await getSessionBySequence(appState.program.id, appState.progress.currentSequence || 1);
  }
}

async function getSessionBySequence(programId, sequence) {
  const snap = await appState.db.collection('programs').doc(programId).collection('sessions').where('sequence', '==', sequence).limit(1).get();
  if (snap.empty) return null;
  const doc = snap.docs[0];
  return { id: doc.id, ...doc.data() };
}

function formatClock(totalSeconds) {
  const safe = Math.max(0, Math.ceil(totalSeconds));
  const m = Math.floor(safe / 60).toString().padStart(2, '0');
  const s = (safe % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

function minLabel(seconds) {
  const minutes = seconds / 60;
  return Number.isInteger(minutes) ? `${minutes} min` : `${minutes.toFixed(1)} min`;
}

function progressPercent() {
  if (!appState.program || !appState.progress) return 0;
  return Math.round(((appState.progress.completedSessionsCount || 0) / (appState.program.totalSessions || 1)) * 100);
}

function renderHome() {
  stopTimers();
  const program = appState.program;
  const session = appState.currentSession;
  if (!program || !session) {
    root.innerHTML = `${renderDesktopLock()}<main class="app"><section class="shell"><section class="card summary"><p class="label">SIN PLANES</p><h2>No hay planes publicados</h2><p class="muted">Entra al panel admin e importa el JSON real de Primer Paso para comenzar.</p></section></section></main>`;
    return;
  }
  const preview = session.preview || {};
  const pct = progressPercent();
  root.innerHTML = `${renderDesktopLock()}<main class="app"><header class="fixed-head"><h1>Hola, ${(appState.progress.displayName || 'Runner')}</h1><p class="streak">${icons.flame} Racha: <b>${appState.progress.streakWeeks || 0} semanas</b></p></header><section class="shell"><section class="card plan"><p class="label">PLAN ACTUAL</p><h2>${escapeHtml(program.name)}</h2><p class="muted">Semana ${session.week} de ${program.durationWeeks}</p>${mountainSvg}<div class="divider"></div><p class="small">Progreso del plan</p><p class="progress-copy"><b>${pct}%</b> del camino completado</p><div class="bar"><span style="width:${pct}%"></span></div></section><section class="card session"><p class="label">SESIÓN DE HOY</p><h2>${escapeHtml(session.title)}</h2><p class="muted">${escapeHtml(session.name || '')}</p><div class="grid"><div class="metric"><div class="circle">${icons.walk}</div><p>Calentamiento</p><strong>${preview.warmupMinutes || 0} min</strong></div><div class="metric"><div class="circle">${icons.run}</div><p>Correr</p><strong>${preview.runMinutes || 0} min</strong></div><div class="metric"><div class="circle">${icons.walk}</div><p>Caminar</p><strong>${preview.walkMinutes || 0} min</strong></div><div class="metric"><div class="circle">${icons.walk}</div><p>Enfriamiento</p><strong>${preview.cooldownMinutes || 0} min</strong></div><div class="metric"><div class="circle">${icons.clock}</div><p>Total</p><strong>${preview.totalMinutes || session.estimatedMinutes} min</strong></div></div><button class="cta" id="open-preview">${icons.play}Comenzar sesión</button></section><section class="card summary"><button class="row"><div class="row-icon">${icons.flame}</div><div class="copy"><h3>Racha: ${appState.progress.streakWeeks || 0} semanas</h3><p>Completa tus sesiones para sumar racha semanal.</p></div></button><button class="row"><div class="row-icon">${icons.trophy}</div><div class="copy"><h3>Progreso del plan</h3><p class="accent">Semana ${session.week} de ${program.durationWeeks}</p><p>${appState.progress.completedSessionsCount || 0} de ${program.totalSessions} sesiones completadas</p></div>${icons.chevronRight}</button><button class="row"><div class="row-icon">${icons.run}</div><div class="copy"><h3>Última actividad</h3><p class="distance">${appState.progress.lastDistanceKm ?? '--'} km</p><p>${appState.progress.lastActivityAt ? 'Actividad registrada' : 'Aún no hay carreras registradas'}</p></div>${icons.chevronRight}</button></section></section>${bottomNav()}</main>`;
  document.getElementById('open-preview')?.addEventListener('click', renderPreview);
}

function bottomNav() {
  return `<nav class="bottom"><button class="nav-btn active">${icons.home}</button><button class="nav-btn">${icons.calendar}</button><button class="nav-btn">${icons.run}</button><button class="nav-btn">${icons.trophy}</button><button class="nav-btn">${icons.user}</button></nav>`;
}

function renderPreview() {
  const s = appState.currentSession;
  const effort = s.effortScale ? `${s.effortScale}/5` : '--';
  root.innerHTML = `${renderDesktopLock()}<main class="app preview-app"><header class="preview-head"><button class="icon-button" id="back-home">${icons.chevronLeft}</button><h1>Entrenamiento</h1><button class="icon-button">${icons.settings}</button></header><section class="preview-shell no-scroll"><section class="preview-hero"><div><p class="label">${escapeHtml(s.title)}</p><h2>${escapeHtml(s.name || 'Sesión')}</h2><p>${escapeHtml(s.instruction || '')}</p></div>${mountainSvg}</section><section class="preview-stats"><div><span>Duración</span><strong>${s.estimatedMinutes} min</strong></div><div><span>Momentos</span><strong>${s.momentCount || s.segments.length}</strong></div><div><span>Intensidad</span><strong>${effort}</strong></div></section><section class="detail-card compact"><p class="label">DETALLE</p>${(s.segments || []).slice(0, 6).map(seg => `<div class="detail-row"><div class="detail-dot"></div><div><strong>${escapeHtml(seg.title)}</strong><p>${minLabel(seg.durationSeconds)} · ${escapeHtml(seg.instruction || '')}</p></div></div>`).join('')}${s.segments.length > 6 ? `<p class="muted detail-more">+ ${s.segments.length - 6} segmentos más</p>` : ''}</section><button class="cta start-training" id="start-countdown">${icons.play}Comenzar entrenamiento</button></section></main>`;
  document.getElementById('back-home')?.addEventListener('click', renderHome);
  document.getElementById('start-countdown')?.addEventListener('click', renderCountdown);
}

function renderCountdown() {
  stopTimers();
  appState.screen = 'countdown';
  appState.countdownStartedAt = performance.now();
  root.innerHTML = `${renderDesktopLock()}<main class="app countdown-app"><button class="icon-button countdown-back" id="cancel-countdown">${icons.chevronLeft}</button><section class="countdown-center"><div class="countdown-ring"><svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="53" class="ring-bg"/><circle cx="60" cy="60" r="53" class="ring-fg" id="countdown-ring"/></svg><div class="countdown-number" id="countdown-number">3</div></div><p class="muted">Prepárate para iniciar</p></section><button class="cta ghost-end" id="cancel-countdown-bottom">Cancelar sesión</button></main>`;
  document.getElementById('cancel-countdown')?.addEventListener('click', renderPreview);
  document.getElementById('cancel-countdown-bottom')?.addEventListener('click', renderPreview);
  const ring = document.getElementById('countdown-ring');
  const number = document.getElementById('countdown-number');
  const circumference = 333;
  ring.style.strokeDasharray = `${circumference}`;
  const tick = () => {
    const elapsed = (performance.now() - appState.countdownStartedAt) / 1000;
    const total = 4;
    const remaining = Math.max(0, total - elapsed);
    const display = remaining > 1 ? Math.ceil(remaining - 1) : 'GO';
    number.textContent = display;
    number.classList.toggle('go', display === 'GO');
    if (display === 'GO') {
      ring.style.strokeDashoffset = `${circumference}`;
    } else {
      const phase = elapsed % 1;
      ring.style.strokeDashoffset = `${circumference * phase}`;
    }
    if (elapsed >= total) return startWorkout();
    appState.countdownTimer = requestAnimationFrame(tick);
  };
  tick();
}

function startWorkout() {
  stopTimers();
  appState.screen = 'workout';
  appState.currentSegmentIndex = 0;
  appState.segmentElapsedBeforePause = 0;
  appState.workoutElapsedBeforePause = 0;
  appState.workoutStartedAt = performance.now();
  appState.segmentStartedAt = performance.now();
  appState.paused = false;
  appState.locked = false;
  renderWorkout();
  startTimerLoop();
}

function startTimerLoop() {
  stopWorkoutTimerOnly();
  const loop = () => {
    if (appState.screen !== 'workout' || appState.paused) return;
    const seg = currentSegment();
    const elapsed = getCurrentSegmentElapsed();
    if (elapsed >= seg.durationSeconds) {
      nextSegment();
      return;
    }
    updateWorkoutUI();
    appState.timer = requestAnimationFrame(loop);
  };
  appState.timer = requestAnimationFrame(loop);
}

function currentSegment() {
  return appState.currentSession.segments[appState.currentSegmentIndex];
}

function getCurrentSegmentElapsed() {
  return appState.segmentElapsedBeforePause + ((performance.now() - appState.segmentStartedAt) / 1000);
}

function getWorkoutElapsed() {
  return appState.workoutElapsedBeforePause + ((performance.now() - appState.workoutStartedAt) / 1000);
}

function renderWorkout() {
  const s = appState.currentSession;
  root.innerHTML = `${renderDesktopLock()}<main class="app active-workout"><header class="workout-head"><button class="icon-button" id="exit-workout">${icons.x}</button><button class="icon-button">${icons.settings}</button></header><section class="workout-shell"><div class="segment-count" id="segment-count"></div><div class="segment-bars" id="segment-bars"></div><p class="remaining-label">Tiempo restante total</p><h1 class="remaining-time" id="total-remaining"></h1><section class="segment-focus"><div class="segment-title-row"><button class="segment-nav" id="prev-segment">${icons.chevronLeft}</button><div><p class="label" id="segment-subtitle"></p><h2 id="segment-title"></h2></div><button class="segment-nav" id="next-segment">${icons.chevronRight}</button></div><div class="progress-ring"><svg viewBox="0 0 170 170"><circle cx="85" cy="85" r="76" class="ring-bg"/><circle cx="85" cy="85" r="76" class="ring-fg" id="workout-ring"/></svg><div class="ring-time" id="segment-time"></div></div></section><section class="workout-metrics"><div><strong>--</strong><span>km</span></div><div><strong id="elapsed-time">00:00</strong><span>total</span></div><div><strong>--</strong><span>kcal</span></div></section><section class="workout-controls"><button class="control" id="lock-workout">${icons.lock}<span>Bloquear</span></button><button class="control main" id="pause-workout">${icons.pause}<span>Pausar</span></button><button class="control"><span>Audio</span></button></section></section><div class="pause-overlay hidden" id="pause-overlay"><div><h2>PAUSA</h2><button class="cta" id="resume-workout">Continuar</button><button class="ghost-end" id="finish-workout">Terminar</button></div></div><div class="pause-overlay hidden" id="exit-overlay"><div><h2>¿Salir?</h2><p>Tu progreso de esta sesión no se guardará como completado.</p><button class="cta" id="stay-workout">Seguir entrenando</button><button class="ghost-end" id="confirm-exit">Salir</button></div></div></main>`;
  document.getElementById('exit-workout')?.addEventListener('click', () => { if (!appState.locked) showExitOverlay(); });
  document.getElementById('prev-segment')?.addEventListener('click', () => { if (!appState.locked) previousSegment(); });
  document.getElementById('next-segment')?.addEventListener('click', () => { if (!appState.locked) nextSegment(true); });
  document.getElementById('pause-workout')?.addEventListener('click', pauseWorkout);
  document.getElementById('resume-workout')?.addEventListener('click', resumeWorkout);
  document.getElementById('finish-workout')?.addEventListener('click', renderPreview);
  document.getElementById('stay-workout')?.addEventListener('click', hideExitOverlay);
  document.getElementById('confirm-exit')?.addEventListener('click', renderPreview);
  document.getElementById('lock-workout')?.addEventListener('click', toggleLock);
  updateWorkoutUI();
}

function updateWorkoutUI() {
  const session = appState.currentSession;
  const seg = currentSegment();
  const elapsed = Math.min(getCurrentSegmentElapsed(), seg.durationSeconds);
  const remaining = Math.max(0, seg.durationSeconds - elapsed);
  const totalElapsed = getWorkoutElapsed();
  const totalRemaining = Math.max(0, (session.totals?.totalSeconds || session.segments.reduce((a, s) => a + s.durationSeconds, 0)) - totalElapsed);
  document.getElementById('segment-count').textContent = `${appState.currentSegmentIndex + 1} / ${session.segments.length}`;
  document.getElementById('segment-title').textContent = seg.title;
  document.getElementById('segment-subtitle').textContent = seg.instruction || '';
  document.getElementById('segment-time').textContent = formatClock(remaining);
  document.getElementById('total-remaining').textContent = formatClock(totalRemaining);
  document.getElementById('elapsed-time').textContent = formatClock(totalElapsed);
  const bars = document.getElementById('segment-bars');
  bars.innerHTML = session.segments.map((item, index) => `<span class="${index < appState.currentSegmentIndex ? 'done' : index === appState.currentSegmentIndex ? 'active' : ''}"></span>`).join('');
  const ring = document.getElementById('workout-ring');
  const circumference = 477;
  ring.style.strokeDasharray = `${circumference}`;
  ring.style.strokeDashoffset = `${circumference * (1 - (elapsed / Math.max(1, seg.durationSeconds)))}`;
  document.getElementById('prev-segment').classList.toggle('disabled', appState.currentSegmentIndex === 0 || appState.locked);
  document.getElementById('next-segment').classList.toggle('disabled', appState.locked);
  document.getElementById('exit-workout').classList.toggle('disabled', appState.locked);
  document.getElementById('lock-workout').classList.toggle('active', appState.locked);
}

function nextSegment(manual = false) {
  if (appState.locked && manual) return;
  if (appState.currentSegmentIndex >= appState.currentSession.segments.length - 1) {
    completeWorkout();
    return;
  }
  appState.currentSegmentIndex += 1;
  appState.segmentElapsedBeforePause = 0;
  appState.segmentStartedAt = performance.now();
  renderWorkout();
  startTimerLoop();
}

function previousSegment() {
  if (appState.locked || appState.currentSegmentIndex === 0) return;
  appState.currentSegmentIndex -= 1;
  appState.segmentElapsedBeforePause = 0;
  appState.segmentStartedAt = performance.now();
  renderWorkout();
  startTimerLoop();
}

function pauseWorkout() {
  if (appState.paused) return;
  appState.paused = true;
  appState.segmentElapsedBeforePause = getCurrentSegmentElapsed();
  appState.workoutElapsedBeforePause = getWorkoutElapsed();
  stopWorkoutTimerOnly();
  document.getElementById('pause-overlay')?.classList.remove('hidden');
}

function resumeWorkout() {
  appState.paused = false;
  appState.segmentStartedAt = performance.now();
  appState.workoutStartedAt = performance.now();
  document.getElementById('pause-overlay')?.classList.add('hidden');
  startTimerLoop();
}

function showExitOverlay() {
  pauseWorkout();
  document.getElementById('pause-overlay')?.classList.add('hidden');
  document.getElementById('exit-overlay')?.classList.remove('hidden');
}
function hideExitOverlay() {
  document.getElementById('exit-overlay')?.classList.add('hidden');
  resumeWorkout();
}
function toggleLock() {
  appState.locked = !appState.locked;
  updateWorkoutUI();
}

async function completeWorkout() {
  stopTimers();
  const session = appState.currentSession;
  const totalSeconds = session.totals?.totalSeconds || session.segments.reduce((a, s) => a + s.durationSeconds, 0);
  try {
    const userRef = appState.db.collection('users').doc(appState.user.uid);
    const runRef = userRef.collection('runs').doc();
    const completedRef = userRef.collection('completedSessions').doc(session.id);
    const next = await getSessionBySequence(appState.program.id, (session.sequence || 1) + 1);
    const batch = appState.db.batch();
    batch.set(runRef, {
      sessionId: session.id,
      programId: appState.program.id,
      startedAt: firebase.firestore.FieldValue.serverTimestamp(),
      endedAt: firebase.firestore.FieldValue.serverTimestamp(),
      totalSeconds,
      distanceKm: null,
      calories: null,
      avgPace: null,
      segmentsCompleted: session.segments.map(s => ({ id: s.id, type: s.type, durationSeconds: s.durationSeconds })),
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    batch.set(completedRef, {
      sessionId: session.id,
      programId: appState.program.id,
      week: session.week,
      day: session.day,
      sequence: session.sequence,
      durationSeconds: totalSeconds,
      xpEarned: session.completion?.xp || 0,
      completionRatio: 1,
      completedAt: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
    batch.update(userRef, {
      currentSessionId: next?.id || session.id,
      currentSequence: next?.sequence || session.sequence,
      completedSessionsCount: firebase.firestore.FieldValue.increment(1),
      totalXp: firebase.firestore.FieldValue.increment(session.completion?.xp || 0),
      lastActivityAt: firebase.firestore.FieldValue.serverTimestamp(),
      lastDistanceKm: null,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    await batch.commit();
    await loadProgramAndProgress();
    renderComplete(totalSeconds, session.completion?.xp || 0);
  } catch (error) {
    renderSetup(`No se pudo guardar la sesión: ${error.message}`);
  }
}

function renderComplete(totalSeconds, xp) {
  root.innerHTML = `${renderDesktopLock()}<main class="app complete-app"><section class="complete-shell"><div class="complete-badge">✓</div><p class="label">ENTRENAMIENTO COMPLETADO</p><h1>Buen trabajo</h1><p class="muted">Tu progreso quedó guardado en Firebase.</p><section class="complete-grid"><div><strong>${formatClock(totalSeconds)}</strong><span>Tiempo</span></div><div><strong>--</strong><span>km</span></div><div><strong>${xp}</strong><span>XP</span></div></section><button class="cta" id="complete-home">Volver al inicio</button></section></main>`;
  document.getElementById('complete-home')?.addEventListener('click', renderHome);
}

function stopWorkoutTimerOnly() {
  if (appState.timer) cancelAnimationFrame(appState.timer);
  appState.timer = null;
}
function stopTimers() {
  stopWorkoutTimerOnly();
  if (appState.countdownTimer) cancelAnimationFrame(appState.countdownTimer);
  appState.countdownTimer = null;
}
function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
}

init();
