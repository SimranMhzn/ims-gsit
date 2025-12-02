'use client';

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group';
import { Search } from 'lucide-react';

export default function Header({
  onFilterChange,
}: {
  onFilterChange: (s: string) => void;
}) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange(e.target.value);
  };
  return (
    <div className="flex justify-between">
      <div className="font-black text-3xl">View Inventory</div>
      <div>
        <InputGroup className="w-[300px]">
          <InputGroupInput
            onChange={handleChange}
            placeholder="Search by product name..."
          />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
}
