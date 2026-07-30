"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  MapPin,
  Star,
  ArrowRight,
} from "lucide-react"

import SectionWrapper from "./SectionWrapper"

import CompareButton from "../compare/CompareButton"

import { universities } from "../../lib/universities"


interface Props {
  university:any
  id?:string
}


export default function SimilarUniversities({

university,

id="similar"

}:Props){



const similarUniversities =
universities
.filter(
(item)=>
item.slug !== university.slug
)
.slice(0,4)



return (

<SectionWrapper

id={id}

title="Similar Universities"

subtitle="Explore other universities you may consider."

>


<div className="
space-y-8
">


<div className="
hidden
md:grid
md:grid-cols-2
xl:grid-cols-3
gap-6
">


{
similarUniversities.map(
(item,index)=>(


<UniversityCard

key={item.id}

item={item}

index={index}

/>


))

}


</div>





<div className="
flex
gap-5
overflow-x-auto
pb-4
md:hidden
snap-x
">


{
similarUniversities.map(
(item,index)=>(


<div

key={item.id}

className="
min-w-[300px]
snap-center
"

>


<UniversityCard

item={item}

index={index}

/>


</div>


))

}


</div>


</div>


</SectionWrapper>


)

}





function UniversityCard({

item,

index

}:any){


return (

<motion.div


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


transition={{

delay:index*.1

}}


whileHover={{

y:-8

}}


className="
group
overflow-hidden
rounded-3xl
border
bg-white
shadow-sm
transition
hover:shadow-2xl
"


>





<div className="
relative
h-44
overflow-hidden
">


<Image

src={item.banner}

alt={item.name}

fill

className="
object-cover
transition
duration-700
group-hover:scale-110
"

/>


<div className="
absolute
inset-0
bg-gradient-to-t
from-black/50
to-transparent
"/>



</div>





<div className="
p-5
">





<div className="
flex
items-center
gap-4
">


<Image

src={item.logo}

alt={item.name}

width={55}

height={55}

className="
h-14
w-14
rounded-full
border
bg-white
object-cover
"

/>



<div>

<h3 className="
line-clamp-1
text-lg
font-bold
text-slate-900
">

{item.name}

</h3>



<div className="
mt-1
flex
items-center
gap-1
text-sm
text-slate-500
">

<MapPin size={15}/>

{item.location}


</div>


</div>


</div>







<div className="
mt-5
flex
items-center
justify-between
">


<div className="
flex
items-center
gap-1
rounded-full
bg-yellow-50
px-3
py-1
text-sm
font-semibold
text-yellow-700
">


<Star

size={15}

fill="currentColor"

/>


{item.rating}


</div>



<span className="
text-sm
font-semibold
text-blue-600
">

University

</span>


</div>







<div className="
mt-6
space-y-3
">



<Link

href={`/university/${item.slug}`}

className="
flex
w-full
items-center
justify-center
gap-2
rounded-full
bg-blue-600
px-4
py-3
text-sm
font-semibold
text-white
transition
hover:bg-blue-700
"

>


View University

<ArrowRight size={16}/>


</Link>





<CompareButton

item={{

...item,

type:"university"

}}

/>



</div>





</div>



</motion.div>


)

}