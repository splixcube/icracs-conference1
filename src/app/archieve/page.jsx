'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, Award, FileText, Video } from 'lucide-react'

const HighlightCard = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4"
  >
    <div className="bg-blue-100 p-3 rounded-full">
      <Icon className="w-6 h-6 text-blue-600" />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
)

const ImageGallery = ({ images }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
    {images.map((img, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        <Image
          src={img.src}
          alt={img.alt}
          width={400}
          height={300}
          className="rounded-lg shadow-md object-cover w-full h-64"
        />
      </motion.div>
    ))}
  </div>
)

 const page = () => {
  const conferenceImages = [
    { src: "/archive/1.jpg", alt: "Keynote speaker presentation" },
    { src: "/archive/2.jpg", alt: "Panel discussion" },
    { src: "/archive/3.jpg", alt: "Networking session" },
    { src: "/archive/4.jpg", alt: "Workshop in progress" },
    { src: "/archive/5.png", alt: "Poster presentation" },
    { src: "/archive/6.jpg", alt: "Award ceremony" },
  ]

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-blue-600 mb-8"
        >
           ICRACS 2024 Archive
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-center text-gray-700 mb-12"
        >
          Relive the moments from our groundbreaking conference 
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <HighlightCard 
            icon={Calendar}
            title="Date"
            description="March 15-17, 2024"
          />
          <HighlightCard 
            icon={MapPin}
            title="Venue"
            description="PIET, Jaipur"
          />
          <HighlightCard 
            icon={Users}
            title="Attendees"
            description="Over 100 professionals and researchers"
          />
          <HighlightCard 
            icon={Award}
            title="Keynote Speakers"
            description="5 experts"
          />
          <HighlightCard 
            icon={FileText}
            title="Research Papers"
            description="150+ cutting-edge papers presented"
          />
          <HighlightCard 
            icon={Video}
            title="Workshops"
            description="5 hands-on workshops on various AI & DS topics"
          />
        </div>

        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-3xl font-semibold text-center text-blue-600 mb-8"
        >
          Conference Highlights
        </motion.h2>

        <ImageGallery images={conferenceImages} />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 bg-blue-600 text-white p-8 rounded-lg shadow-xl"
        >
          <h3 className="text-2xl font-semibold mb-4">Key Takeaways</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Advancements in natural language processing and its applications in various industries</li>
            <li>Ethical considerations in AI development and deployment</li>
            <li>The role of big data in shaping modern machine learning algorithms</li>
            <li>Emerging trends in computer vision and image recognition</li>
            <li>Integration of AI in IoT devices and edge computing</li>
          </ul>
        </motion.div>

       
      </div>
    </div>
  )
}
export default page ;
