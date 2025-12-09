'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { userData } from '@/lib/user.data';
export default function Page() {
  return (
    <div className="p-6 flex flex-col gap-5 w-full">
      <h1 className="text-3xl font-bold">Branches </h1>
      <div className="bg-white rounded-md shadow-sm overflow-hidden">
        <Table className="w-full">
          <TableHeader className="bg-black/40">
            <TableRow>
              <TableHead className="text-md text-white">LOCATION</TableHead>
              <TableHead className="text-md text-white">EMAIL</TableHead>
              <TableHead className="text-md text-white">
                BRNACH HEAD NAME
              </TableHead>
              <TableHead className="text-md text-white">CONTACT NO.</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {userData.map((data) => (
              <TableRow key={data.id}>
                <TableCell>{data.location}</TableCell>
                <TableCell>{data.email}</TableCell>
                <TableCell>
                  {data.firstName} {data.lastName}
                </TableCell>
                <TableCell>{data.contact}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
