import React from 'react'

const education = [
  {
    school: 'University of Texas at Arlington',
    location: 'Arlington, Texas, USA',
  },
  {
    school: 'JNTU',
    location: 'Hyderabad, India',
  },
]

export default function Education() {
  return (
    <div className="section">
      <h2 className="text-2xl font-semibold mb-6">Education</h2>
      <div className="grid gap-6">
        {education.map((e) => (
          <div key={e.school} className="card p-6">
            <div className="flex flex-wrap justify-between gap-2">
              <h3 className="text-xl font-semibold">{e.school}</h3>
              <span className="text-sm text-zinc-400">{e.location}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
