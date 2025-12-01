import { TableDataType } from '@/lib/products.type';
import { Button } from '../../ui/button';
import { Dispatch, SetStateAction } from 'react';

interface PaginationProps {
  filteredData: TableDataType[];
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export const Pagination = ({
  filteredData,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  const totalPages = Math.max(1, Math.ceil(filteredData.length / itemsPerPage));

  return (
    <div className="flex items-center justify-between mt-4">
      <Button
        variant="outline"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((p) => p - 1)}
      >
        Previous
      </Button>

      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <Button
            key={i}
            variant={currentPage === i + 1 ? 'default' : 'outline'}
            onClick={() => setCurrentPage(i + 1)}
            className="w-10"
          >
            {i + 1}
          </Button>
        ))}
      </div>

      <Button
        variant="outline"
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage((p) => p + 1)}
      >
        Next
      </Button>
    </div>
  );
};
