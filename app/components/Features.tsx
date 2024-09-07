import { FEATURES } from '@/constants';
import Image from 'next/image';

const Features = () => {
  return (
    <section className="flex flex-col p-6">
      <Image src="/camp.svg" alt="camp" width={50} height={100} />
      <h1 className="text-4xl font-bold">Our Features</h1>

      <ul>
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
            <p className="text-gray-500">{feature.description}</p>
          </div>
        ))}
      </ul>
    </section>
  );
};

export default Features;
