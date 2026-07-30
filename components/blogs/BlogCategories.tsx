export default function BlogCategories(){

const categories=[
"All",
"Admissions",
"Career",
"Online Degree",
"Placement",
"College Guide"
]


return(

<div className="
flex
justify-center
gap-3
flex-wrap
py-6
">

{
categories.map(item=>(

<button

key={item}

className="
px-5
py-2
rounded-full
border
border-blue-200
bg-white
hover:bg-blue-600
hover:text-white
transition
"

>

{item}

</button>

))
}

</div>

)

}