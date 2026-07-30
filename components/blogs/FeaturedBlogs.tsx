"use client"

import { motion } from "framer-motion"
import { ArrowRight, BookOpen, Sparkles } from "lucide-react"
import BlogCard from "./BlogCard"


const featuredBlogs = [

{
title:"Best Online MBA Universities in India 2026",

category:"Online Education",

image:"/blogs/mba.webp",

description:
"Explore top online MBA universities, fees, approvals, courses and career opportunities."

},

{
title:"Top Engineering Colleges For Computer Science Students",

category:"College Guide",

image:"/blogs/cse.webp",

description:
"Complete guide to choosing the best engineering college with placements and facilities."

},

{
title:"How To Prepare For Your First Technical Interview",

category:"Career",

image:"/blogs/interview.webp",

description:
"Learn practical strategies, DSA tips and project preparation techniques."

}

]



export default function FeaturedBlogs(){


return(

<section className="
relative
py-20
overflow-hidden
">


{/* Animated background */}

<motion.div

animate={{
x:[-80,80,-80],
y:[0,40,0]
}}

transition={{
duration:10,
repeat:Infinity,
ease:"easeInOut"
}}

className="
absolute
left-0
top-20
w-96
h-96
bg-blue-400/20
blur-3xl
rounded-full
"

/>



<motion.div

animate={{
x:[80,-80,80],
y:[30,-30,30]
}}

transition={{
duration:12,
repeat:Infinity
}}

className="
absolute
right-0
bottom-10
w-96
h-96
bg-indigo-400/20
blur-3xl
rounded-full
"

/>





<div className="
relative
z-10
max-w-7xl
mx-auto
px-6
">



{/* Heading */}

<motion.div

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
duration:.6
}}

className="
flex
flex-col
md:flex-row
md:items-center
justify-between
gap-5
mb-12
"

>


<div>


<div className="
inline-flex
items-center
gap-2
bg-blue-100
text-blue-700
px-4
py-2
rounded-full
text-sm
font-medium
">

<Sparkles size={16}/>

Featured Articles

</div>



<h2 className="
mt-4
text-3xl
md:text-4xl
font-bold
text-slate-900
">

Trending Education Insights

</h2>



<p className="
mt-3
text-slate-600
max-w-xl
">

Hand-picked guides to help students choose
the right college, course and career path.

</p>


</div>




<button className="
flex
items-center
gap-2
text-blue-600
font-semibold
hover:gap-4
transition-all
">

View All Blogs

<ArrowRight size={18}/>

</button>


</motion.div>






{/* Featured cards */}

<div className="
grid
md:grid-cols-3
gap-8
">


{
featuredBlogs.map((blog,index)=>(


<motion.div

key={index}

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.5,
delay:index*.15
}}

>

<BlogCard

blog={blog}

/>


</motion.div>


))
}


</div>





{/* Bottom highlight strip */}

<motion.div

whileHover={{
scale:1.02
}}

className="
mt-12
rounded-3xl
bg-white
border
border-blue-100
shadow-[0_20px_50px_rgba(37,99,235,.08)]
p-6
flex
items-center
gap-4
"

>


<div className="
w-12
h-12
rounded-full
bg-blue-100
flex
items-center
justify-center
text-blue-600
">

<BookOpen/>

</div>


<div>

<h3 className="
font-semibold
text-slate-900
">

Want personalised college guidance?

</h3>


<p className="
text-sm
text-slate-600
">

Get expert recommendations based on your goals.

</p>


</div>



</motion.div>




</div>


</section>


)

}