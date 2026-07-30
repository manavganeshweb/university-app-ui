"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import {
  MapPin,
  Star,
  BadgeCheck,
  Download,
  GitCompare,
  GraduationCap
} from "lucide-react"

import { useState } from "react"
import LoginModal from "../auth/LoginModal"


interface Props {
 university:any
}


export default function HeroCard({university}:Props){


const [open,setOpen] = useState(false)


return(

<section className="
relative
w-full
overflow-hidden
pb-8
bg-slate-50
">





<div className="
relative
mx-auto
max-w-[1400px]
px-3
md:px-6
">


{/* Banner */}

<div
className="
relative
w-full
h-[240px]
md:h-[360px]
overflow-hidden
rounded-b-3xl
"
>
<Image
src={university.banner}

alt={university.name}

fill

priority

sizes="100vw"

className="
object-cover
object-center
"

/>



</div>




{/* Main Card */}

<div className="
relative
-mt-16
mx-2
md:mx-8
rounded-3xl
bg-white
shadow-2xl
border
border-slate-200
p-5
md:p-8
">



{/* Logo */}

<motion.div

initial={{
y:40,
opacity:0
}}

animate={{
y:0,
opacity:1
}}

className="
absolute
- top-14
top-[-55px]
left-6
md:left-10
"


>


<div className="
relative
h-24
w-24
md:h-32
md:w-32
rounded-full
bg-white
border-4
border-blue-600
shadow-xl
overflow-hidden
">


<Image

src={university.logo}

alt={university.name}

fill

className="
object-cover
"

/>


</div>


</motion.div>




<div className="
pt-12
md:pt-14
flex
flex-col
lg:flex-row
justify-between
gap-8
">



{/* Left Info */}

<div>


<div className="
flex
items-center
gap-2
">

<h1 className="
text-3xl
md:text-5xl
font-black
text-slate-900
">

{university.name}

</h1>



<div className="
flex
items-center
rounded-full
bg-green-100
px-3
py-1
text-xs
font-bold
text-green-700
">

<BadgeCheck size={15}/>

Verified

</div>


</div>





<div className="
mt-4
flex
flex-wrap
gap-4
text-slate-600
">


<span className="
flex
items-center
gap-2
">

<MapPin size={18}/>

{university.location}

</span>



<span className="
flex
items-center
gap-2
">

<GraduationCap size={18}/>

UGC Approved

</span>



<span className="
flex
items-center
gap-2
">

⭐ {university.rating}

Rating

</span>


</div>





<div className="
mt-6
flex
flex-wrap
gap-3
">


<span className="
rounded-full
bg-blue-50
px-4
py-2
text-sm
font-semibold
text-blue-700
">

NAAC Accredited

</span>



<span className="
rounded-full
bg-blue-50
px-4
py-2
text-sm
font-semibold
text-blue-700
">

Top Ranked

</span>



</div>



</div>






{/* Buttons */}

<div className="
flex
flex-col
gap-3
min-w-[260px]
">


<button

onClick={()=>setOpen(true)}

className="
rounded-full
bg-blue-600
py-4
text-white
font-bold
shadow-lg
transition
hover:bg-blue-700
hover:-translate-y-1
"

>

APPLY TO UNIVERSITY

</button>



<button

className="
flex
items-center
justify-center
gap-2
rounded-full
bg-slate-900
py-4
text-white
font-bold
hover:scale-105
transition
"

>

<Download size={18}/>

Download Brochure

</button>




<button

className="
flex
items-center
justify-center
gap-2
rounded-full
border
border-blue-600
py-4
font-bold
text-blue-600
hover:bg-blue-50
"

>


<GitCompare size={18}/>

Compare University

</button>



</div>


</div>




{/* Stats */}

<div className="
mt-8
grid
grid-cols-2
md:grid-cols-4
gap-4
">


<Stat
title="Courses"
value={`${university.courses?.length || 50}+`}
/>


<Stat
title="Students"
value="20K+"
/>


<Stat
title="Placement"
value="95%"
/>


<Stat
title="Rating"
value={university.rating}
/>



</div>



</div>



</div>



<LoginModal

open={open}

onClose={()=>setOpen(false)}

/>



</section>

)

}




function Stat({
title,
value
}:any){


return(

<motion.div

whileHover={{
y:-5
}}

className="
rounded-2xl
bg-blue-50
p-5
text-center
"


>


<h3 className="
text-2xl
font-black
text-blue-700
">

{value}

</h3>


<p className="
text-sm
text-slate-600
">

{title}

</p>


</motion.div>

)

}