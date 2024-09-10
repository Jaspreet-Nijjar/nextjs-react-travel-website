'use client';

import { PEOPLE_URL } from '@/constants';
import Image from 'next/image';

const Camp = () => {
  return (
    <section className="bg-[url('/img-1.png')] bg-no-repeat bg-top-right py-6 px-8 text-white h-[340px] mb-64">
      <div className="flex flex-col justify-between h-full">
        <div className="flex gap-6">
          <Image
            src="/folded-map.svg"
            alt="map"
            width={50}
            height={100}
            className="bg-green-500 rounded-full p-2"
          />

          <div>
            <h3 className="font-bold">Putuk Truno Camp</h3>
            <p className="text-sm">Prigen, Pasuruan</p>
          </div>
        </div>

        <div className="flex items-center gap-4 px-8">
          {PEOPLE_URL.map((person) => (
            <Image
              src={person}
              alt={person}
              width={40}
              height={40}
              className="ml-[-30px]"
            />
          ))}
          <span className="font-bold text-white">50+ Joined</span>
        </div>
      </div>

      <div className="p-6 bg-green-600 mt-12 rounded-lg bg-[url('/quote.svg')] bg-no-repeat bg-right-bottom">
        <h3 className="text-[24px]">
          <strong>Feeling Lost</strong> And Not Knowing The Way?
        </h3>
        <p className="text-sm mt-6">
          Starting from the anxiety of the climbers when visiting a new climbing
          location, the possibility of getting lost is very large. That's why we
          are here for those of you who want to start an adventure
        </p>
      </div>
    </section>
  );
};

export default Camp;
