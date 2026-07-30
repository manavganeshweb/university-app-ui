"use client"

import { 
  HelpCircle,
  ChevronDown
} from "lucide-react"

import {useState} from "react"



interface Props{
 college:any
}



export default function CollegeFAQ({
 college
}:Props){



const [open,setOpen]=useState<number | null>(0)



const faqs = college.faqs || [

{
question:`Is ${college.name} approved?`,
answer:
`${college.name} is recognised and approved by relevant educational authorities. Students can verify accreditation details before admission.`
},


{
question:"What courses are offered by the college?",
answer:
"The college offers undergraduate and postgraduate programs across multiple disciplines with flexible learning options."
},


{
question:"What is the admission process?",
answer:
"Students need to register online, submit required documents, complete verification and confirm admission by paying the applicable fee."
},


{
question:"What are the eligibility criteria?",
answer:
"Eligibility depends on the selected program. Generally, candidates must have completed the required qualification from a recognised institution."
},


{
question:"Does the college provide placement assistance?",
answer:
"Yes, the college provides career support, placement assistance, industry sessions and guidance to improve employment opportunities."
},


{
question:"Can I apply online?",
answer:
"Yes, students can apply online through the admission portal and complete the entire process digitally."
}

]





return(

<section

id="faq"

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
text-[#1e44ec]
flex
items-center
justify-center
">

<HelpCircle size={23}/>

</div>



<div>


<h2 className="
text-2xl
md:text-3xl
font-semibold
text-[#282529]
">

Frequently Asked Questions

</h2>


<p className="
text-sm
text-gray-500
mt-1
">

Common questions about {college.name}

</p>


</div>


</div>







{/* FAQ Accordion */}



<div className="
space-y-3
">


{
faqs.map(
(item:any,index:number)=>{


const active=open===index


return(

<div

key={index}

className={`
border
rounded-xl
overflow-hidden
transition

${
active
?
"border-blue-200 shadow-sm"
:
"border-gray-200"
}

`}

>


<button

onClick={()=>setOpen(
active ? null : index
)}

className="
w-full
flex
items-center
justify-between
gap-4
px-5
py-4
text-left
"


>


<span className="
font-medium
text-gray-800
text-sm
md:text-base
">

{item.question}

</span>



<ChevronDown

size={20}

className={`
text-[#1e39ec]
transition-transform
duration-300

${
active
?
"rotate-180"
:
""
}

`}

/>


</button>





<div

className={`
grid
transition-all
duration-300

${
active
?
"grid-rows-[1fr] opacity-100"
:
"grid-rows-[0fr] opacity-0"
}

`}

>


<div className="
overflow-hidden
">


<p className="
px-5
pb-5
text-sm
leading-6
text-gray-600
">

{item.answer}

</p>


</div>


</div>



</div>


)


}

)

}


</div>






{/* Bottom CTA */}


<div className="
mt-8
bg-[#f8f8ff]
rounded-xl
p-5
flex
flex-col
md:flex-row
items-center
justify-between
gap-4
">


<div>

<h3 className="
font-semibold
">

Still have questions?

</h3>


<p className="
text-sm
text-gray-500
mt-1
">

Talk with our admission experts for guidance.

</p>


</div>



<button className="
bg-[#391eec]
text-white
px-6
py-2.5
rounded-lg
font-medium
hover:bg-blue-700
transition
">

Contact Expert

</button>


</div>




</div>


</section>


)

}