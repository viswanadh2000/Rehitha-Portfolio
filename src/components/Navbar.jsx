import React from 'react'

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#badges', label: 'Achievements' },
  { href: '#schedule', label: 'Schedule' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  return (
  <header className="sticky top-0 z-50 backdrop-blur bg-stone-950/60 border-b border-amber-800/40">
      <div className="section py-4 flex items-center justify-between">
        <a href="#home" className="text-lg font-semibold tracking-wide">
          RK
        </a>
        <nav className="hidden sm:flex gap-6 text-sm text-zinc-300">
          {navItems.map((n) => (
            <a key={n.href} className="hover:text-white transition" href={n.href}>{n.label}</a>
          ))}
        </nav>
        <a
          href="/resume/Rehitha_DataEngineer.pdf"
          className="text-sm px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 transition"
          download
        >
          Download Resume
        </a>
      </div>
    </header>
  )
}
