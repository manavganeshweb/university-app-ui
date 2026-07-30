"use client"

import {useState} from "react"


export default function CompareDrawer(){

const [open,setOpen]=useState(false)


return(

<>

<button

onClick={()=>setOpen(true)}

className="fixed bottom-6 right-6 rounded-full bg-black px-6 py-4 text-white"

>

Compare

</button>



{
open &&

<div className="fixed inset-0 bg-black/50 flex items-end">


<div className="w-full rounded-t-3xl bg-white p-8">


<h2 className="text-2xl font-bold">
Compare Universities
</h2>


<p className="mt-3">
Select universities to compare
</p>


<button

onClick={()=>setOpen(false)}

className="mt-5 rounded bg-red-600 px-5 py-2 text-white"

>

Close

</button>


</div>


</div>

}


</>

)

}