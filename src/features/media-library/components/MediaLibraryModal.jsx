import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import MediaLibraryFooter from './MediaLibraryFooter'
import MediaLibraryHeader from './MediaLibraryHeader'
import MediaLibraryToolbar from './MediaLibraryToolbar'
import MediaFileItem from './MediaFileItem'
import { FILES, TABS } from '../data'

export default function MediaLibraryModal({ onClose, onAdd }) {
  const [tab, setTab] = useState(TABS[0])
  const [sort, setSort] = useState('az')
  const [view, setView] = useState('grid')
  const [selected, setSelected] = useState(() => new Set())
  const [query, setQuery] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  const files = FILES[tab]
    .filter((f) => f.name.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) =>
      sort === 'az'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name),
    )

  const toggleFile = (id) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const changeTab = (nextTab) => {
    setTab(nextTab)
    setSelected(new Set())
  }

  const closeSearch = () => {
    setSearchOpen(false)
    setQuery('')
  }

  const handleAdd = () => {
    const selectedFiles = FILES[tab].filter((f) => selected.has(f.id))
    onAdd(selectedFiles)
    onClose()
  }

  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-slate-100"
      role="dialog"
      aria-modal="true"
      aria-label="Media Library"
      onClick={onClose}
    >
      <div
        className="mx-auto flex h-full w-full max-w-md flex-col bg-white font-sans text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        <MediaLibraryHeader
          tabs={TABS}
          activeTab={tab}
          onTabChange={changeTab}
          searchOpen={searchOpen}
          query={query}
          onQueryChange={setQuery}
          onOpenSearch={() => setSearchOpen(true)}
          onCloseSearch={closeSearch}
          onBack={onClose}
        />

        <main className="min-h-0 flex-1 overflow-y-auto px-4 pb-6 pt-5">
          <MediaLibraryToolbar
            sort={sort}
            onSortChange={setSort}
            view={view}
            onViewChange={setView}
          />

          {files.length > 0 ? (
            <ul
              className={
                view === 'grid'
                  ? 'mt-6 grid grid-cols-2 gap-3'
                  : 'mt-6 flex flex-col gap-2'
              }
            >
              {files.map((file) => (
                <MediaFileItem
                  key={file.id}
                  file={file}
                  view={view}
                  selected={selected.has(file.id)}
                  onToggle={() => toggleFile(file.id)}
                />
              ))}
            </ul>
          ) : (
            <p className="mt-16 text-center text-slate-400">
              Belum ada file di sini.
            </p>
          )}
        </main>

        <MediaLibraryFooter
          selectedCount={selected.size}
          onAdd={handleAdd}
        />
      </div>
    </div>,
    document.body,
  )
}
