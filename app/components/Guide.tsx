import Image from 'next/image';

const Guide = () => {
  return (
    <section>
      <div className="p-6">
        <Image src="/camp.svg" alt="camp" width={70} height={70} />
        <p className="uppercase text-green-500 text-[18px]">
          We are here for you
        </p>
      </div>

      <div className="xl:flex xl:justify-between xl:items-center p-6">
        <h1 className="font-bold text-5xl mb-4 lg:text-6xl xl:max-w-[390px]">
          Guide You to Easy Path
        </h1>
        <p className="text-gray-500 xl:max-w-lg">
          Only with the hilink application you will no longer get lost and get
          lost again, because we already support offline maps when there is no
          internet connection in the field. Invite your friends, relatives and
          friends to have fun in the wilderness through the valley and reach the
          top of the mountain.
        </p>
      </div>

      <div className="flex flex-col relative w-full">
        <div>
          <Image
            src="/boat.png"
            alt="boat"
            width={1440}
            height={580}
            className="object-cover object-center w-full"
          />

          <div className="absolute left-0 right-0 mx-auto top-[-20px] bg-white flex p-2 shadow-xl rounded-3xl border border-gray-100 max-w-[350px] md:left-10 lg:top-20">
            <Image src="/meter.svg" alt="meter" width={30} height={30} />

            <div className="flex flex-col justify-between px-6">
              <div>
                <div className="flex gap-12">
                  <p className="text-gray-400">Destination</p>
                  <p className="font-bold text-green-500">48 min</p>
                </div>
                <p className="text-2xl font-bold">Aguas Calientes</p>
              </div>

              <div>
                <p className="text-gray-400">Start track</p>
                <p className="text-2xl font-bold">Wonorejo Pasuruan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
