import {Header} from "../../components/Header"
import Footer from "../../components/Footer"

import AboutHero from "../../components/about/AboutHero"
import Mission from "../../components/about/Mission"
import Stats from "../../components/about/Stats"
import WhyChooseUs from "../../components/about/WhyChooseUs"
import HowItWorks from "../../components/about/HowItWorks"
import AboutCTA from "../../components/about/AboutCTA"


export default function AboutPage(){

return (

<>

<Header/>


<main className="bg-slate-50 overflow-hidden">


<AboutHero/>

<Mission/>

<Stats/>

<WhyChooseUs/>

<HowItWorks/>

<AboutCTA/>


</main>


<Footer/>


</>

)

}