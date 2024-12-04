import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from './layout';
import { ConferenceTimeline } from './components/conference-timeline';
import ImageSlider from './components/ImageSlider';
import About from './components/about';
import CallForPaper from './components/CallForPaper';
import About1 from './components/about1';
import About2 from './components/about2';
import { Phone, Mail, Twitter, Facebook } from 'lucide-react'
import Link from "next/link"

export default function LandingPage() {

  const getSpeakersData = () => {
    return [
      {
        id: 1,
        name: "Dr. Vijayshri Chaurasiya",
        image: "/speakerimg/speaker.png?height=150&width=150",
        role: "Associate Professor, MANIT, Bhopal",
      },


      // Add more speakers as needed
    ];
  };

  return (
    <>  {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-8 sm:py-12 md:py-20 overflow-hidden">
        {/* Ripple Background Animation */}
        {/* <div className="ripple-background">
          <div className="circle xxlarge shade1"></div>
          <div className="circle xlarge shade2"></div>
          <div className="circle large shade3"></div>
          <div className="circle medium shade4"></div>
          <div className="circle small shade5"></div>
        </div> */}

        {/* Main Content */}
        <div className="container relative z-10 mx-auto px-4 ">
          <div className="flex flex-col md:flex-row items-center md:gap-80">
            <div className="w-full md:w-1/2 mb-6 md:mb-0 ">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center md:text-left">
                2nd Edition of ICRACS 2025
              </h1>
              <p className="text-md sm:text-lg md:text-xl mb-6 text-center md:text-left">
                International Conference on Recent Advances in Artificial Intelligence, Computer Vision & Smart Systems
              </p>
              <div className="justify-center md:justify-start">
                <Button size="lg" className="w-full md:w-auto bg-white text-blue-600 hover:bg-blue-100">
                  Register Now
                </Button>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-2">
                    <img src="/location.png" className="h-4 w-4"/>
                    <div>
                      <h3 className="font-semibold text-white">Poornima Institute of Engineering and Technology</h3>
                      <p className="text-sm text-white">Sitapura Jaipur, Rajasthan</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Link
                      href="https://www.linkedin.com/school/poornima-group-of-colleges/">
                      <img src='/linkedin.png' className="h-5 w-5" />
                    </Link>
                    <Link
                      href="icracs@poornima.org">
                      <img src='/mail.png' className="h-5 w-5" />
                    </Link>
                    <Link
                      href="https://www.piet.poornima.org/">
                      <img src='/web.png' className="h-5 w-5" />
                    </Link>
                   
                  </div>
                </div>






              </div>
            </div>
            <div className="w-full md:w-1/2">
              <ImageSlider />
            </div>
          </div>
        </div>
      </section>


      {/* Conference Timeline Section */}
      <ConferenceTimeline />

      {/* About Section */}
      <About />
      <About1 />
      <About2 />

      {/* Speakers Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10 text-blue-600">KEY NOTE SPEAKERS</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
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

      {/* call for papers */}

      <CallForPaper />

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-6 md:py-12">
        <div className="container mx-auto px-4 text-center flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready to Join Us?</h2>
          <p className="text-lg md:text-xl md:mb-4">
            Register now and be part of the most exciting tech event of the year!
          </p>
          <div className="w-full md:w-auto">
            <Button
              size="lg"
              className="bg-white text-blue-600 w-full md:w-auto hover:bg-blue-100 px-6 py-3 rounded-lg transition duration-300 ease-in-out -mb-4"
            >
              Register for TechConf 2024
            </Button>
          </div>
        </div>
      </section>


    </>
  );
}