"use client"

import {
  GraduationCap,
  CalendarDays,
  FileText,
  CheckCircle2,
  ArrowRight,
  ClipboardCheck
} from "lucide-react"



interface Props{
 college:any
}



export default function CollegeAdmission({
 college
}:Props){



const steps = college.admissionSteps || [

{
title:"Register Online",
description:"Fill the application form with your basic details"
},

{
title:"Submit Documents",
description:"Upload required academic and identity documents"
},

{
title:"Application Review",
description:"The admission team verifies your application"
},

{
title:"Confirm Admission",
description:"Complete payment and start your learning journey"
}

]




const documents=[

"10th & 12th Marksheet",

"Graduation Certificate",

"Identity Proof",

"Passport Size Photograph",

"Signature"

]





return(

<section

id="admission"

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
mb-7
">


<div className="
w-11
h-11
rounded-xl
bg-blue-50
text-[#1e1eec]
flex
items-center
justify-center
">

<GraduationCap size={23}/>

</div>



<div>

<h2 className="
text-2xl
md:text-3xl
font-semibold
text-[#282529]
">

Admission Process

</h2>


<p className="
text-sm
text-gray-500
mt-1
">

Steps to get enrolled at {college.name}

</p>


</div>


</div>







{/* Important Dates */}



<div className="
bg-[#f9f8ff]
rounded-xl
p-5
flex
flex-col
md:flex-row
justify-between
gap-5
mb-8
">


<div className="
flex
items-center
gap-3
">


<div className="
w-10
h-10
rounded-lg
bg-white
flex
items-center
justify-center
text-[#281eec]
">

<CalendarDays size={20}/>

</div>



<div>

<p className="
text-xs
text-gray-500
">

Application Open

</p>


<p className="
font-medium
">

{
college.applicationDate || 
"Admissions Open"
}

</p>


</div>


</div>




<button className="
bg-[#1e25ec]
text-white
px-6
py-2.5
rounded-lg
font-medium
flex
items-center
justify-center
gap-2
hover:bg-blue-700
transition
">

Apply Now

<ArrowRight size={16}/>

</button>



</div>








{/* Timeline */}



<h3 className="
font-semibold
text-lg
mb-5
">

How To Apply

</h3>




<div className="
space-y-5
">

{
steps.map(
(step:any,index:number)=>(


<div

key={step.title}

className="
flex
gap-4
"


>


<div className="
flex
flex-col
items-center
">


<div className="
w-9
h-9
rounded-full
bg-[#3d1eec]
text-white
flex
items-center
justify-center
font-semibold
text-sm
">

{index+1}

</div>


{
index !== steps.length-1 &&

<div className="
w-[2px]
h-12
bg-blue-100
mt-2
"/>

}


</div>





<div className="
border
rounded-xl
p-4
flex-1
hover:shadow-sm
transition
">


<h4 className="
font-medium
text-gray-900
">

{step.title}

</h4>


<p className="
text-sm
text-gray-500
mt-1
">

{step.description}

</p>


</div>



</div>


)

)

}


</div>







{/* Eligibility + Documents */}



<div className="
grid
md:grid-cols-2
gap-6
mt-10
">



{/* Eligibility */}



<div className="
border
rounded-xl
p-5
">


<div className="
flex
items-center
gap-2
mb-4
">


<ClipboardCheck

size={20}

className="
text-[#1e1eec]
"

/>


<h3 className="
font-semibold
">

Eligibility Criteria

</h3>


</div>



<p className="
text-sm
text-gray-600
leading-6
">

{
college.eligibility ||

"Candidates must have completed the required qualification from a recognised board or university."

}

</p>


</div>







{/* Documents */}



<div className="
border
rounded-xl
p-5
">


<div className="
flex
items-center
gap-2
mb-4
">


<FileText

size={20}

className="
text-[#1e1eec]
"

/>


<h3 className="
font-semibold
">

Required Documents

</h3>


</div>



<div className="
space-y-3
">


{
documents.map(
(doc)=>(


<div

key={doc}

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
text-[#1e47ec]
"

/>


{doc}


</div>


)

)

}


</div>


</div>




</div>







</div>


</section>


)

}