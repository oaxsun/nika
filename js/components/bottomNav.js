export function BottomNav(active = 'home') {
  const items = [
    ['home', '⌂', 'Inicio'],
    ['plan', '▦', 'Plan'],
    ['run', '🏃', 'Correr'],
    ['ranking', '♕', 'Ranking'],
    ['profile', '♙', 'Perfil'],
  ];

  return `
    <nav class="bottom-nav">
      ${items.map(([id, icon, label]) => `
        <button class="nav-item ${active === id ? 'active' : ''}" data-route="${id}">
          <span class="nav-icon">${icon}</span>
          <span>${label}</span>
        </button>
      `).join('')}
    </nav>
  `;
}
