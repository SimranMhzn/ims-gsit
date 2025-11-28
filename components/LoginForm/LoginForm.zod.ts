import * as z from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .nonempty({ message: 'Email is required' })
    .email({ message: 'Enter a valid email' }),
  password: z.string().nonempty({ message: 'Password is required' }),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
