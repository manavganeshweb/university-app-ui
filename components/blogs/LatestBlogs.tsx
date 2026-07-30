import BlogCard from "./BlogCard"
import {blogs} from "../../lib/blogs"


export default function LatestBlogs(){

return(

<section className="
max-w-7xl
mx-auto
px-6
py-16
">


<h2 className="
text-3xl
font-bold
mb-10
">

Latest Articles

</h2>



<div className="
grid
md:grid-cols-3
gap-8
">

{
blogs.map((blog,index)=>(

<BlogCard
key={index}
blog={blog}
/>

))
}

</div>


</section>

)

}