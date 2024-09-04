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

      <div>
        <Image
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="object-cover object-center w-full"
        />
      </div>
    </section>
  );
};

export default Guide;
