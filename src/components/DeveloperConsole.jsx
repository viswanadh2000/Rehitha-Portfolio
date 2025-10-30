import React, { useEffect, useState } from 'react'

export default function DeveloperConsole() {
  const [open, setOpen] = useState(false)
  const [buffer, setBuffer] = useState('')

  useEffect(() => {
    const onKey = (e) => {
      // Ctrl+Alt+V
      if (e.ctrlKey && e.altKey && e.key.toLowerCase() === 'v') {
        setOpen((o) => !o)
        return
      }
      // typing buffer detection for 'rehitha.dev'
      const ch = e.key
      if (ch.length === 1) {
        setBuffer((b) => (b + ch).slice(-12))
      }
    }

    const onOpenEvent = () => setOpen(true)

    window.addEventListener('keydown', onKey)
    window.addEventListener('openEasterEgg', onOpenEvent)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('openEasterEgg', onOpenEvent)
    }
  }, [])

  useEffect(() => {
    if (buffer.toLowerCase().includes('rehitha.dev')) setOpen(true)
  }, [buffer])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-6 pointer-events-none">
      <div className="pointer-events-auto w-full max-w-4xl bg-stone-900/90 border border-amber-800/40 rounded-2xl shadow-2xl p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-amber-400">Developer Mode — rehitha.dev</h2>
            <p className="text-sm text-zinc-400 mt-1">A playful developer overlay: quick actions, suggestions, and small demos.</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => { navigator.clipboard && navigator.clipboard.writeText('kilaru.rehitha27@gmail.com') }} className="px-3 py-1 rounded bg-amber-600 hover:bg-amber-500 text-sm">Copy Email</button>
            <button onClick={() => setOpen(false)} className="px-3 py-1 rounded border border-zinc-700 text-sm">Close</button>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mt-6">
          <div className="card p-4">
            <h3 className="font-medium">Quick Suggestion</h3>
            <p className="text-zinc-300 text-sm mt-2">If you're hiring: look for experience in real-time ingestion (Kinesis/Kafka), scalable PySpark jobs, and reliable CI/CD for data pipelines.</p>
            <div className="mt-3">
              <button onClick={() => alert('Thanks — suggestion copied to clipboard!')} className="px-3 py-1 rounded bg-amber-600 hover:bg-amber-500 text-sm">Suggest to Recruiter</button>
            </div>
          </div>

          <div className="card p-4">
            <h3 className="font-medium">Small Demo</h3>
            <p className="text-zinc-300 text-sm mt-2">Run a sample SQL-like query hint (simulated):</p>
            <pre className="text-xs bg-zinc-900 p-2 rounded mt-2">SELECT count(*) FROM events WHERE status = 'processed';</pre>
          </div>

          <div className="card p-4">
            <h3 className="font-medium">Personality</h3>
            <p className="text-zinc-300 text-sm mt-2">This overlay is an easter egg — press <b>Ctrl</b>+<b>Alt</b>+<b>V</b> or type <code>rehitha.dev</code>.</p>
            <div className="mt-3 flex gap-2">
              <button onClick={() => window.location.reload()} className="px-3 py-1 rounded bg-amber-600 hover:bg-amber-500 text-sm">Refresh Page</button>
            </div>
          </div>
        </div>

        <div className="mt-6 text-xs text-zinc-500">Tip: closed by the Close button or press <b>Ctrl</b>+<b>Alt</b>+<b>V</b> again.</div>
      </div>
    </div>
  )
}
