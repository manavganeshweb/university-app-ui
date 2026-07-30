"use client";


import Link from "next/link";

import {
X,
ArrowRight,
Scale
}
from "lucide-react";


import {
motion,
AnimatePresence
}
from "framer-motion";


import {
useCompare
}
from "../../context/CourseCompareContext";



export default function CompareBar(){


const {

selectedItems,

removeItem

}=useCompare();



return (

<AnimatePresence>


{
selectedItems.length>0 &&


<motion.div

initial={{
y:100,
opacity:0
}}

animate={{
y:0,
opacity:1
}}

exit={{
y:100,
opacity:0
}}


className="
fixed
bottom-5
left-0
right-0
z-[999]
mx-auto
w-[95%]
max-w-5xl
rounded-3xl
border
bg-white
p-5
shadow-2xl
"


>


<div className="
flex
items-center
gap-2
font-black
">


<Scale size={18}/>


Compare

({selectedItems.length}/4)


</div>




<div className="
mt-4
flex
gap-3
overflow-x-auto
">


{
selectedItems.map(item=>(


<div

key={`${item.slug}-${item.course}`}
className="
flex
items-center
gap-3
rounded-xl
bg-blue-50
px-4
py-3
text-sm
font-bold
text-blue-700
"


>

<span>
{item.name || item.title || "University"}</span>

<button

onClick={()=>
removeItem(item.slug)
}

>

<X size={15}/>


</button>


</div>


))

}



</div>





{
selectedItems.length>=2 &&


<Link

href="/compare"

className="
mt-5
flex
items-center
justify-center
gap-2
rounded-xl
bg-blue-600
py-3
font-bold
text-white
hover:bg-blue-700
"


>


Compare Now


<ArrowRight size={18}/>


</Link>


}



</motion.div>


}


</AnimatePresence>

)

}