"use client";


import {
motion
}
from "framer-motion";


import {
Trash2
}
from "lucide-react";


import {
useCompare
}
from "../../context/CourseCompareContext";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";



export default function ComparePage(){


const {

selectedItems,

clearCompare

}=useCompare();



if(selectedItems.length===0)

return (

<div className="
min-h-screen
flex
items-center
justify-center
text-xl
font-bold
">

No items selected

</div>

)



const fields=[

"category",

"duration",

"fees",

"mode",

"eligibility",

"description"

];



return (

    <>
    <Header/>

<div className="
min-h-screen
bg-zinc-50
py-16
">


<section className="
bg-gradient-to-r
from-blue-700
to-cyan-500
py-16
text-white
text-center
">


<h1 className="
text-5xl
font-black
">

Compare Programs

</h1>


<p className="
mt-3
">

Compare up to 4 courses, universities and colleges

</p>


</section>





<main className="
container-page
py-12
">


<motion.div

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}


className="
overflow-x-auto
rounded-3xl
border
bg-white
shadow-xl
"


>


<table className="
min-w-full
">


<thead>

<tr
className="
bg-blue-50
"
>


<th className="p-5 text-left">
Features
</th>


{
selectedItems.map(item=>(


<th

key={item.slug}

className="
p-5
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
fields.map(field=>(


<tr

key={field}

className="
border-t
"

>


<td className="
p-5
font-bold
capitalize
">

{field}

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


{item[field] || "-"}


</td>


))

}


</tr>


))

}


</tbody>


</table>


</motion.div>




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
<Footer/>
</>

)

}