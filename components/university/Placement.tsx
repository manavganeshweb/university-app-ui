"use client"

import { motion } from "framer-motion"
import {
  BriefcaseBusiness,
  TrendingUp,
  Users,
  Trophy,
  Building2,
  Download,
  CheckCircle2,
} from "lucide-react"

import SectionWrapper from "./SectionWrapper"


interface Props {
  university: any
  id?: string
}


export default function Placement({
  university,
  id = "placement",
}: Props) {


  const placement = university.placement || {

    percentage: "98%",

    highest: "₹54.75 LPA",

    average: "₹8.5 LPA",

    students: "5000+",

    recruiters:[
      "Google",
      "Microsoft",
      "Amazon",
      "Infosys",
      "TCS",
      "Wipro"
    ],

    highlights:[
      "500+ Recruiting Partners",
      "Global Career Opportunities",
      "Dedicated Placement Cell",
      "Industry Training Programs"
    ]

  }



  return (

    <SectionWrapper

      id={id}

      title="Placement & Career Opportunities"

      subtitle="Explore placement records, recruiters and career growth opportunities."

    >


      <div className="space-y-10">


        {/* Main Statistics */}


        <div className="
        grid
        gap-5
        sm:grid-cols-2
        lg:grid-cols-4
        ">


          <PlacementCard

            icon={<Trophy/>}

            title="Highest Package"

            value={placement.highest}

          />


          <PlacementCard

            icon={<TrendingUp/>}

            title="Average Package"

            value={placement.average}

          />


          <PlacementCard

            icon={<BriefcaseBusiness/>}

            title="Placement Rate"

            value={placement.percentage}

          />


          <PlacementCard

            icon={<Users/>}

            title="Students Placed"

            value={placement.students}

          />


        </div>





        {/* Placement Banner */}



        <motion.div

          whileHover={{
            scale:1.01
          }}

          className="
          rounded-3xl
          bg-gradient-to-br
          from-blue-600
          to-indigo-600
          p-8
          text-white
          "

        >


          <div className="
          flex
          flex-col
          gap-6
          md:flex-row
          md:items-center
          md:justify-between
          ">


            <div>


              <h3 className="
              text-2xl
              font-bold
              ">

                Career Support Program

              </h3>


              <p className="
              mt-3
              max-w-xl
              text-white/80
              ">

                Get access to industry training,
                placement assistance and career
                guidance from experienced mentors.

              </p>


            </div>


            <button

              className="
              flex
              items-center
              justify-center
              rounded-full
              bg-white
              px-6
              py-3
              font-semibold
              text-blue-700
              transition
              hover:scale-105
              "

            >

              <Download
                size={18}
                className="mr-2"
              />

              Placement Report

            </button>


          </div>


        </motion.div>





        {/* Recruiters */}



        <div>


          <h3 className="
          mb-6
          text-xl
          font-bold
          text-slate-900
          ">

            Top Recruiters

          </h3>



          <div className="
          grid
          grid-cols-2
          gap-4
          sm:grid-cols-3
          lg:grid-cols-6
          ">


          {
            placement.recruiters.map(
              (company:string,index:number)=>(


              <motion.div

                key={company}

                initial={{
                  opacity:0,
                  y:20
                }}

                whileInView={{
                  opacity:1,
                  y:0
                }}

                viewport={{
                  once:true
                }}

                transition={{
                  delay:index*.08
                }}

                whileHover={{
                  y:-5
                }}

                className="
                flex
                items-center
                justify-center
                rounded-2xl
                border
                bg-white
                p-5
                font-semibold
                text-slate-700
                shadow-sm
                hover:border-blue-300
                hover:shadow-lg
                "

              >

                <Building2
                  size={18}
                  className="mr-2 text-blue-600"
                />

                {company}


              </motion.div>


            ))

          }


          </div>


        </div>






        {/* Highlights */}



        <div>


          <h3 className="
          mb-5
          text-xl
          font-bold
          ">

            Placement Highlights

          </h3>



          <div className="
          grid
          gap-4
          md:grid-cols-2
          ">


          {
            placement.highlights.map(
              (item:string)=>(


              <motion.div

                key={item}

                whileHover={{
                  x:5
                }}

                className="
                flex
                items-center
                gap-3
                rounded-2xl
                bg-green-50
                p-5
                text-slate-700
                "

              >

                <CheckCircle2
                  className="text-green-600"
                />

                {item}


              </motion.div>


            ))

          }


          </div>


        </div>



      </div>


    </SectionWrapper>

  )

}





function PlacementCard({

icon,

title,

value

}:any){


return (

<motion.div

whileHover={{
y:-8
}}

className="
rounded-3xl
border
bg-white
p-6
shadow-sm
transition
hover:shadow-xl
"

>


<div className="
inline-flex
rounded-2xl
bg-blue-50
p-3
text-blue-600
">

{icon}

</div>



<p className="
mt-5
text-sm
text-slate-500
">

{title}

</p>



<h4 className="
mt-2
text-2xl
font-black
text-slate-900
">

{value}

</h4>


</motion.div>

)

}