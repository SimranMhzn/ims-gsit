'use client';

import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, RegisterFormValues } from './RegisterForm.zod';

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (values: RegisterFormValues) => {
    reset();
    console.log(values);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full shadow-2xl rounded-2xl flex flex-col p-8 max-w-xl">
        <h1 className=" font-bold text-3xl mb-6 text-orange-400">
          Create Account
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium">
              First Name <span className="text-red-600">*</span>
            </label>
            <Input
              type="text"
              {...register('firstName')}
              placeholder="Enter your first name"
              className="rounded-none shadow-xs"
            />
            {errors.firstName && (
              <p className="text-sm text-red-600 mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium">
              Last Name <span className="text-red-600">*</span>
            </label>
            <Input
              type="text"
              {...register('lastName')}
              placeholder="Enter your last name"
              className="rounded-none shadow-xs"
            />
            {errors.lastName && (
              <p className="text-sm text-red-600 mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium">
              Email address <span className="text-red-600">*</span>
            </label>
            <Input
              {...register('email')}
              placeholder="Enter your email address"
              className="rounded-none shadow-xs"
            />
            {errors.email && (
              <p className="text-sm text-red-600 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium">
              Password <span className="text-red-600">*</span>
            </label>
            <Input
              type="password"
              {...register('password')}
              placeholder="Enter your password"
              className="rounded-none shadow-xs"
            />
            {errors.password && (
              <p className="text-sm text-red-600 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium">
              Confirm Password <span className="text-red-600">*</span>
            </label>
            <Input
              type="password"
              {...register('confirmpassword')}
              placeholder="Enter your password again"
              className="rounded-none shadow-xs"
            />
            {errors.confirmpassword && (
              <p className="text-sm text-red-600 mt-1">
                {errors.confirmpassword.message}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium">
              Branch Name <span className="text-red-600">*</span>
            </label>
            <Input
              type="text"
              {...register('branchName')}
              placeholder="Enter your branch name"
              className="rounded-none shadow-xs"
            />
            {errors.branchName && (
              <p className="text-sm text-red-600 mt-1">
                {errors.branchName.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 rounded-none bg-orange-400 hover:bg-white hover:text-orange-400 hover:border-2 hover:border-orange-400 transition-all duration-500 ease-in-out"
          >
            {isSubmitting ? 'Creating...' : 'CREATE ACCOUNT'}
          </Button>
        </form>
      </div>
    </div>
  );
}
