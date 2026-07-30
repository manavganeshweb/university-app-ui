"use client";

import Link from "next/link";
import {
  Menu,
  Phone,
  Search,
  X,
  Sparkles
} from "lucide-react";

import { useState } from "react";
import { Button } from "./buttons";
import { GuidanceDialog } from "./Modals";
import { usePathname } from "next/navigation";


const navItems = [
  {
    href:"/click-pick",
    label:"Find Your Course"
  },

  {
    href:"#programs",
    label:"Explore programs"
  },

  {
    href:"#Universities",
    label:"Top universities"
  }
];



export function Header(){


const [mobile,setMobile]=useState(false);

const [guidance,setGuidance]=useState(false);


const pathname = usePathname();



const close=()=>setMobile(false);



const getNavLink=(href:string)=>{


if(href.startsWith("/")){
  return href;
}


return pathname === "/"
?
href
:
`/${href}`;

};





return (

<>

<header
className="
sticky
top-0
z-40
border-b
border-zinc-100
bg-white/95
backdrop-blur
"
>


<div
className="
container-page
flex
h-[72px]
items-center
justify-between
gap-4
"
>



{/* Logo */}

<Link
href="/"
className="
font-display
text-2xl
font-bold
tracking-tight
text-brand-500
"
>

Ed<span className="text-brand-600">
Path
</span>

<small className="
ml-0.5
text-[9px]
font-sans
tracking-normal
">

.in

</small>


</Link>





{/* Desktop Nav */}

<nav
className="
hidden
items-center
gap-7
lg:flex
"
>


{
navItems.map(item=>(

<Link

key={item.href}

href={getNavLink(item.href)}

className="
text-sm
font-bold
text-zinc-700
transition
hover:text-brand-500
"

>

{item.label}

</Link>

))
}




<Link

href="/click-pick"

className="
flex
items-center
gap-1
text-sm
font-bold
text-zinc-800
"

>

<Sparkles
size={15}
className="text-brand-500"
/>

AI Compare

</Link>



</nav>






{/* Desktop Actions */}

<div
className="
hidden
items-center
gap-2
lg:flex
"
>


<Button
variant="outline"
onClick={()=>setGuidance(true)}
>

<Phone
size={14}
className="mr-1.5"
/>

Talk to an expert

</Button>




<Link

href="/search"

aria-label="Search"

className="
rounded-lg
border
border-zinc-200
p-2.5
text-zinc-700
transition
hover:bg-zinc-50
"

>

<Search size={17}/>


</Link>



</div>





{/* Mobile Menu */}

<button

onClick={()=>setMobile(!mobile)}

className="
rounded-lg
p-2
lg:hidden
"

>

{
mobile
?
<X/>
:
<Menu/>
}

</button>



</div>






{/* Mobile Navigation */}

{
mobile && (

<nav
className="
container-page
animate-rise
border-t
py-4
lg:hidden
"
>


{
navItems.map(item=>(


<Link

key={item.href}

href={getNavLink(item.href)}

onClick={close}

className="
block
rounded-lg
px-3
py-3
font-bold
hover:bg-brand-50
"

>

{item.label}

</Link>


))
}



<div
className="
mt-3
flex
gap-2
"
>


<Button

onClick={()=>{
close();
setGuidance(true);
}}

className="flex-1"

>

Talk to an expert

</Button>




<Link

href="/search"

onClick={close}

className="
flex
items-center
justify-center
rounded-lg
border
border-zinc-200
px-4
text-zinc-700
hover:bg-zinc-50
"

>

<Search size={18}/>

</Link>



</div>


</nav>

)

}



</header>





<GuidanceDialog

open={guidance}

onClose={()=>setGuidance(false)}

/>



</>

)

}