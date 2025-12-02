'use client';

import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  requisitionSchema,
  RequisitionFormValues,
} from './RequisitionForm.zod';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

export default function RequisitionForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RequisitionFormValues>({
    resolver: zodResolver(requisitionSchema),
  });

  const onSubmit = (values: RequisitionFormValues) => {
    reset();
    setValue('category', '');
    console.log(values);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full shadow-2xl rounded-2xl flex flex-col p-8 max-w-xl">
        <h1 className=" font-bold text-3xl mb-6 ">Fill Requisition Form</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium">
              Product Name <span className="text-red-600">*</span>
            </label>
            <Input
              type="text"
              {...register('productName')}
              placeholder="Enter product name"
              className="rounded-none shadow-xs"
            />
            {errors.productName && (
              <p className="text-sm text-red-600 mt-1">
                {errors.productName.message}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium">
              Quantity <span className="text-red-600">*</span>
            </label>
            <Input
              type="text"
              {...register('quantity')}
              placeholder="Quantity"
              className="rounded-none shadow-xs"
            />
            {errors.quantity && (
              <p className="text-sm text-red-600 mt-1">
                {errors.quantity.message}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium">
              Amount <span className="text-red-600">*</span>
            </label>
            <Input
              {...register('amount')}
              placeholder="Amount"
              className="rounded-none shadow-xs"
            />
            {errors.amount && (
              <p className="text-sm text-red-600 mt-1">
                {errors.amount.message}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium">
              Category <span className="text-red-600">*</span>
            </label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="w-full text-left px-3 py-2 border rounded-md bg-white/5"
                >
                  {watch('category')
                    ? watch('category').toString().toUpperCase()
                    : 'Select category'}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuLabel>Category</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => setValue('category', 'all')}>
                  All
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setValue('category', 'machine')}
                >
                  Machine
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setValue('category', 'security')}
                >
                  Security
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setValue('category', 'stationery')}
                >
                  Stationery
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setValue('category', 'electronics')}
                >
                  Electronics
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setValue('category', 'furniture')}
                >
                  Furniture
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setValue('category', 'it')}>
                  IT
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <input type="hidden" {...register('category')} />
            {errors.category && (
              <p className="text-sm text-red-600 mt-1">
                {errors.category.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 rounded-none hover:bg-white hover:text-black hover:border-2 hover:border-black transition-all duration-500 ease-in-out"
          >
            {isSubmitting ? 'Creating...' : 'CREATE ACCOUNT'}
          </Button>
        </form>
      </div>
    </div>
  );
}
