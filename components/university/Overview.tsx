"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  BadgeCheck,
  Building2,
  BookOpen,
  Globe2,
  GraduationCap,
  Landmark,
  Trophy,
  Users,
  ChevronDown,
  ChevronUp,
} from "lucide-react"

import SectionWrapper from "./SectionWrapper"

interface Props {
  university: any
  id?: string
}

const approvals = [
  "UGC Approved",
  "NAAC A+",
  "AICTE",
  "AIU Member",
]

const facilities = [
  "Smart Classrooms",
  "Digital Library",
  "Hostel",
  "Sports Complex",
  "Innovation Labs",
  "Placement Cell",
]

export default function Overview({
  university,
  id = "overview",
}: Props) {
  const [expanded, setExpanded] = useState(false)

  const description =
    university.description ||
    `${university.name} is one of India's leading universities offering undergraduate, postgraduate and professional programmes with modern infrastructure, experienced faculty and excellent placement support.`

  return (
    <SectionWrapper
      id={id}
      title="About University"
      subtitle="Everything you should know before applying."
    >
      <div className="space-y-10">
        {/* Description */}

        <div>
          <motion.p
            layout
            className="leading-8 text-slate-600"
          >
            {expanded
              ? description
              : `${description.slice(0, 260)}...`}
          </motion.p>

          {description.length > 260 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="
              mt-5
              inline-flex
              items-center
              gap-2
              font-semibold
              text-blue-600
              transition
              hover:text-blue-700
              "
            >
              {expanded ? (
                <>
                  Read Less
                  <ChevronUp size={18} />
                </>
              ) : (
                <>
                  Read More
                  <ChevronDown size={18} />
                </>
              )}
            </button>
          )}
        </div>

        {/* Highlights */}

        <div>
          <h3 className="mb-5 text-xl font-bold text-slate-900">
            University Highlights
          </h3>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <InfoCard
              icon={<GraduationCap size={28} />}
              title="Programmes"
              value={`${university.courses?.length || 40}+`}
            />

            <InfoCard
              icon={<Users size={28} />}
              title="Students"
              value="1,50,000+"
            />

            <InfoCard
              icon={<Building2 size={28} />}
              title="Recruiters"
              value="500+"
            />

            <InfoCard
              icon={<Trophy size={28} />}
              title="Placement"
              value="98%"
            />
          </div>
        </div>

        {/* Approvals */}

        <div>
          <h3 className="mb-5 text-xl font-bold text-slate-900">
            Recognition & Approvals
          </h3>

          <div className="flex flex-wrap gap-4">
            {approvals.map((item) => (
              <motion.div
                key={item}
                whileHover={{
                  scale: 1.05,
                }}
                className="
                rounded-full
                border
                border-blue-100
                bg-blue-50
                px-5
                py-3
                font-semibold
                text-blue-700
                "
              >
                <BadgeCheck
                  size={18}
                  className="mr-2 inline"
                />
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Campus Facilities */}

        <div>
          <h3 className="mb-5 text-xl font-bold text-slate-900">
            Campus Facilities
          </h3>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility) => (
              <motion.div
                key={facility}
                whileHover={{
                  y: -5,
                }}
                className="
                flex
                items-center
                gap-4
                rounded-2xl
                border
                bg-slate-50
                p-5
                transition
                hover:border-blue-200
                hover:bg-blue-50
                "
              >
                <BookOpen
                  className="text-blue-600"
                  size={22}
                />

                <span className="font-medium">
                  {facility}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Stat
            icon={<Landmark />}
            title="Established"
            value="2012"
          />

          <Stat
            icon={<Globe2 />}
            title="Mode"
            value="Online + Distance"
          />

          <Stat
            icon={<Users />}
            title="Alumni"
            value="2 Lakh+"
          />

          <Stat
            icon={<Trophy />}
            title="NIRF"
            value="#27"
          />
        </div>
      </div>
    </SectionWrapper>
  )
}

function InfoCard({
  icon,
  title,
  value,
}: any) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      className="
      rounded-3xl
      border
      bg-gradient-to-br
      from-white
      to-blue-50
      p-6
      shadow-sm
      transition
      hover:shadow-xl
      "
    >
      <div className="text-blue-600">
        {icon}
      </div>

      <h4 className="mt-4 text-lg font-bold">
        {value}
      </h4>

      <p className="mt-1 text-sm text-slate-500">
        {title}
      </p>
    </motion.div>
  )
}

function Stat({
  icon,
  title,
  value,
}: any) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
      }}
      className="
      rounded-3xl
      border
      bg-white
      p-6
      shadow-sm
      transition
      hover:border-blue-200
      hover:shadow-lg
      "
    >
      <div className="text-blue-600">
        {icon}
      </div>

      <h4 className="mt-4 text-2xl font-bold">
        {value}
      </h4>

      <p className="mt-1 text-slate-500">
        {title}
      </p>
    </motion.div>
  )
}