import React from 'react'

const certs = [
  // Placeholders — replace with actual certifications if available
  { name: 'AWS Data Analytics (suggested)', org: 'AWS' },
  { name: 'Databricks Certified Associate', org: 'Databricks' },
  { name: 'Snowflake Fundamentals (suggested)', org: 'Snowflake' },
]

export default function Certifications() {
  return (
    <div className="section">
      <h2 className="text-2xl font-semibold mb-6">Certifications</h2>
      <div className="grid sm:grid-cols-3 gap-4">
        {certs.map((c) => (
          <div key={c.name} className="card p-4">
            <h3 className="font-medium">{c.name}</h3>
            <p className="text-sm text-zinc-400">{c.org}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-zinc-500 mt-3">These are suggestions — replace them with your actual certifications and dates.</p>
    </div>
  )
}
