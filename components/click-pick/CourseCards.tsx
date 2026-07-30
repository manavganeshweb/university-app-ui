"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Clock,
  ArrowRight,
  IndianRupee,
} from "lucide-react";

import { courses } from "../../lib/courses";


export default function CourseCard() {


return (

<section className="mt-20">


<div className="mb-10 text-center">

<motion.h2

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
text-4xl
font-black
text-zinc-900
"

>

Popular Courses

</motion.h2>


<p className="
mt-3
text-zinc-500
">

Explore programs based on your career goals

</p>


</div>





<div className="
grid
gap-6
md:grid-cols-3
">


{
courses.map((course,index)=>(


<motion.article

key={course.slug}


initial={{
opacity:0,
y:40
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
delay:index*0.12
}}


whileHover={{
y:-8
}}


className="
group
rounded-3xl
border
border-zinc-200
bg-white
p-6
shadow-sm
transition
hover:shadow-2xl
"


>





{/* Category */}

<span className="
inline-flex
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
mt-5
text-xl
font-extrabold
text-zinc-900
group-hover:text-blue-600
transition
">

{course.title}

</h3>





<p className="
mt-3
line-clamp-3
text-sm
leading-6
text-zinc-500
">

{course.description}

</p>






<div className="
mt-6
space-y-3
text-sm
text-zinc-600
">


<div className="
flex
items-center
gap-2
">

<Clock size={16}/>

<span>
{course.duration}
</span>

</div>



<div className="
flex
items-center
gap-2
">

<IndianRupee size={16}/>

<span>
{course.fees}
</span>

</div>



</div>






<Link

href={`/course/${course.slug}`}

className="
mt-7
flex
items-center
justify-center
gap-2
rounded-xl
bg-blue-600
py-3
font-bold
text-white
transition
hover:bg-blue-700
"

>

Explore Course

<ArrowRight
size={17}
className="
transition
group-hover:translate-x-1
"
/>


</Link>





</motion.article>


))

}



</div>



</section>

)

}