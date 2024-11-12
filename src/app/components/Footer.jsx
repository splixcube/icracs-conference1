import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">ICRACS</h3>
            <p className="text-blue-100">International Conference on Recent Advances in Artificial Intelligence, Computer Vision & Smart Systems</p>
            <p className="text-sm">Exploring the Future of Technology</p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/privacy" className="hover:underline text-blue-100">Privacy Policy</Link>
              <Link href="/terms" className="hover:underline text-blue-100">Terms of Service</Link>
              <Link href="http://convergence.poornima.org" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-100">
                Conference Website
              </Link>
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
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:shiwangi.sharma@poornima.org" className="hover:underline">shiwangi.sharma@poornima.org</a>
              </p>
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>Mrs. Bersha Kumari: 6375900934</span>
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:bersha.kumari@poornima.org" className="hover:underline">bersha.kumari@poornima.org</a>
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
            <p className="text-sm text-blue-100">&copy; 2024 ICRACS. All rights reserved.</p>
            <p className="text-md text-blue-100 mt-2 md:mt-0">Developed by The Cyborgs</p>
          </div>
          <div className="mt-4 flex items-center justify-center">
            <MapPin className="w-5 h-5 mr-2" />
            <p className="text-sm text-blue-100">ISI-2, RIICO Institutional Area, Sitapura, Jaipur - 302022</p>
          </div>
        </div>
      </div>
    </footer>
  )
}