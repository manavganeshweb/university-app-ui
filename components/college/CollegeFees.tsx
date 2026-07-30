"use client"

import {
  IndianRupee,
  CreditCard,
  CalendarDays,
  BadgePercent,
  CheckCircle2
} from "lucide-react"



interface Props{
 college:any
}



export default function CollegeFee({
 college
}:Props){



const fees = college.fees || [

{
course:"Online MBA",
duration:"2 Years",
total:"₹1,50,000",
semester:"₹37,500 / Semester"
},

{
course:"BBA",
duration:"3 Years",
total:"₹90,000",
semester:"₹15,000 / Semester"
},

{
course:"MCA",
duration:"2 Years",
total:"₹1,20,000",
semester:"₹30,000 / Semester"
}

]





const paymentOptions=[

"Semester-wise payment",

"Online payment facility",

"EMI options available",

"Scholarship benefits"

]






return(

<section

id="fees"

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
text-[#2c1eec]
flex
items-center
justify-center
">


<IndianRupee size={23}/>


</div>



<div>


<h2 className="
text-2xl
md:text-3xl
font-semibold
text-[#282529]
">

Fee Structure

</h2>


<p className="
text-sm
text-gray-500
mt-1
">

Course fees and payment details

</p>


</div>


</div>









{/* Fee Cards */}



<div className="
space-y-5
">


{
fees.map(
(fee:any)=>(


<div

key={fee.course}

className="
border
rounded-2xl
p-5
hover:shadow-md
hover:border-blue-200
transition
"


>


<div className="
flex
flex-col
md:flex-row
justify-between
gap-5
">


<div>


<h3 className="
font-semibold
text-lg
text-gray-900
">

{fee.course}

</h3>


<p className="
text-sm
text-gray-500
mt-1
">

Duration: {fee.duration}

</p>


</div>





<div className="
bg-blue-50
rounded-xl
px-5
py-3
text-center
">


<p className="
text-xs
text-gray-500
">

Total Fee

</p>


<p className="
text-xl
font-semibold
text-[#1e2cec]
">

{fee.total}

</p>


</div>


</div>






<div className="
mt-5
grid
md:grid-cols-2
gap-4
">


<div className="
flex
items-center
gap-3
bg-gray-50
rounded-xl
p-3
">


<CalendarDays

size={18}

className="
text-[#1e39ec]
"

/>


<div>


<p className="
text-xs
text-gray-500
">

Payment Plan

</p>


<p className="
text-sm
font-medium
">

{fee.semester}

</p>


</div>


</div>




<div className="
flex
items-center
gap-3
bg-gray-50
rounded-xl
p-3
">


<CreditCard

size={18}

className="
text-[#1e40ec]
"

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

Online Payment

</p>


</div>


</div>



</div>





</div>


)

)

}


</div>









{/* Payment Benefits */}



<div className="
mt-10
grid
md:grid-cols-2
gap-6
">


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


<BadgePercent

size={21}

className="
text-[#1e3dec]
"

/>


<h3 className="
font-semibold
">

Payment Benefits

</h3>


</div>





<div className="
space-y-3
">


{
paymentOptions.map(
(item)=>(


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
text-green-500
"

/>


{item}


</div>


)

)

}


</div>


</div>






{/* Scholarship CTA */}



<div className="
bg-gradient-to-r
from-[#1e40ec]
to-[#1700af]
rounded-xl
p-5
text-white
">


<h3 className="
font-semibold
text-lg
">

Need Financial Assistance?

</h3>



<p className="
text-sm
mt-2
opacity-90
">

Get guidance about scholarships, EMI and payment options.

</p>




<button className="
mt-5
bg-white
text-[#1e44ec]
px-6
py-2.5
rounded-lg
font-medium
">

Check Eligibility

</button>



</div>




</div>





</div>


</section>


)

}