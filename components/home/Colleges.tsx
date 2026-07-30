"use client"

import Image from "next/image"
import Link from "next/link"

import {
  MapPin,
  ArrowRight,
  Star
} from "lucide-react"




const colleges = [

{
name:"Chandigarh University Online",
slug:"chandigarh-university-online",
location:"Mohali, Punjab",
rating:"4.6",
image:"/colleges/cu-banner.webp",
courses:"Online MBA, MCA, BBA"
},


{
name:"Amity University Online",
slug:"amity-university-online",
location:"Noida, Uttar Pradesh",
rating:"4.5",
image:"/colleges/amity-banner.webp",
courses:"MBA, MCA, BCA"
},


{
name:"Lovely Professional University Online",
slug:"lovely-professional-university-online",
location:"Punjab",
rating:"4.4",
image:"/colleges/lpu-banner.webp",
courses:"MBA, MCA, BBA"
},


{
name:"Manipal University Jaipur Online",
slug:"manipal-university-jaipur-online",
location:"Jaipur, Rajasthan",
rating:"4.6",
image:"/colleges/manipal-banner.webp",
courses:"MBA, MCA, BCA"
}


]





export function Colleges(){


return(

<section className="
py-16
bg-white
">


<div className="
max-w-7xl
mx-auto
px-4
sm:px-6
lg:px-8
">


{/* Heading */}


<div className="
flex
items-end
justify-between
mb-8
">


<div>


<p className="
text-[#ec1e24]
font-medium
text-sm
">

TOP COLLEGES

</p>


<h2 className="
text-3xl
md:text-4xl
font-semibold
text-gray-900
mt-2
">

Explore Best Colleges

</h2>


<p className="
text-gray-500
mt-2
">

Find the right college and start your career journey

</p>


</div>



<Link

href="/colleges"

className="
hidden
md:flex
items-center
gap-2
text-[#ec1e24]
font-medium
"

>

View All

<ArrowRight size={18}/>

</Link>


</div>








{/* College Cards */}


<div className="
grid
sm:grid-cols-2
lg:grid-cols-4
gap-6
">


{
colleges.map(
(college)=>(


<Link

key={college.slug}

href={`/college/${college.slug}`}

className="
group
bg-white
rounded-2xl
border
overflow-hidden
hover:shadow-xl
transition
"


>


{/* Image */}


<div className="
relative
h-48
overflow-hidden
">


<Image

src={college.image}

alt={college.name}

fill

className="
object-cover
group-hover:scale-110
transition
duration-500
"

/>



<div className="
absolute
top-3
right-3
bg-white
rounded-full
px-3
py-1
flex
items-center
gap-1
shadow
text-sm
">


<Star

size={14}

fill="orange"

className="text-orange-400"

/>


{college.rating}


</div>


</div>








{/* Content */}


<div className="
p-5
">


<h3 className="
font-semibold
text-lg
text-gray-900
group-hover:text-[#ec1e24]
transition
">

{college.name}

</h3>



<div className="
flex
items-center
gap-2
text-sm
text-gray-500
mt-2
">


<MapPin size={15}/>

{college.location}


</div>




<p className="
text-sm
text-gray-600
mt-4
line-clamp-2
">

{college.courses}

</p>




<button className="
mt-5
text-[#ec1e24]
text-sm
font-medium
flex
items-center
gap-1
">

View College

<ArrowRight size={15}/>

</button>


</div>



</Link>


)

)

}


</div>




</div>


</section>


)

}