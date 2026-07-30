"use client";


import {
Scale
} from "lucide-react";


import {
useCompare
}
from "../../context/CourseCompareContext";



export default function CompareButton({

item

}:{
item:any
}){


const {
addItem,
isSelected
}=useCompare();



const selected =
isSelected(item.slug);



return (

<button

disabled={selected}

onClick={()=>


addItem({

...item,

title:
item.title ||
item.name,


type:
item.type || "course"


})


}


className={`
w-full
flex
items-center
justify-center
gap-2
rounded-xl
border
py-3
font-bold

transition

${
selected

?

"bg-blue-100 text-blue-600"

:

"hover:bg-blue-50"

}

`}


>


<Scale size={17}/>


{

selected

?

"Added"

:

"Compare"

}



</button>

)

}