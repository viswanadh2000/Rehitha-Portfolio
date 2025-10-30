import React from 'react'
import profile from '../assets/Bujji.jpg'

export default function Hero() {
  return (
    <div className="section grid md:grid-cols-[1.1fr_1fr] gap-10 items-center">
      <div className="space-y-6">
  <p className="text-amber-400 text-sm">Sr Data Engineer</p>
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          Hi, I'm <span className="text-amber-400">Rehitha Kilaru</span>.
          <br /> Sr Data Engineer — building scalable data pipelines & analytics.
        </h1>
        <p className="text-zinc-300">
          Around 6+ years of experience in Big Data Analytics, building ETL/ELT
          pipelines, streaming solutions, and cloud-native data platforms on AWS and Azure.
        </p>
        <div className="flex gap-3">
          <a href="#experience" className="px-5 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 transition">View Experience</a>
          <a href="/resume/Rehitha_DataEngineer.pdf" className="px-5 py-3 rounded-xl border border-zinc-700 hover:border-zinc-500" download>Download Resume</a>
        </div>
        <div className="flex gap-4 pt-2 text-zinc-300">
          <a className="hover:text-white" href="mailto:kilaru.rehitha27@gmail.com">kilaru.rehitha27@gmail.com</a>
          <span className="text-zinc-500">|</span>
          <a className="hover:text-white" href="tel:+17208006667">+1 (720) 800-6667</a>
        </div>
      </div>
      <div className="flex justify-center md:justify-end">
  <img src={profile} alt="Rehitha Kilaru" className="w-56 h-56 sm:w-72 sm:h-72 object-cover rounded-3xl border border-zinc-800 shadow-2xl" />
      </div>
    </div>
  )
}
