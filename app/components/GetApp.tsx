import Image from 'next/image';

const GetApp = () => {
  return (
    <section className="bg-[url('/pattern.png')] bg-no-repeat bg-top lg:bg-cover p-12 text-white grid grid-cols-1 md:grid-cols-2 items-center mx-auto gap-20 xl:rounded-2xl xl:max-w-7xl">
      <div>
        <h1 className="text-4xl font-bold mb-12 lg:text-6xl">
          Get for free now!
        </h1>
        <p className="mb-12">Available on iOS and Android</p>

        <div className="flex flex-col gap-6 lg:flex-row">
          <button className="text-green-500 font-bold bg-white rounded-full py-2 w-full flex items-center justify-center gap-4">
            <Image src="/apple.svg" alt="apple" width={30} height={50} />
            App Store
          </button>

          <button className="text-white font-bold border border-gray-100 rounded-full py-3 w-full flex items-center justify-center gap-4">
            <Image src="/android.svg" alt="play" width={30} height={50} />
            Play Store
          </button>
        </div>
      </div>

      <Image src="/phones.png" alt="phones" width={500} height={100} />
    </section>
  );
};

export default GetApp;
