"use client"

import Image from "next/image"

import {
  Building2,
  Wifi,
  Library,
  Dumbbell,
  Utensils,
  Home,
  Bus,
  Trophy,
  CheckCircle2
} from "lucide-react"



interface Props{
 college:any
}



export default function CollegeCampus({
 college
}:Props){



const facilities=[

{
title:"Smart Classrooms",
icon:Building2
},

{
title:"Digital Library",
icon:Library
},

{
title:"High Speed WiFi",
icon:Wifi
},

{
title:"Sports Facilities",
icon:Dumbbell
},

{
title:"Hostel Facilities",
icon:Home
},

{
title:"Cafeteria",
icon:Utensils
},

{
title:"Transport",
icon:Bus
},

{
title:"Student Activities",
icon:Trophy
}

]



const images = college.campusImages || [

"/campus/campus-1.webp",

"/campus/campus-2.webp",

"/campus/campus-3.webp"

]





return(

<section

id="campus"

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
text-[#1e21ec]
flex
items-center
justify-center
">

<Building2 size={23}/>

</div>



<div>

<h2 className="
text-2xl
md:text-3xl
font-semibold
text-[#282529]
">

Campus Life

</h2>


<p className="
text-sm
text-gray-500
mt-1
">

Explore infrastructure and student facilities

</p>


</div>


</div>







{/* Description */}


<p className="
text-gray-600
leading-7
">

{
college.campusDescription ||

`${college.name} provides a modern learning environment with advanced infrastructure, digital facilities, comfortable student spaces and a vibrant campus experience.`

}

</p>







{/* Facilities */}



<div className="
mt-8
">


<h3 className="
font-semibold
text-lg
mb-5
">

Campus Facilities

</h3>



<div className="
grid
grid-cols-2
md:grid-cols-4
gap-4
">


{
facilities.map(
(item)=>{


const Icon=item.icon


return(

<div

key={item.title}

className="
border
rounded-xl
p-4
text-center
hover:shadow-md
hover:border-blue-200
transition
group
"


>


<div className="
w-12
h-12
mx-auto
rounded-full
bg-blue-50
flex
items-center
justify-center
text-[#211eec]
group-hover:scale-110
transition
">


<Icon size={22}/>


</div>



<p className="
text-sm
font-medium
mt-3
text-gray-700
">

{item.title}

</p>


</div>

)

}

)

}


</div>


</div>









{/* Gallery */}



<div className="
mt-10
">


<h3 className="
font-semibold
text-lg
mb-5
">

Campus Gallery

</h3>



<div className="
grid
grid-cols-2
md:grid-cols-3
gap-4
">


{
images.map(
(img:string,index:number)=>(


<div

key={index}

className="
relative
h-40
md:h-52
rounded-xl
overflow-hidden
group
"


>


<Image

src={img}

fill

alt="Campus image"

className="
object-cover
group-hover:scale-110
transition
duration-500
"

/>



<div className="
absolute
inset-0
bg-black/0
group-hover:bg-black/20
transition
"/>


</div>


)

)

}


</div>


</div>








{/* Student Experience */}



<div className="
mt-10
bg-[#f8f9ff]
rounded-xl
p-5
">


<h3 className="
font-semibold
mb-4
">

Student Experience

</h3>



<div className="
grid
md:grid-cols-2
gap-3
">


{
[
"Industry focused learning environment",
"Active clubs and student communities",
"Modern recreation facilities",
"Career development activities"

].map(
(item)=>(


<div

key={item}

className="
flex
items-center
gap-3
text-sm
text-gray-700
">


<CheckCircle2

size={18}

className="
text-[#1e1eec]
"

/>


{item}


</div>


)

)

}


</div>


</div>





</div>


</section>


)

}