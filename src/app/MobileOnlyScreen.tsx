import { Smartphone } from 'lucide-react'

export default function MobileOnlyScreen() {
  return (
    <main className="desktop-lock">
      <section className="desktop-lock-card">
        <div className="desktop-lock-icon"><Smartphone size={42} /></div>
        <p className="eyebrow">NIKA WEB</p>
        <h1>NIKA vive en tu celular.</h1>
        <p>
          Esta versión está diseñada exclusivamente para móvil. Abre esta página desde tu teléfono para comenzar a correr con NIKA.
        </p>
      </section>
    </main>
  )
}
