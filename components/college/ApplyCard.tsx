"use client"

import Image from "next/image"

import {
  CheckCircle2,
  Phone,
  Download,
  ArrowRight,
  GraduationCap
} from "lucide-react"



interface Props{
 college:any
}



export default function ApplyCard({
 college
}:Props){



const highlights = college.highlights || [

"UGC Recognised University",

"Flexible Online Learning",

"Industry Relevant Curriculum",

"Placement Assistance"

]





return(

<div className="
sticky
top-24
"


>


<div className="
bg-white
rounded-2xl
border
shadow-lg
overflow-hidden
">





{/* Banner */}


<div className="
relative
h-36
w-full
bg-gray-100
">


<Image

src={
college.banner ||
"/college/default-banner.webp"
}

alt={college.name}

fill

className="
object-cover
"

/>



<div className="
absolute
inset-0
bg-black/20
"/>



<div className="
absolute
bottom-4
left-5
right-5
">


<span className="
inline-flex
items-center
gap-2
bg-green-500
text-white
text-xs
px-3
py-1
rounded-full
font-medium
">

<CheckCircle2 size={14}/>

Admissions Open

</span>


</div>


</div>









{/* Content */}


<div className="
p-5
">


{/* Logo + Name */}


<div className="
flex
gap-3
items-center
">


<div className="
w-14
h-14
rounded-xl
bg-white
border
shadow-sm
flex
items-center
justify-center
overflow-hidden
">


{
college.logo &&

<Image

src={college.logo}

width={55}

height={55}

alt={college.name}

className="
object-contain
"

/>

}


</div>




<div>


<h3 className="
font-semibold
text-gray-900
leading-tight
">

{college.name}

</h3>



<p className="
text-xs
text-gray-500
mt-1
">

Online Programs

</p>


</div>


</div>









{/* Highlights */}



<div className="
mt-6
space-y-3
">


{
highlights.map(
(item:string)=>(


<div

key={item}

className="
flex
items-center
gap-2
text-sm
text-gray-700
">


<CheckCircle2

size={17}

className="
text-[#ec1e24]
"

/>


{item}


</div>


)

)

}


</div>









{/* Buttons */}



<button

className="
mt-7
w-full
h-12
rounded-xl
bg-[#ec1e24]
text-white
font-medium
flex
items-center
justify-center
gap-2
hover:bg-red-700
transition
"

>


Apply Now

<ArrowRight size={18}/>


</button>







<div className="
grid
grid-cols-2
gap-3
mt-3
">


<button

className="
border
rounded-xl
h-11
flex
items-center
justify-center
gap-2
text-sm
font-medium
hover:bg-gray-50
transition
"

>


<Phone size={16}/>

Expert

</button>




<button

className="
border
rounded-xl
h-11
flex
items-center
justify-center
gap-2
text-sm
font-medium
hover:bg-gray-50
transition
"

>


<Download size={16}/>

Brochure

</button>


</div>









{/* Bottom Info */}



<div className="
mt-6
bg-red-50
rounded-xl
p-4
">


<div className="
flex
items-center
gap-2
text-[#ec1e24]
font-medium
text-sm
">


<GraduationCap size={18}/>


Admission Support Available


</div>


<p className="
text-xs
text-gray-600
mt-2
leading-5
">

Get personalised guidance for eligibility, fees and admission process.

</p>


</div>




</div>






</div>


</div>


)

}