import sampleImage from './assets/sample-image.jpg'

export const SAMPLE_IMAGE = sampleImage

export const TABS = ['Personal', 'Perguruan Tinggi', 'Google Drive']

export const FILES = {
  Personal: [
    {
      id: 1,
      name: 'Tugas-1-Wahyu-Firman.pdf',
      kb: 646.94,
      type: 'pdf',
    },
    {
      id: 2,
      name: 'Tugas-2-Kuis-Computer-Science.pdf',
      kb: 198.13,
      type: 'pdf',
    },
    {
      id: 3,
      name: 'Tugas-3-Modul-Pertemuan-3.pdf',
      kb: 312.4,
      type: 'pdf',
    },
    {
      id: 4,
      name: 'Tugas-4-Latihan-Kelas-Orientasi.pdf',
      kb: 161.88,
      type: 'pdf',
    },
    {
      id: 5,
      name: 'Tugas-Test-Gagal.pdf',
      kb: 120.5,
      type: 'pdf',
      failed: true,
    },
    { id: 6, name: 'All-that-is-gold.jpg', kb: 85.76, type: 'image' },
  ],
  'Perguruan Tinggi': [
    { id: 11, name: 'Kalender-Akademik-2026.pdf', kb: 254.1, type: 'pdf' },
    { id: 12, name: 'Panduan-Skripsi.pdf', kb: 1024.5, type: 'pdf' },
  ],
  'Google Drive': [],
}

export const STORAGE = {
  used: 72.65,
  total: 100,
  percent: 72.65,
  label: '72,65 MB dari 100 MB digunakan',
}
