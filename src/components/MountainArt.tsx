export default function MountainArt() {
  return (
    <svg className="mountain-art" viewBox="0 0 360 210" role="img" aria-label="Ruta hacia una montaña">
      <defs>
        <linearGradient id="peak" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#2b3741" />
          <stop offset="1" stopColor="#111b22" />
        </linearGradient>
        <linearGradient id="road" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#d7ff00" />
          <stop offset="1" stopColor="#8eea00" />
        </linearGradient>
      </defs>
      <g opacity="0.7">
        <path d="M40 168 L132 54 L222 168 Z" fill="url(#peak)" />
        <path d="M100 168 L188 36 L310 168 Z" fill="#202a33" />
        <path d="M188 36 L224 92 L206 84 L194 110 L170 75 Z" fill="#3b4650" />
        <path d="M258 168 L312 88 L354 168 Z" fill="#26313a" />
        <path d="M312 88 L332 126 L318 118 L303 137 L293 116 Z" fill="#4b5660" />
        <path d="M132 54 L159 96 L144 89 L127 118 L114 85 Z" fill="#55606a" />
      </g>
      <path d="M211 18 L211 50" stroke="#bfff00" strokeWidth="6" strokeLinecap="round" />
      <path d="M215 19 C236 12 244 30 265 22 L265 51 C244 59 236 41 215 49 Z" fill="#bfff00" />
      <path d="M211 55 C180 87 258 112 211 143 C180 163 170 188 167 208 L215 208 C210 180 268 154 241 124 C219 99 178 88 211 55 Z" fill="url(#road)" />
      <g opacity="0.45" fill="#aab4bd">
        <ellipse cx="74" cy="42" rx="24" ry="14" />
        <ellipse cx="105" cy="38" rx="26" ry="21" />
        <ellipse cx="136" cy="40" rx="23" ry="19" />
        <rect x="60" y="42" width="95" height="12" rx="6" />
      </g>
    </svg>
  )
}
