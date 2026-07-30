"use client";

import {
Scale
} from "lucide-react";

import {
useCompare
} from "../../context/CourseCompareContext";


export default function CompareButton({
item
}:any){


const {
selectedItems,
addItem
}=useCompare();



const selected =
selectedItems.some(
(x:any)=>x.slug===item.slug
);



return (

<button

disabled={selected}

onClick={()=>
addItem(item)
}


className={`
w-full
mt-3
flex
items-center
justify-center
gap-2
rounded-xl
border
py-3
font-bold

${
selected
?
"bg-blue-100 text-blue-600 cursor-not-allowed"
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