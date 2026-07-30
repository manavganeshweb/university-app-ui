"use client"

import { motion } from "framer-motion"
import {
  Phone,
  Scale,
  ArrowRight,
} from "lucide-react"

import { useState } from "react"

import LoginModal from "../auth/LoginModal"


interface Props {
  university?: any
}



export default function BottomMobileBar({
  university
}: Props) {


  const [open,setOpen] = useState(false)



  return (

    <>


    <motion.div

      initial={{
        y:100
      }}

      animate={{
        y:0
      }}

      transition={{
        duration:.4
      }}


      className="
      fixed
      bottom-0
      left-0
      right-0
      z-50
      border-t
      bg-white/95
      backdrop-blur-xl
      shadow-[0_-10px_30px_rgba(0,0,0,0.12)]
      lg:hidden
      "

    >


      <div className="
      flex
      items-center
      gap-3
      px-4
      py-3
      pb-[calc(env(safe-area-inset-bottom)+12px)]
      ">


        {/* Apply */}


        <button

          onClick={()=>setOpen(true)}

          className="
          flex-1
          flex
          items-center
          justify-center
          gap-2
          rounded-full
          bg-blue-600
          px-4
          py-3
          text-sm
          font-bold
          text-white
          transition
          active:scale-95
          "

        >

          Apply Now

          <ArrowRight size={17}/>

        </button>





        {/* Call */}


        <button

          className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          border
          border-blue-200
          bg-blue-50
          text-blue-600
          transition
          active:scale-95
          "

        >

          <Phone size={20}/>


        </button>





        {/* Compare */}


        <button

          className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          border
          border-slate-200
          bg-white
          text-slate-700
          transition
          active:scale-95
          "

        >

          <Scale size={20}/>


        </button>



      </div>


    </motion.div>





    <LoginModal

      open={open}

      onClose={()=>setOpen(false)}

    />


    </>

  )

}