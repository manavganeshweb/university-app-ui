"use client";


import {useState} from "react";
import {motion} from "framer-motion";
import {
Search,
GraduationCap,
Building2
} from "lucide-react";

import {searchData} from "../../lib/searchData";
import {useRouter} from "next/navigation";



export default function SearchHero(){


const [query,setQuery]=useState("");

const [category,setCategory]=useState("All");

const router = useRouter();

const results = searchData.filter(item=>{


const matchText =
item.title
.toLowerCase()
.includes(query.toLowerCase());


const matchCategory =
category==="All" ||
item.type===category;


return matchText && matchCategory;


});



return (

<section className="
min-h-screen
bg-zinc-50
py-16
">


<div className="
mx-auto
max-w-6xl
px-6
">



<motion.div

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}

className="
text-center
"

>


<h1 className="
text-4xl
font-extrabold
text-zinc-900
sm:text-5xl
">

Search Courses &
Universities

</h1>


<p className="
mt-4
text-zinc-500
">

Find the right program and university
for your career goals.

</p>



</motion.div>




{/* Search box */}


<div className="
mx-auto
mt-10
max-w-3xl
rounded-2xl
bg-white
p-3
shadow-xl
flex
gap-3
">


<Search className="mt-3 text-zinc-400"/>


<input

value={query}

onChange={(e)=>setQuery(e.target.value)}

placeholder="
Search MBA, MCA, Universities...
"

className="
w-full
outline-none
text-lg
"

/>


</div>




{/* Filters */}


<div className="
mt-8
flex
justify-center
gap-3
flex-wrap
">


{
[
"All",
"Course",
"University"

].map(item=>(


<button

key={item}

onClick={()=>setCategory(item)}

className={`
rounded-full
px-5
py-2
font-semibold

${
category===item
?
"bg-brand-600 text-white"
:
"bg-white border"
}

`}

>


{item}


</button>


))

}


</div>






{/* Results */}


<div className="
mt-10
grid
gap-6
md:grid-cols-3
">


{
results.map(item=>(


<motion.div

key={item.id}

initial={{
opacity:0,
scale:.95
}}

animate={{
opacity:1,
scale:1
}}

className="
rounded-3xl
bg-white
p-6
shadow-lg
border
"

>


<div className="
flex
items-center
gap-3
">


<div className="
rounded-xl
bg-brand-100
p-3
text-brand-600
">

{
item.type==="Course"
?
<GraduationCap/>
:
<Building2/>
}


</div>


<div>

<p className="
text-xs
font-bold
text-brand-600
">

{item.type}

</p>


<h2 className="
font-bold
">

{item.title}

</h2>


</div>


</div>



<p className="
mt-4
text-sm
text-zinc-500
">

{item.description}

</p>



<button

className="
mt-5
w-full
rounded-xl
bg-brand-600
py-3
font-bold
text-white
hover:bg-brand-700
"

>

View Details

</button>


</motion.div>


))

}


</div>





</div>


</section>

)

}