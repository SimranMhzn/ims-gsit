'use client';
import { data } from '@/components/BOHead/Information/data';

export default function Information() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full h-full">
      {data.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.title}
            className="flex gap-5 items-center w-full px-5 py-3 rounded-md shadow-xl mb-5 bg-white"
          >
            <div>{Icon ? <Icon color="red" /> : null}</div>
            <div>
              <div className="text-sm">{item.title}</div>
              <div className="text-xl">{item.description}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
