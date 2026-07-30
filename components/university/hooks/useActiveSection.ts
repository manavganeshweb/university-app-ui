"use client"

import { useEffect, useState } from "react"


export default function useActiveSection(
    sections:string[]
){

const [active,setActive]=useState(sections[0])


useEffect(()=>{


const observer = new IntersectionObserver(

(entries)=>{


entries.forEach((entry)=>{


if(entry.isIntersecting){

setActive(entry.target.id)

}


})


},

{
rootMargin:"-120px 0px -60% 0px",
threshold:0
}

)



sections.forEach((id)=>{


const element=document.getElementById(id)

if(element){

observer.observe(element)

}


})


return()=>observer.disconnect()


},[sections])



return active

}