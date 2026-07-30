"use client";

import Image from "next/image";
import Link from "next/link";

import {
MapPin,
ArrowRight,
Scale
} from "lucide-react";

import {
useCompare
} from "../../context/CourseCompareContext";


export default function ProviderCard({

provider,

course

}:any){



if(!provider)
return null;



const {
addItem,
selectedItems=[]
}=useCompare();



const selected =
selectedItems.some(
(item:any)=>
item.slug===provider.slug
);



return (

<div
className="
rounded-3xl
bg-white
border
p-6
shadow-sm
hover:shadow-xl
transition
"
>


<div className="
flex
items-center
gap-4
">


<Image

src={provider.logo}

width={70}

height={70}

alt={provider.name}

className="
rounded-full
border
"

/>


<div>

<h3 className="
font-black
text-xl
">

{provider.name}

</h3>


<div className="
flex
items-center
gap-1
text-sm
text-zinc-500
">

<MapPin size={14}/>

{provider.location}

</div>


</div>


</div>



<div className="
mt-5
flex
justify-between
items-center
">

<span
className="
rounded-full
bg-blue-50
px-3
py-1
text-sm
font-bold
text-blue-600
"
>

{
course?.title ?? "Course"
}

</span>


<span>

⭐ {provider.rating}

</span>


</div>



<div className="
mt-6
grid
grid-cols-2
gap-3
">


<Link

href={`/college/${provider.slug}`}

className="
rounded-xl
bg-blue-600
py-3
text-center
font-bold
text-white
"

>

View

</Link>


<button

onClick={()=>
addItem({

slug:provider.slug,

name:provider.name,

title:provider.name,

image:provider.logo,

type:"university",

location:provider.location,

rating:provider.rating,

fees:provider.fees,

course:course?.title

})

}

className={`
rounded-xl
border
font-bold

${
selected
?
"bg-blue-100 text-blue-600"
:
"hover:bg-blue-50"
}

`}

>


<Scale size={16}/>

{
selected
?
"Added"
:
"Compare"
}


</button>


</div>


</div>


)

}