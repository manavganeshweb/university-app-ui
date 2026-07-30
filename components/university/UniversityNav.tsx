"use client"


import { motion } from "framer-motion"
import useActiveSection from "./hooks/useActiveSection"


const tabs=[

{
id:"overview",
label:"Overview"
},

{
id:"courses",
label:"Courses"
},

{
id:"fees",
label:"Fees"
},

{
id:"placement",
label:"Placement"
},

{
id:"admission",
label:"Admission"
},

{
id:"gallery",
label:"Gallery"
},

{
id:"faq",
label:"FAQ"
},

{
id:"similar",
label:"Similar"

}

]



export default function UniversityNav(){


const active=useActiveSection(
tabs.map(item=>item.id)
)



const scrollTo=(id:string)=>{


document
.getElementById(id)
?.scrollIntoView({

behavior:"smooth",

block:"start"

})


}



return(

<div className="
sticky
top-[72px]
z-30
flex
bg-white/90
backdrop-blur
border-b
shadow-sm
">


<div className="
mx-auto
max-w-7xl
overflow-x-auto
flex
gap-2
px-4
py-3
no-scrollbar
">


{
tabs.map(tab=>(


<button

key={tab.id}

onClick={()=>scrollTo(tab.id)}

className="
relative
whitespace-nowrap
rounded-full
px-5
py-2.5
text-sm
font-semibold
text-slate-600
"


>


{
active===tab.id &&

<motion.span

layoutId="active-pill"

className="
absolute
inset-0
rounded-full
bg-blue-600
"

transition={{
type:"spring",
duration:.5
}}

/>

}



<span className={`
relative
z-10
${active===tab.id?"text-white":""}
`}>

{tab.label}

</span>


</button>


))

}


</div>


</div>

)

}