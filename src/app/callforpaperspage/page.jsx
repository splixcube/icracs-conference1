import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ConferenceTimeline } from '../components/conference-timeline';
import CallForPaper from '../components/CallForPaper';

export default function Speaker() {
  
  return (

    <div>

      <ConferenceTimeline />
      {/* Speakers Section */}
      <section >
      <CallForPaper />
      <div className="text-center m-8">
          <Button as="a" href="/samplepaper.pdf" download>
            Download Sample Paper
          </Button>
        </div>
      </section>

  
    </div>
  )
}

