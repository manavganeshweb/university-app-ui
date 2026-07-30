import { notFound } from "next/navigation"

import { universities } from "../../../lib/universities"

import { Header } from "../../../components/Header"
import Footer from "../../../components/Footer"
import UniversityNav from "../../../components/university/UniversityNav"
import HeroCard from "../../../components/university/hero"
import Overview from "../../../components/university/Overview"
import CourseSection from "../../../components/university/CourseSection"
import Placement from "../../../components/university/Placement"
import FeeSection from "../../../components/university/FeeSection"
import Gallery from "../../../components/university/Gallery"
import FAQ from "../../../components/university/FAQ"
import AdmissionTimeline from "../../../components/university/AdmissionTimeline"
import SimilarUniversities from "../../../components/university/SimilarUniversities"
import CompareDrawer from "../../../components/university/CompareDrawer"
import BottomMobileBar from "../../../components/university/BottomMobileBar"

export default async function UniversityPage({

params,

}:{

params:Promise<{slug:string}>

}){


const {slug}=await params


const university = universities.find(

(item)=>item.slug===slug

)


if(!university){

notFound()

}



return(

<>

<Header/>


<main className="bg-slate-50">


{/* Hero */}

<HeroCard university={university}/>

<UniversityNav/>

{/* Main Content */}

<section className="
mx-auto
max-w-7xl
px-4
py-12
sm:px-6
lg:px-8
">


<div className="
mx-auto
max-w-5xl
space-y-12
">


<div 
id="overview"
className="scroll-mt-32"
>

<Overview university={university}/>

</div>



<div 
id="courses"
className="scroll-mt-32"
>

<CourseSection university={university}/>

</div>



<div 
id="fees"
className="scroll-mt-32"
>

<FeeSection university={university}/>

</div>



<div 
id="placement"
className="scroll-mt-32"
>

<Placement university={university}/>

</div>



<div 
id="admission"
className="scroll-mt-32"
>

<AdmissionTimeline/>

</div>



<div 
id="gallery"
className="scroll-mt-32"
>

<Gallery university={university}/>

</div>



<div 
id="faq"
className="scroll-mt-32"
>

<FAQ/>

</div>



<div
id="similar"
className="scroll-mt-32"
>

<SimilarUniversities university={university}/>

</div>



</div>


</section>

</main>


<CompareDrawer/>



<Footer/>
<BottomMobileBar/>


</>

)

}