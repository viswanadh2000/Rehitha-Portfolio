import React, { useState } from 'react'

const initialBadges = [
  { id: 'data-pipeline', title: 'Data Pipeline Pro', desc: 'Built 10+ production pipelines', locked: false },
  { id: 'spark-stream', title: 'Spark Streamer', desc: 'Real-time processing experience', locked: false },
  { id: 'cloud-wrangler', title: 'Cloud Wrangler', desc: 'Cloud infra & automation', locked: true },
]

export default function Badges() {
  const [badges, setBadges] = useState(initialBadges)

  const unlock = (id) => {
    setBadges((b) => b.map(x => x.id === id ? { ...x, locked: false } : x))
  }

  return (
    <div className="section">
      <h2 className="text-2xl font-semibold mb-6">Achievements & Badges</h2>
      <div className="grid sm:grid-cols-3 gap-4">
        {badges.map((b) => (
          <div key={b.id} className={`card p-6 ${b.locked ? 'opacity-70' : ''}`}>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{b.title}</h3>
              <span className="text-sm text-zinc-400">{b.locked ? 'Locked' : 'Earned'}</span>
            </div>
            <p className="text-zinc-300 mt-2">{b.desc}</p>
            {b.locked && (
              <div className="mt-4">
                <button onClick={() => unlock(b.id)} className="px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-500">Unlock</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
