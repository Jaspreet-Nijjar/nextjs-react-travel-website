import Image from 'next/image';

const Guide = () => {
  return (
    <section>
      <div>
        <Image src="/camp.svg" alt="camp" width={70} height={70} />
        <p className="uppercase text-green-500 text-[18px]">
          We are here for you
        </p>
        <h1 className="font-bold text-5xl mt-4 mb-4">Guide You to Easy Path</h1>
      </div>

      <div>
        <p className="text-gray-500">
          Only with the hilink application you will no longer get lost and get
          lost again, because we already support offline maps when there is no
          internet connection in the field. Invite your friends, relatives and
          friends to have fun in the wilderness through the valley and reach the
          top of the mountain
        </p>
      </div>
    </section>
  );
};

export default Guide;
