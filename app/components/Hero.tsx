import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-[url('/hero-bg.svg')] bg-no-repeat bg-top bg-cover">
      <div>
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <h1 className="text-5xl font-bold max-w-sm mb-8 leading-2">
          Putuk Truno Camp Area
        </h1>
        <p className="text-gray-500 mb-12">
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app
        </p>
      </div>

      <div className="flex items-center gap-2">
        {Array.from({ length: 5 }, (_, i) => (
          <div>
            <Image src="/star.svg" alt="star icon" width={25} height={25} />
          </div>
        ))}

        <p>
          <strong>198k</strong> Excellent Reviews
        </p>
      </div>

      <div className="flex flex-col items-center mt-6">
        <button className="bg-green-500 text-white font-bold p-4 rounded-full w-full mb-4">
          Download App
        </button>
        <button className="flex items-center gap-4 font-bold">
          <Image src="/play.svg" alt="play icon" width={20} height={20} />
          How we work?
        </button>
      </div>
    </section>
  );
};

export default Hero;
