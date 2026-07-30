"use client";

import { motion } from "framer-motion";
import { Clock, IndianRupee } from "lucide-react";

import { courses } from "../../lib/courses";
import CompareButton from "./CompareButton";


export default function CourseList(){


return (

<div className="
flex-1
w-full
">


<div className="mb-8">

<h2 className="
text-3xl
font-black
text-zinc-900
">

Explore Courses

</h2>


<p className="
mt-2
text-zinc-500
">

Choose the right program for your career

</p>


</div>





<div className="
grid
gap-6
sm:grid-cols-2
">


{
courses.map((course,index)=>(


<motion.div

key={course.slug}


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
delay:index*0.1
}}


className="
rounded-3xl
border
border-zinc-200
bg-white
p-6
shadow-sm
hover:shadow-xl
transition
"


>



<span className="
rounded-full
bg-blue-100
px-3
py-1
text-xs
font-bold
text-blue-700
">

{course.category}

</span>



<h3 className="
mt-4
text-xl
font-black
">

{course.title}

</h3>




<p className="
mt-3
text-sm
leading-6
text-zinc-500
">

{course.description}

</p>





<div className="
mt-5
space-y-2
text-sm
text-zinc-600
">


<p className="
flex
items-center
gap-2
">

<Clock size={16}/>

{course.duration}

</p>



<p className="
flex
items-center
gap-2
">

<IndianRupee size={16}/>

{course.fees}

</p>


</div>




<CompareButton

course={{
...course,
type:"course"
}}

/>


</motion.div>


))

}



</div>


</div>

)

}