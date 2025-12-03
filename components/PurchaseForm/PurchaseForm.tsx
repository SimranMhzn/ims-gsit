'use client';

import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { purchaseSchema, PurchaseFormValues } from './PurchaseForm.zod';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { toast } from 'sonner';

export default function PurchaseForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<PurchaseFormValues>({
    resolver: zodResolver(purchaseSchema),
  });

  const onSubmit = (values: PurchaseFormValues) => {
    reset();
    setValue('category', '');
    toast.success('Form submitted successfully!');
    console.log(values);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full shadow-2xl rounded-2xl flex flex-col p-8 max-w-xl">
        <h1 className=" font-bold text-3xl mb-6 ">Fill Purchase Form</h1>

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
            <Select
              value={watch('category') || ''}
              onValueChange={(v: string) => setValue('category', v)}
            >
              <SelectTrigger className="w-full rounded-none">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Category</SelectLabel>
                  <SelectItem
                    onClick={() => setValue('category', 'machine')}
                    value="machine"
                  >
                    Machine
                  </SelectItem>
                  <SelectItem
                    onClick={() => setValue('category', 'security')}
                    value="security"
                  >
                    Security
                  </SelectItem>
                  <SelectItem
                    onClick={() => setValue('category', 'stationery')}
                    value="stationery"
                  >
                    Stationery
                  </SelectItem>
                  <SelectItem
                    onClick={() => setValue('category', 'electronics')}
                    value="electronics"
                  >
                    Electronics
                  </SelectItem>
                  <SelectItem
                    onClick={() => setValue('category', 'furniture')}
                    value="furniture"
                  >
                    Furniture
                  </SelectItem>
                  <SelectItem
                    onClick={() => setValue('category', 'it')}
                    value="it"
                  >
                    IT
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
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
            {isSubmitting ? 'Uploading...' : 'UPLOAD'}
          </Button>
        </form>
      </div>
    </div>
  );
}
