
'use client'
import { useState } from 'react'
import { Search, X } from 'lucide-react'
import { Button } from './buttons'
import { programs } from '../lib/data'

export function SearchDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('')
  if (!open) return null
  const results = programs.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
  return <div className="fixed inset-0 z-50 flex justify-center bg-zinc-950/50 p-4 pt-20 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Search programs"><div className="h-fit w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl"><div className="flex items-center gap-3 border-b px-5"><Search className="text-zinc-400" size={20}/><input autoFocus value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search a program, university or specialisation" className="h-16 flex-1 outline-none"/><button onClick={onClose} className="rounded p-2 hover:bg-zinc-100"><X size={20}/></button></div><div className="max-h-80 overflow-y-auto p-3">{results.map(result=><button onClick={onClose} className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left hover:bg-brand-50" key={result.title}><span><b className="block">{result.title}</b><small className="text-zinc-500">{result.category} · {result.duration}</small></span><span className="text-brand-500">→</span></button>)}{query && !results.length && <p className="p-5 text-center text-sm text-zinc-500">No matching program yet.</p>}</div></div></div>
}

export function GuidanceDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false)
  if (!open) return null
  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/50 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Get expert guidance"><form onSubmit={e=>{e.preventDefault();setSubmitted(true)}} className="relative w-full max-w-md rounded-2xl bg-white p-7 shadow-2xl"><button type="button" onClick={onClose} className="absolute right-4 top-4 rounded p-2 hover:bg-zinc-100"><X size={19}/></button>{submitted ? <div className="py-8 text-center"><div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-green-100 text-xl text-green-700">✓</div><h3 className="text-xl font-extrabold">We&apos;ll be in touch</h3><p className="mt-2 text-sm text-zinc-600">Your request is ready for backend submission. Connect this handler to your CRM/API when available.</p><Button type="button" onClick={onClose} className="mt-6">Done</Button></div> : <><h3 className="text-2xl font-extrabold">Talk to an expert</h3><p className="mt-2 text-sm text-zinc-600">Get personalised recommendations in a quick, no-pressure call.</p><div className="mt-6 space-y-3"><input required placeholder="Full name" className="w-full rounded-lg border px-3 py-3 outline-none focus:border-brand-500"/><input required type="email" placeholder="Email address" className="w-full rounded-lg border px-3 py-3 outline-none focus:border-brand-500"/><input required pattern="[0-9+ -]{8,}" placeholder="Phone number" className="w-full rounded-lg border px-3 py-3 outline-none focus:border-brand-500"/><select className="w-full rounded-lg border px-3 py-3 text-zinc-600 outline-none focus:border-brand-500"><option>I'm exploring a program</option><option>I need university comparisons</option><option>I need admission support</option></select></div><Button className="mt-5 w-full" type="submit">Request a call</Button><p className="mt-3 text-center text-xs text-zinc-500">By continuing, you agree to be contacted about your enquiry.</p></>}</form></div>
}
