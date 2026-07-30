"use client";


import {
motion
} from "framer-motion";


import {
Trash2,
ArrowLeft
} from "lucide-react";


import Link from "next/link";


import {
useCompare
} from "../../context/CourseCompareContext";



export default function CompareCourses(){


const {
selectedItems,
removeItem,
clearCompare
}=useCompare();





if(!selectedItems || selectedItems.length===0){


return (

<div className="
min-h-screen
flex
items-center
justify-center
bg-zinc-50
px-5
">


<motion.div

initial={{
opacity:0,
scale:.8
}}

animate={{
opacity:1,
scale:1
}}

className="
rounded-3xl
bg-white
p-10
text-center
shadow-xl
"

>


<h1 className="
text-3xl
font-black
">

Nothing To Compare

</h1>


<p className="
mt-3
text-zinc-500
">

Add courses or universities to compare.

</p>



<Link

href="/course"

className="
mt-6
inline-flex
items-center
gap-2
rounded-xl
bg-blue-600
px-6
py-3
font-bold
text-white
"

>


<ArrowLeft size={18}/>

Explore Programs


</Link>



</motion.div>


</div>

)

}





const features=[


{
label:"Category",
key:"category"
},


{
label:"Duration",
key:"duration"
},


{
label:"Fees",
key:"fees"
},


{
label:"Mode",
key:"mode"
},


{
label:"Eligibility",
key:"eligibility"
},


{
label:"Description",
key:"description"
}



];





return (

<div className="
min-h-screen
bg-zinc-50
">


{/* Hero */}


<section className="
bg-gradient-to-r
from-blue-700
to-cyan-500
py-16
text-white
">


<div className="
container-page
text-center
">


<motion.h1

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}

className="
text-5xl
font-black
"

>

Compare Programs

</motion.h1>



<p className="
mt-4
text-white/80
">

Choose the best option for your career.

</p>


</div>


</section>





<main className="
container-page
py-12
">





{/* Selected Cards */}


<div className="
grid
gap-5
md:grid-cols-2
lg:grid-cols-4
">


{
selectedItems.map((item:any,index:number)=>(


<motion.div


key={item.slug}


initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}

transition={{
delay:index*.1
}}


className="
relative
rounded-3xl
bg-white
border
p-6
shadow-sm
"

>


<button

onClick={()=>
removeItem(item.slug)
}

className="
absolute
right-4
top-4
text-red-500
"

>

✕


</button>




<h2 className="
font-black
text-xl
text-blue-600
">

{item.title}

</h2>



<p className="
mt-2
text-xs
uppercase
text-zinc-400
">

{item.type}

</p>



</motion.div>


))

}


</div>







{/* Comparison Table */}



<div className="
mt-10
overflow-x-auto
rounded-3xl
border
bg-white
shadow-lg
">


<table className="
min-w-full
">


<thead>

<tr className="
bg-blue-50
">


<th className="
p-5
text-left
">

Features

</th>



{
selectedItems.map(item=>(

<th

key={item.slug}

className="
p-5
text-left
text-blue-700
"

>

{item.title}

</th>


))

}


</tr>

</thead>





<tbody>


{
features.map(feature=>(


<tr

key={feature.key}

className="
border-t
"

>


<td className="
p-5
font-bold
"

>

{feature.label}

</td>




{
selectedItems.map(item=>(


<td

key={item.slug}

className="
p-5
text-zinc-600
"

>


{
item[feature.key]
||
"-"
}


</td>


))

}



</tr>


))

}


</tbody>



</table>


</div>





<button

onClick={clearCompare}

className="
mt-8
flex
items-center
gap-2
rounded-xl
border
px-5
py-3
font-bold
hover:bg-zinc-100
"

>

<Trash2 size={17}/>

Clear Comparison

</button>



</main>


</div>


)

}