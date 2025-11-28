import * as z from 'zod';

export const registerSchema = z
  .object({
    email: z
      .string()
      .nonempty({ message: 'Email is required' })
      .email({ message: 'Enter a valid email' }),

    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters' })
      .regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/, {
        message:
          'Password must include a capital letter, number, and special character',
      }),

    confirmpassword: z
      .string()
      .nonempty({ message: 'Confirm password is required' }),

    firstName: z.string().nonempty({ message: 'First name is required' }),
    lastName: z.string().nonempty({ message: 'Last name is required' }),
    branchName: z.string().nonempty({ message: 'Branch name is required' }),
  })
  .refine((data) => data.password === data.confirmpassword, {
    message: "Passwords don't match",
    path: ['confirmpassword'],
  });

export type RegisterFormValues = z.infer<typeof registerSchema>;
