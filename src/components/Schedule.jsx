import React, { useState } from 'react'

// Links
const LINKEDIN_URL = 'https://www.linkedin.com/in/rehitha-kilaru'
// Use the provided Calendly booking link and show this page in the embed
const CALENDLY_URL = 'https://calendly.com/kilaru-rehitha27/30min?month=2025-10'
const CONTACT_EMAIL = 'kilaru.rehitha27@gmail.com'

export default function Schedule() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const openGmailCompose = (e) => {
    e.preventDefault()
    const subject = `Meeting request from ${name || 'Portfolio Visitor'}`
    const bodyLines = [
      message || '(your message here)',
      '',
      `From: ${name || ''}${email ? ` <${email}>` : ''}`
    ]
    const body = bodyLines.join('\n')
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="section">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card p-8">
          <h2 className="text-2xl font-semibold mb-2">Contact form (via Gmail)</h2>
          <p className="text-sm text-zinc-400 mb-6">This opens Gmail compose with your message prefilled. If you don’t use Gmail, use the mailto link below.</p>
          <form className="space-y-4" onSubmit={openGmailCompose}>
            <div>
              <label className="block text-sm text-zinc-400 mb-1">Your name</label>
              <input value={name} onChange={(e)=>setName(e.target.value)} className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 focus:outline-none focus:border-amber-600" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-sm text-zinc-400 mb-1">Your email</label>
              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 focus:outline-none focus:border-amber-600" placeholder="jane@example.com" />
            </div>
            <div>
              <label className="block text-sm text-zinc-400 mb-1">Message</label>
              <textarea rows={5} value={message} onChange={(e)=>setMessage(e.target.value)} className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 focus:outline-none focus:border-amber-600" placeholder="What would you like to discuss?" />
            </div>
            <div className="flex flex-wrap gap-3">
              <button type="submit" className="px-5 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 transition">Send via Gmail</button>
              <a href={`mailto:${CONTACT_EMAIL}`} className="px-5 py-2 rounded-xl border border-zinc-700 hover:border-zinc-500">Use mailto instead</a>
            </div>
          </form>
        </div>

        <div className="card p-8">
          <h2 className="text-2xl font-semibold mb-2">Connect or book time</h2>
          <p className="text-sm text-zinc-400 mb-4">Prefer LinkedIn or a direct booking? Use one of the options below.</p>
          <div className="flex flex-wrap gap-3 mb-6">
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="px-5 py-2 rounded-xl border border-zinc-700 hover:border-zinc-500">Message on LinkedIn</a>
            <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="px-5 py-2 rounded-xl bg-amber-600 hover:bg-amber-500">Open Calendly</a>
          </div>
          <div className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900">
            {(() => {
              const embedParams = 'hide_gdpr_banner=1&primary_color=f59e0b'
              const joinChar = CALENDLY_URL.includes('?') ? '&' : '?'
              const embedUrl = `${CALENDLY_URL}${joinChar}${embedParams}`
              return (
                <iframe
                  title="Calendly"
                  src={embedUrl}
                  width="100%"
                  height="600"
                  frameBorder="0"
                />
              )
            })()}
          </div>
        </div>
      </div>
    </div>
  )
}
