"use client";

import { motion } from "framer-motion";
import { Check, Circle } from "lucide-react";
import type { ClickPickOption } from "../../types/click-pick";


interface OptionCardProps {
  option?: ClickPickOption;
  selected: boolean;
  onSelect: (value: string) => void;
}


export default function OptionCard({
  option,
  selected,
  onSelect,
}: OptionCardProps) {


  // Safety check
  if (!option) {
    return null;
  }


  const Icon = option.icon || Circle;


  return (
    <motion.button
      type="button"

      onClick={() => onSelect(option.value)}

      whileHover={{
        y: -5,
      }}

      whileTap={{
        scale: 0.97,
      }}

      transition={{
        duration: 0.2,
      }}

      className={`
        group relative
        flex w-full
        items-center
        gap-4
        rounded-2xl
        border
        p-5
        text-left
        transition-all
        duration-300

        ${
          selected

          ?

          `
          border-brand-600
          bg-brand-50
          shadow-lg
          shadow-brand-100
          `

          :

          `
          border-zinc-200
          bg-white
          hover:border-brand-300
          hover:shadow-md
          `
        }
      `}
    >


      {/* Icon */}

      <motion.div
        animate={{
          scale: selected ? 1.1 : 1,
        }}

        className={`
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          rounded-xl
          transition


          ${
            selected

            ?

            `
            bg-brand-600
            text-white
            `

            :

            `
            bg-zinc-100
            text-zinc-600
            group-hover:bg-brand-100
            group-hover:text-brand-600
            `
          }

        `}
      >

        <Icon size={24}/>

      </motion.div>




      {/* Text */}

      <div className="flex-1">


        <h3
          className={`
            font-bold

            ${
              selected
              ?
              "text-brand-700"
              :
              "text-zinc-900"
            }
          `}
        >

          {option.label}

        </h3>



        <p className="
          mt-1
          text-sm
          text-zinc-500
        ">

          {option.description}

        </p>


      </div>





      {/* Selected Indicator */}

      {
        selected && (

          <motion.div

            initial={{
              scale:0,
              opacity:0,
            }}

            animate={{
              scale:1,
              opacity:1,
            }}

            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-full
              bg-brand-600
              text-white
            "
          >

            <Check size={16}/>

          </motion.div>

        )
      }


    </motion.button>
  );
}