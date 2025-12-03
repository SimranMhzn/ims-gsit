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
              <TableHead className="text-md text-white">BRANCH NAME</TableHead>
              <TableHead className="text-md text-white">FULL NAME</TableHead>
              <TableHead className="text-md text-white">EMAIL</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {userData.map((data) => (
              <TableRow key={data.email}>
                <TableCell>{data.branchName}</TableCell>
                <TableCell>
                  {data.firstName} {data.lastName}
                </TableCell>
                <TableCell>{data.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
