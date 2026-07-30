"use client"

import {motion} from "framer-motion"
import {
GraduationCap,
Search,
Sparkles
} from "lucide-react"



export default function AboutHero(){


return(

<section className="
relative
overflow-hidden
bg-gradient-to-br
from-blue-700
via-blue-600
to-cyan-500
py-24
text-white
">


{/* floating circles */}


<motion.div

animate={{
x:[0,80,0],
y:[0,-50,0]
}}

transition={{
duration:10,
repeat:Infinity
}}

className="
absolute
right-[-100px]
top-10
h-80
w-80
rounded-full
bg-white/20
blur-3xl
"

/>



<motion.div

animate={{
x:[0,-70,0],
y:[0,40,0]
}}

transition={{
duration:12,
repeat:Infinity
}}

className="
absolute
bottom-0
left-[-80px]
h-72
w-72
rounded-full
bg-cyan-300/30
blur-3xl
"

/>



<div className="
relative
mx-auto
max-w-7xl
px-5
text-center
">


<motion.div

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.7
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

About EdPath

</div>



<h1 className="
mt-8
text-4xl
font-black
sm:text-5xl
md:text-7xl
">

Helping Students
<br/>

Find The Right
<span className="text-cyan-200">
 Career Path
</span>

</h1>



<p className="
mx-auto
mt-6
max-w-3xl
text-lg
text-white/80
">

EdPath helps students discover universities,
compare courses and make better education decisions
with technology and expert guidance.

</p>




<div className="
mt-10
flex
flex-col
justify-center
gap-4
sm:flex-row
">


<button className="
flex
items-center
justify-center
gap-2
rounded-full
bg-white
px-8
py-4
font-bold
text-blue-700
shadow-xl
transition
hover:scale-105
">

<GraduationCap/>

Explore Universities

</button>



<button className="
flex
items-center
justify-center
gap-2
rounded-full
border
border-white/40
px-8
py-4
font-bold
transition
hover:bg-white
hover:text-blue-700
">

<Search/>

Find Course

</button>


</div>


</motion.div>


</div>


</section>


)

}