"use client"

import {motion} from "framer-motion"


const stats=[

["500+","Universities"],
["2000+","Courses"],
["10K+","Students"],
["95%","Satisfaction"]

]



export default function Stats(){


return(

<section className="
bg-blue-600
py-16
text-white
">


<div className="
mx-auto
grid
max-w-7xl
grid-cols-2
gap-8
px-5
md:grid-cols-4
">


{
stats.map((item,index)=>(


<motion.div

key={item[1]}

whileInView={{
scale:[.8,1]
}}

viewport={{
once:true
}}

className="
text-center
"


>


<h2 className="
text-4xl
font-black
">

{item[0]}

</h2>


<p className="
mt-2
text-white/80
">

{item[1]}

</p>


</motion.div>


))

}


</div>


</section>

)

}