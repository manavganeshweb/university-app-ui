"use client"


import Link from "next/link"
import {universities} from "../../lib/universities"
import UniversityGrid from "../university/UniversityGrid"



export function Universities(){


const topUniversities =
universities.slice(0,6)



return(

<section
id="Universities"
className="
py-16
sm:py-20
"
>


<div
className="
mx-auto
max-w-7xl
px-4
"
>


<div className="flex justify-between items-center">


<h2 className="
text-4xl
font-bold
">

Top Universities

</h2>


<Link

href="/universities"

className="
text-red-600
font-semibold
"

>

View All →

</Link>


</div>



<div className="mt-10">


<UniversityGrid

data={topUniversities}

/>


</div>



</div>


</section>

)

}