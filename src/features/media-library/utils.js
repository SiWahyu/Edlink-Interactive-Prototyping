export function formatKb(kb) {
  return `${kb.toLocaleString('id-ID', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} KB`
}
