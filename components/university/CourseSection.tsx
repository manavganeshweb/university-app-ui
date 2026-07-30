"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Clock,
  IndianRupee,
  GraduationCap,
  Search,
  CheckCircle2,
  Scale,
} from "lucide-react"

import SectionWrapper from "./SectionWrapper"
import ApplyButton from "./ApplyButton"


interface Props {
  university: any
  id?: string
}


export default function CourseSection({
  university,
  id = "courses",
}: Props) {


  const [search, setSearch] = useState("")


  const courses = university.courses || []


  const filteredCourses =
    courses.filter((course:any)=>
      course.name
      .toLowerCase()
      .includes(search.toLowerCase())
    )


  return (

    <SectionWrapper

      id={id}

      title="Popular Courses"

      subtitle="Explore top programmes offered by this university."

    >


      <div className="space-y-8">


        {/* Search */}


        <div className="
        relative
        max-w-xl
        ">

          <Search

            size={20}

            className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-slate-400
            "

          />


          <input

            value={search}

            onChange={(e)=>setSearch(e.target.value)}

            placeholder="Search courses..."

            className="
            w-full
            rounded-2xl
            border
            bg-slate-50
            py-4
            pl-12
            pr-5
            outline-none
            transition
            focus:border-blue-500
            focus:bg-white
            "

          />


        </div>



        {/* Courses */}


        <div className="
        grid
        gap-6
        md:grid-cols-2
        ">


        {
          filteredCourses.map(
            (course:any,index:number)=>(


            <motion.div

              key={course.id || index}


              initial={{
                opacity:0,
                y:30
              }}


              whileInView={{
                opacity:1,
                y:0
              }}


              viewport={{
                once:true
              }}


              transition={{
                duration:.4,
                delay:index*.08
              }}


              whileHover={{
                y:-8
              }}


              className="
              group
              rounded-3xl
              border
              bg-white
              p-6
              shadow-sm
              transition
              hover:border-blue-200
              hover:shadow-xl
              "


            >



              {/* Title */}


              <div className="
              flex
              items-start
              justify-between
              gap-4
              ">


                <div>


                  <h3 className="
                  text-xl
                  font-bold
                  text-slate-900
                  ">

                    {course.name}

                  </h3>



                  <p className="
                  mt-2
                  text-sm
                  text-slate-500
                  ">

                    {course.level || "Undergraduate Programme"}

                  </p>


                </div>



                <div className="
                rounded-full
                bg-blue-50
                p-3
                text-blue-600
                ">

                  <GraduationCap/>

                </div>


              </div>




              {/* Details */}


              <div className="
              mt-6
              grid
              grid-cols-2
              gap-4
              ">


                <Detail

                  icon={<Clock size={18}/>}

                  label="Duration"

                  value={
                    course.duration ||
                    "3 Years"
                  }

                />


                <Detail

                  icon={<IndianRupee size={18}/>}

                  label="Fees"

                  value={
                    course.fees ||
                    "Contact University"
                  }

                />


              </div>




              {/* Eligibility */}


              <div className="
              mt-6
              rounded-2xl
              bg-slate-50
              p-4
              ">


                <div className="
                flex
                items-center
                gap-2
                text-sm
                font-semibold
                ">


                  <CheckCircle2

                    size={18}

                    className="text-green-600"

                  />


                  Eligibility


                </div>


                <p className="
                mt-2
                text-sm
                text-slate-600
                ">


                  {course.eligibility ||
                  "12th pass with required qualification"}


                </p>


              </div>




              {/* Actions */}


              <div className="
              mt-6
              flex
              flex-wrap
              gap-3
              ">


                <ApplyButton

                  text="Apply Now"

                />



                <button

                  className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  px-5
                  py-3
                  font-semibold
                  text-slate-700
                  transition
                  hover:border-blue-500
                  hover:text-blue-600
                  "

                >

                  <Scale size={18}/>

                  Compare


                </button>


              </div>



            </motion.div>


          ))

        }


        </div>


      </div>


    </SectionWrapper>


  )

}





function Detail({

icon,

label,

value

}:any){


return (

<div className="
rounded-2xl
bg-blue-50
p-4
">


<div className="
flex
items-center
gap-2
text-blue-600
">

{icon}

<span className="
text-xs
font-semibold
">

{label}

</span>


</div>



<p className="
mt-2
font-bold
text-slate-800
">

{value}

</p>


</div>

)

}