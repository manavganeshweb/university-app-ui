"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  MapPin,
  Clock,
  IndianRupee,
  RotateCcw,
  ArrowRight,
  Trophy,
} from "lucide-react";

import type {
  AnswerMap,
  Recommendation,
} from "../../types/click-pick";


interface ResultsProps {
  answers: AnswerMap;
  onRestart: () => void;
}


const recommendations: Recommendation[] = [
  {
    id: "1",
    university: "Lovely Professional University",
    course: "B.Tech Computer Science Engineering",
    slug: "lpu-btech-cse",
    image: "/universities/lpu.jpg",
    match: 96,
    duration: "4 Years",
    fees: "₹1,20,000/year",
    mode: "Regular",
    location: "Punjab",
    highlights: [
      "NAAC A++ Accredited",
      "Top Placement Support",
      "Industry Oriented Curriculum",
    ],
  },

  {
    id: "2",
    university: "Chandigarh University",
    course: "BCA Artificial Intelligence",
    slug: "cu-bca-ai",
    image: "/universities/chandigarh.jpg",
    match: 92,
    duration: "3 Years",
    fees: "₹95,000/year",
    mode: "Regular",
    location: "Chandigarh",
    highlights: [
      "AI Specialization",
      "Global Exposure",
      "Strong Placement Network",
    ],
  },

  {
    id: "3",
    university: "Manipal University Jaipur",
    course: "Online MCA",
    slug: "muj-online-mca",
    image: "/universities/manipal.jpg",
    match: 89,
    duration: "2 Years",
    fees: "₹80,000/year",
    mode: "Online",
    location: "Jaipur",
    highlights: [
      "Flexible Learning",
      "UGC Approved",
      "Career Assistance",
    ],
  },
];



export default function Results({
  answers,
  onRestart,
}: ResultsProps) {


  console.log("User preferences:", answers);


  return (
    <section className="mx-auto max-w-6xl py-10">


      {/* Header */}

      <motion.div
        initial={{
          opacity:0,
          y:30,
        }}

        animate={{
          opacity:1,
          y:0,
        }}

        className="
          rounded-3xl
          bg-gradient-to-r
          from-brand-600
          to-orange-500
          p-8
          text-white
          shadow-xl
        "
      >

        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">


          <div>

            <div className="
              mb-3
              flex
              items-center
              gap-2
              text-sm
              font-semibold
            ">

              <Trophy size={18}/>

              AI Recommendation Complete

            </div>


            <h1 className="
              text-3xl
              font-extrabold
              sm:text-4xl
            ">

              We found your perfect matches 🎓

            </h1>


            <p className="mt-3 text-white/80">

              Based on your interests, budget and career goals.

            </p>

          </div>



          <div
            className="
              flex
              h-28
              w-28
              flex-col
              items-center
              justify-center
              rounded-full
              bg-white
              text-brand-600
              shadow-lg
            "
          >

            <span className="text-3xl font-black">
              96%
            </span>

            <span className="text-xs font-bold">
              Match
            </span>


          </div>


        </div>


      </motion.div>





      {/* Recommendation Cards */}


      <div className="
        mt-10
        grid
        gap-6
        lg:grid-cols-3
      ">


        {
          recommendations.map((item,index)=>(


            <motion.div

              key={item.id}

              initial={{
                opacity:0,
                y:30,
              }}

              animate={{
                opacity:1,
                y:0,
              }}

              transition={{
                delay:index*0.15,
              }}

              className="
                overflow-hidden
                rounded-3xl
                border
                border-zinc-200
                bg-white
                shadow-lg
              "
            >


              {/* Image */}

              <div
                className="
                  h-40
                  bg-gradient-to-br
                  from-brand-100
                  to-orange-100
                "
              />



              <div className="p-5">


                <div className="
                  mb-3
                  inline-flex
                  items-center
                  gap-1
                  rounded-full
                  bg-green-100
                  px-3
                  py-1
                  text-sm
                  font-bold
                  text-green-700
                ">

                  <CheckCircle2 size={15}/>

                  {item.match}% Match

                </div>



                <h2 className="
                  text-lg
                  font-extrabold
                  text-zinc-900
                ">

                  {item.university}

                </h2>


                <p className="
                  mt-1
                  text-sm
                  font-medium
                  text-zinc-600
                ">

                  {item.course}

                </p>




                <div className="
                  mt-5
                  space-y-2
                  text-sm
                  text-zinc-600
                ">


                  <p className="flex items-center gap-2">

                    <Clock size={16}/>

                    {item.duration}

                  </p>


                  <p className="flex items-center gap-2">

                    <IndianRupee size={16}/>

                    {item.fees}

                  </p>


                  <p className="flex items-center gap-2">

                    <MapPin size={16}/>

                    {item.location}

                  </p>


                </div>




                <div className="mt-5 space-y-2">


                  {
                    item.highlights.map((h)=>(
                      <div
                        key={h}
                        className="
                          flex
                          items-center
                          gap-2
                          text-xs
                          text-zinc-600
                        "
                      >

                        <CheckCircle2
                          size={14}
                          className="text-green-600"
                        />

                        {h}

                      </div>
                    ))
                  }


                </div>





                <div className="
                  mt-6
                  flex
                  gap-3
                ">


                  <button
                    className="
                      flex-1
                      rounded-xl
                      border
                      border-zinc-300
                      py-3
                      text-sm
                      font-bold
                      hover:bg-zinc-100
                    "
                  >

                    Compare

                  </button>



                  <button
                    className="
                      flex-1
                      rounded-xl
                      bg-gradient-to-r
                      from-brand-600
                      to-orange-500
                      py-3
                      text-sm
                      font-bold
                      text-white
                    "
                  >

                    Apply

                  </button>


                </div>



              </div>


            </motion.div>


          ))
        }


      </div>





      {/* Restart */}

      <div className="
        mt-10
        flex
        justify-center
      ">

        <button

          onClick={onRestart}

          className="
            flex
            items-center
            gap-2
            rounded-xl
            border
            px-6
            py-3
            font-bold
            text-zinc-700
            hover:bg-zinc-100
          "

        >

          <RotateCcw size={18}/>

          Start Again

        </button>


      </div>



    </section>
  );
}