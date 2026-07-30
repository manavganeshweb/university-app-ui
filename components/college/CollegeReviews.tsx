"use client"

import {
  Star,
  MessageSquare,
  CheckCircle2,
  Users
} from "lucide-react"



interface Props{
 college:any
}



export default function CollegeReviews({
 college
}:Props){



const reviews = college.reviews || [

{
name:"Rahul Sharma",
course:"Online MBA",
rating:5,
comment:
"The learning experience was excellent. Faculty support and online resources were very helpful."
},

{
name:"Priya Singh",
course:"BBA",
rating:4,
comment:
"The course structure is good and flexible for working students."
},

{
name:"Aman Verma",
course:"MCA",
rating:5,
comment:
"Great platform, good mentorship and career guidance."
}

]




const ratingData=[

{
star:"5 Star",
value:"80%"
},

{
star:"4 Star",
value:"15%"
},

{
star:"3 Star",
value:"5%"
},

{
star:"2 Star",
value:"0%"
},

{
star:"1 Star",
value:"0%"
}

]





return(

<section

id="reviews"

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
text-[#1e40ec]
flex
items-center
justify-center
">

<MessageSquare size={23}/>

</div>



<div>

<h2 className="
text-2xl
md:text-3xl
font-semibold
text-[#282529]
">

Student Reviews

</h2>


<p className="
text-sm
text-gray-500
mt-1
">

What students say about {college.name}

</p>


</div>


</div>








{/* Rating Overview */}



<div className="
grid
md:grid-cols-[220px_1fr]
gap-8
bg-[#f8f9ff]
rounded-xl
p-5
md:p-6
">


{/* Main Rating */}



<div className="
text-center
border-r-0
md:border-r
border-blue-100
">


<h3 className="
text-5xl
font-semibold
text-gray-900
">

{college.rating || "4.5"}

</h3>



<div className="
flex
justify-center
text-yellow-400
mt-2
">


{
Array.from({
length:5
}).map(
(_,i)=>(


<Star

key={i}

size={18}

fill="currentColor"

/>


)

)

}


</div>



<p className="
text-sm
text-gray-500
mt-3
">

Based on student reviews

</p>


</div>






{/* Rating Progress */}



<div className="
space-y-3
">


{
ratingData.map(
(item)=>(


<div

key={item.star}

className="
flex
items-center
gap-3
"


>


<span className="
text-sm
w-12
text-gray-600
">

{item.star}

</span>




<div className="
flex-1
h-2
bg-gray-200
rounded-full
overflow-hidden
">


<div

className="
h-full
bg-[#251eec]
rounded-full
"

style={{
width:item.value
}}

/>


</div>



<span className="
text-sm
text-gray-500
">

{item.value}

</span>



</div>


)

)

}


</div>



</div>









{/* Review Cards */}



<div className="
mt-8
space-y-5
">


{
reviews.map(
(review:any,index:number)=>(


<div

key={index}

className="
border
rounded-xl
p-5
hover:shadow-md
transition
"


>



<div className="
flex
justify-between
items-start
gap-4
">


<div>


<h4 className="
font-semibold
text-gray-900
flex
items-center
gap-2
">

{review.name}


<CheckCircle2

size={15}

className="
text-green-500
"

/>


</h4>



<p className="
text-xs
text-gray-500
mt-1
">

{review.course}

</p>


</div>





<div className="
flex
items-center
gap-1
text-yellow-400
">


{
Array.from({
length:review.rating
}).map(
(_,i)=>(

<Star

key={i}

size={15}

fill="currentColor"

/>

)

)

}


</div>



</div>






<p className="
mt-4
text-sm
text-gray-600
leading-6
">

"{review.comment}"

</p>




</div>


)

)

}


</div>








{/* Review CTA */}



<div className="
mt-8
flex
flex-col
md:flex-row
items-center
justify-between
gap-4
bg-gray-50
rounded-xl
p-5
">


<div className="
flex
items-center
gap-3
">


<div className="
w-10
h-10
rounded-full
bg-blue-50
text-[#1e40ec]
flex
items-center
justify-center
">


<Users size={20}/>


</div>



<div>

<h3 className="
font-semibold
">

Share Your Experience

</h3>


<p className="
text-sm
text-gray-500
">

Help other students choose the right college

</p>


</div>


</div>





<button className="
bg-[#1e44ec]
text-white
px-6
py-2.5
rounded-lg
font-medium
hover:bg-blue-700
transition
">

Write a Review

</button>


</div>




</div>


</section>


)

}