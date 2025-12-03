'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { formData } from '@/lib/form.data';

export default function Page() {
  return (
    <div className="p-6 flex flex-col gap-5 w-full">
      <h1 className="text-3xl font-bold">View Requisition Form History</h1>
      <div className="bg-white rounded-md shadow-sm overflow-hidden">
        <Table className="w-full">
          <TableHeader className="bg-black/40">
            <TableRow>
              <TableHead className="text-md text-white">PRODUCT NAME</TableHead>
              <TableHead className="text-md text-white">AMOUNT</TableHead>
              <TableHead className="text-md text-white">QUANTITY</TableHead>
              <TableHead className="text-md text-white">CATEGORY</TableHead>
              <TableHead className="text-md text-white">STATUS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {formData.map((data) => (
              <TableRow key={data['form-id']}>
                <TableCell>{data.productName}</TableCell>
                <TableCell>{data.amount}</TableCell>
                <TableCell>{data.quantity}</TableCell>
                <TableCell>{data.category}</TableCell>
                {data.status === 'Pending' ? (
                  <TableCell className="text-gray-400">{data.status}</TableCell>
                ) : data.status === 'Accepted' ? (
                  <TableCell className="text-green-400">
                    {data.status}
                  </TableCell>
                ) : (
                  <TableCell className="text-red-400">{data.status}</TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
