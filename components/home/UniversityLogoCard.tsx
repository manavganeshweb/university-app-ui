"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";


interface Props {

image:string;

name:string;

slug:string;

large?:boolean;

}



export default function UniversityLogoCard({

image,

name,

slug,

large=false

}:Props){


return (

<Link

href={`/university/${slug}`}

className={`
block

${
large
?
`
col-span-2
row-span-2
h-[220px]

max-sm:h-[105px]
max-sm:col-span-1
max-sm:row-span-1
`
:
`
h-[105px]
`
}

`}

>


<motion.div


initial={{
opacity:0
}}


animate={{
opacity:1
}}


transition={{
duration:.4
}}



whileHover={{
scale:1.03
}}



className="

relative

h-full
w-full


rounded-[16px]


bg-white


border-2

border-[#FBDBCF]


flex

items-center

justify-center


overflow-hidden


cursor-pointer


hover:border-[#EC1E24]


hover:shadow-[0px_8px_25px_rgba(236,30,36,0.18)]


transition-all

duration-300

"


>


<Image


src={image}

alt={name}


width={large?300:150}

height={large?150:75}


className={`
object-contain

${
large
?
"h-[140px] sm:h-[150px]"
:
"h-[60px]"
}

`}


/>


</motion.div>


</Link>


)

}