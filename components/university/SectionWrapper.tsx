"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

interface SectionWrapperProps {
  id?: string
  title: string
  subtitle?: string
  children: ReactNode
  actionText?: string
  onActionClick?: () => void
}

export default function SectionWrapper({
  id,
  title,
  subtitle,
  children,
  actionText,
  onActionClick,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
      className="scroll-mt-40"
    >
      <div
        className="
        group
        overflow-hidden
        rounded-[28px]
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-2xl
        "
      >
        {/* Header */}

        <div
          className="
          flex
          flex-col
          gap-4
          border-b
          border-slate-100
          bg-gradient-to-r
          from-blue-50
          via-white
          to-cyan-50
          px-6
          py-6
          md:flex-row
          md:items-center
          md:justify-between
          lg:px-10
          "
        >
          <div>
            <div className="mb-3 h-1 w-16 rounded-full bg-blue-600" />

            <h2
              className="
              text-2xl
              font-extrabold
              text-slate-900
              md:text-3xl
              "
            >
              {title}
            </h2>

            {subtitle && (
              <p className="mt-2 max-w-2xl text-slate-500">
                {subtitle}
              </p>
            )}
          </div>

          {actionText && (
            <button
              onClick={onActionClick}
              className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-200
              bg-blue-50
              px-5
              py-3
              font-semibold
              text-blue-700
              transition
              hover:bg-blue-600
              hover:text-white
              "
            >
              {actionText}

              <ChevronRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </button>
          )}
        </div>

        {/* Body */}

        <div
          className="
          px-6
          py-8
          lg:px-10
          "
        >
          {children}
        </div>
      </div>
    </motion.section>
  )
}