import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ConferenceTimeline } from '../components/conference-timeline';
import Partners from '@/components/ui/partners';

export default function Speaker() {
  const getSpeakersData = () => {
    return [
      {
        id: 1,
        name: "Prof. (Dr.) Ravi Kumar Arya",
        image: "/speakerimg/ravikumar.jpg?height=150&width=150",
        role: "Professor, Zhingshan Institute of Changchun University of Science and Technology, China ",
      },
      {
        id: 2,
        name: "Dr. Ankit Agrawal",
        image: "/speakerimg/AnkitAgrawal.jpg?height=150&width=150",
        role: "Research Professor, Department of Electrical and Computer Engineering McCormick School of Engineering and Applied Science Northwestern University",
      },
      {
        id: 3,
        name: "Dr. Vijayshri Chaurasiya",
        image: "/speakerimg/VijayshriChaurasiya2.jpg?height=150&width=150",
        role: "Associate Professor, Maulana Azad National Institute of Technology, Bhopal",
      },
      {
        id: 4,
        name: "Prof.(Dr.) Sandeep Saxena",
        image: "/speakerimg/SandeepSaxena.jpg?height=150&width=150",
        role: "Professor & Head, JIMS Greater Noida, Senior Member IEEE, Keynote Speaker/Associate Editor/Resource Person",
      },
      
    ];
  };
 
  const getPastSpeakersData = () => {
    return [
      {
        id: 1,
        name: "Dr. Akash Saxena",
        image: "/speakerimg/akashsaxena.png?height=150&width=150",
        role: "Central University of Haryana, Mahendergarh",
      },
      // {
      //   id: 2,
      //   name: "Dr. Vijayshri Chaurasiya",
      //   image: "/speakerimg/speaker.png?height=150&width=150",
      //   role: "Associate Professor, MANIT, Bhopal",
      // },
      // {
      //   id: 3,
      //   name: "Dr. Vijayshri Chaurasiya",
      //   image: "/speakerimg/speaker.png?height=150&width=150",
      //   role: "Associate Professor, MANIT, Bhopal",
      // },
    ];
  };
  return (

    <div>

      <ConferenceTimeline />
      {/* Speakers Section */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10 text-blue-600">KEYNOTE SPEAKERS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 gap-4 md:gap-8 md:mx-30">
            {getSpeakersData().map((speaker) => (
              <Card key={speaker.id}>
                <CardContent className="p-4 md:p-6 text-center hover:border border-blue-500 rounded-md">
                  <Image
                    src={speaker.image}
                    alt={`Speaker ${speaker.id}`}
                    width={150}
                    height={150}
                    className="rounded-full mx-auto mb-4 w-24 h-24 md:w-32 md:h-32"
                  />
                  <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">{speaker.name}</h3>
                  <p className="text-sm md:text-base text-gray-600">{speaker.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20  bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10 text-blue-600">PAST SPEAKERS</h2>
          <div className=" flex flex-col items-center justify-center ">
            {getPastSpeakersData().map((speaker) => (
              <Card key={speaker.id}>
                <CardContent className="  p-4 md:p-6 text-center hover:border border-blue-500 rounded-md">
                  <Image
                    src={speaker.image}
                    alt={`Speaker ${speaker.id}`}
                    width={150}
                    height={150}
                    className="rounded-full mx-auto mb-4 w-24 h-24 md:w-32 md:h-32"
                  />
                  <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">{speaker.name}</h3>
                  <p className="text-sm md:text-base text-gray-600">{speaker.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Partners />
    </div>
  )
}

