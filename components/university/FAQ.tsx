"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronDown,
  Search,
  MessageCircle,
  HelpCircle,
} from "lucide-react"

import SectionWrapper from "./SectionWrapper"


interface Props {
  university?: any
  id?: string
}



const defaultFaqs = [

  {
    question:
      "Is this university approved and recognised?",
    answer:
      "Yes, the university is recognised by UGC and other regulatory bodies. Students can check accreditation details before applying."
  },


  {
    question:
      "What courses are offered by this university?",
    answer:
      "The university offers undergraduate, postgraduate and professional programmes in Engineering, Management, Computer Applications, Commerce and other fields."
  },


  {
    question:
      "What is the admission process?",
    answer:
      "Students need to select a programme, fill the application form, upload required documents and complete the admission fee payment."
  },


  {
    question:
      "Does the university provide placement assistance?",
    answer:
      "Yes, the university has a dedicated placement cell that helps students with training, internships and recruitment opportunities."
  },


  {
    question:
      "Are scholarships available?",
    answer:
      "Yes, scholarships are available based on academic performance and other eligibility criteria."
  }

]



export default function FAQ({

  university,

  id="faq"

}:Props){


const [open,setOpen] =
useState<number | null>(null)


const [search,setSearch] =
useState("")



const faqs =
university?.faq || defaultFaqs



const filteredFaqs =
faqs.filter(
(item:any)=>
item.question
.toLowerCase()
.includes(search.toLowerCase())
)



return (

<SectionWrapper

id={id}

title="Frequently Asked Questions"

subtitle="Find answers to common questions about admission, courses and campus."

>


<div className="space-y-8">


{/* Search */}


<div className="
relative
max-w-xl
">


<Search

size={20}

className="
absolute
left-4
top-1/2
-translate-y-1/2
text-slate-400
"

/>


<input

value={search}

onChange={(e)=>
setSearch(e.target.value)
}

placeholder="Search your question..."

className="
w-full
rounded-2xl
border
bg-slate-50
py-4
pl-12
pr-5
outline-none
transition
focus:border-blue-500
focus:bg-white
"

/>


</div>





{/* FAQ List */}



<div className="
space-y-4
">


{
filteredFaqs.map(
(item:any,index:number)=>(


<motion.div

key={index}

initial={{
opacity:0,
y:20
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

className="
overflow-hidden
rounded-2xl
border
bg-white
"

>


<button

onClick={()=> 
setOpen(
open===index
?null
:index
)
}

className="
flex
w-full
items-center
justify-between
gap-5
p-6
text-left
"

>


<div className="
flex
items-center
gap-4
">


<div className="
rounded-xl
bg-blue-50
p-2
text-blue-600
">

<HelpCircle size={22}/>

</div>



<h3 className="
font-bold
text-slate-900
">

{item.question}

</h3>


</div>



<motion.div

animate={{
rotate:
open===index
?180
:0
}}

>

<ChevronDown

className="text-blue-600"

/>


</motion.div>


</button>






<AnimatePresence>


{
open===index && (

<motion.div

initial={{
height:0,
opacity:0
}}

animate={{
height:"auto",
opacity:1
}}

exit={{
height:0,
opacity:0
}}

transition={{
duration:.3
}}

className="
overflow-hidden
"

>


<p className="
border-t
px-6
py-5
leading-7
text-slate-600
">

{item.answer}

</p>


</motion.div>

)

}


</AnimatePresence>


</motion.div>


))

}


</div>






{/* Expert CTA */}



<motion.div

whileHover={{
scale:1.02
}}

className="
rounded-3xl
bg-gradient-to-r
from-blue-600
to-cyan-500
p-8
text-white
"

>


<div className="
flex
flex-col
gap-5
md:flex-row
md:items-center
md:justify-between
">


<div>


<h3 className="
text-2xl
font-bold
">

Still have questions?

</h3>


<p className="
mt-2
text-white/80
">

Talk with our admission expert for personalised guidance.

</p>


</div>




<button

className="
flex
items-center
justify-center
rounded-full
bg-white
px-6
py-3
font-semibold
text-blue-600
transition
hover:scale-105
"

>


<MessageCircle

size={18}

className="mr-2"

/>


Talk To Expert


</button>



</div>


</motion.div>



</div>


</SectionWrapper>


)

}