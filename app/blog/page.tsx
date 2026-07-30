import { Header } from "../../components/Header"
import Footer from "../../components/Footer"

import BlogHero from "../../components/blogs/BlogHero"
import BlogCategories from "../../components/blogs/BlogCategories"
import FeaturedBlogs from "../../components/blogs/FeaturedBlogs"
import LatestBlogs from "../../components/blogs/LatestBlogs"
import Newsletter from "../../components/blogs/Newsletter"


export default function BlogPage(){

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


<BlogHero/>


<BlogCategories/>


<FeaturedBlogs/>


<LatestBlogs/>


<Newsletter/>


</main>


<Footer/>

</>

)

}