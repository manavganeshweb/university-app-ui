"use client"

import { motion } from "framer-motion"
import Link from "next/link"


export default function BlogCard({
blog
}:{
blog:any
}){


return(

<Link
href={`/blog/${blog.slug}`}
className="block"
>


<motion.article

whileHover={{
y:-10,
scale:1.02
}}

transition={{
duration:.3
}}

className="
bg-white
rounded-3xl
overflow-hidden
border
border-blue-100
shadow-[0_20px_50px_rgba(37,99,235,.08)]
cursor-pointer
"

>


<div className="
h-52
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
transition
duration-500
hover:scale-110
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



<h2 className="
mt-3
text-xl
line-clamp-1
font-bold
text-slate-900
">

{blog.title}

</h2>



<p className="
mt-3
text-slate-600
line-clamp-2
">

{blog.description}

</p>



<div className="
mt-5
text-blue-600
font-semibold
flex
items-center
gap-2
">

Read More 

<span>
→
</span>

</div>


</div>


</motion.article>


</Link>

)

}