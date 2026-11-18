const ITEMS = [
  {
    label: 'Beranda',
    active: true,
    icon: <path d="M3 10.5L12 3l9 7.5V21h-6v-6H9v6H3z" />,
  },
  {
    label: 'Jelajah',
    icon: (
      <path d="M14 3c4 0 7 0 7 0s0 3 0 7l-7 7-4-4zM9 14l-5 1 3-4zM10 15l-1 5 4-3zM5 17c-1 1-2 4-2 4s3-1 4-2z" />
    ),
  },
  {
    label: 'Ruang Kelas',
    icon: (
      <>
        <circle cx="12" cy="7" r="3" />
        <circle cx="5" cy="9" r="2" />
        <circle cx="19" cy="9" r="2" />
        <path d="M6 20c0-4 3-7 6-7s6 3 6 7zM1 19c0-3 2-5 4-5 1 0 2 .5 2 .5S5 16 5 19zM23 19c0-3-2-5-4-5-1 0-2 .5-2 .5s2 1.5 2 4.5z" />
      </>
    ),
  },
  {
    label: 'Obrolan',
    icon: (
      <>
        <path d="M3 4h13a1 1 0 011 1v8a1 1 0 01-1 1H8l-4 3v-3H3a1 1 0 01-1-1V5a1 1 0 011-1z" />
        <path d="M19 8h2a1 1 0 011 1v8a1 1 0 01-1 1h-1v3l-4-3h-6a1 1 0 01-1-1v-1h8a2 2 0 002-2z" />
      </>
    ),
  },
  {
    label: 'Akun',
    icon: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4.5 3.5-8 8-8s8 3.5 8 8z" />
      </>
    ),
  },
]

export default function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 mx-auto grid max-w-md grid-cols-5 border-t border-slate-200 bg-white">
      {ITEMS.map((item) => (
        <button
          key={item.label}
          className={`flex flex-col items-center gap-1 whitespace-nowrap py-2.5 text-xs font-medium ${
            item.active ? 'text-brand' : 'text-slate-500 hover:text-slate-600'
          }`}
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {item.icon}
          </svg>
          {item.label}
        </button>
      ))}
    </nav>
  )
}
