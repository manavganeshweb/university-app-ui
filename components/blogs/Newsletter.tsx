"use client"

import { motion } from "framer-motion"
import { Mail, Sparkles } from "lucide-react"
import { useState } from "react"


export default function Newsletter(){

const [email,setEmail]=useState("")


const submit=(e:React.FormEvent)=>{
e.preventDefault()

console.log(email)

// connect API later

}


return(

<section className="
relative
overflow-hidden
py-20
px-6
">


{/* Animated background blobs */}

<motion.div

animate={{
x:[-40,40,-40],
y:[0,30,0]
}}

transition={{
duration:8,
repeat:Infinity
}}

className="
absolute
left-10
top-10
w-72
h-72
rounded-full
bg-blue-400/20
blur-3xl
"

/>


<motion.div

animate={{
x:[40,-40,40],
y:[20,-20,20]
}}

transition={{
duration:10,
repeat:Infinity
}}

className="
absolute
right-10
bottom-10
w-80
h-80
rounded-full
bg-indigo-400/20
blur-3xl
"

/>



<div className="
relative
z-10
max-w-5xl
mx-auto
">


<motion.div

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.6
}}

className="
rounded-3xl
bg-gradient-to-r
from-blue-600
via-indigo-600
to-blue-700
p-8
md:p-12
shadow-2xl
text-white
overflow-hidden
"

>



<div className="
flex
flex-col
md:flex-row
items-center
justify-between
gap-10
">


<div
className="
max-w-xl
"
>


<div className="
inline-flex
items-center
gap-2
px-4
py-2
rounded-full
bg-white/20
text-sm
mb-5
">

<Sparkles size={16}/>

Stay Updated

</div>



<h2 className="
text-3xl
md:text-4xl
font-bold
leading-tight
">

Get the Latest College & Career Updates

</h2>



<p className="
mt-4
text-blue-100
text-lg
">

Subscribe to receive university updates,
admission alerts, career guidance and
education trends directly in your inbox.

</p>


</div>





<form

onSubmit={submit}

className="
w-full
md:w-[420px]
bg-white
rounded-2xl
p-2
flex
items-center
shadow-xl
"

>


<Mail

className="
text-blue-600
ml-3
"

/>


<input

type="email"

required

value={email}

onChange={(e)=>setEmail(e.target.value)}

placeholder="Enter your email"

className="
flex-1
px-4
py-3
outline-none
text-slate-800
"

/>



<button

type="submit"

className="
rounded-xl
bg-blue-600
hover:bg-blue-700
text-white
px-6
py-3
font-semibold
transition
"

>

Subscribe

</button>


</form>


</div>


</motion.div>


</div>


</section>


)

}