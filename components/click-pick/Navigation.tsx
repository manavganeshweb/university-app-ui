"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";


interface NavigationProps {
  current: number;
  total: number;
  canContinue: boolean;

  onBack: () => void;
  onNext: () => void;
}


export default function Navigation({
  current,
  total,
  canContinue,
  onBack,
  onNext,
}: NavigationProps) {


  const isLastStep = current === total - 1;


  return (
    <div
      className="
        mx-auto
        mt-8
        flex
        max-w-4xl
        items-center
        justify-between
        gap-4
      "
    >


      {/* Back Button */}

      <motion.button
        type="button"

        onClick={onBack}

        disabled={current === 0}

        whileHover={{
          x:-3,
        }}

        whileTap={{
          scale:0.95,
        }}

        className={`
          flex
          items-center
          gap-2
          rounded-xl
          border
          px-5
          py-3
          font-semibold
          transition

          ${
            current === 0
              ?
              "cursor-not-allowed border-zinc-200 text-zinc-300"
              :
              "border-zinc-300 text-zinc-700 hover:bg-zinc-100"
          }
        `}
      >

        <ArrowLeft size={18}/>

        Back

      </motion.button>





      {/* Next Button */}

      <motion.button

        type="button"

        onClick={onNext}

        disabled={!canContinue}

        whileHover={
          canContinue
          ?
          {
            scale:1.03,
          }
          :
          {}
        }

        whileTap={
          canContinue
          ?
          {
            scale:0.96,
          }
          :
          {}
        }

        className={`
          flex
          items-center
          gap-2
          rounded-xl
          px-7
          py-3
          font-bold
          text-white
          shadow-lg
          transition


          ${
            canContinue

            ?

            "bg-gradient-to-r from-brand-600 to-orange-500 hover:shadow-xl"

            :

            "cursor-not-allowed bg-zinc-300"
          }

        `}
      >


        {
          isLastStep
          ?
          (
            <>
              Get Recommendations

              <CheckCircle2 size={18}/>
            </>
          )

          :

          (
            <>
              Continue

              <ArrowRight size={18}/>
            </>
          )
        }


      </motion.button>


    </div>
  );
}