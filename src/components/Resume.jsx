import React from 'react'

const PDF_PATH = '/resume/Rehitha_DataEngineer.pdf'

export default function Resume() {
  return (
    <div className="section">
      <h2 className="text-2xl font-semibold mb-4">Resume Preview</h2>
      <div className="card p-4">
        <div className="aspect-[8.5/11] w-full bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
          <iframe
            title="Resume Preview"
            src={`${PDF_PATH}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
            className="w-full h-full"
          />
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href={PDF_PATH} target="_blank" rel="noreferrer" className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500">Open in new tab</a>
          <a href={PDF_PATH} download className="px-5 py-2 rounded-xl border border-zinc-700 hover:border-zinc-500">Download PDF</a>
        </div>
        <p className="text-xs text-zinc-500 mt-2">If the preview doesn’t load, use “Open in new tab”.</p>
      </div>
    </div>
  )
}
