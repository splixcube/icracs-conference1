import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function UploadPaperLinks() {
  const conferences = [
    {
      id: "icsis",
      name: "ICSIS",
      href: ""
    },
    {
      id: "icisc",
      name: "ICISC",
      href: ""
    },
    {
      id: "icracs",
      name: "ICRACS",
      href: ""
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-12">
          Upload your paper using this link...
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {conferences.map((conference) => (
            <Card key={conference.id} className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
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
      </div>
    </section>
  )
}