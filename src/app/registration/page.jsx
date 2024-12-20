import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from 'lucide-react'
import { ConferenceTimeline } from "../components/conference-timeline";
import { Button } from "@/components/ui/button";
import Partners from "@/components/ui/partners";

const categories = [
  {
    category: "Attendee",
    publicationCharge: "₹1500",
    afterDeadline: "₹2500",
  },
  {
    category: "UG Student Author (Member- ACM/ISTE/IEEE/FIP)",
    publicationCharge: "₹4000",
    afterDeadline: "₹5000",
  },
  {
    category: "UG Student Author (Non-Member- ACM/ISTE/IEEE/FIP)",
    publicationCharge: "₹5000",
    afterDeadline: "₹6000",
  },
  {
    category: "Post Graduate Scholar Author (Member- ACM/ISTE/IEEE/FIP)",
    publicationCharge: "₹6000",
    afterDeadline: "₹7000",
  },
  {
    category: "Post Graduate Scholar Author (Non-Member- ACM/ISTE/IEEE/FIP)",
    publicationCharge: "₹7000",
    afterDeadline: "₹9000",
  },
  {
    category: "Author-Faculty or Research Scholars (Member- ACM/ISTE/IEEE/FIP)",
    publicationCharge: "₹9000",
    afterDeadline: "₹11,000",
  },
  {
    category: "Author-Faculty or Research Scholars (Non-Member- ACM/ISTE/IEEE/FIP)",
    publicationCharge: "₹10,000",
    afterDeadline: "₹12,000",
  },
  {
    category: "Corporate/Industry Professional",
    publicationCharge: "₹11,000",
    afterDeadline: "₹13,000",
  },
  {
    category: "Foreign Delegate (Member- ACM/ISTE/IEEE/FIP)",
    publicationCharge: "$180",
    afterDeadline: "$200",
  },
  {
    category: "Foreign Delegate (Non-Member- ACM/ISTE/IEEE/FIP)",
    publicationCharge: "$220",
    afterDeadline: "$250",
  },
];

const accountDetails = [
  { label: "Account Name", value: "POORNIMA INSTITUTE PART TWO" },
  { label: "Account Number", value: "50200067728688" },
  { label: "Bank", value: "HDFC BANK LTD. F-129 RIICO INDUSTRIAL AREA SITAPURA JAIPUR" },
  { label: "IFSC Code", value: "HDFC0003873" },
  { label: "SWIFT Code", value: "HDFCINBBXXX" },
];

const contactInfo = [
  { name: "Dr. Saurabh Raj", phone: "8127741447, 7458080822", email: "saurabh.raj@poornima.org" },
  { name: "Dr. Sandeep Gupta", phone: "9887448137", email: "sandeep.gupta@poornima.org" },
];

export default function Registration() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <ConferenceTimeline />


      <div className="max-w-5xl mx-auto space-y-12">

        <h1 className="text-4xl font-bold text-center text-blue-600">Registration</h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

        

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
              <a href="https://icracs.poornima.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
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
                  <a href="http://icracs.poornima.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    http://icracs.poornima.org
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





        <Card className="shadow-lg">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-2xl font-semibold text-blue-700">Fee Structure</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-blue-100">
                  <TableHead className="w-[50%] font-bold text-blue-700">Category</TableHead>
                  <TableHead className="text-right font-bold text-blue-700">Publication Charge</TableHead>
                  <TableHead className="text-right font-bold text-blue-700">After Deadline</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {categories.map((category, index) => (
                  <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-blue-50"}>
                    <TableCell className="font-medium">{category.category}</TableCell>
                    <TableCell className="text-right">{category.publicationCharge}</TableCell>
                    <TableCell className="text-right">{category.afterDeadline}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-2xl font-semibold text-blue-700">Account Details</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="mb-4 text-gray-600">For Conference Registration, Authors can pay fees to the following Bank Account:</p>
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {accountDetails.map((detail, index) => (
                <div key={index} className="flex flex-col">
                  <dt className="text-sm font-medium text-gray-500">{detail.label}</dt>
                  <dd className="mt-1 text-lg text-gray-900">{detail.value}</dd>
                </div>
              ))}
            </dl>
          </CardContent>
        </Card>
      </div>

      <Partners />
    </div>
  )
}