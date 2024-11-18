import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const categories = [
    {
      category: "Attendee",
      publicationCharge: "₹1000",
      afterDeadline: "₹2000",
    },
    {
      category: "UG Student Author (Member- ACM/ISTE/IEEE/FIP)",
      publicationCharge: "₹3000",
      afterDeadline: "₹4000",
    },
    {
      category: "UG Student Author (Non-Member- ACM/ISTE/IEEE/FIP)",
      publicationCharge: "₹4000",
      afterDeadline: "₹5000",
    },
    {
      category: "Post Graduate Scholar Author (Member- ACM/ISTE/IEEE/FIP)",
      publicationCharge: "₹5000",
      afterDeadline: "₹7000",
    },
    {
      category: "Post Graduate Scholar Author (Non-Member- ACM/ISTE/IEEE/FIP)",
      publicationCharge: "₹6000",
      afterDeadline: "₹8000",
    },
    {
      category: "Author-Faculty or Research Scholars (Member- ACM/ISTE/IEEE/FIP)",
      publicationCharge: "₹7000",
      afterDeadline: "₹9000",
    },
    {
      category: "Author-Faculty or Research Scholars (Non-Member- ACM/ISTE/IEEE/FIP)",
      publicationCharge: "₹8000",
      afterDeadline: "₹10000",
    },
    {
      category: "Corporate/Industry Professional",
      publicationCharge: "₹9000",
      afterDeadline: "₹10000",
    },
    {
      category: "Foreign Delegate (Member- ACM/ISTE/IEEE/FIP)",
      publicationCharge: "$100",
      afterDeadline: "$120",
    },
    {
      category: "Foreign Delegate (Non-Member- ACM/ISTE/IEEE/FIP)",
      publicationCharge: "$120",
      afterDeadline: "$150",
    },
  ];
  
  
  export default function Registration() {
    return (

        <div className="min-h-screen bg-gradient-to-b from-white to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">Registration Fee</h1>
        <div className="space-y-8">
          
      


      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[400px]">Category</TableHead>
            <TableHead className="text-right">Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.invoice}>
              <TableCell className="font-medium">{category.category}</TableCell>
              <TableCell className="text-right">{category.publicationCharge}</TableCell>
              <TableCell className="text-right">{category.afterDeadline}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      </div>
      </div>
    </div>
    )
  }
  