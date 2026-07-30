"use client"

import {
  Info,
  IndianRupee,
  ShieldCheck,
  Trophy,
  BookOpen,
  Sparkles,
  Lightbulb,
  FileText,
  ClipboardList,
  Wallet,
  Building2,
  BriefcaseBusiness,
  UserRoundCheck,
  GraduationCap,
  HelpCircle,
  Star
} from "lucide-react"

import { useState, useEffect } from "react"


const navItems = [

{
id:"overview",
name:"About",
icon:Info
},

{
id:"courses",
name:"Courses",
icon:BookOpen
},

{
id:"admission",
name:"Admission Process",
icon:GraduationCap
},

{
id:"fees",
name:"Fee",
icon:IndianRupee
},

{
id:"placement",
name:"Placement Partners",
icon:BriefcaseBusiness
},

{
id:"campus",
name:"Campus",
icon:Building2
},

{
id:"reviews",
name:"Reviews",
icon:Star
},

{
id:"faq",
name:"FAQ",
icon:HelpCircle
}

]





export default function CollegeNav(){


const [active,setActive]=useState("overview")
useEffect(()=>{


const sections = navItems.map(
(item)=>document.getElementById(item.id)
)
.filter(Boolean)



const observer = new IntersectionObserver(

(entries)=>{


entries.forEach((entry)=>{


if(entry.isIntersecting){

setActive(entry.target.id)

}


})


},

{
root:null,
rootMargin:"-120px 0px -60% 0px",
threshold:0
}

)



sections.forEach(
(section)=>{

if(section){
observer.observe(section)
}

}

)



return()=>{

sections.forEach(
(section)=>{

if(section){
observer.unobserve(section)
}

}

)

}


},[])



const scrollToSection=(id:string)=>{

setActive(id)

const element=document.getElementById(id)

if(element){

const y =
element.getBoundingClientRect().top +
window.scrollY -
120


window.scrollTo({

top:y,

behavior:"smooth"

})

}

}





return (

<aside className="sticky top-[65px] z-20">


{/* ================= DESKTOP ================= */}


<div className="
hidden
lg:block
bg-[#F9FAFB]
shadow-[4px_4px_10px_rgba(0,0,0,0.05)]
h-screen
overflow-y-auto
custom-scroll
py-8
px-3
">


<ul className="
space-y-3
flex
flex-col
items-end
">


{
navItems.map((item)=>{


const Icon=item.icon

const isActive=active===item.id


return(

<li key={item.id}>


<button

onClick={()=>scrollToSection(item.id)}

className={`
w-[210px]
xl:w-[230px]
2xl:w-[242px]
h-[38px]
rounded-full
flex
items-center
gap-3
px-2
border
transition-all
duration-300

${
isActive

?

"bg-[#361eec] text-white border-[#1e5fec]"

:

"bg-white border-gray-300 text-gray-700 hover:border-[#1e4bec]"
}

`}


>


<span

className={`
w-8
h-8
rounded-full
flex
items-center
justify-center

${
isActive

?

"bg-white text-[#1e8fec]"

:

"bg-[#eeecec] text-gray-600"

}

`}

>


<Icon size={16}/>


</span>



<span className="
text-sm
font-medium
">

{item.name}

</span>


</button>


</li>


)


})

}


</ul>


</div>







{/* ================= MOBILE ================= */}



<div className="
lg:hidden
sticky
top-16
z-50
bg-[#F9FAFB]
py-3
shadow-sm
">


<div className="
flex
gap-2
overflow-x-auto
px-2
no-scrollbar
">


{
navItems.map((item)=>{


const isActive=active===item.id


return(

<button

key={item.id}

onClick={()=>scrollToSection(item.id)}

className={`

whitespace-nowrap
px-4
h-[34px]
rounded-full
border
text-sm
font-medium
transition


${
isActive

?

"bg-[#1e2cec] text-white border-[#1e5cec]"

:

"bg-white border-gray-300 text-gray-700"

}

`}

>

{item.name}

</button>


)


})

}


</div>


</div>



</aside>


)

}