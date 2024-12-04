import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const timelineEvents = [
  {
    date: "January 25, 2025",
    title: "Paper Submission",
    // note: "Extended to October 31, 2024",
  },
  {
    date: "February 10, 2025",
    title: "Notification of Acceptance",
  },
  {
    date: "February 20, 2025",
    title: "Camera Ready Paper",
  },
  {
    date: "February 25, 2025",
    title: "Early Bird Registration",
  },
  {
    date: "March 02, 2025",
    title: "Late Registration",
  },
  {
    date: "March 07-08, 2025",
    title: "Conference Dates",
  },
];


export function ConferenceTimeline() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">CONFERENCE TIMELINE</h2>
        <div className="relative">

          {/* Horizontal scrollable timeline for larger screens */}
          <div className="hidden md:block overflow-x-auto pb-8 ">
            <div className="relative" style={{ width: `${timelineEvents.length * 250}px` }}>
              {/* Horizontal line */}
              <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-200 transform -translate-y-1/2"></div>
              
              <div className="relative z-10 flex justify-between">
                {timelineEvents.map((event, index) => (
                  <div key={index} className="flex flex-col items-center w-64">
                    <div className="w-8 h-8 bg-blue-600 rounded-full mb-2"></div>
                    <Card className="w-56 h-28 text-center">
                      <CardContent className="p-4">
                        <p className="font-semibold text-blue-600">{event.date}</p>
                        <h3 className="font-bold mt-2">{event.title}</h3>
                        {/* <p className="text-sm text-gray-600 mt-1">{event.description}</p> */}
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vertical timeline for smaller screens */}
          <div className="md:hidden space-y-8">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex items-start">
                <div className="flex flex-col items-center mr-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                  <div className="w-1 h-full bg-blue-200 mt-2"></div>
                </div>
                <Card className="flex-grow">
                  <CardContent className="p-4">
                    <p className="font-semibold text-blue-600">{event.date}</p>
                    <h3 className="font-bold mt-2">{event.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}