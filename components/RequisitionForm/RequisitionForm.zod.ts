import * as z from 'zod';

export const requisitionSchema = z.object({
  productName: z.string().nonempty({ message: 'Product name is required' }),

  quantity: z.string().nonempty({ message: 'Quantity is required' }),

  amount: z.string().nonempty({ message: 'Amount is required' }),

  category: z.string().nonempty({ message: 'Category is required' }),
});

export type RequisitionFormValues = z.infer<typeof requisitionSchema>;
