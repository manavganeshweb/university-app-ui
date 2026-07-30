
'use client'
import { ArrowRight, CheckCircle2, Search } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Button } from '../../components/buttons'


export function Hero(){ 
    const [query,setQuery]=useState('');
    const images = [
  "https://www.collegesathi.com/_next/image?url=https%3A%2F%2Fmedia.collegesathi.com%2Fimages%2F1775108623439-future_desktop.webp&w=3840&q=80",
  "https://www.collegesathi.com/_next/image?url=https%3A%2F%2Fmedia.collegesathi.com%2Fimages%2F1775108311480-choose_desktop.webp&w=3840&q=80",
  "https://www.collegesathi.com/_next/image?url=https%3A%2F%2Fmedia.collegesathi.com%2Fimages%2F1775108712098-university_desktop.webp&w=1920&q=80",
  "/hero/hero4.webp"
]

const [currentImage, setCurrentImage] = useState(0)

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }, 5000)

  return () => clearInterval(interval)
}, [])
     const search=()=>document.querySelector('#programs')?.scrollIntoView({behavior:'smooth'}); 
     return <section className="bg-[blue] px-2 py-3 sm:px-5 sm:py-5">
        <div className="container-page relative min-h-[520px] overflow-hidden rounded-2xl bg-zinc-900 py-14 sm:min-h-[580px] sm:px-12">
<img
  src={images[currentImage]}
  className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000"
/>            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent"/>
            <div className="relative max-w-xl animate-rise text-white">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-xs font-bold backdrop-blur">
                <CheckCircle2 size={14} className="text-green-300"/>Verified online degrees</span>
                <h1 className="mt-7 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">Find a degree that moves your <span className="text-brand-100">career forward.</span></h1>
     <p className="mt-5 max-w-md text-base leading-7 text-zinc-100 sm:text-lg">Compare accredited online programs, fees and universities with guidance tailored to your goals.</p>
     <form onSubmit={e=>{e.preventDefault();search()}} className="mt-8 flex max-w-lg rounded-xl bg-white p-1.5 shadow-card">
        <Search className="ml-3 mt-2.5 shrink-0 text-zinc-400" size={19}/>
        <input value={query} onChange={e=>setQuery(e.target.value)} className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-sm text-zinc-900 outline-none" placeholder="What do you want to study?"/>
        <Button type="submit" className="shrink-0">Explore <ArrowRight className="ml-1.5" size={16}/></Button></form>
        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-zinc-100"><span>✓ 100+ programs</span><span>✓ 60+ verified universities</span><span>✓ Free guidance</span>
        </div></div></div>
        </section> 
        }