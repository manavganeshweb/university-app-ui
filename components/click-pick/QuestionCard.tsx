"use client";

import { motion } from "framer-motion";
import OptionCard from "./OptionCard";
import type { ClickPickQuestion } from "../../types/click-pick";


interface QuestionCardProps {
  question: ClickPickQuestion;
  selected?: string;
  onSelect: (value: string) => void;
}


export default function QuestionCard({
  question,
  selected,
  onSelect,
}: QuestionCardProps) {


  if (!question) {
    return null;
  }


  const Icon = question.icon;


  return (
    <section
      id="questions"
      className="mx-auto mt-10 max-w-4xl"
    >

      <motion.div
        initial={{
          opacity:0,
          y:20,
        }}

        animate={{
          opacity:1,
          y:0,
        }}

        className="
          rounded-3xl
          border
          border-zinc-200
          bg-white
          p-6
          shadow-xl
          sm:p-10
        "
      >


        {/* Header */}

        <div className="mb-8 text-center">

          <div
            className="
              mx-auto mb-5
              flex h-16 w-16
              items-center justify-center
              rounded-2xl
              bg-gradient-to-br
              from-brand-600
              to-orange-500
              text-white
            "
          >

            {Icon && <Icon size={32}/>}

          </div>



          <h2 className="
            text-2xl
            font-extrabold
            text-zinc-900
            sm:text-3xl
          ">

            {question.title}

          </h2>


          <p className="
            mt-3
            text-zinc-500
          ">

            {question.description}

          </p>


        </div>




        {/* Options */}

        <div className="
          grid
          gap-4
          sm:grid-cols-2
        ">


          {
            question.options
              ?.filter(Boolean)
              .map((option,index)=>(


              <motion.div
                key={option.value}
                initial={{
                  opacity:0,
                  y:20,
                }}

                animate={{
                  opacity:1,
                  y:0,
                }}

                transition={{
                  delay:index*0.08,
                }}
              >

                <OptionCard

                  option={option}

                  selected={
                    selected === option.value
                  }

                  onSelect={onSelect}

                />


              </motion.div>


            ))
          }


        </div>



      </motion.div>


    </section>
  );
}