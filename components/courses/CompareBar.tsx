"use client";


import {
AnimatePresence,
motion
} from "framer-motion";

import {
usePathname,
useRouter
} from "next/navigation";


import {
ArrowRight,
Scale,
X
} from "lucide-react";


import {
useCompare
} from "../../context/CourseCompareContext";



export default function CompareBar(){


const pathname = usePathname();

const router = useRouter();



const {
selectedItems,
removeItem
}=useCompare();



if(
pathname === "/compare" ||
!selectedItems ||
selectedItems.length===0
){

return null;

}



return (

<AnimatePresence>

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

transition={{
duration:0.3
}}

className="
fixed
bottom-5
inset-x-0
z-[9999]
mx-auto
w-[calc(100%-40px)]
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

Compare ({selectedItems.length}/4)


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

key={item.slug}

className="
flex
items-center
gap-3
rounded-xl
bg-blue-50
px-4
py-3
font-bold
text-blue-700
"

>


<span className="whitespace-nowrap">

{
item.title
}

</span>



<button

onClick={()=>
removeItem(item.slug)
}

className="
rounded-full
p-1
hover:bg-blue-100
"

>

<X size={15}/>

</button>


</div>


))

}


</div>




{
selectedItems.length>=2 &&

<button

onClick={()=>
router.push("/compare")
}

className="
mt-5
flex
w-full
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

</button>

}



</motion.div>


</AnimatePresence>

)

}