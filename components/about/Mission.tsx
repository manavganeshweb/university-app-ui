"use client"

import {motion} from "framer-motion"
import {
Target,
Eye
} from "lucide-react"



const data=[

{
icon:<Target/>,
title:"Our Mission",
text:"To simplify education decisions by connecting students with the right universities and courses."
},


{
icon:<Eye/>,
title:"Our Vision",
text:"To become India's most trusted education discovery platform."
}

]



export default function Mission(){


return(

<section className="
mx-auto
max-w-7xl
px-5
py-20
">


<div className="
grid
gap-8
md:grid-cols-2
">


{
data.map((item,index)=>(


<motion.div

key={item.title}

initial={{
opacity:0,
y:40
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
rounded-3xl
bg-white
p-8
shadow-xl
"

>


<div className="
mb-5
flex
h-14
w-14
items-center
justify-center
rounded-2xl
bg-blue-100
text-blue-600
">

{item.icon}

</div>



<h2 className="
text-2xl
font-bold
">

{item.title}

</h2>


<p className="
mt-4
text-gray-500
">

{item.text}

</p>


</motion.div>


))

}


</div>


</section>

)

}