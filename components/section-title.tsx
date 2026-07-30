
export function SectionTitle({ label, title, copy }: { label: string; title: React.ReactNode; copy?: string }) {
  return <div className="mx-auto mb-10 max-w-3xl text-center"><span className="section-label">{label}</span><h2 className="mt-5 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">{title}</h2>{copy && <p className="mt-3 text-sm leading-6 text-zinc-600 sm:text-base">{copy}</p>}</div>
}
