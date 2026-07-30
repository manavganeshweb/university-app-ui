"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  GraduationCap,
  Search,
  Brain,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-600 via-brand-500 to-orange-500 px-5 py-20 text-white">

      {/* Background Glow */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-300/20 blur-3xl" />


      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">


        {/* Left Content */}
        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.6,
          }}
        >

          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">

            <Sparkles size={16} />

            AI Powered Course Finder

          </div>


          <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">

            Find the

            <span className="block text-orange-100">
              Perfect Course
            </span>

            For Your Career

          </h1>


          <p className="mt-5 max-w-xl text-lg leading-8 text-white/80">

            Answer a few simple questions and get personalised course,
            university and career recommendations based on your goals.

          </p>


          <div className="mt-8 flex flex-wrap gap-4">


            <Link
              href="#questions"
              className="group flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-brand-600 shadow-lg transition hover:scale-105"
            >

              Start Your Journey

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />

            </Link>


          </div>


          {/* Benefits */}

          <div className="mt-8 grid gap-3 sm:grid-cols-2">


            {[
              "AI based recommendations",
              "Compare top universities",
              "Free counselling support",
              "Personalised career path",
            ].map((item) => (

              <div
                key={item}
                className="flex items-center gap-2 text-sm text-white/90"
              >

                <CheckCircle2
                  size={18}
                  className="text-orange-200"
                />

                {item}

              </div>

            ))}


          </div>


        </motion.div>




        {/* Right Illustration */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative flex justify-center"
        >


          {/* Main Card */}

          <div className="relative w-full max-w-md rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl">


            <div className="rounded-2xl bg-white p-6 text-zinc-900 shadow-xl">


              <div className="flex items-center gap-3">

                <div className="rounded-xl bg-brand-100 p-3">

                  <Brain
                    className="text-brand-600"
                    size={28}
                  />

                </div>


                <div>

                  <h3 className="font-bold">
                    Smart Matching
                  </h3>

                  <p className="text-sm text-gray-500">
                    Find courses made for you
                  </p>

                </div>


              </div>



              <div className="mt-6 space-y-4">


                <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-4">

                  <GraduationCap
                    className="text-orange-500"
                  />

                  <div>

                    <p className="text-sm font-semibold">
                      B.Tech Computer Science
                    </p>

                    <p className="text-xs text-gray-500">
                      96% Match
                    </p>

                  </div>

                </div>



                <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-4">

                  <Search
                    className="text-brand-600"
                  />

                  <div>

                    <p className="text-sm font-semibold">
                      Top Universities
                    </p>

                    <p className="text-xs text-gray-500">
                      50+ options found
                    </p>

                  </div>

                </div>


              </div>


            </div>


          </div>




          {/* Floating Cards */}

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="absolute -right-5 top-10 rounded-xl bg-white px-4 py-3 text-sm font-bold text-zinc-900 shadow-xl"
          >

            🎯 96% Match

          </motion.div>



          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="absolute -bottom-5 left-0 rounded-xl bg-white px-4 py-3 text-sm font-bold text-zinc-900 shadow-xl"
          >

            🎓 500+ Courses

          </motion.div>



        </motion.div>


      </div>


    </section>
  );
}