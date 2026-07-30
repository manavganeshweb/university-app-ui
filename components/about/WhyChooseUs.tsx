"use client"

import {
ShieldCheck,
Brain,
Users,
Zap
} from "lucide-react"

import {motion} from "framer-motion"



const items=[

{
icon:<ShieldCheck/>,
title:"Verified Universities"
},

{
icon:<Brain/>,
title:"AI Based Comparison"
},

{
icon:<Users/>,
title:"Expert Guidance"
},

{
icon:<Zap/>,
title:"Fast Admission Support"
}

]



export default function WhyChooseUs(){


return(

<section className="
mx-auto
max-w-7xl
px-5
py-20
">


<h2 className="
text-center
text-4xl
font-black
">

Why Choose EdPath?

</h2>


<div className="
mt-12
grid
gap-6
sm:grid-cols-2
lg:grid-cols-4
">


{
items.map((item,index)=>(


<motion.div

whileHover={{
y:-10
}}

key={item.title}

className="
rounded-3xl
bg-white
p-7
text-center
shadow-lg
"


>


<div className="
mx-auto
flex
h-14
w-14
items-center
justify-center
rounded-2xl
bg-blue-600
text-white
">

{item.icon}

</div>


<h3 className="
mt-5
font-bold
">

{item.title}

</h3>


</motion.div>


))

}


</div>


</section>


)

}