"use client"

import { motion } from "framer-motion"
import { ArrowRight, BookOpen, Sparkles } from "lucide-react"
import Link from "next/link"


const blogs = [

{
    slug:"top-online-universities-india-2026",

title:"Top Online Universities in India 2026",
category:"Admissions",
image:"/blogs/university.webp",
description:
"Find the best online universities with courses, fees and placement details."
},

{
    slug:"choose-right-career-path",
title:"How To Choose The Right Career Path",
category:"Career",
image:"/blogs/career.webp",
description:
"Complete guide to selecting the right career after graduation."
},

{
    slug:"resume-tips-for-freshers",
title:"Best Resume Tips For Freshers",
category:"Placement",
image:"/blogs/resume.webp",
description:
"Create an impressive resume that attracts recruiters."
},

{
    slug:"online-mba-complete-guide",
title:"Complete Guide To Online MBA",
category:"Online Degree",
image:"/blogs/mba.webp",
description:
"Everything you need to know before starting an online MBA."
}
]



export function BlogSection(){


return(

<section className="
relative
overflow-hidden
py-20
bg-gradient-to-b
from-blue-50
via-white
to-white
">


{/* Moving background */}

<motion.div

animate={{
x:[-100,100,-100],
y:[0,50,0]
}}

transition={{
duration:12,
repeat:Infinity
}}

className="
absolute
top-20
left-0
w-96
h-96
bg-blue-400/20
blur-3xl
rounded-full
"

/>



<motion.div

animate={{
x:[100,-100,100],
y:[40,-20,40]
}}

transition={{
duration:15,
repeat:Infinity
}}

className="
absolute
right-0
bottom-0
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


{/* Header */}

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

className="
flex
flex-col
md:flex-row
justify-between
items-start
md:items-center
gap-5
mb-10
"

>


<div>


<div className="
inline-flex
items-center
gap-2
rounded-full
bg-blue-100
text-blue-700
px-4
py-2
text-sm
font-medium
">

<Sparkles size={16}/>

Latest Education Blogs

</div>



<h2 className="
mt-4
text-3xl
md:text-4xl
font-bold
text-slate-900
">

Explore Knowledge & Career Guides

</h2>



<p className="
mt-3
text-slate-600
max-w-xl
">

Stay updated with college news,
admission guides and career tips.

</p>


</div>




<Link

href="/blog"

className="
flex
items-center
gap-2
text-blue-600
font-semibold
hover:gap-4
transition-all
"

>

View All Blogs

<ArrowRight size={18}/>

</Link>


</motion.div>





{/* Moving Cards */}

<div className="
overflow-hidden
relative
">


<motion.div

className="
flex
gap-6
w-max
"

animate={{
x:"-50%"
}}

transition={{
duration:30,
repeat:Infinity,
ease:"linear"
}}

style={{
width:"max-content"
}}

>

{[...blogs,...blogs].map((blog,index)=>(
<Link
href={`/blog/${blog.slug}`}
key={index}
className="
block
flex-none
w-[300px]
md:w-[350px]
"
>

<motion.div

whileHover={{
y:-10,
scale:1.03
}}

transition={{
duration:0.3
}}

className="
w-full
min-w-0
bg-white
rounded-3xl
border
border-blue-100
shadow-[0_20_50px_rgba(37,99,235,.08)]
overflow-hidden
cursor-pointer
"

>



<div className="
h-48
w-full
bg-blue-100
overflow-hidden
">


<img
src={blog.image}
alt={blog.title}
className="
w-full
h-full
object-cover
hover:scale-110
transition
duration-500
"
/>

</div>



<div className="
p-6
">


<span className="
text-sm
text-blue-600
font-semibold
">

{blog.category}

</span>



<h3 className="
mt-3
font-bold
text-lg
text-slate-900
line-clamp-1
break-words
">

{blog.title}

</h3>



<p className="
mt-3
text-sm
text-slate-600
">

{blog.description}

</p>



<button className="
mt-5
flex
items-center
gap-2
text-blue-600
font-semibold
">

Read More

<ArrowRight size={16}/>

</button>


</div>


</motion.div>

</Link>

))

}


</motion.div>


</div>





{/* Bottom CTA */}

<motion.div

whileHover={{
scale:1.02
}}

className="
mt-14
rounded-3xl
bg-gradient-to-r
from-blue-600
to-indigo-600
p-8
text-white
flex
flex-col
md:flex-row
items-center
justify-between
gap-5
"


>


<div className="
flex
items-center
gap-4
">


<div className="
w-14
h-14
rounded-full
bg-white/20
flex
items-center
justify-center
">

<BookOpen/>

</div>


<div>

<h3 className="
text-xl
font-bold
">

Need college guidance?

</h3>

<p className="
text-blue-100
">

Read expert guides before choosing your future.

</p>


</div>


</div>



<Link

href="/blog"

className="
bg-white
text-blue-600
px-6
py-3
rounded-full
font-semibold
"

>

Explore Blogs

</Link>



</motion.div>



</div>


</section>

)

}