import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <div>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10 text-blue-600">ABOUT PIET</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
            <Card>
              <CardContent className="p-4 md:p-6">
                {/* <h3 className="text-lg md:text-xl font-semibold mb-2">Innovative Talks</h3> */}
                <ul className="list-disc pl-4 space-y-2">
                  <li className="pl-4">
                    Poornima Institute of Engineering & Technology, Jaipur, PIET, a premier institution in engineering education was established in the academic year <b> 2007</b>.
                  </li>
                  <li className="pl-4 ">PIET is affiliated to <b> Rajasthan Technical University.</b></li>
                  <li className="pl-4 ">PIET is approved by <b> AICTE. </b></li>
                  <li className="pl-4 ">The institution aims at providing world-class technical and scientific education that can develop a professional outlook in every walk of life.</li>
                  <li className="pl-4 ">PIET has been the <b> 1st institution </b> to offer <b> B.Tech CSE in Regional language. </b></li>
                  <li className="pl-4 ">PIET is accredited by the <b> National Assessment and Accreditation Council (NAAC). </b></li>
                  <li className="pl-4 ">PIET has been <b> rated PLATINUM </b> in the Survey of Industry Linked Technical Institutes conducted <b> by AICTE-CII. </b></li>
                </ul>
              </CardContent>
            </Card>

            <Image src={"/piet.jpeg"} width={600} height={300}/>


          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 mt-16">
            <Image src={"/piet2.jpeg"} width={600} height={300}/>


            <Card>
              <CardContent className="p-4 md:p-6">
                {/* <h3 className="text-lg md:text-xl font-semibold mb-2">Innovative Talks</h3> */}
                <ul className="list-disc pl-4 space-y-2">
                  <li className="pl-4">PIET has been ranked <b> 3rd in QIV ranking. </b></li>
                  <li className="pl-4">
                    Two of its programs, namely B.Tech in Computer Engineering and B.Tech in Civil Engineering, are accredited by the <b> National Board of Accreditation (NBA) </b>, India, for the quality education.
                  </li>
                  <li className="pl-4">
                    PIET is the only institute in Rajasthan to be funded by <b> AICTE </b> with a fund of <b> Rs. 55 Lakh for establishing IDEA Lab </b>.
                  </li>
                  <li className="pl-4">
                    PIET has been granted in aid of Rs. 12.84314/- for establishing the Neural Network & Deep Learning Lab under the <b> MODROB Scheme </b>.
                  </li>
                  <li className="pl-4">
                    PIET received a research grant of more than 50 Lakh in 2019-20 & 2020-21 from agencies like <b> TEQIP III, AICTE, NITTTR </b>, etc.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
// 'use client'

// import React from 'react'
// import Image from 'next/image'
// import { motion } from 'framer-motion'
// import { CheckCircle } from 'lucide-react'

// const FeatureCard = ({ children }) => (
//   <motion.div
//     whileHover={{ scale: 1.05 }}
//     className="bg-white p-6 rounded-lg shadow-lg"
//   >
//     {children}
//   </motion.div>
// )

// const FeatureItem = ({ text }) => (
//   <li className="flex items-start space-x-2 mb-2">
//     <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
//     <span>{text}</span>
//   </li>
// )

// function About() {
//   return (
//     <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-12 md:py-20">
//       <div className="container mx-auto px-4">
//         <motion.h2 
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-600"
//         >
//           About PIET
//         </motion.h2>

//         <div className="grid md:grid-cols-2 gap-8 mb-16">
//           <FeatureCard>
//             <ul className="space-y-4">
//               <FeatureItem text={<>Established in <b>2007</b>, Poornima Institute of Engineering & Technology (PIET) is a premier institution in engineering education.</>} />
//               <FeatureItem text={<>Affiliated to <b>Rajasthan Technical University</b> and approved by <b>AICTE</b>.</>} />
//               <FeatureItem text="Aims to provide world-class technical and scientific education for professional development." />
//               <FeatureItem text={<><b>1st institution</b> to offer <b>B.Tech CSE in Regional language</b>.</>} />
//               <FeatureItem text={<>Accredited by the <b>National Assessment and Accreditation Council (NAAC)</b>.</>} />
//               <FeatureItem text={<><b>Rated PLATINUM</b> in the Survey of Industry Linked Technical Institutes by <b>AICTE-CII</b>.</>} />
//             </ul>
//           </FeatureCard>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <Image 
//               src="/piet.jpeg" 
//               width={600} 
//               height={300} 
//               alt="PIET Campus"
//               className="rounded-lg shadow-lg object-cover w-full h-full"
//             />
//           </motion.div>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="order-2 md:order-1"
//           >
//             <Image 
//               src="/piet2.jpeg" 
//               width={600} 
//               height={300} 
//               alt="PIET Facilities"
//               className="rounded-lg shadow-lg object-cover w-full h-full"
//             />
//           </motion.div>

//           <FeatureCard>
//             <ul className="space-y-4 order-1 md:order-2">
//               <FeatureItem text={<>Ranked <b>3rd in QIV ranking</b>.</>} />
//               <FeatureItem text={<>B.Tech in Computer Engineering and B.Tech in Civil Engineering accredited by the <b>National Board of Accreditation (NBA)</b>, India.</>} />
//               <FeatureItem text={<>Only institute in Rajasthan funded by <b>AICTE</b> with <b>Rs. 55 Lakh for establishing IDEA Lab</b>.</>} />
//               <FeatureItem text={<>Granted Rs. 12.84314/- for establishing the Neural Network & Deep Learning Lab under the <b>MODROB Scheme</b>.</>} />
//               <FeatureItem text={<>Received research grants of over 50 Lakh in 2019-20 & 2020-21 from agencies like <b>TEQIP III, AICTE, NITTTR</b>, etc.</>} />
//             </ul>
//           </FeatureCard>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default About

