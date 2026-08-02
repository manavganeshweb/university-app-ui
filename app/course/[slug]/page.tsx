import {notFound} from "next/navigation";
import { courseProviders } from "../../../lib/courseProviders";
import ProviderCard from "../../../components/courses/ProviderCard";
import { courses } from "../../../lib/courses";
import ProgramSidebar from "../../../components/home/ProgramSidebar";
import { Header } from "../../../components/Header";
import Footer from "../../../components/Footer";
export default async function CoursePage({
    

params

}:{
params:Promise<{
slug:string
}>
}){


const {slug}=await params;
const course =
courses.find(
(item)=>item.slug===slug
);


const providers =
courseProviders[
slug as keyof typeof courseProviders
];


if(!providers){

notFound();

}

return (

<>
<Header/>

<main className="
min-h-screen
bg-gradient-to-b
from-blue-50
via-white
to-slate-50
">


{/* Hero */}

<section className="
relative
overflow-hidden
bg-gradient-to-r
from-blue-700
via-blue-600
to-cyan-500
py-20
text-white
">


<div className="
absolute
inset-0
bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.2),transparent_40%)]
"/>



<div className="
relative
container-page
text-center
">


<h1 className="
text-4xl
md:text-6xl
font-black
tracking-tight
">

{course?.title}

</h1>


<p className="
mx-auto
mt-5
max-w-2xl
text-lg
text-white/80
">

Find the best universities offering this program.
Compare fees, duration, mode and choose the right option.

</p>



<div className="
mt-8
flex
flex-wrap
justify-center
gap-4
">


<span className="
rounded-full
bg-white/20
px-5
py-2
font-semibold
backdrop-blur
">

{course?.category}

</span>



<span className="
rounded-full
bg-white/20
px-5
py-2
font-semibold
backdrop-blur
">

⏳ {course?.duration}

</span>



<span className="
rounded-full
bg-white/20
px-5
py-2
font-semibold
backdrop-blur
">

💰 {course?.fees}

</span>


</div>


</div>


</section>





{/* Content */}


<section className="
container-page
py-14
">


<div className="
flex
flex-col
lg:flex-row
gap-10
">

{/* Sidebar placeholder */}


<ProgramSidebar/>



{/* Providers */}

<div className="
flex-1
">


<div className="
mb-8
flex
items-center
justify-between
">


<div>

<h2 className="
text-3xl
font-black
text-zinc-900
">

Top Universities

</h2>


<p className="
mt-2
text-zinc-500
">

Universities offering {course?.title}

</p>


</div>


<div className="
rounded-full
bg-blue-100
px-4
py-2
text-sm
font-bold
text-blue-700
">

{providers.length} Options

</div>


</div>





<div className="
grid
gap-6
md:grid-cols-2
">


{
providers.map(
(provider,index)=>(


<div

key={provider.slug}

className="
animate-[fadeIn_.4s_ease]
"

>


<ProviderCard

provider={provider}

course={course}

/>


</div>


))

}


</div>


</div>


</div>


</section>



</main>
<Footer/>


</>

)
}