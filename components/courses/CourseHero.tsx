"use client";


import {motion} from "framer-motion";


export default function CourseHero({
course
}:any){


return (

<section
className="
bg-gradient-to-r
from-blue-700
to-cyan-500
py-20
text-white
"
>


<div className="
container-page
text-center
">


<motion.h1

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.5
}}

className="
text-5xl
font-black
"

>

{course.title}

</motion.h1>



<motion.p

initial={{
opacity:0
}}

animate={{
opacity:1
}}

transition={{
delay:.2
}}

className="
mt-5
max-w-2xl
mx-auto
text-white/80
"

>

{course.description}

</motion.p>



</div>


</section>

)

}