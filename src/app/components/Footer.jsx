import Link from "next/link"
import { Mail, MapPin, Phone, ExternalLink, GroupIcon, Users, User, Users2, UsersRound } from "lucide-react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">ICRACS</h3>
            <p className="text-blue-100">* The <a href="https://cmt3.research.microsoft.com/" className="underline"> Microsoft CMT </a> service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support</p>
            {/* <p className="text-sm">Exploring the Future </p> */}
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/registration" className="hover:underline text-blue-100">Registration</Link>
              <Link href="/importantdates" className="hover:underline text-blue-100">Important Dates</Link>
              <Link href="/uploadpaper" className="hover:underline text-blue-100">Upload Paper</Link>
              <a href="/samplepaper.pdf" download className="hover:underline text-blue-100">Sample Paper</a>

            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Contact Information</h4>
            <div className="space-y-2">
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>Dr. Saurabh Raj: 8127741447, 7458080822</span>
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:saurabh.raj@poornima.org" className="hover:underline">saurabh.raj@poornima.org</a>
              </p>

              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>Dr. Sandeep Gupta: 9887448137</span>
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:bersha.kumari@poornima.org" className="hover:underline">sandeep.gupta@poornima.org</a>
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:icracs@poornima.org" className="hover:underline">icracs@poornima.org</a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-blue-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-blue-100">&copy; 2025 ICRACS. All rights reserved.</p>

            <div className="mt-4 flex items-center justify-center">
              <MapPin className="w-5 h-5 mr-2" />

              <p className="text-sm text-blue-100">ISI-2, RIICO Institutional Area, Sitapura, Jaipur - 302022</p>

            </div>
          </div>
          <div className="mt-4 flex items-center justify-center">
            <Link
              href="https://bento.me/thecyborgs"
              target="_blank"
              className="group"
            >
              <p className="text-md mt-2 md:mt-0 font-bold relative flex items-center justify-center">
                <HoverCard>
                  <HoverCardTrigger asChild>
                  <span className="bg-gradient-to-r from-yellow-200 via-orange-300 to-white text-transparent bg-clip-text">
                    Designed & Developed by <span className="underline decoration-yellow-300 hover:decoration-white">
                      The Cyborgs
                    </span>
                  </span>
                  </HoverCardTrigger>
                  <ExternalLink className="text-yellow-200 w-5 h-5 ml-1" />
                  <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                      <Avatar>
                        <AvatarImage src="https://creatorspace.imgix.net/users/clxfybnzn02xhmq01c7wimsnk/uHkRQhddbrxC0ABv-Cyborgs%2520logo%2520blbg.png?w=300&h=300" />
                        <AvatarFallback>TC</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">@thecyborgs</h4>
                        <p className="text-sm">
                          A Tech Community – created and maintained by @kartikmehta18 & @thisissahaj
                        </p>
                        <div className="flex items-center pt-2">
                          <UsersRound className="mr-2 h-4 w-4 opacity-70" />{" "}
                          <span className="text-xs text-muted-foreground">
                            1500+ tech enthusiasts
                          </span>
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </p>
            </Link>
          </div>
          {/* <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-gradient-to-r from-yellow-300 to-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span> */}


        </div>
      </div>
    </footer>
  )
}