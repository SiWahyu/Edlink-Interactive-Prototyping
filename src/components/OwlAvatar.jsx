export default function OwlAvatar({ className = 'h-12 w-12' }) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <circle cx="24" cy="24" r="24" fill="#22a04b" />
      <path d="M10 14 L16 18 L14 11 Z M38 14 L32 18 L34 11 Z" fill="#22a04b" />
      <circle cx="17" cy="22" r="7" fill="#fff" />
      <circle cx="31" cy="22" r="7" fill="#fff" />
      <circle cx="18" cy="22" r="3.2" fill="#1e293b" />
      <circle cx="30" cy="22" r="3.2" fill="#1e293b" />
      <path d="M21 28 L27 28 L24 33 Z" fill="#f5a524" />
    </svg>
  )
}
