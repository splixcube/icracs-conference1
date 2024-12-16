import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ConferenceTimeline } from '../components/conference-timeline';
import CallForPaper from '../components/CallForPaper';
import { ExternalLink } from 'lucide-react';
import Partners from '@/components/ui/partners';

export default function Speaker() {

  const contactInfo = [
    { name: "Dr. Saurabh Raj", phone: "8127741447, 7458080822", email: "saurabh.raj@poornima.org" },
    { name: "Dr. Sandeep Gupta", phone: "9887448137", email: "sandeep.gupta@poornima.org" },
  ];

  return (
    <div>
      <ConferenceTimeline />
      <CallForPaper />
      {/* Registration Process */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 px-28 bg-slate-50 my-10">

        

        <Card className="shadow-lg">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-2xl font-semibold text-blue-700">Registration Guidelines</CardTitle>
          </CardHeader>

          <CardContent className="p-6 space-y-4">
            <ul className="list-disc pl-5 space-y-2">
              <li>One of the authors must register for the conference and must present the paper himself/herself.</li>
              <li>Online Registration fee shall be deposited in the account mentioned at Registration Page.</li>
            </ul>
            <div className="flex items-center space-x-2">
              <span className="font-semibold">CMT Link:</span>
              <a href="https://cmt3.research.microsoft.com/ICRACS2024" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                ICRACS2025 <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="text-center">
              <a href="/samplepaper.pdf" download>
                <Button className="bg-blue-600 shadow-xl hover:bg-blue-600 mt-4 ">
                  Download Sample Paper
                </Button>
              </a>
            </div>

          </CardContent>
        </Card>
        
        <Card className="shadow-lg">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-2xl font-semibold text-blue-700">For More Information</CardTitle>
          </CardHeader>

          <CardContent className="p-6 space-y-4">
          <div className="">
              <div className="space-y-2">
                {contactInfo.map((contact, index) => (
                  <p key={index}>
                    <span className="font-medium">{contact.name}</span>
                    {contact.phone && <span> ({contact.phone})</span>} • {contact.email}
                  </p>
                ))}
              </div>
              <div className="mt-4 space-y-2">
                <p>
                  <span className="font-medium">Visit:</span>{" "}
                  <a href="http://convergence.poornima.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    http://convergence.poornima.org
                  </a>
                </p>
                <p>
                  <span className="font-medium">Write to:</span> icracs@poornima.org
                </p>
                <p>
                  <span className="font-medium">Address:</span> ISI-2, RIICO Institutional Area, Sitapura, Jaipur - 302022
                </p>
              </div>
            </div>

          </CardContent>
        </Card>

        </div>

      <Partners />
    </div>
  );
}
