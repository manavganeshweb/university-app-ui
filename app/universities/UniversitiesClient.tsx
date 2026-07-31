"use client"


import {useState} from "react"
import UniversityGrid from "../../components/university/UniversityGrid"



export default function UniversitiesClient({

universities

}:{
universities:any[]
}){


const [search,setSearch]=useState("")


const filtered =
universities.filter((item)=>

item.name
.toLowerCase()
.includes(
search.toLowerCase()
)

)



return(

<div className="
max-w-7xl
mx-auto
px-5
py-16
">


<h1 className="
text-5xl
font-bold
mb-10
">

Explore Universities

</h1>



<input

value={search}

onChange={(e)=>
setSearch(e.target.value)
}

placeholder="
Search university...
"

className="
w-full
mb-10
rounded-xl
border
px-5
py-4
"

/>



<UniversityGrid

data={filtered}

/>


</div>

)

}