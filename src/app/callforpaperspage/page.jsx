import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ConferenceTimeline } from '../components/conference-timeline';
import CallForPaper from '../components/CallForPaper';
import { ExternalLink } from 'lucide-react';

export default function Speaker() {

  // Mock contact info, replace with actual data
  const contactInfo = [
    { name: "John Doe", phone: "123-456-7890", email: "johndoe@example.com" },
    { name: "Jane Doe", phone: "987-654-3210", email: "janedoe@example.com" }
  ];

  return (
    <div>
      <ConferenceTimeline />
      <CallForPaper />
      {/* Registration Process */}
      <Card className="shadow-lg mx-auto w-full max-w-screen-lg p-4 sm:p-6 md:p-8 lg:p-12">
  <CardHeader className="bg-blue-50">
    <CardTitle className="text-xl sm:text-2xl font-semibold text-blue-700">Registration Process</CardTitle>
  </CardHeader>
  <CardContent className="space-y-4">
    <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
      <li>One of the authors must register for the conference and must present the paper himself/herself.</li>
      <li>Online Registration fee shall be deposited in the account mentioned at Registration Page.</li>
    </ul>
    <div className="flex flex-wrap items-center space-x-2">
      <span className="font-semibold text-sm sm:text-base">CMT Link:</span>
      <a
        href="https://cmt3.research.microsoft.com/ICRACS2024"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline flex items-center text-sm sm:text-base"
      >
        ICRACS2024 <ExternalLink className="w-4 h-4 ml-1" />
      </a>
    </div>
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">For More Information</h3>
      <div className="space-y-2 text-sm sm:text-base">
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
          <a
            href="http://convergence.poornima.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
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


      {/* Speakers Section */}
      <section>
        
        <div className="text-center m-8">
          <a href="/samplepaper.pdf" download>
            <Button className="bg-blue-600">
              Download Sample Paper
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
