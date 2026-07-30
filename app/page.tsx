import { Header } from "../components/Header"
import Footer from "../components/Footer"

import { Hero } from "../components/home/Hero"
import { PartnerRail } from "../components/home/Partner"
import { Programs } from "../components/home/Program"
import { Benefits } from "../components/home/benefits"
import { Trending } from "../components/home/Trending"
import { Universities } from "../components/home/Universities"
import { Compare } from "../components/home/Compare"
import { Testimonials } from "../components/home/Testimonials"
import { Colleges } from "../components/home/Colleges"
import { BlogSection } from "../components/home/BlogSection"


export default function HomePage(){

return(

<>

<Header/>


<main className="
overflow-hidden
">


{/* Hero Section */}

<Hero/>




{/* Trusted University Partners */}

<PartnerRail/>




{/* Popular Programs */}

<Programs/>




{/* Why Choose Us */}

<Benefits/>




{/* Trending Colleges */}

<Trending/>

<Colleges/>

<BlogSection/>


{/* University Listing */}

<Universities/>




{/* Compare Universities */}

<Compare/>




{/* Student Reviews */}

<Testimonials/>

</main>



<Footer/>


</>

)

}