import {universities} from "../../lib/universities"
import UniversitiesClient from "./UniversitiesClient"



export default function UniversitiesPage(){


return(

<UniversitiesClient

universities={universities}

/>

)

}