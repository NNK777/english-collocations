export function CollocationWord({ word, translation }: { word: string; translation: string }) {
  const parts = word.split('/')
  return (
    <span className="group relative inline-block">
      {parts.map((part, i) => (
        <span key={i}>
          {i > 0 && <span>/</span>}
          <em className="font-semibold text-emerald-600 dark:text-emerald-400">{part}</em>
        </span>
      ))}
      <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-1 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-800 px-2 py-1 text-base text-white opacity-0 transition-opacity group-hover:opacity-100 group-hover:visible group-active:opacity-100 group-active:visible group-focus-within:opacity-100 group-focus-within:visible dark:bg-slate-700">
        {translation}
      </span>
    </span>
  )
}

export function OrangeWord({ children }: { children: React.ReactNode }) {
  return <em className="font-semibold text-orange-600 dark:text-orange-400">{children}</em>
}

export function StrikeRedWord({ children }: { children: React.ReactNode }) {
  return <em className="font-semibold text-red-600 dark:text-red-400">{children}</em>
}

export function WrongCollocation({ word, translation }: { word: string; translation?: string }) {
  const segs = word.split('your')
  const hasYour = segs.length > 1

  const content = hasYour ? (
    <>
      {segs.map((seg, i) => {
        const leading = seg.match(/^\s*/)?.[0] ?? ''
        const trailing = seg.match(/\s*$/)?.[0] ?? ''
        const core = seg.trim()
        return (
          <span key={i}>
            {i > 0 && <span>your</span>}
            {leading && <span>{leading}</span>}
            {core && <em className="font-semibold text-red-600 dark:text-red-400">{core}</em>}
            {trailing && <span>{trailing}</span>}
          </span>
        )
      })}
    </>
  ) : (
    <em className="font-semibold text-red-600 dark:text-red-400">{word}</em>
  )

  if (!translation) {
    return content
  }
  return (
    <span className="group relative inline-block">
      {content}
      <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-1 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-800 px-2 py-1 text-base text-white opacity-0 transition-opacity group-hover:opacity-100 group-hover:visible group-active:opacity-100 group-active:visible group-focus-within:opacity-100 group-focus-within:visible dark:bg-slate-700">
        {translation}
      </span>
    </span>
  )
}
