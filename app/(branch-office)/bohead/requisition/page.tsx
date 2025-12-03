'use client';

import { Check, Trash } from 'lucide-react';
import { useState } from 'react';

import { toast } from 'sonner';

export default function Page() {
  const initialData = [
    {
      'form-id': '1',
      productName: 'Mouse',
      amount: '1500',
      quantity: '10',
      category: 'Machine',
    },
    {
      'form-id': '2',
      productName: 'Stapler pin',
      amount: '100',
      quantity: '5',
      category: 'Stationery',
    },
    {
      'form-id': '3',
      productName: 'Cheque Book',
      amount: '500',
      quantity: '25',
      category: 'Stationery',
    },
  ];

  const [formData, setFormData] = useState(initialData);

  const handleDelete = (id: string) => {
    setFormData((prev) => prev.filter((d) => d['form-id'] !== id));
    toast.success('Deleted successfully!');
  };

  const handleAccept = (id: string) => {
    setFormData((prev) => prev.filter((d) => d['form-id'] !== id));
    toast.success('Accepted successfully!');
  };
  return (
    <div className="p-6 flex flex-col gap-5 w-full">
      <h1 className="text-3xl font-bold">View Requisition Form History</h1>
      <div className="px-5 py-6 bg-white border rounded-b-md shadow-xl ">
        <table className="w-full">
          <thead className=" text-[14px] ">
            <tr className="border-b-3 border-b-black">
              <th className="p-3 text-left">PRODUCT NAME</th>
              <th className="p-3 text-left">QUANTITY</th>
              <th className="p-3 text-left">AMOUNT</th>
              <th className="p-3 text-left">CATEGORY</th>
              <th className="p-3 text-left">ACTION</th>
            </tr>
          </thead>
          {formData.map((data) => (
            <tbody key={data['form-id']}>
              <tr className="border-b">
                <td className="p-4">{data['productName']}</td>
                <td className="p-4">{data.quantity}</td>
                <td className="p-4">{data['amount']}</td>
                <td className="p-4">{data['category']}</td>
                <td className="flex gap-5 mt-2">
                  <div
                    className="p-2 bg-gray-200 rounded-lg hover:bg-gray-100"
                    onClick={() => handleDelete(data['form-id'])}
                  >
                    <Trash color="red" />
                  </div>
                  <div
                    className="p-2 bg-gray-200 rounded-lg hover:bg-gray-100"
                    onClick={() => handleAccept(data['form-id'])}
                  >
                    <Check color="green" />
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}
