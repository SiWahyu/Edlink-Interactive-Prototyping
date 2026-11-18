import { TZ } from './data'

const dayKey = (d) => new Intl.DateTimeFormat('en-CA', { timeZone: TZ }).format(d)

const timeOf = (d) =>
  new Intl.DateTimeFormat('id-ID', {
    timeZone: TZ,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
    .format(d)
    .replace('.', ':')

export function deadlineLabel(iso) {
  if (!iso) return 'Batas waktu : Tidak ada'
  const d = new Date(iso)
  const now = new Date()
  const tmr = new Date(now.getTime() + 864e5)
  if (dayKey(d) === dayKey(now)) return `Batas waktu: Hari ini ${timeOf(d)}`
  if (dayKey(d) === dayKey(tmr)) return `Batas waktu: Besok ${timeOf(d)}`
  const date = new Intl.DateTimeFormat('id-ID', {
    timeZone: TZ,
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(d)
  return `Batas waktu: ${date} ${timeOf(d)}`
}

export function todayLabel() {
  return new Intl.DateTimeFormat('id-ID', {
    timeZone: TZ,
    weekday: 'long',
    day: 'numeric',
    month: 'short',
  }).format(new Date())
}
