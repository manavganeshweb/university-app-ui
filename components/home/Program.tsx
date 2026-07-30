'use client'
import { ArrowRight, Clock3 } from 'lucide-react'
import { useMemo, useState } from 'react'
import { programs } from '../../lib/data'
const tabs = ['Postgraduate','Undergraduate','Diploma','Certificate','Executive','Doctorate'] as const
export function Programs(){
    const [active,setActive]=useState<(typeof tabs)[number]>('Postgraduate');const list=useMemo(()=>programs.filter(item=>item.category===active),[active]);
    return <section id="programs" className="section-space container-page scroll-mt-20">
        <div className="mx-auto max-w-5xl rounded-2xl bg-gradient-to-br from-zinc-950 via-zinc-800 to-brand-900 p-4 sm:p-7">
            <div className="mb-6 text-center">
                <span className="section-label">Explore programs</span>
                <h2 className="mt-4 text-3xl font-extrabold text-white">Choose the path that fits your goals</h2>
                </div>
                <div className="mb-6 flex gap-2 overflow-x-auto rounded-full bg-white p-1.5">
                    <div className="flex min-w-max gap-1">{tabs.map(tab=><button key={tab} onClick={()=>setActive(tab)} className={`rounded-full px-4 py-2 text-xs font-bold transition ${active===tab?'bg-brand-500 text-white shadow':'text-zinc-600 hover:bg-zinc-100'}`}>{tab}</button>)}</div>
                    </div>{list.length?<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{list.map(program=><a href={`/programs/${program.title.toLowerCase().replaceAll(' ','-')}`} key={program.title} className="group relative rounded-xl bg-white p-4 transition hover:-translate-y-1 hover:shadow-card"><span className="absolute left-4 top-0 rounded-b-md bg-green-600 px-2 py-1 text-[9px] font-extrabold uppercase tracking-wide text-white">{program.badge||program.category}</span><div className="mt-4 flex items-center gap-4"><img className="h-16 w-16 object-contain" src={`https://media.collegesathi.com/program/${program.image}`} alt=""/><div><h3 className="font-extrabold">{program.title}</h3><p className="mt-1 flex items-center gap-1 text-xs text-zinc-500"><Clock3 size={13}/>{program.duration}</p><p className="mt-1 text-xs text-zinc-500">{program.specialisations}</p></div></div><span className="mt-4 flex items-center text-xs font-bold text-brand-600">View details <ArrowRight className="ml-1 transition group-hover:translate-x-1" size={14}/></span></a>)}</div>:<p className="rounded-xl bg-white p-10 text-center text-sm text-zinc-500">Programs in this category will be available soon.</p>}<a href="/programs" className="mt-6 flex items-center justify-end text-sm font-bold text-white hover:underline">View all programs <ArrowRight className="ml-1" size={15}/></a></div></section>}
