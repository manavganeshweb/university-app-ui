"use client";

import Link from "next/link";
import {motion} from "framer-motion";
import {
ArrowRight
} from "lucide-react";


export default function CourseResultCard({
course
}:{
course:any
}){


return (

<motion.div

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}

whileHover={{
y:-8
}}

className="
rounded-3xl
border
bg-white
p-6
shadow-sm
hover:shadow-xl
transition
"

>


<div className="
rounded-full
bg-blue-100
px-3
py-1
inline-block
text-xs
font-bold
text-blue-600
">

Recommended Course

</div>



<h2 className="
mt-5
text-2xl
font-black
">

{course.title}

</h2>


<p className="
mt-3
text-zinc-500
">

{course.description}

</p>



<Link

href={`/course/${course.slug}`}

className="
mt-6
flex
items-center
justify-center
gap-2
rounded-xl
bg-blue-600
py-3
font-bold
text-white
"

>

View Colleges

<ArrowRight size={17}/>


</Link>



</motion.div>

)

}