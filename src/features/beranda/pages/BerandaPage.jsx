import { useState } from 'react'
import usePageTitle from '../../../hooks/usePageTitle'
import HeaderJadwal from '../components/HeaderJadwal'
import TaskFilter from '../components/TaskFilter'
import TaskList from '../components/TaskList'
import MyAcademic from '../components/MyAcademic'
import BottomNav from '../components/BottomNav'
import { TASKS } from '../data'

export default function BerandaPage() {
  usePageTitle('Beranda | Jadwal & Tugas Mahasiswa')
  const [filter, setFilter] = useState('Semua')

  const tasks =
    filter === 'Semua' ? TASKS : TASKS.filter((t) => t.course === filter)

  return (
    <div className="relative mx-auto flex min-h-screen max-w-md flex-col bg-white pb-20">
      <HeaderJadwal />

      <section className="pt-6">
        <div className="px-6">
          <h2 className="text-xl font-semibold">Perlu kamu kerjakan</h2>
          <p className="text-slate-500">
            Ada tugas atau kuis yang belum dikerjakan
          </p>
        </div>
        <TaskFilter active={filter} onChange={setFilter} />
        <TaskList key={filter} tasks={tasks} />
      </section>

      <div className="h-4 bg-slate-100"></div>
      <MyAcademic />

      <BottomNav />
    </div>
  )
}
