import React from 'react'
import { Users } from 'lucide-react'

const committeeData = [
  {
    title: "Patrons",
    members: [
      "Dr. Dinesh Goyal, Principal & Director, PIET",
    ]
  },
  {
    title: "Conference Chair",
    members: [
      "Dr. Gautam Singh, Registrar, PIET",
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
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">Organizing Committee</h1>
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