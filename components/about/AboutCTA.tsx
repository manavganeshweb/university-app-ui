"use client"

import {motion} from "framer-motion"
import Link from "next/link"
import {
ArrowRight,
Sparkles
} from "lucide-react"



export default function AboutCTA(){


return(

<section className="
relative
overflow-hidden
py-24
"
>


{/* Background */}

<div className="
absolute
inset-0
bg-gradient-to-r
from-blue-700
via-blue-600
to-cyan-500
"/>



<motion.div

animate={{
x:[0,100,0],
y:[0,-40,0]
}}

transition={{
duration:10,
repeat:Infinity
}}

className="
absolute
right-10
top-10
h-72
w-72
rounded-full
bg-white/20
blur-3xl
"

/>



<motion.div

animate={{
x:[0,-80,0]
}}

transition={{
duration:12,
repeat:Infinity
}}

className="
absolute
bottom-0
left-0
h-80
w-80
rounded-full
bg-cyan-300/20
blur-3xl
"

/>





<div className="
relative
mx-auto
max-w-5xl
px-5
text-center
text-white
">


<motion.div

initial={{
opacity:0,
scale:.8
}}

whileInView={{
opacity:1,
scale:1
}}

viewport={{
once:true
}}

>


<div className="
mx-auto
flex
w-fit
items-center
gap-2
rounded-full
bg-white/20
px-5
py-2
backdrop-blur
">


<Sparkles size={18}/>

Start Your Journey

</div>





<h2 className="
mt-8
text-4xl
font-black
sm:text-5xl
md:text-6xl
">

Find The Right University
<br/>

For Your Future

</h2>




<p className="
mx-auto
mt-6
max-w-2xl
text-lg
text-white/80
">

Explore universities, compare courses,
check fees and get expert admission guidance
with EdPath.

</p>





<div className="
mt-10
flex
flex-col
justify-center
gap-4
sm:flex-row
">


<Link

href="/universities"

className="
group
flex
items-center
justify-center
gap-3
rounded-full
bg-white
px-8
py-4
font-bold
text-blue-700
transition
hover:scale-105
"

>

Explore Universities


<ArrowRight

className="
transition
group-hover:translate-x-2
"

/>


</Link>




<Link

href="/contact"

className="
rounded-full
border
border-white/40
px-8
py-4
font-bold
transition
hover:bg-white
hover:text-blue-700
"

>

Talk To Expert

</Link>



</div>



</motion.div>


</div>


</section>


)

}