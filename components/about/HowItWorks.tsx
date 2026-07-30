"use client"

import {motion} from "framer-motion"
import {
Search,
GitCompare,
FileCheck,
GraduationCap
} from "lucide-react"



const steps=[

{
icon:<Search/>,
title:"Discover Universities",
description:
"Search hundreds of universities and explore courses, fees, rankings and admission details."
},


{
icon:<GitCompare/>,
title:"Compare Programs",
description:
"Compare universities, courses, placements and fees using our smart comparison tools."
},


{
icon:<FileCheck/>,
title:"Apply Easily",
description:
"Get admission guidance and apply to your preferred university without confusion."
},


{
icon:<GraduationCap/>,
title:"Start Your Journey",
description:
"Choose the right career path and begin your learning journey."
}

]



export default function HowItWorks(){


return(

<section className="
bg-white
py-20
">


<div className="
mx-auto
max-w-7xl
px-5
">


<motion.h2

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
text-center
text-4xl
font-black
"

>

How EdPath Works

</motion.h2>



<p className="
mx-auto
mt-4
max-w-2xl
text-center
text-gray-500
">

Simple steps to find your perfect university and course.

</p>





<div className="
relative
mt-16
grid
gap-10
md:grid-cols-4
">


{/* Line */}


<div className="
absolute
left-0
right-0
top-14
hidden
h-1
bg-blue-100
md:block
"/>





{
steps.map((step,index)=>(


<motion.div

key={step.title}


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
delay:index*.2
}}


className="
relative
text-center
"


>


<motion.div

whileHover={{
scale:1.1
}}

className="
relative
z-10
mx-auto
flex
h-28
w-28
items-center
justify-center
rounded-full
bg-blue-600
text-white
shadow-xl
"

>


{step.icon}


</motion.div>





<div className="
mt-6
rounded-3xl
bg-slate-50
p-6
shadow-sm
">


<h3 className="
text-xl
font-bold
">

{step.title}

</h3>


<p className="
mt-3
text-sm
leading-relaxed
text-gray-500
">

{step.description}

</p>


</div>



</motion.div>


))


}



</div>



</div>


</section>


)

}