"use client"

import {
  BookOpen,
  Clock,
  IndianRupee,
  GraduationCap,
  CheckCircle2,
  ChevronDown
} from "lucide-react"

import { useState } from "react"



interface Props{
 college:any
}



export default function CollegeCourses({
 college
}:Props){


const [showAll,setShowAll]=useState(false)



const courses = college.courses || [

{
name:"Online MBA",
type:"Post Graduation",
duration:"2 Years",
fees:"₹1,50,000",
eligibility:"Graduation with minimum 50%",
mode:"Online",
specializations:[
"Marketing",
"Finance",
"HR Management"
]
},


{
name:"BBA",
type:"Under Graduation",
duration:"3 Years",
fees:"₹90,000",
eligibility:"12th Pass",
mode:"Online",
specializations:[
"Management",
"Business Analytics"
]
},


{
name:"MCA",
type:"Post Graduation",
duration:"2 Years",
fees:"₹1,20,000",
eligibility:"BCA / Graduation",
mode:"Online",
specializations:[
"AI & ML",
"Data Science"
]
}

]



const visibleCourses =
showAll
?
courses
:
courses.slice(0,3)





return(

<section

id="courses"

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
mb-8
">


<div className="
w-11
h-11
rounded-xl
bg-blue-50
text-[#361eec]
flex
items-center
justify-center
">


<BookOpen size={22}/>


</div>



<div>

<h2 className="
text-2xl
md:text-3xl
font-semibold
text-[#282529]
">

Courses Offered

</h2>


<p className="
text-sm
text-gray-500
mt-1
">

Explore programs, eligibility and fees

</p>


</div>


</div>






{/* Course Cards */}


<div className="
space-y-5
">


{
visibleCourses.map(
(course:any)=>(


<div

key={course.name}

className="
border
rounded-2xl
p-5
hover:shadow-md
hover:border-blue-200
transition
"


>



{/* Top */}


<div className="
flex
flex-col
md:flex-row
justify-between
gap-4
">


<div>


<span className="
inline-flex
px-3
py-1
rounded-full
text-xs
font-medium
bg-blue-50
text-[#3d1eec]
">

{course.type}

</span>



<h3 className="
text-xl
font-semibold
mt-3
text-gray-900
">

{course.name}

</h3>


</div>




<button className="
hidden
md:block
bg-[#211eec]
text-white
px-5
py-2
rounded-lg
text-sm
hover:bg-blue-700
transition
">

Apply Now

</button>


</div>






{/* Details */}


<div className="
grid
sm:grid-cols-2
lg:grid-cols-4
gap-4
mt-6
">


<div className="
flex
gap-3
items-center
">


<Clock
size={18}
className="text-[#3d1eec]"
/>


<div>

<p className="
text-xs
text-gray-500
">

Duration

</p>

<p className="
text-sm
font-medium
">

{course.duration}

</p>


</div>


</div>






<div className="
flex
gap-3
items-center
">


<IndianRupee
size={18}
className="text-[#251eec]"
/>


<div>

<p className="
text-xs
text-gray-500
">

Fees

</p>


<p className="
text-sm
font-medium
">

{course.fees}

</p>


</div>


</div>






<div className="
flex
gap-3
items-center
">


<GraduationCap
size={18}
className="text-[#511eec]"
/>


<div>

<p className="
text-xs
text-gray-500
">

Eligibility

</p>


<p className="
text-sm
font-medium
">

{course.eligibility}

</p>


</div>


</div>





<div className="
flex
gap-3
items-center
">


<BookOpen
size={18}
className="text-[#1e25ec]"
/>


<div>

<p className="
text-xs
text-gray-500
">

Mode

</p>


<p className="
text-sm
font-medium
">

{course.mode}

</p>


</div>


</div>



</div>







{/* Specializations */}



<div className="
mt-6
">


<p className="
text-sm
font-medium
mb-3
">

Specializations

</p>



<div className="
flex
flex-wrap
gap-2
">


{
course.specializations?.map(
(item:string)=>(


<span

key={item}

className="
flex
items-center
gap-1
px-3
py-1.5
rounded-full
bg-gray-100
text-xs
text-gray-700
"


>


<CheckCircle2
size={13}
/>

{item}


</span>


)

)

}


</div>


</div>






{/* Mobile Button */}


<button className="
md:hidden
mt-5
w-full
bg-[#471eec]
text-white
py-2.5
rounded-lg
font-medium
">

Apply Now

</button>




</div>


)

)

}


</div>






{/* View More */}


{
courses.length>3 &&

<button

onClick={()=>setShowAll(!showAll)}

className="
mt-8
mx-auto
flex
items-center
gap-2
border
border-gray-300
px-6
py-2.5
rounded-full
text-sm
hover:border-[#1e44ec]
hover:text-[#361eec]
transition
"


>

{
showAll
?
"Show Less"
:
"View All Courses"
}


<ChevronDown

size={17}

className={`
transition
${showAll?"rotate-180":""}
`}

/>


</button>


}





</div>


</section>


)

}