import { FEATURES } from '@/constants';
import Image from 'next/image';

const Features = () => {
  return (
    <section className="bg-[url('/feature-bg.png')] bg-no-repeat bg-center grid grid-cols-1 lg:grid-cols-2 p-6">
      <Image
        src="/phone.png"
        alt="phone"
        width={430}
        height={100}
        className="rotate-12 mt-6 hidden lg:block"
      />

      <div>
        <Image src="/camp.svg" alt="camp" width={50} height={100} />
        <h1 className="text-4xl font-bold lg:text-6xl">Our Features</h1>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-20">
          {FEATURES.map((feature) => (
            <div className="mt-8 mb-6">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={60}
                height={20}
                className="bg-green-500 rounded-full p-4 mb-4 mt-2 lg:p-6 lg:w-24"
              />
              <h3 className="text-xl font-bold mb-2 capitalize lg:text-3xl">
                {feature.title}
              </h3>
              <p className="text-gray-500 bg-white max-w-md">
                {feature.description}
              </p>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
