"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  X,
  ChevronLeft,
  ChevronRight,
  Camera
} from "lucide-react"

import SectionWrapper from "./SectionWrapper"



interface Props {
  university:any
  id?:string
}



export default function Gallery({
  university,
  id="gallery"
}:Props){



const images =
university.gallery ||
[
"/universities/chandigarh-university/1.jpg",
"/universities/chandigarh-university/2.jpg",
"/universities/chandigarh-university/3.jpg",
"/universities/chandigarh-university/4.jpg",
]



const [activeImage,setActiveImage]=useState<number|null>(null)





// Disable page scrolling when image modal opens

useEffect(()=>{


if(activeImage !== null){

document.body.style.overflow="hidden"

}
else{

document.body.style.overflow="auto"

}



return()=>{

document.body.style.overflow="auto"

}


},[activeImage])





const nextImage=()=>{

if(activeImage===null)return


setActiveImage(
(activeImage + 1) % images.length
)

}





const previousImage=()=>{

if(activeImage===null)return


setActiveImage(
activeImage===0
?
images.length-1
:
activeImage-1
)

}
useEffect(()=>{


const handleKey=(e:KeyboardEvent)=>{

if(e.key==="Escape"){

setActiveImage(null)

}

}



window.addEventListener(
"keydown",
handleKey
)



return()=>{

window.removeEventListener(
"keydown",
handleKey
)

}


},[])

return(

<SectionWrapper
id={id}
title="Campus Gallery"
subtitle="Explore campus life, infrastructure and facilities."
>


{/* Preload Images */}

<div className="hidden">

{
images.map((img)=>(
<Image
key={img}
src={img}
width={800}
height={600}
alt="preload"
/>
))
}

</div>



<div className="
grid
grid-cols-2
gap-4
md:grid-cols-3
">


{
images.map((image,index)=>(


<motion.div

key={image}

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
scale:1.03,
y:-8
}}


onClick={()=>setActiveImage(index)}

className="
group
relative
h-48
overflow-hidden
rounded-3xl
cursor-pointer
md:h-60
"

>


<Image

src={image}

alt={university.name}

fill

sizes="
(max-width:768px) 50vw,
33vw
"

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
flex
items-center
justify-center
bg-black/0
transition
group-hover:bg-black/30
">


<Camera

className="
text-white
opacity-0
transition
group-hover:opacity-100
"

size={35}

/>


</div>


</motion.div>


))

}


</div>






{/* LIGHTBOX */}


<AnimatePresence>


{
activeImage!==null &&

<motion.div

initial={{
opacity:0
}}

animate={{
opacity:1
}}

exit={{
opacity:0
}}

className="
fixed
inset-0
z-[999]
flex
items-center
justify-center
overflow-hidden
bg-black/90
p-5
"


onClick={()=>setActiveImage(null)}

>


{/* Close */}

<button

onClick={(e)=>{
e.stopPropagation()
setActiveImage(null)
}}

className="
absolute
right-5
top-5
rounded-full
bg-white/20
p-3
text-white
"

>

<X/>

</button>





{/* Previous */}

<button

onClick={(e)=>{
e.stopPropagation()
previousImage()
}}

className="
absolute
left-5
z-20
rounded-full
bg-white/20
p-3
text-white
"

>

<ChevronLeft/>

</button>







<motion.div

key={images[activeImage]}

initial={{
opacity:0,
scale:.9
}}

animate={{
opacity:1,
scale:1
}}

transition={{
duration:.25
}}


onClick={(e)=>e.stopPropagation()}


className="
relative
h-[75vh]
w-full
max-w-6xl
"


>


<Image

src={images[activeImage]}

alt="preview"

fill

priority

sizes="
100vw
"

className="
rounded-3xl
object-contain
"

/>


</motion.div>








{/* Next */}


<button

onClick={(e)=>{
e.stopPropagation()
nextImage()
}}

className="
absolute
right-5
rounded-full
bg-white/20
p-3
text-white
"

>

<ChevronRight/>

</button>



</motion.div>


}


</AnimatePresence>



</SectionWrapper>


)

}