import { Button } from '@/components/ui/button';
import React from 'react';
import CallForPaper from '../components/CallForPaper';


export default function CallForPapersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-blue-600">Event Schedule</h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Mark these important dates in your calendar. All deadlines are set to 11:59 PM IST (GMT +5:30).
          </p>
        </div>


        <div className="text-center text-lg text-gray-600">
          <p> <b> * Please ensure timely submission to avoid any last-minute technical issues.</b></p>
          <p> <b> * All submissions will be reviewed on a rolling basis.</b></p>
        </div>
      </div>
    </div>
  )
}


// export default function CallForPapersPage() {
//   <>
//     <CallForPaper />

//     <section className="bg-blue-600 text-white py-6 md:py-12">
//       <div className="container mx-auto px-4 text-center flex flex-col items-center">
//         <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready to Join Us?</h2>
//         <p className="text-lg md:text-xl md:mb-4">
//           Register now and be part of the most exciting tech event of the year!
//         </p>
//         <div className="w-full md:w-auto">
//           <Button
//             size="lg"
//             className="bg-white text-blue-600 w-full md:w-auto hover:bg-blue-100 px-6 py-3 rounded-lg transition duration-300 ease-in-out -mb-4"
//           >
//             Register for TechConf 2024
//           </Button>
//         </div>
//       </div>
//     </section>
//   </>
// }

