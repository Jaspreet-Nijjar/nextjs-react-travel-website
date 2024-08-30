import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-[url('/hero-bg.svg')] bg-no-repeat bg-center lg:bg-top-right bg-cover xl:flex lg:gap-16 p-6">
      <div className="xl:w-1/2">
        <div>
          <Image src="/camp.svg" alt="camp" width={50} height={50} />
          <h1 className="text-5xl font-bold mb-8 leading-2 lg:text-7xl">
            Putuk Truno Camp Area
          </h1>
          <p className="text-gray-500 mb-12">
            We want to be on each of your journeys seeking the satisfaction of
            seeing the incorruptible beauty of nature. We can help you on an
            adventure around the world in just one app
          </p>
        </div>

        <div className="flex items-center gap-2 ">
          {Array.from({ length: 5 }, (_, i) => (
            <div key={i}>
              <Image src="/star.svg" alt="star icon" width={25} height={25} />
            </div>
          ))}

          <p>
            <strong>198k</strong> Excellent Reviews
          </p>
        </div>

        <div className="flex flex-col items-center mt-6 sm:flex-row gap-8">
          <button className="bg-green-500 text-white font-bold p-4 rounded-full w-full mb-2 sm:max-w-40">
            Download App
          </button>
          <button className="flex items-center gap-4 font-bold p-4">
            <Image src="/play.svg" alt="play icon" width={20} height={20} />
            How we work?
          </button>
        </div>
      </div>

      <div className="bg-gray-900 rounded-2xl p-4 h-[170px] w-[300px] mt-10 flex flex-col justify-center lg:p-12">
        <div>
          <p className="text-gray-400">Location</p>
          <h2 className="text-xl text-white font-bold mb-6">Aguas Calientes</h2>
        </div>

        <div className="flex justify-between">
          <div>
            <p className="text-gray-400">Distance</p>
            <h2 className="text-xl text-white font-bold">173.28 mi</h2>
          </div>

          <div>
            <p className="text-gray-400">Elevation</p>
            <h2 className="text-xl text-white font-bold">2.040 km</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
