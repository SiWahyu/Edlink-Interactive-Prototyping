import { Link } from 'react-router-dom'

export default function BackHeader({
  to,
  onBack,
  title,
  subtitle,
  action,
  className = 'gap-4 px-4 py-4',
  titleClassName = 'text-lg font-semibold',
}) {
  const backIcon = (
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  )

  return (
    <header
      className={`sticky top-0 z-10 flex items-center bg-white shadow-sm ${className}`}
    >
      {onBack ? (
        <button
          type="button"
          onClick={onBack}
          aria-label="Kembali"
          className="rounded-full p-1.5 hover:bg-slate-100"
        >
          {backIcon}
        </button>
      ) : (
        <Link
          to={to}
          aria-label="Kembali"
          className="rounded-full p-1.5 hover:bg-slate-100"
        >
          {backIcon}
        </Link>
      )}
      {subtitle ? (
        <div className="min-w-0">
          <h1 className={titleClassName}>{title}</h1>
          <p className="truncate text-note text-slate-500">{subtitle}</p>
        </div>
      ) : (
        <h1 className={titleClassName}>{title}</h1>
      )}
      {action ? <div className="ml-auto shrink-0">{action}</div> : null}
    </header>
  )
}
