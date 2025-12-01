'use client';

import { useState } from 'react';
import { TableDataType } from '@/lib/products.type';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group';
import { Search } from 'lucide-react';
import { Pagination } from './Components/Pagination';

export default function ProductsTable({ data }: { data: TableDataType[] }) {
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const [category, setCategory] = useState('all');

  const filteredData =
    category && category !== 'all'
      ? data.filter(
          (item) => item.category.toLowerCase() === category.toLowerCase(),
        )
      : data;

  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const setCategoryAndReset = (cat: string) => {
    setCategory(cat);
    setCurrentPage(1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };
  return (
    <div className="p-6 flex flex-col gap-5 w-full">
      <div className="flex justify-between">
        <div className="font-black text-3xl">View Inventory</div>
        <div className="w-[300px]">
          <InputGroup onChange={handleChange}>
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
      <table className="w-full border rounded-md overflow-hidden">
        <thead className="bg-black/40 text-md text-white">
          <tr>
            <th className="p-3 text-left">NAME</th>
            <th className="p-3 text-left">QUANTITY</th>
            <th className="p-3 text-left">AMOUNT</th>
            <th className="p-3 text-left">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-2 bg-transparent p-0">
                    <span>{category ? category.toUpperCase() : 'ALL'}</span>
                    <ChevronDown />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="start">
                  <DropdownMenuLabel>Category</DropdownMenuLabel>
                  <DropdownMenuItem onClick={() => setCategoryAndReset('all')}>
                    All
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setCategoryAndReset('machine')}
                  >
                    Machine
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setCategoryAndReset('security')}
                  >
                    Security
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setCategoryAndReset('stationery')}
                  >
                    Stationery
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setCategoryAndReset('electronics')}
                  >
                    Electronics
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setCategoryAndReset('furniture')}
                  >
                    Furniture
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setCategoryAndReset('it')}>
                    IT
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </th>
            <th className="p-3 text-left">PURCHASE DATE</th>
          </tr>
        </thead>

        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="p-3">{item.name}</td>
              <td className="p-3">{item.quantity}</td>
              <td className="p-3">{item.amount}</td>
              <td className="p-3">{item.category}</td>
              <td className="p-3">{item.purchaseDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        filteredData={filteredData}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
