import type { Metadata } from "next";

import {
  Manrope,
  Playfair_Display
} from "next/font/google";

import "./globals.css";

import OfferPopup from "../components/OfferPopup";

import {
  CompareProvider

} from "../context/CourseCompareContext";
import CompareBar from "../components/courses/CompareBar";

const manrope = Manrope({
  subsets:["latin"],
  variable:"--font-manrope"
});


const playfair = Playfair_Display({
  subsets:["latin"],
  variable:"--font-playfair"
});



export const metadata: Metadata = {

  title:
  "EdPath | Find the right online degree",

  description:
  "Compare online degrees and verified universities with personalised guidance.",

};



export default function RootLayout({
children
}: Readonly<{
children: React.ReactNode
}>) {


return (

<html lang="en">


<body

className={`
${manrope.variable}
${playfair.variable}
bg-white
text-zinc-900
antialiased
`}

>


<CompareProvider>


{children}

<CompareBar/>
<OfferPopup />



</CompareProvider>



</body>


</html>

);

}