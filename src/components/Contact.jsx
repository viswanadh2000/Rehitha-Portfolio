import React from 'react'

export default function Contact() {
  return (
    <div className="section">
      <div className="card p-8">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-zinc-300">Open to opportunities in data engineering, analytics, and cloud data platforms.</p>
        <div className="mt-4 flex flex-col gap-2">
          <a href="mailto:kilaru.rehitha27@gmail.com" className="px-5 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 transition">kilaru.rehitha27@gmail.com</a>
          <a href="tel:+17208006667" className="px-5 py-2 rounded-xl border border-zinc-700 hover:border-zinc-500">+1 (720) 800-6667</a>
          <a href="/resume/Rehitha_DataEngineer.pdf" className="px-5 py-2 rounded-xl border border-zinc-700 hover:border-zinc-500" download>Download Resume</a>
        </div>
      </div>
    </div>
  )
}
