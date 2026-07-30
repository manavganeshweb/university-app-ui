"use client"

import Image from "next/image"
import {
  Check,
  Star,
  Phone,
  Download,
  ArrowRight
} from "lucide-react"
import ApplyButton from "../university/ApplyButton"

interface Props{
 college:any
}



export default function CollegeHero({
 college
}:Props){


return (
    

<section className="
max-w-[1400px]
mx-auto
px-4
md:px-6
lg:px-0
mt-10
">


<div className="
flex
flex-col-reverse
lg:flex-row
gap-10
items-start
justify-between
">


{/* ================= LEFT CONTENT ================= */}


<div className="
w-full
lg:w-[50%]
py-5
">


{/* Breadcrumb */}

<div className="
text-sm
text-gray-400
mb-5
">

Home / 
<span className="text-[#401eec] ml-1">
College
</span>

/ 
<span className="text-[#331eec] ml-1 font-medium">
{college.name}
</span>

</div>





<h1 className="
font-semibold
text-[30px]
md:text-[42px]
leading-tight
text-[#282529]
">

{college.name}

</h1>





{/* Highlights */}


<div className="
grid
md:grid-cols-2
gap-3
mt-6
">


{
college.highlights?.map(
(item:string)=>(
<div

key={item}

className="
flex
items-center
gap-3
rounded-xl
px-4
py-3
bg-gradient-to-r
from-[#2d48e2]
to-[#0034af]
text-white
text-sm
"

>

<Check
size={16}
strokeWidth={3}
/>


<span>
{item}
</span>


</div>
)

)

}


</div>






{/* Approval badges */}


<div className="
flex
flex-wrap
gap-4
mt-8
">


{
college.approvals?.map(
(item:any)=>(


<div

key={item.name}

className="
w-[65px]
h-[65px]
md:w-[90px]
md:h-[90px]
rounded-xl
bg-white
shadow-sm
border
p-2
flex
items-center
justify-center
"


>


<Image

src={item.image}

width={80}

height={80}

alt={item.name}

className="
object-contain
"

 />

</div>


)

)

}


</div>







{/* Rating + Buttons */}



<div className="
flex
flex-wrap
items-center
gap-5
mt-8
">


{/* Rating */}


<div className="
bg-[#FCF0EE]
rounded-xl
px-6
py-4
text-center
">


<div className="
text-4xl
font-semibold
">

{college.rating}

</div>


<div className="
flex
text-yellow-400
justify-center
">

{
Array.from({
length:5
}).map(
(_,i)=>(

<Star
key={i}
size={14}
fill="currentColor"
/>

)

)

}

</div>


</div>






<div className="
flex
flex-col
gap-3
">


<button

className="
bg-[#1e28ec]
hover:bg-[#1925d5]
text-white
px-8
h-[45px]
rounded-lg
font-medium
flex
items-center
justify-center
gap-2
"

>

Enquire Now

<ArrowRight size={16}/>

</button>




<button

className="
border
border-gray-400
px-6
h-[45px]
rounded-full
flex
items-center
gap-2
justify-center
"

>

<Phone size={17}/>

Talk To Expert

</button>



<button

className="
flex
items-center
gap-2
text-sm
italic
hover:text-[#ec1e24]
"

>

<Download size={18}/>

Download Prospectus

</button>



</div>



</div>



</div>







{/* ================= RIGHT IMAGE ================= */}



<div className="
w-full
lg:w-[50%]
relative
">


<div className="
relative
rounded-xl
overflow-hidden
h-[350px]
md:h-[500px]
">


<Image

src={college.banner}

fill

alt={college.name}

priority

className="
object-cover
"

/>



{/* Logo floating card */}


<div className="
absolute
top-4
left-4
bg-white
shadow-lg
rounded-lg
px-5
py-3
h-[60px]
flex
items-center
"


>


<Image

src={college.logo}

width={120}

height={50}

alt={college.name}

className="
object-contain
max-h-full
"

/>


</div>



</div>


</div>




</div>


</section>


)

}