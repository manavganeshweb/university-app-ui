"use client";


import {useEffect,useState} from "react";
import {AnimatePresence,motion} from "framer-motion";

import UniversityLogoCard from "./UniversityLogoCard";

import {universityLogos} from "../../lib/universityLogos";



function shuffle(array:any[]){

return [...array]
.sort(()=>Math.random()-0.5)

}



export default function UniversityCloud(){


const [items,setItems]=useState(universityLogos);



useEffect(()=>{


const timer=setInterval(()=>{


setItems(prev=>shuffle(prev))


},3500)



return()=>clearInterval(timer)


},[])



return (


<section


className="

relative

overflow-hidden

bg-white

py-20

"


>


{/* TOP HEADING */}

<div

className="

relative

z-[100]

text-center

mb-12

"


>


<div

className="

inline-flex

rounded-full

bg-[#EC1E24]

px-5

py-2

text-white

text-sm

font-semibold

"

>

TOP ONLINE UNIVERSITIES

</div>



<h2


className="

mt-5

text-4xl

font-medium

text-[#282529]

"


>


Compare & Choose from the Best


<br/>


<span

className="

text-[#EC1E24]

font-semibold

"

>

Verified Online Universities!

</span>


</h2>


</div>






{/* MAIN AREA */}

<div


className="

relative

mx-auto

max-w-[1400px]

px-5

"

>



{/* RED GLOW LAYER */}

<div


className="

absolute

z-[40]


pointer-events-none


top-[-140px]

bottom-[-80px]

left-[-120px]

right-[-120px]


bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_35%,rgba(236,30,36,0.08)_50%,rgba(236,30,36,0.25)_75%,rgba(236,30,36,0.55)_100%)]


"

></div>





{/* LOGO GRID */}


<AnimatePresence mode="popLayout">


<motion.div


layout


className="

relative

z-[30]


grid


grid-cols-2

sm:grid-cols-3

md:grid-cols-4

lg:grid-cols-8

xl:grid-cols-10


gap-3


auto-rows-[105px]

"


>


{

items.map(item=>(


<UniversityLogoCard


key={item.id}


image={item.image}


name={item.name}


slug={item.slug}


large={item.large}


/>


))


}



</motion.div>


</AnimatePresence>




</div>



</section>


)

}