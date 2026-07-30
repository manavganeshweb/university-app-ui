"use client"

import {
  MapPin,
  CalendarDays,
  Building2,
  Users,
  Award,
  Globe,
  CheckCircle2
} from "lucide-react"



interface Props{
  college:any
}



export default function CollegeOverview({
  college
}:Props){



const info=[

{
title:"Established",
value:college.established || "2005",
icon:CalendarDays
},

{
title:"Location",
value:college.location,
icon:MapPin
},

{
title:"Institute Type",
value:college.type || "Private University",
icon:Building2
},

{
title:"Students",
value:college.students || "10,000+",
icon:Users
},

{
title:"Recognition",
value:college.recognition || "UGC Approved",
icon:Award
},

{
title:"Website",
value:"Official Website",
icon:Globe
}


]



return(

<section

id="overview"

className="
scroll-mt-28
"

>


<div className="
bg-white
rounded-2xl
border
shadow-sm
p-6
md:p-8
">


{/* Heading */}

<div className="
flex
items-center
gap-3
mb-6
">


<div className="
w-10
h-10
rounded-xl
bg-red-50
flex
items-center
justify-center
text-[#1e2fec]
">


<Building2 size={22}/>


</div>



<h2 className="
text-2xl
md:text-3xl
font-semibold
text-[#282529]
">

About {college.name}

</h2>


</div>





{/* Description */}


<p className="
text-gray-600
leading-7
text-[15px]
md:text-base
">

{college.description ||
`${college.name} is one of the leading institutions offering quality education with industry-focused programs, experienced faculty, modern infrastructure and career-oriented learning opportunities.`}


</p>





{/* Highlights */}


{
college.highlights &&
<div className="
mt-8
">


<h3 className="
font-semibold
text-lg
mb-4
">

Key Highlights

</h3>



<div className="
grid
sm:grid-cols-2
gap-3
">


{
college.highlights.map(
(item:string)=>(


<div

key={item}

className="
flex
items-center
gap-3
bg-[#f8f9ff]
border
border-blue-100
rounded-xl
px-4
py-3
hover:shadow-md
transition
"


>


<CheckCircle2

size={18}

className="
text-[#1e28ec]
flex-shrink-0
"

/>


<span className="
text-sm
text-gray-700
">

{item}

</span>


</div>


)

)

}


</div>


</div>

}





{/* College Information */}



<div className="
mt-10
">


<h3 className="
font-semibold
text-lg
mb-5
">

College Information

</h3>



<div className="
grid
sm:grid-cols-2
xl:grid-cols-3
gap-4
">


{
info.map(
(item)=>{


const Icon=item.icon


return(

<div

key={item.title}

className="
border
rounded-xl
p-4
flex
gap-4
items-center
hover:border-red-200
hover:shadow-sm
transition
"


>


<div className="
w-11
h-11
rounded-lg
bg-blue-50
flex
items-center
justify-center
text-[#441eec]
">


<Icon size={20}/>


</div>



<div>


<p className="
text-xs
text-gray-500
">

{item.title}

</p>


<p className="
font-medium
text-gray-800
text-sm
mt-1
">

{item.value}

</p>


</div>



</div>

)

}

)

}


</div>


</div>



</div>


</section>

)

}