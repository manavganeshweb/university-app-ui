"use client";

import Link from "next/link";
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

import {
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
} from "lucide-react";

import { useState } from "react";


const footerLinks = {
  Programs: [
    {
      name: "Online MBA",
      link: "/courses/online-mba",
    },
    {
      name: "Online MCA",
      link: "/courses/online-mca",
    },
    {
      name: "Online BCA",
      link: "/courses/online-bca",
    },
    {
      name: "Online BBA",
      link: "/courses/online-bba",
    },
    {
      name: "Distance MBA",
      link: "/courses/distance-mba",
    },
  ],


  Universities:[
    {
      name:"Amity University",
      link:"/university/amity-university",
    },
    {
      name:"LPU",
      link:"/university/lpu",
    },
    {
      name:"Manipal University",
      link:"/university/manipal-jaipur",
    },
    {
      name:"Chandigarh University",
      link:"/university/chandigarh-university",
    },
    {
      name:"Sharda University",
      link:"/university/sharda",
    },
  ],


  Company:[
    {
      name:"About Us",
      link:"/about",
    },
    {
      name:"Contact",
      link:"/contact",
    },
    {
      name:"Blogs",
      link:"/blog",
    },
    {
      name:"Privacy Policy",
      link:"/privacy-policy",
    },
    {
      name:"Terms & Conditions",
      link:"/terms",
    },
  ],
};



export default function Footer(){

const [email,setEmail]=useState("");
const [message,setMessage]=useState("");



function subscribe(){

if(!email){
 setMessage("Please enter your email");
 return;
}

setMessage("Subscribed successfully 🎉");
setEmail("");

}



function scrollTop(){

window.scrollTo({
top:0,
behavior:"smooth",
});

}



return (

<footer className="bg-[#0B1120] text-gray-300">


<div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">


<div className="
grid
gap-12
lg:grid-cols-5
">



{/* Brand */}

<div className="lg:col-span-2">


<Link
href="/"
className="
text-3xl
font-extrabold
text-white
"
>

College
<span className="text-blue-500">
Sathi
</span>

</Link>



<p className="
mt-5
max-w-md
leading-7
text-gray-400
">

India's trusted education discovery platform.
Explore universities, compare programs,
get expert guidance and find the right
career path.

</p>





{/* Contact */}

<div className="
mt-6
space-y-3
text-sm
">


<p className="
flex
items-center
gap-3
">

<Phone size={16}/>

+91 98765 43210

</p>



<p className="
flex
items-center
gap-3
">

<Mail size={16}/>

support@collegesathi.com

</p>



<p className="
flex
items-center
gap-3
">

<MapPin size={16}/>

India

</p>


</div>






{/* Social */}

<div className="
mt-7
flex
gap-3
">


{
[
{
icon:<FaInstagram/>,
link:"#",
style:"hover:bg-pink-600"
},

{
icon:<FaLinkedin/>,
link:"#",
style:"hover:bg-blue-600"
},

{
icon:<FaYoutube/>,
link:"#",
style:"hover:bg-red-600"
},

{
icon:<FaWhatsapp/>,
link:"#",
style:"hover:bg-green-600"
},

].map((item,index)=>(


<a
key={index}
href={item.link}
className={`
flex
h-11
w-11
items-center
justify-center
rounded-full
bg-white/10
transition
duration-300
${item.style}
`}
>

{item.icon}

</a>


))

}


</div>



</div>





{/* Footer columns */}

{

Object.entries(footerLinks).map(([title,items])=>(


<div key={title}>


<h3 className="
mb-6
text-lg
font-bold
text-white
">

{title}

</h3>



<ul className="space-y-4">


{
items.map((item)=>(

<li key={item.name}>

<Link

href={item.link}

className="
text-gray-400
transition
hover:text-blue-400
"

>

{item.name}

</Link>

</li>

))
}



</ul>


</div>


))

}



</div>





{/* Newsletter */}


<div className="
mt-14
rounded-3xl
border
border-white/10
bg-white/5
p-6
md:flex
md:items-center
md:justify-between
">


<div>

<h3 className="
text-xl
font-bold
text-white
">

Get admission updates

</h3>


<p className="
mt-2
text-sm
text-gray-400
">

Latest university offers, admission alerts
and career guidance.

</p>


</div>




<div className="
mt-5
flex
w-full
max-w-md
gap-2
md:mt-0
">


<input

value={email}

onChange={(e)=>setEmail(e.target.value)}

placeholder="Enter email"

className="
w-full
rounded-xl
bg-white
px-4
text-sm
text-black
outline-none
"

/>



<button

onClick={subscribe}

className="
flex
items-center
gap-2
rounded-xl
bg-blue-600
px-5
font-bold
text-white
hover:bg-blue-700
"

>

<Send size={16}/>

Join

</button>


</div>


</div>



{
message &&

<div className="
mt-4
flex
items-center
gap-2
text-sm
text-green-400
">

<CheckCircle2 size={16}/>

{message}

</div>

}




{/* Bottom */}


<div className="
mt-14
flex
flex-col
items-center
justify-between
gap-4
border-t
border-white/10
pt-8
md:flex-row
">


<p className="
text-sm
text-gray-500
">

© {new Date().getFullYear()} CollegeSathi.
All Rights Reserved.

</p>



<p className="
text-sm
text-gray-500
">

Designed with ❤️ for Students

</p>



<button

onClick={scrollTop}

className="
rounded-full
bg-white/10
p-3
transition
hover:bg-blue-600
"

>

<ArrowUp size={18}/>

</button>


</div>


</div>


</footer>

)

}