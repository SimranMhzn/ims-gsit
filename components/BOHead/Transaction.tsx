'use client';

import { Button } from '@/components/ui/button';

export default function Transaction() {
  const data = [
    {
      'transaction-code': 'July403-920-887',
      'inventory-name': 'PISOWIFI Case (red)',
      quantity: '1',
      'branch-name': 'Fayeed Electronics 2',
      'amount-payed': '850.00',
      'payment-mode': 'Cash',
      'transaction-date': '3:48 am - July 9,2023',
    },
    {
      'transaction-code': 'July403-920-888',
      'inventory-name': 'PISOWIFI Case (red)',
      quantity: '1',
      'branch-name': 'Fayeed Electronics 2',
      'amount-payed': '850.00',
      'payment-mode': 'Cash',
      'transaction-date': '3:48 am - July 9,2023',
    },
  ];
  return (
    <div>
      <div className="flex justify-between p-4 bg-black/10 rounded-t-md">
        <div className="text-[18px]">Latest Transaction</div>
        <div className="text-blue-600 hover:text-blue-800 hover:cursor-pointer">
          Showing 10 Transactions
        </div>
      </div>
      <div className="px-5 py-6 bg-white border rounded-b-md shadow-xl ">
        <table className="w-full">
          <thead className=" text-[14px] ">
            <tr className="border-b-3 border-b-black">
              <th className="p-3 text-left">TRANSACTION CODE</th>
              <th className="p-3 text-left">INVENTORY NAME</th>
              <th className="p-3 text-left">QUANTITY</th>
              <th className="p-3 text-left">BRANCH NAME</th>
              <th className="p-3 text-left">AMOUNT PAYED</th>
              <th className="p-3 text-left">MODE OF PAYMENT</th>
              <th className="p-3 text-left">TRANSACTION DATE</th>
            </tr>
          </thead>
          {data.map((item) => (
            <tbody key={item['transaction-code']}>
              <tr className="border-b">
                <td className="p-3">{item['transaction-code']}</td>
                <td className="p-3">{item['inventory-name']}</td>
                <td className="p-3">{item.quantity}</td>
                <td className="p-3">{item['branch-name']}</td>
                <td className="p-3">{item['amount-payed']}</td>
                <td className="p-3">{item['payment-mode']}</td>
                <td className="p-3">{item['transaction-date']}</td>
              </tr>
            </tbody>
          ))}
        </table>
        <Button className="rounded-none mt-10 hover:text-black hover:bg-white hover:border-2 hover:border-black transition-all duration-500 ease-in-out">
          View all Transactions
        </Button>
      </div>
    </div>
  );
}
