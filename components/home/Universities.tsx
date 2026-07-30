"use client"

import Link from "next/link"
import Image from "next/image"
import { universities } from "../../lib/universities"
import { motion } from "framer-motion"


export function Universities(){

return(

<section id="Universities" className="py-16 sm:py-20 overflow-hidden">
<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

<h2 className="text-4xl font-bold">
Top Universities
</h2>


<div
  className="
    mt-10
    grid
    grid-cols-1
    gap-6
    sm:grid-cols-2
    lg:grid-cols-3
  "
>

{
universities.map((university)=>(


<Link
key={university.id}
href={`/university/${university.slug}`}
>


<motion.div

whileHover={{
y:-12,
scale:1.03
}}

transition={{
duration:.25
}}

className="
group
overflow-hidden
rounded-3xl
bg-white
shadow-xl
border
cursor-pointer
"

>


<div className="overflow-hidden">

<Image

src={university.banner}

width={600}

height={300}

alt={university.name}

className="
h-48
w-full
object-cover
transition
duration-500
group-hover:scale-110
"

/>

</div>



<div className="p-6">


<div className="flex items-center gap-4">


<Image

src={university.logo}

width={70}

height={70}

alt={university.name}

className="
h-16
w-16
rounded-full
border
object-cover
"

/>


<div>

<h3 className="text-xl font-bold">

{university.name}

</h3>


<p className="text-gray-500">

{university.location}

</p>


</div>


</div>



<div className="mt-6 flex justify-between items-center">


<span className="rounded-full bg-yellow-100 px-3 py-1">

⭐ {university.rating}

</span>


<span className="
font-semibold
text-red-600
group-hover:translate-x-2
transition
">

View Details →

</span>


</div>


</div>


</motion.div>


</Link>


))

}


</div>


</div>

</section>

)

}