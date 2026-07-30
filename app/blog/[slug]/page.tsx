import { notFound } from "next/navigation"

import { blogs } from "../../../lib/blogs"

import { Header } from "../../../components/Header"
import Footer from "../../../components/Footer"


export default async function BlogDetailPage({

params

}:{

params:Promise<{slug:string}>

}){


const {slug}=await params


const blog = blogs.find(
(item)=>item.slug===slug
)



if(!blog){

notFound()

}



return(

<>

<Header/>


<main className="
bg-gradient-to-b
from-blue-50
via-white
to-slate-50
min-h-screen
">


<section className="
max-w-5xl
mx-auto
px-6
py-20
">


<img

src={blog.image}

alt={blog.title}

className="
w-full
h-[400px]
object-cover
rounded-3xl
shadow-xl
"

/>



<div className="mt-8">


<span className="
text-blue-600
font-semibold
">

{blog.category}

</span>



<h1 className="
mt-4
text-4xl
font-bold
text-slate-900
">

{blog.title}

</h1>



<p className="
mt-6
text-lg
text-slate-600
">

{blog.description}

</p>


</div>


</section>


</main>


<Footer/>

</>

)

}