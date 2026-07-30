"use client"

import { motion } from "framer-motion"
import {
  IndianRupee,
  CreditCard,
  Home,
  BookOpen,
  BadgePercent,
  WalletCards,
} from "lucide-react"

import SectionWrapper from "./SectionWrapper"
import ApplyButton from "./ApplyButton"


interface Props {
  university: any
  id?: string
}


export default function FeeSection({
  university,
  id = "fees",
}: Props) {


  const fee = university.fees || {
    total: "₹6.4 Lakh",
    tuition: "₹5.8 Lakh",
    hostel: "₹80,000",
    other: "₹20,000",
    semester: [
      {
        name: "Semester 1",
        amount: "₹85,000",
      },
      {
        name: "Semester 2",
        amount: "₹85,000",
      },
      {
        name: "Semester 3",
        amount: "₹85,000",
      },
      {
        name: "Semester 4",
        amount: "₹85,000",
      },
    ],
  }


  return (

    <SectionWrapper

      id={id}

      title="Fee Structure"

      subtitle="Understand the complete cost of your education."

    >


      <div className="space-y-8">


        {/* Main Fee Card */}


        <motion.div

          whileHover={{
            y:-5
          }}

          className="
          overflow-hidden
          rounded-3xl
          bg-gradient-to-br
          from-blue-600
          to-cyan-500
          p-8
          text-white
          "

        >


          <div className="
          flex
          flex-col
          justify-between
          gap-6
          md:flex-row
          md:items-center
          ">


            <div>


              <p className="
              text-sm
              text-white/80
              ">

                Total Programme Fee

              </p>


              <h3 className="
              mt-2
              text-4xl
              font-black
              ">

                {fee.total}

              </h3>


              <p className="
              mt-3
              text-white/80
              ">

                Flexible payment options available

              </p>


            </div>



            <ApplyButton
              text="Start Application"
              className="
              bg-white
              !text-blue-600
              hover:bg-blue-50
              "
            />


          </div>


        </motion.div>




        {/* Breakdown */}


        <div className="
        grid
        gap-5
        sm:grid-cols-2
        lg:grid-cols-4
        ">


          <FeeCard

            icon={<BookOpen/>}

            title="Tuition Fee"

            value={fee.tuition}

          />


          <FeeCard

            icon={<Home/>}

            title="Hostel Fee"

            value={fee.hostel}

          />


          <FeeCard

            icon={<WalletCards/>}

            title="Other Charges"

            value={fee.other}

          />


          <FeeCard

            icon={<CreditCard/>}

            title="Payment"

            value="EMI Available"

          />


        </div>




        {/* Semester Fees */}


        <div>


          <h3 className="
          mb-5
          text-xl
          font-bold
          text-slate-900
          ">

            Semester Wise Fees

          </h3>



          <div className="
          grid
          gap-4
          md:grid-cols-2
          ">


          {
            fee.semester.map(
              (item:any,index:number)=>(


              <motion.div

                key={index}

                initial={{
                  opacity:0,
                  x:-20
                }}

                whileInView={{
                  opacity:1,
                  x:0
                }}

                viewport={{
                  once:true
                }}

                transition={{
                  delay:index*.1
                }}

                className="
                flex
                items-center
                justify-between
                rounded-2xl
                border
                bg-slate-50
                p-5
                "

              >


                <span className="
                font-semibold
                text-slate-700
                ">

                  {item.name}

                </span>


                <span className="
                font-bold
                text-blue-600
                ">

                  {item.amount}

                </span>


              </motion.div>


            ))

          }


          </div>


        </div>





        {/* Scholarship */}



        <motion.div

          whileHover={{
            scale:1.02
          }}

          className="
          rounded-3xl
          border
          border-green-200
          bg-green-50
          p-6
          "

        >


          <div className="
          flex
          gap-4
          ">


            <div className="
            rounded-2xl
            bg-green-600
            p-3
            text-white
            ">

              <BadgePercent/>

            </div>



            <div>


              <h3 className="
              text-xl
              font-bold
              text-slate-900
              ">

                Scholarships Available

              </h3>


              <p className="
              mt-2
              text-slate-600
              ">

                Merit based scholarships and special
                financial assistance options are available
                for eligible students.

              </p>


            </div>


          </div>


        </motion.div>


      </div>


    </SectionWrapper>

  )

}




function FeeCard({

icon,

title,

value

}:any){


return (

<motion.div

whileHover={{
y:-6
}}

className="
rounded-3xl
border
bg-white
p-6
shadow-sm
hover:shadow-xl
transition
"

>


<div className="
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
text-xl
font-bold
text-slate-900
">

{value}

</h4>


</motion.div>

)

}