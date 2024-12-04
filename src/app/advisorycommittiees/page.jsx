import React from 'react'
import { Users } from 'lucide-react'

const committeeData = [
  {
    title: "International Advisory Committee",
    members: [
      "Dr. Jasmin Grosinger, Associate Professor, Institute of Microwave and Photonic Engineering, Graz University of Technology, Austria",
      "Mr. Surender Rama Sitaraman, Intel Corporation, California, USA",
      "Mr. Dinesh Kumar Reddy Basani, CGI, British Columbia, Canada",
      "Dr. Eduardo Lugo, Visual Psychophysics and Perception Laboratory, School of Optometry, University of Montreal, Canada",
      "Prof. (Dr.) Badrul Hisham Bin Ahmad, Professor, Universiti Teknikal Malaysia Melaka",
    ]
  },
  {
    title: "National Advisory Committee",
    members: [
      "Dr. Arun Prakash, Professor, MNNIT, Allahabad",
      "Dr. Mayank Pandey, Professor, MNNIT, Allahabad",
      "Dr. Raghuvendra Pal, Assistant Professor, VNIT, Surat",
      "Dr. Himanshu Katiyar, Associate Professor, REC, Sonbhadra",
      "Dr. Abhinav Gupta, Assistant Professor, REC, Sonbhadra",
      "Dr. Nand Kishore, Assistant Professor, HBTI, Kanpur",
      "Dr. Ankur Kumar, Assistant Professor, School of Electronics, IIIT Una",
      "Dr. Nigam Garg, Assistant Professor, School of Electronics, IIIT Una",
      "Dr. Shatraghun Modi, Assistant Professor, School of Computing, IIIT Una",
      "Dr. Mrityunjai Singh, Assistant Professor, School of Computing, IIIT Una",
      "Mr. Swapnil Gaul, Founder and Director of NumeroGen Technology",
      "Dr. Akash Saxena, Professor, Central University of Haryana, Mahendergarh",
      "Prof. (Dr.) Madhu Shandilya, Professor, MANIT, Bhopal",
      "Satyanashu Srivastava, HR Lead - Technical Trainings | Skill Development, Generative AI",
      "Dr. Ashutosh Kumar, IIIT Allahabad",
      "Ashish Kumar Tiwari, CEO and Founder - Feather Thread Corporation LLP",
      "Prof. (Dr.) Sandeep Saxena, Professor & Head, JIMS Greater Noida, Senior Member IEEE, Keynote Speaker/Associate Editor/Resource Person",
      "Dr. Kanad Ray, Professor, Amity University, Rajasthan",
      "Prof. Narendra S. Chaudhari, Professor, Assam Science and Technology University-ASTU (Government of Assam), Guwahati",
    ]
  },
]

const AdvisoryCommitteeCard = ({ title, members }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg mb-8">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <Users className="text-blue-600 mr-2" size={24} />
          <h2 className="text-xl font-bold text-blue-600">{title}</h2>
        </div>
        <ul className="space-y-2 list-disc list-inside">
          {members.map((member, index) => (
            <li key={index} className="text-gray-600">
              {member}
            </li>
          ))}
        </ul>
      </div>
      <div className="h-2 bg-blue-600 w-0 group-hover:w-full transition-all duration-300 ease-in-out" />
    </div>
  )
}

const AdvisoryCommittee = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">Advisory Committee</h1>
        <div className="space-y-8">
          {committeeData.map((committee, index) => (
            <AdvisoryCommitteeCard key={index} title={committee.title} members={committee.members} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdvisoryCommittee