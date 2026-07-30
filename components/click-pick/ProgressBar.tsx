"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface ProgressBarProps {
  current: number;
  total: number;
  progress: number;
}

export default function ProgressBar({
  current,
  total,
  progress,
}: ProgressBarProps) {
  return (
    <div className="mx-auto mt-10 max-w-3xl">

      {/* Top Text */}
      <div className="mb-4 flex items-center justify-between">

        <div>
          <h3 className="text-lg font-bold text-zinc-900">
            Find Your Perfect Course
          </h3>

          <p className="text-sm text-zinc-500">
            Answer a few questions to get personalized recommendations
          </p>
        </div>


        <span className="rounded-full bg-brand-50 px-4 py-2 text-sm font-bold text-brand-600">
          Step {current}/{total}
        </span>

      </div>



      {/* Progress Track */}

      <div className="relative h-3 overflow-hidden rounded-full bg-zinc-200">

        <motion.div
          className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-brand-600 to-orange-500"
          initial={{
            width: 0,
          }}
          animate={{
            width: `${progress}%`,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        />

      </div>



      {/* Step Indicators */}

      <div className="mt-6 flex justify-between">

        {Array.from({ length: total }).map((_, index) => {

          const completed = index < current;
          const active = index === current - 1;


          return (
            <div
              key={index}
              className="flex flex-col items-center gap-2"
            >

              <motion.div
                animate={{
                  scale: active ? 1.15 : 1,
                }}
                className={`
                  flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold
                  ${
                    completed
                      ? "bg-brand-600 text-white"
                      : "bg-zinc-200 text-zinc-500"
                  }
                `}
              >

                {completed ? (
                  <Check size={15} />
                ) : (
                  index + 1
                )}

              </motion.div>


              <span
                className={`
                  hidden text-xs font-medium sm:block
                  ${
                    active
                      ? "text-brand-600"
                      : "text-zinc-400"
                  }
                `}
              >

                Step {index + 1}

              </span>


            </div>
          );

        })}

      </div>


    </div>
  );
}