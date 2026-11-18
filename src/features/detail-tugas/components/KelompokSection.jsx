import OwlAvatar from '../../../components/OwlAvatar'
import { TASK } from '../data'

export default function KelompokSection() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
        <h2 className="text-base font-semibold">{TASK.group.title}</h2>
        <span className="text-note text-slate-500">
          {TASK.group.members.length} anggota
        </span>
      </div>
      <ul className="divide-y divide-slate-200">
        {TASK.group.members.map((member) => (
          <li key={member.nim} className="flex items-center gap-4 px-4 py-3">
            <OwlAvatar className="h-12 w-12 shrink-0" />
            <div className="min-w-0">
              <p className="truncate">{member.name}</p>
              <p className="text-note text-slate-500">{member.nim}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
