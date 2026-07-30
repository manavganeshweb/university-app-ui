"use client";

import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Brain,
  GraduationCap,
  CheckCircle2
} from "lucide-react";

export function ClickPickCTA(){

return (

<section className="container-page section-space">


<div className="
relative
overflow-hidden
rounded-3xl
bg-gradient-to-r
from-brand-600
via-brand-500
to-orange-500
p-8
text-white
shadow-xl
sm:p-12
">


<div className="
grid
items-center
gap-10
lg:grid-cols-2
">


{/* Content */}

<div>


<div className="
inline-flex
items-center
gap-2
rounded-full
bg-white/20
px-4
py-2
text-sm
font-bold
">

<Sparkles size={16}/>

AI Course Finder

</div>



<h2 className="
mt-5
text-4xl
font-extrabold
sm:text-5xl
">

Not sure which course
is right for you?

</h2>



<p className="
mt-4
max-w-xl
leading-7
text-white/80
">

Answer a few questions and get personalised
course and university recommendations.

</p>



<div className="
mt-7
flex
flex-wrap
gap-4
">


<Link

href="/click-pick"

className="
group
flex
items-center
gap-2
rounded-xl
bg-white
px-6
py-3
font-bold
text-brand-600
shadow-lg
transition
hover:scale-105
"

>

Start Click & Pick

<ArrowRight
size={18}
className="
transition
group-hover:translate-x-1
"
/>

</Link>


</div>



<div className="
mt-7
grid
gap-3
sm:grid-cols-2
">


{[
"AI based matching",
"500+ universities",
"Career guidance",
"Compare courses"
].map(item=>(

<div
key={item}
className="
flex
items-center
gap-2
text-sm
"
>

<CheckCircle2 size={16}/>

{item}

</div>

))}


</div>



</div>





{/* Right Card */}


<div className="
relative
flex
justify-center
">


<div className="
rounded-3xl
bg-white
p-6
text-zinc-900
shadow-2xl
">

<div className="
flex
items-center
gap-3
">


<div className="
rounded-xl
bg-brand-100
p-3
">

<Brain
className="text-brand-600"
/>

</div>


<div>

<h3 className="font-bold">
Smart Recommendation
</h3>


<p className="
text-sm
text-zinc-500
">

Find your best career path

</p>


</div>


</div>



<div className="
mt-6
space-y-4
">


<div className="
flex
items-center
gap-3
rounded-xl
bg-zinc-50
p-4
">

<GraduationCap
className="text-orange-500"
/>


<div>

<p className="font-bold">
B.Tech CSE
</p>

<p className="text-xs text-zinc-500">
96% Match
</p>

</div>


</div>



<div className="
rounded-xl
bg-zinc-50
p-4
text-sm
font-semibold
">

🎓 Chandigarh University

</div>


<div className="
rounded-xl
bg-zinc-50
p-4
text-sm
font-semibold
">

🚀 Placement Focused

</div>


</div>


</div>


</div>


</div>


</div>


</section>

)

}