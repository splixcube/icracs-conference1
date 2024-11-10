import "./globals.css";
import Link from 'next/link';
import { Button } from "@/components/ui/button";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            TechConf 2024
          </Link>
          <ul className="flex space-x-4">
            <li><Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link></li>
            <li><Link href="/about" className="text-blue-600 hover:text-blue-800">About</Link></li>
            <li><Link href="/speakers" className="text-blue-600 hover:text-blue-800">Speakers</Link></li>
            <li><Link href="/schedule" className="text-blue-600 hover:text-blue-800">Schedule</Link></li>
            <li><Link href="/contact" className="text-blue-600 hover:text-blue-800">Contact</Link></li>
          </ul>
          <Button variant="outline" className="hidden sm:block">
            Register Now
          </Button>
        </nav>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">TechConf 2024</h3>
              <p>Exploring the Future of Technology</p>
            </div>
            <div className="flex space-x-4">
              <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
              <Link href="/terms" className="hover:underline">Terms of Service</Link>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p>&copy; 2024 TechConf. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
      </body>
    </html>
  );
}
