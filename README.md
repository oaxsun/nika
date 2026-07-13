# NIKA Web Mobile v0.1.24

Versión Firebase-first con beta privada por invitación.

## App móvil

- Login con Firebase Email/Password.
- Registro bloqueado por código de invitación.
- Flujo: Login → Invitación → Registro → Home.
- Ya no usa Auth anónimo para crear usuarios reales.
- Home, preview, entrenamiento activo y resumen leen datos reales de Firestore.

## Panel admin

Ruta: `panel/index.html`

Tabs:

- Planes
- Usuarios
- Analytics

Dentro de **Usuarios** se agregó el control de invitaciones beta:

- Crear código de invitación.
- Ver estado, usos y máximo de usos.

## Firebase

Proyecto conectado: `nika-9c390`.

Admin autorizado:

- `hello@oaxsun.tech`

Activa en Firebase Authentication:

- Email/Password

Publica `firestore.rules` para permitir:

- Lectura de planes a usuarios registrados.
- Gestión admin de planes, usuarios e invitaciones.
- Validación de códigos de invitación desde la app.

## Importar Primer Paso

Desde el panel, pestaña **Planes**, usa **Importar JSON** y selecciona:

`data/primer-paso-v1.json`
