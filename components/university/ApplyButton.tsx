"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import LoginModal from "../auth/LoginModal"

type ApplyButtonProps = {
  className?: string
  text?: string
}

export default function ApplyButton({
  className = "",
  text = "Apply Now",
}: ApplyButtonProps) {

  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(true)}
        className={`
          rounded-full
          bg-blue-600
          px-8
          py-4
          font-semibold
          text-white
          shadow-lg
          transition
          hover:bg-blue-700
          ${className}
        `}
      >
        {text}
      </motion.button>

      <LoginModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  )
}