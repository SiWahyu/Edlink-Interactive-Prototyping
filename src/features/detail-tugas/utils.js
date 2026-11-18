export function formatFileSize(bytes) {
  return bytes < 1048576
    ? `${(bytes / 1024).toFixed(2).replace('.', ',')} KB`
    : `${(bytes / 1048576).toFixed(2).replace('.', ',')} MB`
}

export const fileKey = (file) => `${file.name}-${file.size}`

export function formatSubmittedAt(date) {
  const formatted = new Intl.DateTimeFormat('id-ID', {
    timeZone: 'Asia/Jakarta',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
  return `${formatted} WIB`
}
