"use client";

import { useState } from "react";
import { ChevronRight, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


const programs = [
  {
    title:"PG Courses",
    subtitle:"After Graduation",
    courses:[
      "Online MBA",
      "Online MCA",
      "M.Tech",
      "Executive MBA"
    ]
  },

  {
    title:"UG Courses",
    subtitle:"After 12th",
    courses:[
      "BBA",
      "BCA",
      "B.Tech",
      "BA"
    ]
  },

  {
    title:"Diploma",
    subtitle:"Professional",
    courses:[
      "Digital Marketing",
      "Data Analytics",
      "Web Development"
    ]
  },


  {
    title:"Certificate",
    subtitle:"Short Term",
    courses:[
      "AI Certification",
      "Cloud Computing",
      "Cyber Security"
    ]
  },


  {
    title:"Executive Programs",
    subtitle:"Working Professionals",
    courses:[
      "Leadership",
      "Management",
      "Business Analytics"
    ]
  },


  {
    title:"Doctorate",
    subtitle:"PhD Programs",
    courses:[
      "PhD Management",
      "PhD Computer Science"
    ]
  }

];



export default function ProgramSidebar(){


const [active,setActive]=useState(0);



return (

<aside className="
w-full
md:w-[280px]
h-fit
rounded-2xl
bg-white
border
border-zinc-200
p-4
shadow-sm
">


{/* Heading */}

<div className="
flex
items-center
justify-between
mb-5
">


<h2 className="
text-lg
font-extrabold
text-brand-600
">

Explore By Program

</h2>


<ChevronRight
size={20}
className="
text-brand-600
md:hidden
"
/>


</div>





{/* Program list */}


<div className="
space-y-3
rounded-xl
md:border
md:border-brand-200
md:p-4
">


{
programs.map((program,index)=>(


<div

key={program.title}

onClick={()=>setActive(index)}

className={`
cursor-pointer
border-l-2
pl-4
py-2
transition-all


${
active===index

?

"border-brand-600 text-brand-600"

:

"border-zinc-200 text-zinc-700 hover:border-brand-400"

}

`}

>


<h3 className="
font-bold
text-[15px]
">

{program.title}

</h3>


<p className="
text-xs
text-zinc-400
mt-1
">

{program.subtitle}

</p>




<AnimatePresence>


{
active===index && (

<motion.div

initial={{
height:0,
opacity:0
}}

animate={{
height:"auto",
opacity:1
}}

exit={{
height:0,
opacity:0
}}

className="
overflow-hidden
mt-3
"

>


<div className="
space-y-2
">


{
program.courses.map(course=>(

<button

key={course}

className="
block
w-full
rounded-lg
bg-brand-50
px-3
py-2
text-left
text-sm
font-semibold
text-brand-700
hover:bg-brand-100
transition
"

>

{course}

</button>

))

}


</div>


</motion.div>

)

}

</AnimatePresence>



</div>


))

}


</div>





{/* Counselling Card */}


<div className="
hidden
lg:block
mt-5
rounded-2xl
border-2
border-brand-100
p-5
hover:shadow-lg
transition
">


<h2 className="
text-center
text-xl
font-black
text-brand-600
">

Still Confused?

</h2>



<p className="
mt-2
text-center
text-xs
text-zinc-500
">

Get instant counselling &
course details

</p>



<button

className="
mt-4
flex
mx-auto
items-center
gap-2
rounded-xl
bg-brand-600
px-5
py-2.5
text-sm
font-bold
text-white
hover:bg-brand-700
transition
"

>

<Phone size={15}/>

Enquire Now

</button>


</div>



</aside>


)

}