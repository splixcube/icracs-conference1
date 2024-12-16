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
import Partners from '@/components/ui/partners';

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
                2nd ICRACS
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
                    <img src="/location.png" className="h-4 w-4 mt-1"/>
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
      <Partners />

     

    


    </>
  );
}