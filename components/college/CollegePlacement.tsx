"use client"

import Image from "next/image"

import {
  BriefcaseBusiness,
  TrendingUp,
  IndianRupee,
  Users,
  Building2,
  CheckCircle2
} from "lucide-react"



interface Props{
  college:any
}



export default function CollegePlacement({
  college
}:Props){



const stats=[

{
title:"Highest Package",
value:college.highestPackage || "₹45 LPA",
icon:TrendingUp
},

{
title:"Average Package",
value:college.averagePackage || "₹8 LPA",
icon:IndianRupee
},

{
title:"Placement Rate",
value:college.placementRate || "95%",
icon:Users
},

{
title:"Recruiters",
value:college.recruitersCount || "200+",
icon:Building2
}


]




return(

<section

id="placement"

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


{/* Header */}


<div className="
flex
items-center
gap-3
mb-6
">


<div className="
w-11
h-11
rounded-xl
bg-blue-50
flex
items-center
justify-center
text-[#1e25ec]
">


<BriefcaseBusiness size={23}/>


</div>



<div>


<h2 className="
text-2xl
md:text-3xl
font-semibold
text-[#282529]
">

Placement & Career

</h2>


<p className="
text-sm
text-gray-500
mt-1
">

Build your career with industry opportunities

</p>


</div>


</div>





{/* Stats */}



<div className="
grid
grid-cols-2
lg:grid-cols-4
gap-4
">


{
stats.map((item)=>{


const Icon=item.icon


return(

<div

key={item.title}

className="
border
rounded-xl
p-4
hover:shadow-md
hover:border-blue-200
transition
"


>


<div className="
w-10
h-10
rounded-lg
bg-blue-50
flex
items-center
justify-center
text-[#1e3dec]
mb-3
">


<Icon size={20}/>


</div>




<p className="
text-xs
text-gray-500
">

{item.title}

</p>


<h3 className="
text-xl
font-semibold
mt-1
text-gray-900
">

{item.value}

</h3>



</div>


)


})

}


</div>







{/* Placement Description */}



<div className="
mt-8
grid
md:grid-cols-2
gap-6
">


<div>


<h3 className="
font-semibold
text-lg
mb-4
">

Placement Support

</h3>



<div className="
space-y-3
">


{

(
college.placementSupport ||

[
"Dedicated placement cell",
"Resume building assistance",
"Mock interviews",
"Industry expert sessions"
]

).map(
(item:string)=>(


<div

key={item}

className="
flex
items-center
gap-3
text-sm
text-gray-700
"


>


<CheckCircle2

size={18}

className="
text-[#3d1eec]
"

/>


{item}


</div>


)

)


}


</div>


</div>






{/* Recruiters */}



<div>


<h3 className="
font-semibold
text-lg
mb-4
">

Top Recruiters

</h3>



<div className="
grid
grid-cols-3
gap-3
">


{
(
college.recruiters ||

[
{
name:"TCS",
logo:"/companies/tcs.png"
},
{
name:"Infosys",
logo:"/companies/infosys.png"
},
{
name:"Wipro",
logo:"/companies/wipro.png"
}

]

).map(
(company:any)=>(


<div

key={company.name}

className="
h-16
border
rounded-xl
flex
items-center
justify-center
p-3
hover:shadow-sm
transition
"


>


{
company.logo ?

<Image

src={company.logo}

width={90}

height={40}

alt={company.name}

className="
object-contain
max-h-10
"

/>

:

<span className="
text-sm
font-medium
">

{company.name}

</span>

}


</div>


)

)

}


</div>


</div>



</div>





{/* Bottom CTA */}



<div className="
mt-8
rounded-xl
bg-gradient-to-r
from-[#1e47ec]
to-[#2c00af]
p-5
text-white
flex
flex-col
md:flex-row
justify-between
items-center
gap-4
">


<div>


<h3 className="
font-semibold
text-lg
">

Start Your Career Journey

</h3>


<p className="
text-sm
opacity-90
mt-1
">

Get expert guidance for admissions and placements

</p>


</div>




<button className="
bg-white
text-[#1e2cec]
px-6
py-2.5
rounded-full
font-medium
hover:scale-105
transition
">

Talk To Expert

</button>


</div>



</div>


</section>


)

}