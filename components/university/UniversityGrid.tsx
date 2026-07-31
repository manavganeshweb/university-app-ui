"use client"


import UniversityCard from "./UniversityCard"



export default function UniversityGrid({

data

}:{
data:any[]
}){


return(

<div
className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-6
"
>


{
data.map((university)=>(

<UniversityCard

key={university.id}

university={university}

/>

))

}


</div>

)

}