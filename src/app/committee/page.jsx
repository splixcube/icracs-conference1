import React from 'react'
import { Users } from 'lucide-react'
import { ConferenceTimeline } from '../components/conference-timeline'

const committeeData = [
  {
    title: "Honorary Patron",
    members: [
      "Mr. Hari Singh Director (Infrastructure), Poornima Group, Jaipur",
      "Mr. MKM Shah Director (Admin &amp; Finance), Poornima Group, Jaipur",
    ]
  },
  {
    title: "Patrons",
    members: [
      "Dr. Dinesh Goyal, Principal & Director, PIET",
    ]
  },
  {
    title: "Co-patron",
    members: [
      "Dr. Gautam Singh, Registrar, PIET",
    ]
  },
  {
    title: "Conference Chair",
    members: [
      "Dr. Budesh Kanwar, HOD Department of AI & DS, PIET",
      "Dr. Ravi kumar, Arya Director, Xiangshan Laboratory Wireless Group, Zhingshan Institute of Changchun University of Science and Technology, China"
    ]
  },
  {
    title: "Conference Co-Chair",
    members: [
      "Ms.Alka Rani, Dy. HOD (Academics) Dept. of AI & DS, PIET",
      "Dr. Uday Pratap, Singh Dy. HOD (Admin) Dept. of AI & DS, PIET",
    ]
  },
  {
    title: "Organizing Chair",
    members: [
      "Dr. Saurabh Raj, Associate Professor Department of AI & DS, PIET",
      "Dr. Sandeep Gupta, Associate Professor Department of AI & DS, PIET",
    ]
  },
  {
    title: "TPC Chair",
    members: [
      "Dr. Atulya Nagar, Pro Vice Chancellor for Research, Liverpool Hope University",
      "Dr. Shatraghun Modi, Assistant Professor, School of Computing, IIIT Una",
      "Dr. Ajay Maurya, Professor, Dept. of AI & DS, PIET",
      "Dr. Saurabh Raj Associate Professor Department of AI &amp; DS, PIET",
      "Prof. Narendra S. Chaudhari, Professor, Assam science and Technology University - ASTU(Government of Assam), Guwahati",
    ]
  },
  {
    title: "Finance Chair",
    members: [
      "Mr. Punit Kumar, Assistant Professor, Dept. of AI & DS, PIET",
    ],
  },
  {
    title: "Publicity Chair",
    members: [
      "Dr. Priya Mathur, Professor, Dept. of AI & DS, PIET",
      "Mr. Ebtasam Ahmad Siddiqui, Assistant Professor, Dept. of AI & DS, PIET",
    ]
  },

  {
    "title": "Organizing Committee",
    "members": [
      "Mr. Anurag Anand Dubey, Assistant Professor, Dept. of AI & DS, PIET",
      "Ms. Chanchal Tiwari, Assistant Professor, Dept. of AI & DS, PIET",
      "Mr. Mohnish Sachdeva, Assistant Professor, Dept. of AI & DS, PIET",
      "Ms. Bhawna Purohit, Assistant Professor, Dept. of AI & DS, PIET",
      "Ms. Bhawna Kumari, Assistant Professor, Dept. of AI & DS, PIET",
      "Mr. Vikas Kumar, Assistant Professor, Dept. of AI & DS, PIET",
      "Mr. Vaibhav Shekhawat, Assistant Professor, Dept. of AI & DS, PIET",
      "Mr. Kamal Saini, Assistant Professor, Dept. of AI & DS, PIET",
      "Mr. Bharat Thathera, Assistant Professor, Dept. of AI & DS, PIET",
      "Mr. Rohit Kumar, Assistant Professor, Dept. of AI & DS, PIET",
      "Mr. Girdhari Lal, Assistant Professor, Dept. of AI & DS, PIET",
      "Dr. Akash Saxena, Professor, Central University of Haryana, Mahendergarh",
      "Dr. Arun Prakash, Professor, MNNIT, Allahabad",
      "Dr. Mayank Pandey, Professor, MNNIT Allahabad",
      "Dr. Raghuvendra Pal, Assistant Professor, VNIT, Surat",
      "Dr. Himanshu Katiyar, Associate Professor, REC, Sonbhadra",
      "Dr. Abhinav Gupta, Assistant Professor, REC, Sonbhadra",
      "Dr. Nand Kishore, Assistant Professor, HBTI, Kanpur",
      "Dr. Ankur Kumar, Assistant Professor, School of Electronics, IIIT Una",
      "Dr. Nigam Garg, Assistant Professor, School of Electronics, IIIT Una",
      "Dr. Mrityunjai Singh, Assistant Professor, School of Computing, IIIT Una",
      "Mr. Swapnil Gaul, Founder and Director of Numeregion Technology",
      "Mr. Prof. (Dr.) Madhu Shandilya, Professor, MANIT, Bhopal",
      "Mr. Satyanshu Srivastava, HR Lead - Technical Trainings | Skill Development, Generative AI",
      "Dr. Ashutosh Kumar, IIIT Allahabad",
      "Ashish Kumar Tiwari, CEO and Founder - Feather Thread Corporation LLP",
      "Dr. Kanad Ray, Professor, Amity University Rajasthan",
      "Prof. Manish Tiwari, Professor, Department of ECE, School of Electrical and Electronics & Communication Engineering, Manipal University, Jaipur"
    ]
  },
  {
    title: "International Advisory Committee",
    members: [
      "Dr. Jasmin Grosinger, Associate Professor, Institute of Microwave and Photonic Engineering, Graz University of Technology, Austria",
      "Mr. Surender Rama Sitaraman, Intel Corporation, California, USA",
      "Mr. Dinesh Kumar Reddy Basani, CGI, British Columbia, Canada",
      "Dr. Eduardo Lugo, Visual Psychophysics and Perception Laboratory, School of Optometry, University of Montreal, Canada",
      "Prof. (Dr.) Badrul Hisham Bin Ahmad, Professor, Universiti Teknikal Malaysia Melaka",
      "Dr Rajkumar Singh Rathore,  Department of Computer Science Cardiff School of Technologies, Llandaff Campus"
    ]
  },
  {
    title: "National Advisory Committee",
    members: [
      "Dr. Akash Saxena, Professor, Central University of Haryana, Mahendergarh",
      "Dr. Arun Prakash, Professor, MNNIT, Allahabad",
      "Dr. Mayank Pandey, Professor, MNNIT, Allahabad",
      "Dr. Raghuvendra Pal, Assistant Professor, VNIT, Surat",
      "Dr. Himanshu Katiyar, Associate Professor, REC, Sonbhadra",
      "Dr. Abhinav Gupta, Assistant Professor, REC, Sonbhadra",
      "Dr. Nand Kishore, Assistant Professor, HBTI, Kanpur",
      "Dr. Ankur Kumar, Assistant Professor, School of Electronics, IIIT Una",
      "Dr. Nigam Garg, Assistant Professor, School of Electronics, IIIT Una",
      // "Dr. Shatraghun Modi, Assistant Professor, School of Computing, IIIT Una",
      "Dr. Mrityunjai Singh, Assistant Professor, School of Computing, IIIT Una",
      "Mr. Swapnil Gaul, Founder and Director of NumeroGen Technology",
      // "Dr. Akash Saxena, Professor, Central University of Haryana, Mahendergarh",
      "Prof. (Dr.) Madhu Shandilya, Professor, MANIT, Bhopal",
      "Mr. Satyanashu Srivastava, HR Lead - Technical Trainings | Skill Development, Generative AI",
      "Dr. Ashutosh Kumar, IIIT Allahabad",
      "Ashish Kumar Tiwari, CEO and Founder - Feather Thread Corporation LLP",
      // "Prof. (Dr.) Sandeep Saxena, Professor & Head, JIMS Greater Noida, Senior Member IEEE, Keynote Speaker/Associate Editor/Resource Person",
      "Dr. Kanad Ray, Professor, Amity University, Rajasthan",
      // "Prof. Narendra S. Chaudhari, Professor, Assam Science and Technology University-ASTU (Government of Assam), Guwahati",
      "Prof. Manish Tiwari, Professor Department of ECE, School of Electrical and Electronics &amp; Communication Engineering, Manipal University , Jaipur"
    ]
  },
  
]
const MemberCard = ({ member }) => {
  const [name, ...details] = member.split(',')
  return (
    <div

      className="bg-white border border-gray rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-300"
    >
      <h3 className="text-lg font-semibold text-blue-600 mb-2">{name}</h3>
      <p className="text-sm text-gray-600">{details.join(',')}</p>
    </div>
  )
}


const AdvisoryCommitteeCard = ({ title, members }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg mb-8">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <Users className="text-blue-600 mr-2" size={24} />
          <h2 className="text-xl font-bold text-blue-600">{title}</h2>
        </div>
        {/* <ul className="space-y-2 list-disc list-inside">
          {members.map((member, index) => (
            <li key={index} className="text-gray-600">
              {member}
            </li>
          ))}
        </ul> */}

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {members.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
        </div>

      </div>
      <div className="h-2 bg-blue-600 w-0 group-hover:w-full transition-all duration-300 ease-in-out" />
    </div>
  )
}

const AdvisoryCommittee = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100 py-12 px-4 sm:px-6 lg:px-8 ">
      <ConferenceTimeline />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">Committee</h1>
        <div className="space-y-8 ">
          {committeeData.map((committee, index) => (
            <AdvisoryCommitteeCard key={index} title={committee.title} members={committee.members} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdvisoryCommittee