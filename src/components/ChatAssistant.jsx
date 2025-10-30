import React, { useEffect, useState } from 'react'

export default function ChatAssistant() {
  const [open, setOpen] = useState(false)
  const [msg, setMsg] = useState('')
  const [history, setHistory] = useState([])

  const send = () => {
    if (!msg.trim()) return
    const m = msg.trim()
    setHistory((h) => [...h, { from: 'you', text: m }])
    setMsg('')
    // trigger easter egg if user types the secret
    if (m.toLowerCase().includes('rehitha.dev') || m.toLowerCase().includes('rehitha')) {
      // dispatch global event to open developer console
      window.dispatchEvent(new Event('openEasterEgg'))
      setHistory((h) => [...h, { from: 'bot', text: 'Developer Mode activated (if available).' }])
      return
    }
    // simple bot suggestion reply
    setHistory((h) => [...h, { from: 'bot', text: "Hi — I can help connect you with Rehitha. Try 'schedule' or 'email'. Type 'rehitha.dev' to unlock Developer Mode." }])
  }

  // Auto-greet with a suggestion when chat opens
  useEffect(() => {
    if (open) {
      setHistory((h) => {
        if (h.length > 0) return h
        return [
          { from: 'bot', text: "Welcome! You can book time via Schedule, email Rehitha, or type 'rehitha.dev' to unlock Developer Mode." }
        ]
      })
    }
  }, [open])

  return (
    <div>
      <div className={`fixed bottom-6 right-6 w-80 z-40 ${open ? '' : ''}`}>
        <div className="card p-3">
          <div className="flex items-center justify-between">
            <strong>Chat</strong>
            <div>
              <button onClick={() => setOpen(!open)} className="px-2 py-1 rounded border border-zinc-700">{open ? '−' : '+'}</button>
            </div>
          </div>
          {open && (
            <div className="mt-3">
              <div className="h-40 overflow-auto p-2 bg-zinc-900 rounded">
                {history.length === 0 && <div className="text-xs text-zinc-500">Ask a question or type the secret (rehitha.dev)</div>}
                {history.map((h, i) => (
                  <div key={i} className={`text-sm my-1 ${h.from === 'you' ? 'text-amber-300' : 'text-zinc-300'}`}>{h.text}</div>
                ))}
              </div>
              <div className="mt-2 flex gap-2">
                <input value={msg} onChange={(e)=>setMsg(e.target.value)} onKeyDown={(e)=>{ if(e.key==='Enter') send() }} className="flex-1 px-2 py-1 rounded bg-zinc-900 border border-zinc-800" placeholder="Type a message" />
                <button onClick={send} className="px-3 py-1 rounded bg-amber-600 hover:bg-amber-500">Send</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
