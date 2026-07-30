"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, X } from "lucide-react";


export default function OfferPopup() {

const [open,setOpen]=useState(false);



useEffect(()=>{


const checkOffer = () => {


const dismissed =
localStorage.getItem("offer-dismissed");


if(!dismissed){

setTimeout(()=>{

setOpen(true);

},5000); // testing 5 sec


}


};


checkOffer();


},[]);



function closePopup(){

setOpen(false);

localStorage.setItem(
"offer-dismissed",
"true"
);

}



return (

<AnimatePresence>


{
open && (

<>

{/* Overlay */}

<motion.div

initial={{
opacity:0
}}

animate={{
opacity:1
}}

exit={{
opacity:0
}}

className="
fixed
inset-0
z-[999]
bg-black/60
"

/>




{/* Popup */}

<motion.div

initial={{
opacity:0,
scale:0.8,
y:50
}}

animate={{
opacity:1,
scale:1,
y:0
}}

exit={{
opacity:0,
scale:0.8
}}

transition={{
duration:.35
}}

className="
fixed
left-1/2
top-1/2
z-[1000]
w-[90%]
max-w-md
-translate-x-1/2
-translate-y-1/2
rounded-3xl
bg-white
p-8
shadow-2xl
"


>


<button

onClick={closePopup}

className="
absolute
right-4
top-4
rounded-full
p-2
hover:bg-gray-100
"

>

<X size={18}/>

</button>




<div className="
mx-auto
flex
h-16
w-16
items-center
justify-center
rounded-full
bg-red-100
">

<Gift
size={32}
className="text-red-600"
/>

</div>




<h2 className="
mt-5
text-center
text-2xl
font-bold
">

🎓 Limited Time Offer

</h2>




<p className="
mt-3
text-center
text-gray-600
">

Get up to

<span className="
font-bold
text-red-600
">

 ₹25,000 Scholarship

</span>

<br/>

on Top Universities.


</p>



<div className="
mt-5
space-y-2
text-sm
">

<p>✅ Free Career Counselling</p>

<p>✅ Admission Assistance</p>

<p>✅ Application Support</p>

</div>




<button

className="
mt-6
w-full
rounded-xl
bg-red-600
py-3
font-bold
text-white
hover:bg-red-700
"

>

Claim Offer

</button>




<button

onClick={closePopup}

className="
mt-3
w-full
text-sm
text-gray-500
"

>

Maybe Later

</button>



</motion.div>


</>

)

}


</AnimatePresence>

)

}