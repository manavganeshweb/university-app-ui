import {notFound} from "next/navigation"

import {colleges} from "../../../lib/colleges"

import {Header} from "../../../components/Header"
import Footer from "../../../components/Footer"
import SectionMotion from "../../../components/SectionMotion"
import CollegeHero from "../../../components/college/CollegeHero"
import CollegeNav from "../../../components/college/CollegeNav"

import CollegeOverview from "../../../components/college/CollegeOverview"
import CollegeCourses from "../../../components/college/CollegeCourses"
import CollegeAdmission from "../../../components/college/CollegeAdmission"
import CollegeFees from "../../../components/college/CollegeFees"
import CollegePlacement from "../../../components/college/CollegePlacement"
import CollegeCampus from "../../../components/college/CollegeCampus"
import CollegeReviews from "../../../components/college/CollegeReviews"
import CollegeFAQ from "../../../components/college/CollegeFAQ"


export default async function CollegePage({
params
}:{
params:Promise<{slug:string}>
}){


const {slug}=await params


const college=colleges.find(
(item)=>item.slug===slug
)


if(!college){
notFound()
}



return(

<>

<Header/>


<main
className="
bg-gradient-to-b
from-blue-50
via-white
to-slate-50
"
>

<CollegeHero college={college}/>



<div className="
max-w-7xl
mx-auto
px-4
py-10
">


<div className="
grid
grid-cols-1
lg:grid-cols-[250px_1fr]
gap-10
">


{/* Sticky Navigation */}

<aside>

<CollegeNav/>

</aside>




{/* Content */}
<div className="
space-y-12
">


<SectionMotion>

<section
id="overview"
className="scroll-mt-28"
>

<CollegeOverview college={college}/>

</section>

</SectionMotion>




<SectionMotion>

<section
id="courses"
className="scroll-mt-28"
>

<CollegeCourses college={college}/>

</section>

</SectionMotion>




<SectionMotion>

<section
id="admission"
className="scroll-mt-28"
>

<CollegeAdmission college={college}/>

</section>

</SectionMotion>




<SectionMotion>

<section
id="fees"
className="scroll-mt-28"
>

<CollegeFees college={college}/>

</section>

</SectionMotion>




<SectionMotion>

<section
id="placement"
className="scroll-mt-28"
>

<CollegePlacement college={college}/>

</section>

</SectionMotion>




<SectionMotion>

<section
id="campus"
className="scroll-mt-28"
>

<CollegeCampus college={college}/>

</section>

</SectionMotion>




<SectionMotion>

<section
id="reviews"
className="scroll-mt-28"
>

<CollegeReviews college={college}/>

</section>

</SectionMotion>




<SectionMotion>

<section
id="faq"
className="scroll-mt-28"
>

<CollegeFAQ college={college}/>

</section>

</SectionMotion>


</div>


</div>

</div>


</main>


<Footer/>

</>

)

}