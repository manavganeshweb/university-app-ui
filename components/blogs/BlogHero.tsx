"use client"

import {motion} from "framer-motion"
import {Search, Sparkles} from "lucide-react"


export default function BlogHero(){

return(

<section className="
relative
overflow-hidden
py-24
px-6
">


<motion.div

animate={{
x:[-50,50,-50],
y:[0,30,0]
}}

transition={{
duration:8,
repeat:Infinity
}}

className="
absolute
top-20
left-10
w-72
h-72
bg-blue-400/20
blur-3xl
rounded-full
"

/>



<motion.div

animate={{
x:[50,-40,50],
}}

transition={{
duration:10,
repeat:Infinity
}}

className="
absolute
right-10
bottom-10
w-96
h-96
bg-indigo-400/20
blur-3xl
rounded-full
"

/>



<div className="
max-w-5xl
mx-auto
text-center
relative
z-10
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
duration:.6
}}

>


<div className="
inline-flex
items-center
gap-2
px-5
py-2
rounded-full
bg-blue-100
text-blue-700
font-medium
">

<Sparkles size={18}/>

Education Insights

</div>



<h1 className="
mt-6
text-4xl
md:text-6xl
font-bold
text-slate-900
">

Learn.
Grow.
Choose Your
<span className="
text-blue-600
">
 Future.
</span>

</h1>



<p className="
mt-5
text-slate-600
max-w-2xl
mx-auto
text-lg
">

Explore university guides, career advice,
online degree updates and student success stories.

</p>



<div className="
mt-8
flex
max-w-xl
mx-auto
bg-white
rounded-full
shadow-lg
border
p-2
">


<input

placeholder="Search blogs..."

className="
flex-1
px-5
outline-none
"

/>


<button className="
rounded-full
bg-blue-600
text-white
px-6
py-3
flex
items-center
gap-2
">

<Search size={18}/>

Search

</button>


</div>


</motion.div>


</div>


</section>

)

}