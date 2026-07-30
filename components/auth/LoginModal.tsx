"use client"

import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"

type Props = {
  open: boolean
  onClose: () => void
}

export default function LoginModal({ open, onClose }: Props) {
  return (
  <AnimatePresence>
  {open && (
    <motion.div
      className="
      fixed
      inset-0
      z-[9999]
      flex
      items-center
      justify-center
      bg-black/60
      backdrop-blur-sm
      p-4
      "
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="
        w-full
        max-w-md
        rounded-3xl
        bg-white
        p-6
        shadow-2xl
        "
      >
        {/* Modal Content */}
         <button
              onClick={onClose}
              className="absolute right-5 top-5 rounded-full p-2 hover:bg-gray-100"
            >
              <X size={18} />
            </button>

            <h2 className="text-3xl font-bold">
              Login to Continue
            </h2>

            <p className="mt-2 text-gray-500">
              Login to view course details and apply online.
            </p>

            <input
              placeholder="Email Address"
              className="mt-8 w-full rounded-xl border p-4 outline-none focus:border-blue-500"
            />

            <input
              type="password"
              placeholder="Password"
              className="mt-4 w-full rounded-xl border p-4 outline-none focus:border-blue-500"
            />

            <button className="mt-6 w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700">
              Login
            </button>

            <button className="mt-3 w-full rounded-xl border py-4 transition hover:bg-gray-50">
              Continue with Google
            </button>

            <p className="mt-5 text-center text-sm text-gray-500">
              Don't have an account?
              <span className="ml-1 cursor-pointer font-semibold text-blue-600">
                Register
              </span>
            </p>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
  )
}







 