"use client"

import { motion } from "framer-motion"
import {
  CheckCircle2,
  FileText,
  CalendarDays,
  ClipboardCheck,
  Upload,
  CreditCard,
  GraduationCap,
} from "lucide-react"

import SectionWrapper from "./SectionWrapper"
import ApplyButton from "./ApplyButton"


interface Props {
  university?: any
  id?: string
}


const steps = [
  {
    title: "Check Eligibility",
    description:
      "Verify your academic eligibility and select your preferred programme.",
    icon: GraduationCap,
  },
  {
    title: "Fill Application Form",
    description:
      "Complete the online application form with accurate personal and academic details.",
    icon: FileText,
  },
  {
    title: "Upload Documents",
    description:
      "Submit required documents including marksheets, ID proof and photographs.",
    icon: Upload,
  },
  {
    title: "Pay Application Fee",
    description:
      "Complete the application process by paying the required admission fee.",
    icon: CreditCard,
  },
  {
    title: "Admission Confirmation",
    description:
      "Receive confirmation and start your academic journey.",
    icon: ClipboardCheck,
  },
]


export default function AdmissionTimeline({
  university,
  id = "admission",
}: Props) {


  return (

    <SectionWrapper

      id={id}

      title="Admission Process"

      subtitle="Follow these simple steps to secure your admission."

    >


      <div className="space-y-10">


        {/* Important Dates */}


        <motion.div

          initial={{
            opacity:0,
            y:20
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          className="
          rounded-3xl
          border
          bg-gradient-to-r
          from-blue-50
          to-cyan-50
          p-6
          "

        >

          <div className="
          flex
          items-center
          gap-3
          "

          >

            <CalendarDays
              className="text-blue-600"
            />

            <h3 className="
            text-xl
            font-bold
            text-slate-900
            "
            >
              Important Admission Dates
            </h3>

          </div>


          <div className="
          mt-6
          grid
          gap-4
          sm:grid-cols-3
          ">


            <DateCard
              title="Application Start"
              value="January 2026"
            />


            <DateCard
              title="Last Date"
              value="August 2026"
            />


            <DateCard
              title="Classes Begin"
              value="September 2026"
            />


          </div>


        </motion.div>





        {/* Timeline */}



        <div className="
        relative
        ">


          {/* Vertical line */}


          <div className="
          absolute
          left-6
          top-5
          h-[calc(100%-40px)]
          w-[2px]
          bg-blue-100
          md:left-8
          "
          />


          <div className="
          space-y-8
          "
          >


          {
            steps.map(
              (step,index)=>{


              const Icon = step.icon


              return (

                <motion.div

                  key={step.title}


                  initial={{
                    opacity:0,
                    x:-30
                  }}

                  whileInView={{
                    opacity:1,
                    x:0
                  }}

                  viewport={{
                    once:true
                  }}

                  transition={{
                    delay:index*.12
                  }}

                  className="
                  relative
                  flex
                  gap-6
                  "
                >


                  {/* Number */}


                  <div className="
                  relative
                  z-10
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-blue-600
                  text-white
                  shadow-lg
                  md:h-16
                  md:w-16
                  ">


                    <Icon size={24}/>


                  </div>





                  <div className="
                  flex-1
                  rounded-3xl
                  border
                  bg-white
                  p-6
                  shadow-sm
                  transition
                  hover:-translate-y-1
                  hover:shadow-xl
                  "
                  >


                    <div className="
                    flex
                    items-center
                    justify-between
                    "
                    >


                      <h3 className="
                      text-lg
                      font-bold
                      text-slate-900
                      md:text-xl
                      "
                      >

                        {index+1}. {step.title}

                      </h3>



                      <CheckCircle2

                        size={22}

                        className="
                        text-green-500
                        "

                      />


                    </div>



                    <p className="
                    mt-3
                    text-slate-600
                    leading-7
                    "
                    >

                      {step.description}

                    </p>


                  </div>



                </motion.div>

              )

            })

          }


          </div>


        </div>






        {/* Eligibility */}



        <motion.div

          whileHover={{
            scale:1.01
          }}

          className="
          rounded-3xl
          bg-slate-900
          p-8
          text-white
          "

        >

          <h3 className="
          text-2xl
          font-bold
          "
          >

            Eligibility Requirements

          </h3>


          <ul className="
          mt-5
          space-y-3
          text-white/80
          "
          >

            <li>
              ✓ 10+2 qualification from recognised board
            </li>

            <li>
              ✓ Required subject combination for selected course
            </li>

            <li>
              ✓ Valid identity and academic documents
            </li>

          </ul>


          <div className="mt-8">

            <ApplyButton
              text="Apply For Admission"
            />

          </div>


        </motion.div>


      </div>


    </SectionWrapper>

  )

}





function DateCard({

title,
value

}:any){

return (

<div className="
rounded-2xl
bg-white
p-5
shadow-sm
border
">


<p className="
text-sm
text-slate-500
">

{title}

</p>


<h4 className="
mt-2
font-bold
text-blue-600
">

{value}

</h4>


</div>

)

}