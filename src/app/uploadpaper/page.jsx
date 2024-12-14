import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ConferenceTimeline } from "../components/conference-timeline"

export default function UploadPaperLinks() {
  const conferences = [
    {
      id: "icracs",
      name: "ICRACS",
      href: ""
    }
  ]

  return (
    <section className="py-20 bg-white">
      <ConferenceTimeline />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-12">
          Upload your paper using this link...
        </h1>
        <div className="flex justify-center ">
          {conferences.map((conference) => (
            <Card key={conference.id} className="bg-blue-600 w-96 hover:bg-blue-700 transition-colors duration-300">
              <CardContent className="p-8 flex flex-col items-center justify-center space-y-6">
                <h2 className="text-3xl font-bold text-white">{conference.name}</h2>
                <Link href={conference.href}>
                  <Button className="bg-white hover:bg-blue-100 text-blue-800 font-semibold px-8">
                    CLICK HERE
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center m-8 ">
          <a href="/samplepaper.pdf" download>
            <Button className="bg-blue-600 shadow-xl hover:bg-blue-600 ">
              Download Sample Paper
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}