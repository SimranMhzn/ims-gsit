'use client';

import { Button } from '@/components/ui/button';
import { useUserData } from '@/context/userDataProvider';
import Image from 'next/image';

export default function Page() {
  const tempData = [
    {
      firstName: 'Simran',
      lastName: 'Maharjan',
      branchName: 'Naxal',
    },
  ];
  const { userEmail } = useUserData();
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full shadow-2xl rounded-2xl flex flex-col items-center p-8 max-w-xl">
        <Image
          src={'/profile.webp'}
          alt="Image"
          width={130}
          height={130}
          className="rounded-[50%]"
        />
        {tempData.map((item, i) => (
          <div key={i} className="mt-2 flex flex-col gap-2">
            <div className="text-2xl font-bold text-center">
              {item.firstName} {item.lastName}
            </div>
            <h1 className="text-[18px]">Email: {userEmail}</h1>
            <div className="text-[18px]">Branch: {item.branchName}</div>
          </div>
        ))}
        <Button className="mt-5 rounded-none hover:text-black hover:border-2 hover:border-black hover:bg-white">
          Edit
        </Button>
      </div>
    </div>
  );
}
