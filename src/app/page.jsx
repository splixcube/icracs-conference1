import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from './layout';
import { ConferenceTimeline } from './components/conference-timeline';
import ImageSlider from './components/ImageSlider';

export default function LandingPage() {
  const getSpeakersData = () => {
    return [
      {
        id: 1,
        name: "Kartik Mehta",
        image: "/speakerimg/kartik.jpg?height=150&width=150",
        role: "CEO at Company",
      },
      {
        id: 2,
        name: "Sahaj Jain",
        image: "/speakerimg/sahaj.png?height=150&width=150",
        role: "CTO at Organization",
      },
      {
        id: 3,
        name: "Alex Johnson",
        image: "/speakerimg/sahaj.png?height=150&width=150",
        role: "Lead Developer",
      },
      {
        id: 4,
        name: "Emily Davis",
        image: "/speakerimg/sahaj.png?height=150&width=150",
        role: "Marketing Head",
      },
    
      // Add more speakers as needed
    ];
  };
  

  return (
    <>  {/* Hero Section */}
  <section className="relative bg-blue-600 text-white py-8 sm:py-12 md:py-20 overflow-hidden">
  {/* Ripple Background Animation */}
  <div className="ripple-background">
    <div className="circle xxlarge shade1"></div>
    <div className="circle xlarge shade2"></div>
    <div className="circle large shade3"></div>
    <div className="circle medium shade4"></div>
    <div className="circle small shade5"></div>
  </div>
  
  {/* Main Content */}
  <div className="container relative z-10 mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center md:gap-96">
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center md:text-left">
          TechConf 2024
        </h1>
        <p className="text-md sm:text-lg md:text-xl mb-6 text-center md:text-left">
          Join us for the most innovative tech conference of the year
        </p>
        <div className="flex justify-center md:justify-start">
          <Button size="lg" className="w-full md:w-auto bg-white text-blue-600 hover:bg-blue-100">
            Register Now
          </Button>
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
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10 text-blue-600">About TechConf</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card>
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2">Innovative Talks</h3>
                <p className="text-sm md:text-base">Discover cutting-edge technologies and trends from industry leaders.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2">Networking</h3>
                <p className="text-sm md:text-base">Connect with like-minded professionals and expand your network.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2">Workshops</h3>
                <p className="text-sm md:text-base">Gain hands-on experience with the latest tools and technologies.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
  <section className="bg-gray-100 py-12 md:py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10 text-blue-600">Featured Speakers</h2>
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


      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Join Us?</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8">Register now and be part of the most exciting tech event of the year!</p>
          <Button size="lg" className="w-full md:w-auto bg-white text-blue-600 hover:bg-blue-100">
            Register for TechConf 2024
          </Button>
        </div>
      </section>
      </>
  );
}