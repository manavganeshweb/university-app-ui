
import type { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'outline' | 'dark' }
export function Button({ className='', variant='primary', ...props }: Props) {
  const variants = { primary:'bg-brand-500 text-white hover:bg-brand-600', outline:'border border-brand-200 bg-white text-brand-600 hover:bg-brand-50', dark:'bg-zinc-900 text-white hover:bg-zinc-800' }
  return <button className={`inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`} {...props} />
}
