"use client"

import { motion } from "framer-motion"
import SectionWrapper from "./SectionWrapper"

export default function CourseCard({course}:any){

return(
    <SectionWrapper
  id="courses"
  title="Popular Courses"
  subtitle="Choose from the most in-demand programmes."
>

<motion.div

whileHover={{

y:-8,

scale:1.03

}}

className="rounded-3xl border bg-white p-6 shadow-lg"

>

<h3 className="text-xl font-bold">

{course.name}

</h3>

<p>{course.duration}</p>

<p>{course.mode}</p>

<p className="font-semibold text-red-600">

{course.fees}

</p>

<button className="mt-5 rounded-full bg-red-600 px-6 py-3 text-white">

Apply

</button>

</motion.div>
</SectionWrapper>

)

}