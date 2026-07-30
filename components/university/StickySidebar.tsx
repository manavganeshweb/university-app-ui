"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Phone,
  Download,
  FileText,
  CheckCircle2,
  GitCompare,
  MapPin,
  GraduationCap,
  IndianRupee
} from "lucide-react"

import LoginModal from "../auth/LoginModal"



interface Props {

  university:any

}



export default function StickySidebar({

university

}:Props){



const [open,setOpen] = useState(false)



return (

<aside className="
hidden
lg:block
">


<motion.div

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}
className="
sticky
top-28
space-y-6
h-fit
"


>



{/* Apply Card */}


<div className="
rounded-3xl
bg-white
p-6
shadow-xl
border
"


>


<h3 className="
text-xl
font-bold
text-slate-900
">

Get Admission Assistance

</h3>


<p className="
mt-2
text-sm
text-slate-500
">

Talk with our counsellor and apply easily.

</p>




<button

onClick={()=>setOpen(true)}

className="
mt-6
w-full
rounded-full
bg-blue-600
px-6
py-4
font-bold
text-white
transition
hover:bg-blue-700
hover:scale-[1.02]
active:scale-95
"

>

Apply Now

</button>




<button

className="
mt-3
flex
w-full
items-center
justify-center
gap-2
rounded-full
border
border-blue-200
bg-blue-50
px-6
py-3
font-semibold
text-blue-600
transition
hover:bg-blue-100
"

>


<Phone size={18}/>

Talk To Expert


</button>


</div>







{/* University Info */}



<div className="
rounded-3xl
bg-white
p-6
shadow-xl
border
">


<h3 className="
text-lg
font-bold
">

University Highlights

</h3>



<div className="
mt-5
space-y-4
">


<InfoItem

icon={<MapPin/>}

title="Location"

value={university.location}

/>



<InfoItem

icon={<GraduationCap/>}

title="Courses"

value={`${university.courses?.length || 50}+ Programs`}

/>



<InfoItem

icon={<IndianRupee/>}

title="Average Fees"

value={university.fees || "₹1 Lakh onwards"}

/>



<InfoItem

icon={<CheckCircle2/>}

title="Approval"

value="UGC Approved"

/>



</div>


</div>








{/* Documents */}


<div className="
rounded-3xl
bg-gradient-to-br
from-blue-600
to-cyan-500
p-6
text-white
">


<div className="
flex
items-center
gap-3
">


<div className="
rounded-xl
bg-white/20
p-3
">

<FileText/>

</div>


<div>

<h3 className="
font-bold
">

Download Brochure

</h3>


<p className="
text-sm
text-white/80
">

Get complete university details

</p>


</div>


</div>




<button

className="
mt-5
flex
w-full
items-center
justify-center
gap-2
rounded-full
bg-white
px-5
py-3
font-bold
text-blue-600
transition
hover:scale-105
"

>


<Download size={18}/>

Download PDF


</button>


</div>








{/* Compare */}



<button

className="
flex
w-full
items-center
justify-center
gap-2
rounded-full
border
bg-white
px-6
py-4
font-bold
text-slate-700
shadow-lg
transition
hover:border-blue-500
hover:text-blue-600
"

>


<GitCompare size={18}/>

Compare University


</button>






</motion.div>





<LoginModal

open={open}

onClose={()=>setOpen(false)}

/>



</aside>


)

}







function InfoItem({

icon,

title,

value

}:any){


return (

<div className="
flex
items-center
gap-4
">


<div className="
rounded-xl
bg-blue-50
p-3
text-blue-600
">

{icon}

</div>



<div>

<p className="
text-xs
text-slate-500
">

{title}

</p>


<h4 className="
font-semibold
text-slate-900
">

{value}

</h4>


</div>



</div>

)

}