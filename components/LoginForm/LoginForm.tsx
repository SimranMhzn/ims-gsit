'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { loginSchema, LoginFormValues } from './LoginForm.zod';
import { useUserData } from '@/context/userDataProvider';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const { login } = useUserData();

  const onSubmit = (values: LoginFormValues) => {
    login(values);
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full shadow-2xl rounded-2xl flex flex-col p-8 max-w-xl">
        <h1 className="font-bold text-3xl mb-6 ">Login</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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

          <Button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 rounded-none hover:bg-white hover:text-black hover:border-2 hover:border-black transition-all duration-500 ease-in-out"
          >
            {isSubmitting ? 'Logging in...' : 'Log in'}
          </Button>
          <div>
            <a className="text-sm mt-2 hover:underline" href="#">
              Forgot your password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
