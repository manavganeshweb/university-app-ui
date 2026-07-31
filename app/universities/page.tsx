import {universities} from "../../lib/universities"
import UniversitiesClient from "./UniversitiesClient"
import { Header } from "../../components/Header"
import Footer from "../../components/Footer"


export default function UniversitiesPage(){


return(
<>
<Header/>
<UniversitiesClient

universities={universities}

/>
<Footer/>
</>
)

}