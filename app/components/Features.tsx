import { FEATURES } from '@/constants';
import Image from 'next/image';

const Features = () => {
  return (
    <section className="grid grid-cols-1 bg-[url('/feature-bg.png')] bg-no-repeat bg-center">
      <Image src="/camp.svg" alt="camp" width={50} height={100} />
      <h1 className="text-4xl font-bold">Our Features</h1>

      <ul className="grid grid-cols-1 md:grid-cols-2 w-[50%] gap-6">
        {FEATURES.map((feature) => (
          <div className="mt-8 mb-6">
            <Image
              src={feature.icon}
              alt={feature.title}
              width={60}
              height={20}
              className="bg-green-600 rounded-full p-4 mb-4 mt-2"
            />
            <h3 className="text-xl font-bold mb-2 capitalize">
              {feature.title}
            </h3>
            <p className="text-gray-500 bg-white md:max-w-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </ul>
    </section>
  );
};

export default Features;
